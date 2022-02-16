data "aws_canonical_user_id" "current" {}

data "aws_iam_policy_document" "s3-target-policy" {
    statement {
        actions = [ "s3:GetObject" ]
        effect  = "Allow"

        resources = [
            "${aws_s3_bucket.target-bucket.arn}/*"
        ]

        principals {
            type        = "AWS"
            identifiers = [ aws_cloudfront_origin_access_identity.cdn-identity.iam_arn ]
        }
    }
}

data "aws_iam_policy_document" "s3-failover-policy" {
    statement {
        actions = [ "s3:GetObject" ]
        effect  = "Allow"

        resources = [
            "${aws_s3_bucket.failover-bucket.arn}/*"
        ]

        principals {
            type        = "AWS"
            identifiers = [ aws_cloudfront_origin_access_identity.cdn-identity.iam_arn ]
        }
    }
}
