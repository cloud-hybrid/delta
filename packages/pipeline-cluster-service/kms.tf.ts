/// cat kms.tf | cdktf convert --provider "aws" --language typescript > kms.tf.ts

import * as aws from "./.gen/providers/aws";
const awsKmsKeyDefault = new aws.kms.KmsKey(this, "default", {
  deletionWindowInDays:
    "${var.kms_deletion_window_in_days > 0 ? var.kms_deletion_window_in_days : null}",
  description: "GitLab Runner module managed key - ${var.environment}",
  enableKeyRotation: "${var.kms_deletion_window_in_days > 0 ? true : false}",
  policy:
    '${templatefile("${path.module}/policies/kms-policy.json",\n    {\n      arn_format = var.arn_format\n      aws_region = var.aws_region\n      account_id = data.aws_caller_identity.current.account_id\n    }\n  )}',
  tags: "${local.tags}",
});

/*In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.*/
awsKmsKeyDefault.addOverride("count", "${var.enable_kms ? 1 : 0}");
const awsKmsAliasDefault = new aws.kms.KmsAlias(this, "default_1", {
  name: "alias/${var.kms_alias_name}",
  targetKeyId: `\${${awsKmsKeyDefault.fqn}[0].key_id}`,
});

/*This allows the Terraform resource name to match the original name. You can remove the call if you don't need them to match.*/
awsKmsAliasDefault.overrideLogicalId("default");

/*In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.*/
awsKmsAliasDefault.addOverride(
  "count",
  '${var.enable_kms && var.kms_alias_name != "" ? 1 : 0}'
);

