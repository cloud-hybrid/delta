terraform {
  backend "http" {}
}

provider "aws" {
  profile = var.profile
  region  = var.region
}

locals {
  name               = "Secrets-Rotation-Service"
  datetime           = formatdate("YYYY-MM-DD", timestamp())
  normalization      = "${var.organization}-${var.environment}-${locals.name}"
}

