data "archive_file" "configuration" {
    type = "zip"
    source_file = "${path.cwd}/configuration.toml"
    output_path = "${path.cwd}/.archive/configuration.zip"
}

data "archive_file" "source" {
    type = "zip"
    output_path = "${path.cwd}/.archive/source.zip"
    source_dir = "${path.cwd}/.terraform/modules/git-source"
}

data "archive_file" "ci" {
    type = "zip"
    output_path = "${path.cwd}/.archive/ci.zip"
    source_dir = "${path.cwd}/.terraform/modules/git-target"
}

data "archive_file" "artifact" {
    type = "zip"
    output_path = "${path.cwd}/Artifact.zip"
    source_dir = "${path.cwd}/.archive"

    depends_on = [
        data.archive_file.source,
        data.archive_file.ci,
        data.archive_file.configuration
    ]
}

resource "aws_lambda_function" "lambda" {
    filename = "${path.module}/lambda_function.zip"
    function_name = "lambda_function"
    role = aws_iam_role.secrets-access.arn
    handler = "index.handler"
    runtime = "nodejs14.x"
}

module "git-source" {
    source = "github.com/cloud-hybrid/delta"
}

module "git-target" {
    source = "git::https://API-User@gitlab.mycapstone.com/IO/Secrets-Management-Service.git"
}
