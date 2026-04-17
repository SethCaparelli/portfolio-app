resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

data "aws_iam_policy_document" "github_deploy_trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_owner}/${var.github_repo}:ref:refs/heads/${var.github_branch}"]
    }
  }
}

resource "aws_iam_role" "github_deploy" {
  name               = "portfolio-app-github-deploy"
  description        = "Assumed by GitHub Actions to deploy the portfolio site to S3 + CloudFront"
  assume_role_policy = data.aws_iam_policy_document.github_deploy_trust.json
}

data "aws_iam_policy_document" "github_deploy_permissions" {
  statement {
    sid    = "S3SiteSync"
    effect = "Allow"
    actions = [
      "s3:ListBucket",
      "s3:GetBucketLocation",
    ]
    resources = [data.aws_s3_bucket.site.arn]
  }

  statement {
    sid    = "S3SiteObjects"
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:PutObjectAcl",
    ]
    resources = ["${data.aws_s3_bucket.site.arn}/*"]
  }

  statement {
    sid     = "CloudFrontInvalidation"
    effect  = "Allow"
    actions = ["cloudfront:CreateInvalidation"]
    resources = [
      for id in var.cloudfront_distribution_ids :
      "arn:aws:cloudfront::${var.aws_account_id}:distribution/${id}"
    ]
  }
}

resource "aws_iam_role_policy" "github_deploy" {
  name   = "portfolio-app-github-deploy"
  role   = aws_iam_role.github_deploy.id
  policy = data.aws_iam_policy_document.github_deploy_permissions.json
}
