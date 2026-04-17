data "aws_s3_bucket" "site" {
  bucket = var.s3_bucket_name
}

data "aws_cloudfront_distribution" "site" {
  for_each = toset(var.cloudfront_distribution_ids)
  id       = each.value
}
