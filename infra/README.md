# Infra

Terraform that provisions the GitHub Actions OIDC role for deploys.

S3 bucket and CloudFront distributions are referenced as **data sources** — Terraform reads their IDs/ARNs but does not manage them. This avoids any risk of drift on the production site.

## What it creates

- `aws_iam_openid_connect_provider.github` — GitHub's OIDC provider (one per AWS account).
- `aws_iam_role.github_deploy` — assumed by Actions running on `main` of the configured repo.
- `aws_iam_role_policy.github_deploy` — S3 site sync + CloudFront invalidation only.

## Bootstrap

```bash
cp terraform.tfvars.example terraform.tfvars
# edit if needed

terraform init
terraform plan
terraform apply
```

If your AWS account already has a GitHub OIDC provider (common — many people set one up once and reuse it), the apply will fail with `EntityAlreadyExists`. Import it before applying:

```bash
terraform import aws_iam_openid_connect_provider.github \
  arn:aws:iam::662410546884:oidc-provider/token.actions.githubusercontent.com
```

After apply, copy the `github_deploy_role_arn` output and set it as a GitHub repo **variable** (Settings → Secrets and variables → Actions → Variables) named `AWS_DEPLOY_ROLE_ARN`.

## Future: full IaC for bucket + CloudFront

When you're ready to manage the bucket and distributions in Terraform too:

1. Add `aws_s3_bucket.site`, `aws_cloudfront_distribution.apex`, etc. resources matching the live config exactly.
2. Run `terraform import` for each, e.g.:
   ```bash
   terraform import aws_s3_bucket.site seth-caparelli.com
   terraform import aws_cloudfront_distribution.apex E13GAAU4Z8UXZC
   ```
3. Run `terraform plan` and reconcile any diffs by editing the resource blocks until plan is empty.
4. Replace the `data` blocks with references to the new resources.
