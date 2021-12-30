data aws_secretsmanager_secret "gitlab-credentials" {
    name = "${var.organization}/Global/GitLab/TF/Credentials"
}

data aws_secretsmanager_secret_version "gitlab-credentials-instance" {
    secret_id = data.aws_secretsmanager_secret.gitlab-credentials.id
}

data aws_secretsmanager_secret "github-credentials" {
    name = "${var.organization}/Global/GitHub/TF/Credentials"
}

data aws_secretsmanager_secret_version "github-credentials-instance" {
    secret_id = data.aws_secretsmanager_secret.github-credentials.id
}
