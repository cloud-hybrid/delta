terraform {
    backend "http" {}

    required_providers {
        github = {
            source = "integrations/github"
        }

        aws = {
            source = "hashicorp/aws"
        }

        archive = {
            source = "hashicorp/archive"
        }

        gitlab = {
            source = "gitlabhq/gitlab"
        }
    }
}

provider "aws" {
    profile = var.profile
    region = var.region
}

provider "archive" {}

provider "gitlab" {
    base_url = jsondecode(data.aws_secretsmanager_secret_version.gitlab-credentials-instance.secret_string)["URL"]
    token = jsondecode(data.aws_secretsmanager_secret_version.gitlab-credentials-instance.secret_string)["Token"]
}

provider "github" {
    token = jsondecode(data.aws_secretsmanager_secret_version.github-credentials-instance.secret_string)["Token"]
}

locals {
    name = "Secrets-Rotation-Service"
    datetime = formatdate("YYYY-MM-DD", timestamp())
    folder = basename(dirname("./.."))
    normalization = "${var.organization}-${var.environment}-${local.name}"
}

resource aws_iam_role "secrets-access" {
    name = "${local.normalization}-Lambda-Secrets-Management-Role"

    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Sid = ""
                Action = "sts:AssumeRole"
                Effect = "Allow"
                Principal = {
                    Service = "secretsmanager.amazonaws.com"
                }
            },
            {
                Sid = ""
                Action = [
                    "secretsmanager:GetResourcePolicy",
                    "secretsmanager:DescribeSecret",
                    "secretsmanager:ListSecretVersionIds",
                    "secretsmanager:ListSecrets"
                ]
                Effect = "Allow"
                Resource = "*"
            }
        ]
    })
}