/// cat logging.tf | cdktf convert --provider "aws" --language typescript > logging.tf.ts

import * as aws from "./.gen/providers/aws";
const providedKmsKey = '${var.kms_key_id != "" ? var.kms_key_id : ""}';
const awsIamRolePolicyInstance = new aws.iam.IamRolePolicy(this, "instance", {
  name: "${var.environment}-instance-role",
  policy:
    '${templatefile("${path.module}/policies/instance-logging-policy.json", { arn_format = var.arn_format })}',
  role: "${aws_iam_role.instance.name}",
});

/*In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.*/
awsIamRolePolicyInstance.addOverride(
  "count",
  "${var.enable_cloudwatch_logging ? 1 : 0}"
);
const kmsKey = `\${${providedKmsKey} == "" && var.enable_kms ? aws_kms_key.default[0].arn : ${providedKmsKey}}`;
const awsCloudwatchLogGroupEnvironment = new aws.cloudwatch.CloudwatchLogGroup(
  this,
  "environment",
  {
    kmsKeyId: kmsKey,
    name: "${var.log_group_name != null ? var.log_group_name : var.environment}",
    retentionInDays: "${var.cloudwatch_logging_retention_in_days}",
    tags: "${local.tags}",
  }
);

/*In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.*/
awsCloudwatchLogGroupEnvironment.addOverride(
  "count",
  "${var.enable_cloudwatch_logging ? 1 : 0}"
);

