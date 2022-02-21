provider "null" {}
provider "random" {}

provider "aws" {
    region = var.region

    skip_requesting_account_id  = true
    skip_credentials_validation = true
    skip_region_validation      = true

    max_retries = 3

    default_tags {
        tags = {
            Environment         = var.environment
            Region              = var.region
            Name                = "IO-Global-Resource"
            Business-Unit       = "Internal Platform Team"
            Cost-Center         = "0000"
            Security-Compliance = "N/A"
            Billing-Identifier  = "IO-Global-Security-Initiative"
        }
    }
}

locals {
    frequency = "FIFTEEN_MINUTES"
    time      = timestamp()
    name      = {
        global   = "IO-Global-Security-Adherence"
        regional = "IO-${local.regional-map[var.region]}-Security-Adherence"
        hash     = sha512(local.time)
    }

    regional-map = {
        "af-south-1"     = "AF-South-1"
        "eu-north-1"     = "EU-North-1"
        "ap-south-1"     = "AP-South-1"
        "eu-west-3"      = "EU-West-3"
        "eu-west-2"      = "EU-West-2"
        "eu-south-1"     = "EU-South-1"
        "eu-west-1"      = "EU-West-1"
        "ap-northeast-3" = "AP-North-East-3"
        "ap-northeast-2" = "AP-North-East-2"
        "me-south-1"     = "ME-South-1"
        "ap-northeast-1" = "AP-northeast-1"
        "sa-east-1"      = "SA-East-1"
        "ca-central-1"   = "CA-Central-1"
        "ap-east-1"      = "AP-East-1"
        "ap-southeast-1" = "AP-South-East-1"
        "ap-southeast-2" = "AP-South-East-2"
        "eu-central-1"   = "EU-Central-1"
        "ap-southeast-3" = "AP-South-East-3"
        "us-east-1"      = "US-East-1"
        "us-east-2"      = "US-East-2"
        "us-west-1"      = "US-West-1"
        "us-west-2"      = "US-West-2"
    }

    trail = {
        global   = "${local.name.global}-Trail"
        regional = "${local.name.regional}-Trail"
    }

    bucket = {
        global   = lower("${local.name.global}-Bucket")
        regional = lower("${local.name.regional}-Bucket")
        prefix   = (var.region == "us-east-1") ? "Global" : local.name.regional
    }

    log-group = {
        global   = "${local.name.global}-Log-Group"
        regional = "${local.name.regional}-Log-Group"
    }

    analyzer = "${local.name.regional}-Access-Security-Analyzer"

    events = {
        console-access = "${local.name.regional}-Console-Access-Event"
    }

    topics = {
        logins      = "${local.name.regional}-Console-Login-Topic"
        cloud-trail = "${local.name.regional}-Cloud-Trail-Delivery-Topic"
    }
}

resource "aws_cloudtrail" "trail" {
    s3_bucket_name = aws_s3_bucket.logging-bucket.id

    name                          = (var.region == "us-east-1") ? local.trail.global : local.trail.regional
    // s3_key_prefix                 = (var.region == "us-east-1") ? "Global" : local.name.regional
    include_global_service_events = (var.region == "us-east-1") ? true : false
    is_multi_region_trail         = (var.region == "us-east-1") ? true : false

    // @todo add back
    // sns_topic_name = aws_sns_topic.cloud-trail-delivery.name

    // @todo add back
    // cloud_watch_logs_group_arn = "${aws_cloudwatch_log_group.log-group.arn}:*" # CloudTrail requires the Log Stream wildcard

    depends_on = [aws_s3_bucket.logging-bucket, aws_cloudwatch_log_group.log-group, aws_sns_topic.cloud-trail-delivery]
}

data "aws_cloudtrail_service_account" "main" {}
resource "aws_s3_bucket" "logging-bucket" {
    bucket        = (var.region == "us-east-1") ? local.bucket.global : local.bucket.regional
    force_destroy = true

    // policy = jsonencode({
    //     "Version" : "2012-10-17",
    //     "Statement" : [
    //         {
    //             "Effect" : "Allow",
    //             "Principal" : {
    //                 "Service" : "cloudtrail.amazonaws.com"
    //             },
    //             "Action" : "s3:*",
    //             "Resource" : "arn:aws:s3:::*"
    //         }
    //     ]
    // })

    policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "Put bucket policy needed for trails",
      "Effect": "Allow",
      "Principal": {
        "AWS": "${data.aws_cloudtrail_service_account.main.arn}"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::${(var.region == "us-east-1") ? local.bucket.global : local.bucket.regional}/*"
    },
    {
      "Sid": "Get bucket policy needed for trails",
      "Effect": "Allow",
      "Principal": {
        "AWS": "${data.aws_cloudtrail_service_account.main.arn}"
      },
      "Action": "s3:GetBucketAcl",
      "Resource": "arn:aws:s3:::${(var.region == "us-east-1") ? local.bucket.global : local.bucket.regional}"
    }
  ]
}
EOF
}

resource "aws_cloudwatch_log_group" "log-group" {
    name = (var.region == "us-east-1") ? local.log-group.global : local.log-group.regional
}

/// resource "aws_macie2_account" "ai-service" {
///     finding_publishing_frequency = local.frequency
///
///     status = "ENABLED"
/// }

resource "aws_guardduty_detector" "guard-duty" {
    enable = true

    finding_publishing_frequency = local.frequency

    datasources {
        s3_logs {
            enable = true
        }
    }
}

resource "aws_accessanalyzer_analyzer" "analyzer" {
    analyzer_name = local.analyzer
}

/// resource "aws_securityhub_account" "account" {}
///
/// resource "aws_securityhub_standards_subscription" "cis" {
///     depends_on    = [aws_securityhub_account.account]
///     standards_arn = "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
/// }
///
/// resource "aws_securityhub_standards_subscription" "pci" {
///     depends_on    = [aws_securityhub_account.account]
///     standards_arn = "arn:aws:securityhub:us-east-1::standards/pci-dss/v/3.2.1"
/// }
///
/// resource "aws_securityhub_standards_subscription" "foundations" {
///     depends_on    = [aws_securityhub_account.account]
///     standards_arn = "arn:aws:securityhub:us-east-1::standards/aws-foundational-security-best-practices/v/1.0.0"
/// }
///
/// resource "aws_detective_graph" "detective" {
///     tags = {
///         Name = local.name.regional
///     }
/// }

resource "aws_sns_topic" "cloud-trail-delivery" {
    name = local.topics.cloud-trail
}

resource "aws_sns_topic_policy" "cloud-trail-delivery-policy" {
    arn    = aws_sns_topic.logins.arn
    policy = data.aws_iam_policy_document.default-topic-policy.json
}

resource "aws_cloudwatch_event_rule" "console" {
    name          = local.events.console-access
    description   = "Capture AWS Console Login"
    event_pattern = jsonencode({
        "detail-type" : [
            "AWS Console Sign In via CloudTrail"
        ]
    })
}

resource "aws_cloudwatch_event_target" "sns" {
    rule      = aws_cloudwatch_event_rule.console.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "iam-event-rule" {
    name          = "${local.name.regional}-IAM-State"
    description   = "Capture AWS IAM State"
    event_pattern = jsonencode({
        "source" : [
            "aws.iam"
        ],
        "detail-type" : [
            "AWS API Call via CloudTrail"
        ],
        "detail" : {
            "eventSource" : [
                "iam.amazonaws.com"
            ],
            "eventName" : [
                "AddUsersToGroup",
                "AddUserToGroup",
                "AdminCreateUser",
                "AdminSetUserPassword",
                "CreateAccessKey",
                "CreateGroup",
                "CreateRole",
                "CreateUser",
                "DeleteAccessKey",
                "DeleteGroup",
                "DeleteRole",
                "DeleteUser",
                "RemoveUserFromGroup"
            ]
        }
    })
}

resource "aws_cloudwatch_event_target" "iam-sns" {
    rule      = aws_cloudwatch_event_rule.iam-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "guard-duty-event-rule" {
    name          = "${local.name.regional}-GuardDuty-State"
    description   = "Capture AWS GuardDuty State"
    event_pattern = jsonencode({
        "source" : [
            "aws.guardduty"
        ],
        "detail-type" : [
            "GuardDuty Finding"
        ]
    })
}

resource "aws_cloudwatch_event_target" "guard-duty-sns" {
    rule      = aws_cloudwatch_event_rule.guard-duty-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "ec2-event-rule" {
    name          = "${local.name.regional}-EC2-State"
    description   = "Capture AWS EC2 State"
    event_pattern = jsonencode({
        "source" : [
            "aws.ec2"
        ],
        "detail-type" : [
            "AWS API Call via CloudTrail"
        ],
        "detail" : {
            "eventSource" : [
                "ec2.amazonaws.com"
            ],
            "eventName" : [
                "CreateInstance",
                "CreateInstances",
                "RunInstances",
                "StopInstances",
                "TerminateInstances"
            ]
        }
    })
}

resource "aws_cloudwatch_event_target" "ec2-sns" {
    rule      = aws_cloudwatch_event_rule.ec2-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "rds-event-rule" {
    name          = "${local.name.regional}-RDS-State"
    description   = "Capture AWS RDS State"
    event_pattern = jsonencode({
        "source" : [
            "aws.rds"
        ],
        "detail-type" : [
            "AWS API Call via CloudTrail"
        ],
        "detail" : {
            "eventSource" : [
                "rds.amazonaws.com"
            ],
            "eventName" : [
                "CreateDBCluster",
                "CreateDBInstance",
                "DeleteDBCluster",
                "DeleteDBInstance",
                "RebootDBInstance"
            ]
        }
    })
}

resource "aws_cloudwatch_event_target" "rds-sns" {
    rule      = aws_cloudwatch_event_rule.rds-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "lambda-event-rule" {
    name          = "${local.name.regional}-Lambda-State"
    description   = "Capture AWS Lambda State"
    event_pattern = jsonencode({
        "source" : [
            "aws.lambda"
        ],
        "detail-type" : [
            "AWS API Call via CloudTrail"
        ],
        "detail" : {
            "eventSource" : [
                "lambda.amazonaws.com"
            ],
            "eventName" : [
                "CreateFunction20150331",
                "UpdateFunctionCode",
                "UpdateFunctionCode20150331"
            ]
        }
    })
}

resource "aws_cloudwatch_event_target" "lambda-sns" {
    rule      = aws_cloudwatch_event_rule.lambda-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "cf-event-rule" {
    name          = "${local.name.regional}-CF-State"
    description   = "Capture AWS CF State"
    event_pattern = jsonencode({
        "source" : ["aws.cloudformation"],
        "detail-type" : ["AWS API Call via CloudTrail"],
        "detail" : {
            "eventSource" : ["cloudformation.amazonaws.com"]
        }
    })
}

resource "aws_cloudwatch_event_target" "cf-sns" {
    rule      = aws_cloudwatch_event_rule.cf-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_cloudwatch_event_rule" "ecs-event-rule" {
    name          = "${local.name.regional}-ECS-State"
    description   = "Capture AWS ECS State"
    event_pattern = jsonencode({
        "source" : ["aws.ecs"]
    })
}

resource "aws_cloudwatch_event_target" "ecs-sns" {
    rule      = aws_cloudwatch_event_rule.ecs-event-rule.name
    target_id = "SendToSNS"
    arn       = aws_sns_topic.logins.arn
}

resource "aws_sns_topic" "logins" {
    name = local.topics.logins
}

resource "aws_sns_topic_policy" "default" {
    arn    = aws_sns_topic.logins.arn
    policy = data.aws_iam_policy_document.default-topic-policy.json
}

data "aws_iam_policy_document" "default-topic-policy" {
    statement {
        effect = "Allow"

        principals {
            type        = "AWS"
            identifiers = ["*"]
        }

        actions = [
            "SNS:Subscribe",
            "SNS:SetTopicAttributes",
            "SNS:RemovePermission",
            "SNS:Publish",
            "SNS:ListSubscriptionsByTopic",
            "SNS:GetTopicAttributes",
            "SNS:DeleteTopic",
            "SNS:AddPermission"
        ]

        resources = [aws_sns_topic.logins.arn]
    }
}

resource "aws_sns_topic_subscription" "console-topic-subscription" {
    topic_arn = aws_sns_topic.logins.arn
    protocol  = "email"
    endpoint  = "bunceedevops@coughlancompanies.com"
}

#      "ConsoleSignInFailuresMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = ConsoleLogin) && ($.errorMessage = \"Failed authentication\") }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "ConsoleSignInFailureCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "ConsoleSignInFailuresAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailConsoleSignInFailures",
#              "AlarmDescription" : "Alarms when an unauthenticated API call is made to sign into the console.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "ConsoleSignInFailureCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "3"
#          }
#      },

#resource "aws_cloudwatch_log_group" "console-sign-in-log-group" {
#    name = "${var.organization}-${var.environment}-Console-Login-Log-Group"
#}

#resource "aws_cloudwatch_log_metric_filter" "console-sign-in-metric-filter" {
#    log_group_name = aws_cloudwatch_log_group.console-sign-in-log-group.name
#    name           = "${aws_cloudwatch_log_group.console-sign-in-log-group.name}-Metrics-Filter"
#    pattern        = jsonencode({ ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") })
#    metric_transformation {
#        name      = ""
#        namespace = ""
#        value     = ""
#    }
#}

#resource "aws_cloudformation_stack" "service-notifications-stack" {
#    name = "${var.organization}-${var.environment}-Notifications-Stack"
#
#    parameters = {
#        Email = "jkletschka@mycapstone.com"
#    }
#
#    template_body = <<STACK
#{
#  "AWSTemplateFormatVersion" : "2010-09-09",
#  "Description" : "AWS CloudTrail API Activity Alarm Template for CloudWatch Logs",
#  "Parameters" : {
#      "LogGroupName" : {
#          "Type" : "String",
#          "Default" : "CloudTrail/DefaultLogGroup",
#          "Description" : "Enter CloudWatch Logs log group name. Default is CloudTrail/DefaultLogGroup"
#      },
#      "Email" : {
#          "Type" : "String",
#          "Description" : "Email address to notify when an API activity has triggered an alarm",
#          "Default": "jkletschka@mycapstone.com"
#      }
#  },
#  "Resources" : {
#      "SecurityGroupChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "SecurityGroupEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "SecurityGroupChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailSecurityGroupChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, update or delete a Security Group.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "SecurityGroupEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "NetworkAclChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "NetworkAclEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "NetworkAclChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailNetworkAclChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, update or delete a Network ACL.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "NetworkAclEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "GatewayChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "GatewayEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "GatewayChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailGatewayChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, update or delete a Customer or Internet Gateway.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "GatewayEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "VpcChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "VpcEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "VpcChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailVpcChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, update or delete a VPC, VPC peering connection or VPC connection to classic.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "VpcEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "EC2InstanceChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = RunInstances) || ($.eventName = RebootInstances) || ($.eventName = StartInstances) || ($.eventName = StopInstances) || ($.eventName = TerminateInstances) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "EC2InstanceEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "EC2InstanceChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailEC2InstanceChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, terminate, start, stop or reboot an EC2 instance.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "EC2InstanceEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "EC2LargeInstanceChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = RunInstances) && (($.requestParameters.instanceType = *.8xlarge) || ($.requestParameters.instanceType = *.4xlarge)) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "EC2LargeInstanceEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "EC2LargeInstanceChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailEC2LargeInstanceChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, terminate, start, stop or reboot a 4x or 8x-large EC2 instance.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "EC2LargeInstanceEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#      "CloudTrailChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "CloudTrailEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "CloudTrailChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailChanges",
#              "AlarmDescription" : "Alarms when an API call is made to create, update or delete a CloudTrail trail, or to start or stop logging to a trail.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "CloudTrailEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#
#      "ConsoleSignInFailuresMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.eventName = ConsoleLogin) && ($.errorMessage = \"Failed authentication\") }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "ConsoleSignInFailureCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "ConsoleSignInFailuresAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailConsoleSignInFailures",
#              "AlarmDescription" : "Alarms when an unauthenticated API call is made to sign into the console.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "ConsoleSignInFailureCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "3"
#          }
#      },
#
#      "AuthorizationFailuresMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{ ($.errorCode = \"*UnauthorizedOperation\") || ($.errorCode = \"AccessDenied*\") }",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "AuthorizationFailureCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "AuthorizationFailuresAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailAuthorizationFailures",
#              "AlarmDescription" : "Alarms when an unauthorized API call is made.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "AuthorizationFailureCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#
#          }
#      },
#
#      "IAMPolicyChangesMetricFilter": {
#          "Type": "AWS::Logs::MetricFilter",
#          "Properties": {
#              "LogGroupName": { "Ref" : "LogGroupName" },
#              "FilterPattern": "{($.eventName=DeleteGroupPolicy)||($.eventName=DeleteRolePolicy)||($.eventName=DeleteUserPolicy)||($.eventName=PutGroupPolicy)||($.eventName=PutRolePolicy)||($.eventName=PutUserPolicy)||($.eventName=CreatePolicy)||($.eventName=DeletePolicy)||($.eventName=CreatePolicyVersion)||($.eventName=DeletePolicyVersion)||($.eventName=AttachRolePolicy)||($.eventName=DetachRolePolicy)||($.eventName=AttachUserPolicy)||($.eventName=DetachUserPolicy)||($.eventName=AttachGroupPolicy)||($.eventName=DetachGroupPolicy)}",
#              "MetricTransformations": [
#                  {
#                      "MetricNamespace": "CloudTrailMetrics",
#                      "MetricName": "IAMPolicyEventCount",
#                      "MetricValue": "1"
#                  }
#              ]
#          }
#      },
#      "IAMPolicyChangesAlarm": {
#          "Type": "AWS::CloudWatch::Alarm",
#          "Properties": {
#              "AlarmName" : "CloudTrailIAMPolicyChanges",
#              "AlarmDescription" : "Alarms when an API call is made to change an IAM policy.",
#              "AlarmActions" : [{ "Ref" : "AlarmNotificationTopic" }],
#              "MetricName" : "IAMPolicyEventCount",
#              "Namespace" : "CloudTrailMetrics",
#              "ComparisonOperator" : "GreaterThanOrEqualToThreshold",
#              "EvaluationPeriods" : "1",
#              "Period" : "300",
#              "Statistic" : "Sum",
#              "Threshold" : "1"
#          }
#      },
#
#	  "AlarmNotificationTopic": {
#          "Type": "AWS::SNS::Topic",
#          "Properties": {
#              "Subscription": [
#                  {
#                      "Endpoint": { "Ref": "Email" },
#                      "Protocol": "email"
#                  }
#              ]
#          }
#      }
#  }
#}
#STACK
#}

// resource "aws_macie2_account" "ai-service" {
//     finding_publishing_frequency = "FIFTEEN_MINUTES"
//     status                       = "ENABLED"
// }

// resource "aws_macie2_custom_data_identifier" "example" {
//     name                   = "NAME OF CUSTOM DATA IDENTIFIER"
//     regex                  = "[0-9]{3}-[0-9]{2}-[0-9]{4}"
//     description            = "DESCRIPTION"
//     maximum_match_distance = 10
//     keywords               = ["keyword"]
//     ignore_words           = ["ignore"]
//
//     depends_on = [aws_macie2_account.ai-service]
// }

