resource "aws_s3_bucket" "logging-bucket" {
    bucket = "logging.${local.domain}"
    acl    = "log-delivery-write"

    force_destroy = true

    versioning {
        enabled = false
    }

    lifecycle_rule {
        id      = "${var.application}-${var.environment}-${var.service}-Logging-Lifecycle"
        enabled = true

        transition {
            storage_class = "INTELLIGENT_TIERING"
        }
    }
}

resource "aws_s3_bucket" "target-bucket" {
    bucket = local.domain

    force_destroy = true

    depends_on = [ aws_s3_bucket.logging-bucket ]

    versioning {
        enabled = false
    }

    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    lifecycle_rule {
        id      = "${var.application}-${var.environment}-${var.service}-Primary-Lifecycle"
        enabled = false

        transition {
            storage_class = "INTELLIGENT_TIERING"
        }
    }

    logging {
        target_bucket = aws_s3_bucket.logging-bucket.bucket
        target_prefix = "Logging/Primary"
    }

    cors_rule {
        allowed_headers = [ "*" ]
        allowed_origins = [ "*" ]
        allowed_methods = [ "GET", "POST", "PUT" ]
        expose_headers  = [ ]
        max_age_seconds = 3000
    }
}

resource "aws_s3_bucket" "redirect-target-bucket" {
    bucket = "www.${local.domain}"

    force_destroy = true

    depends_on = [ aws_s3_bucket.logging-bucket, aws_s3_bucket.target-bucket ]

    versioning {
        enabled = false
    }

    website {
        redirect_all_requests_to = aws_s3_bucket.target-bucket.bucket
    }

    lifecycle_rule {
        id      = "${var.application}-${var.environment}-${var.service}-WWW-Lifecycle"
        enabled = false

        transition {
            storage_class = "INTELLIGENT_TIERING"
        }
    }

    logging {
        target_bucket = aws_s3_bucket.logging-bucket.bucket
        target_prefix = "Logging/Redirect"
    }

    cors_rule {
        allowed_headers = [ "*" ]
        allowed_origins = [ "*" ]
        allowed_methods = [ "GET", "POST", "PUT" ]
        expose_headers  = [ ]
        max_age_seconds = 3000
    }
}

resource "aws_s3_bucket" "failover-bucket" {
    bucket = "failover.${local.domain}"

    # ... acl    = "public-read"

    force_destroy = true

    depends_on = [ aws_s3_bucket.logging-bucket ]

    versioning {
        enabled = false
    }

    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    lifecycle_rule {
        id      = "${var.application}-${var.environment}-${var.service}-Failover-Lifecycle"
        enabled = false

        transition {
            storage_class = "INTELLIGENT_TIERING"
        }
    }

    logging {
        target_bucket = aws_s3_bucket.logging-bucket.bucket
        target_prefix = "Logging/Failover"
    }

    cors_rule {
        allowed_headers = [ "*" ]
        allowed_origins = [ "*" ]
        allowed_methods = [ "GET", "POST", "PUT" ]
        expose_headers  = [ ]
        max_age_seconds = 3000
    }
}

resource "aws_s3_bucket_policy" "target-bucket-policy" {
    bucket = aws_s3_bucket.target-bucket.id
    policy = data.aws_iam_policy_document.s3-target-policy.json
}

resource "aws_s3_bucket_policy" "failover-bucket-policy" {
    depends_on = [ aws_s3_bucket.target-bucket ]
    bucket     = aws_s3_bucket.failover-bucket.id
    policy     = data.aws_iam_policy_document.s3-failover-policy.json
}

resource "aws_cloudfront_origin_access_identity" "cdn-identity" {
    comment = "${var.application}-${var.environment}-${var.service}-CDN-Identity-ID"
}

resource "aws_cloudfront_distribution" "target-cdn" {
    enabled             = true
    is_ipv6_enabled     = true
    default_root_object = "index.html"

    depends_on = [
        aws_s3_bucket.target-bucket,
        aws_s3_bucket.failover-bucket,
        aws_s3_bucket_policy.target-bucket-policy,
        aws_s3_bucket_policy.failover-bucket-policy,
        aws_s3_bucket.logging-bucket
    ]

    aliases = [ local.domain ]
    comment = "${var.organization}-${var.application}-${var.environment}-${var.service}"

    custom_error_response {
        error_caching_min_ttl = 300

        error_code    = 403
        response_code = 200

        response_page_path = "/index.html"
    }

    origin_group {
        origin_id = "Cluster"

        failover_criteria {
            status_codes = [ 403, 404, 500, 502 ]
        }

        member {
            origin_id = "Primary"
        }

        member {
            origin_id = "Failover"
        }
    }

    origin {
        domain_name = aws_s3_bucket.target-bucket.bucket_regional_domain_name
        origin_id   = "Primary"

        s3_origin_config {
            origin_access_identity = aws_cloudfront_origin_access_identity.cdn-identity.cloudfront_access_identity_path
        }
    }

    origin {
        domain_name = aws_s3_bucket.failover-bucket.bucket_regional_domain_name
        origin_id   = "Failover"

        s3_origin_config {
            origin_access_identity = aws_cloudfront_origin_access_identity.cdn-identity.cloudfront_access_identity_path
        }
    }

    logging_config {
        include_cookies = false
        bucket          = "logging.${local.domain}.s3.amazonaws.com"
        prefix          = "Logging/CDN"
    }

    default_cache_behavior {
        target_origin_id = "Cluster"

        viewer_protocol_policy = "redirect-to-https"

        compress = true

        smooth_streaming = false

        default_ttl = 0
        max_ttl     = 0
        min_ttl     = 0

        allowed_methods = [
            "GET",
            "HEAD",
            "OPTIONS"
        ]

        cached_methods = [
            "HEAD", "GET", "OPTIONS"
        ]

        forwarded_values {
            query_string = true

            headers = [
                "Access-Control-Request-Headers",
                "Access-Control-Request-Method",
                "Access-Control-Request-Origin"
            ]

            cookies {
                forward = "none"
            }
        }
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn      = var.certificate
        minimum_protocol_version = "TLSv1.1_2016"
        ssl_support_method       = "sni-only"
    }
}
