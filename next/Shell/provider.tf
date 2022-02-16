provider "aws" {
    region  = var.region

    default_tags {
        tags = {
            Organization : title(var.organization)
            Environment : title(var.environment)
            Service : title(var.service)
            Creator : title(var.creator)
            Cloud : var.cloud
            CFN: "False"
            TF : "True"
        }
    }
}