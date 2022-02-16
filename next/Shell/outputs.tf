output "canonical_user_id" {
    value = data.aws_canonical_user_id.current.id
}

output "fqdn" {
    value = local.domain
}

output "cdn" {
    value = {
        id : aws_cloudfront_distribution.target-cdn.id,
        hosted_zone_id : aws_cloudfront_distribution.target-cdn.hosted_zone_id,
        fqdn : aws_cloudfront_distribution.target-cdn.domain_name
    }
}

output "zone" {
    value = {
        id : var.hosted-zone-id,
        fqdn : var.hosted-zone-fqdn
    }
}

