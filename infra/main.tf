terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.70"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = "portfolio-app"
      ManagedBy = "terraform"
    }
  }
}

# The S3 bucket lives in its own region; use an aliased provider
# so the data source reads from the right endpoint.
provider "aws" {
  alias  = "bucket"
  region = var.s3_bucket_region

  default_tags {
    tags = {
      Project   = "portfolio-app"
      ManagedBy = "terraform"
    }
  }
}
