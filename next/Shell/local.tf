locals {
    domain = var.environment != "Production" ? lower("${var.subdomain}.${var.environment}.${var.hosted-zone-fqdn}") : lower("${var.subdomain}.${var.hosted-zone-fqdn}")
}