output "gitlab-secrets-manager-credentials" {
   value = jsondecode(data.aws_secretsmanager_secret_version.gitlab-credentials-instance.secret_string)
   sensitive = true
}