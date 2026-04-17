output "github_deploy_role_arn" {
  description = "Set this as the AWS_DEPLOY_ROLE_ARN secret (or repo variable) in GitHub."
  value       = aws_iam_role.github_deploy.arn
}

output "s3_bucket_arn" {
  value = data.aws_s3_bucket.site.arn
}

output "cloudfront_distribution_ids" {
  value = var.cloudfront_distribution_ids
}
