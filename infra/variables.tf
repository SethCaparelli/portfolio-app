variable "aws_region" {
  description = "AWS region for the deploy role. CloudFront and S3 are global/regional but the IAM role lives here."
  type        = string
  default     = "us-east-1"
}

variable "aws_account_id" {
  description = "AWS account ID. Used in the OIDC trust policy."
  type        = string
}

variable "github_owner" {
  description = "GitHub org or user that owns the repo."
  type        = string
}

variable "github_repo" {
  description = "GitHub repo name."
  type        = string
}

variable "github_environment" {
  description = "GitHub Actions environment allowed to assume the deploy role. Enforce branch restriction via repo Settings → Environments → deployment branch rules."
  type        = string
  default     = "production"
}

variable "s3_bucket_name" {
  description = "Existing S3 bucket that hosts the site."
  type        = string
}

variable "s3_bucket_region" {
  description = "Region the S3 bucket lives in. Different from aws_region because IAM is global but S3 is regional."
  type        = string
  default     = "us-west-2"
}

variable "cloudfront_distribution_ids" {
  description = "Existing CloudFront distribution IDs to invalidate after deploys."
  type        = list(string)
}
