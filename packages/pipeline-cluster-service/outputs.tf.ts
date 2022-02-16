import * as cdktf from "cdktf";
new cdktf.TerraformOutput(this, "runner_agent_role_arn", {
  value: "${aws_iam_role.instance.arn}",
  description:
    "ARN of the role used for the ec2 instance for the GitLab runner agent.",
});
new cdktf.TerraformOutput(this, "runner_agent_role_name", {
  value: "${aws_iam_role.instance.name}",
  description:
    "Name of the role used for the ec2 instance for the GitLab runner agent.",
});
new cdktf.TerraformOutput(this, "runner_agent_sg_id", {
  value: "${aws_security_group.runner.id}",
  description: "ID of the security group attached to the GitLab runner agent.",
});
new cdktf.TerraformOutput(this, "runner_as_group_name", {
  value: "${aws_autoscaling_group.gitlab_runner_instance.name}",
  description: "Name of the autoscaling group for the gitlab-runner instance",
});
new cdktf.TerraformOutput(this, "runner_cache_bucket_arn", {
  value: "${module.cache.arn}",
  description: "ARN of the S3 for the build cache.",
});
new cdktf.TerraformOutput(this, "runner_cache_bucket_name", {
  value: "${module.cache.bucket}",
  description: "Name of the S3 for the build cache.",
});
new cdktf.TerraformOutput(this, "runner_eip", {
  value: '${element(concat(aws_eip.gitlab_runner.*.public_ip, [""]), 0)}',
  description: "EIP of the Gitlab Runner",
});
new cdktf.TerraformOutput(this, "runner_launch_template_name", {
  value: "${aws_launch_template.gitlab_runner_instance.name}",
  description: "The name of the runner's launch template.",
});
new cdktf.TerraformOutput(this, "runner_role_arn", {
  value: "${aws_iam_role.docker_machine.arn}",
  description: "ARN of the role used for the docker machine runners.",
});
new cdktf.TerraformOutput(this, "runner_role_name", {
  value: "${aws_iam_role.docker_machine.name}",
  description: "Name of the role used for the docker machine runners.",
});
new cdktf.TerraformOutput(this, "runner_sg_id", {
  value: "${aws_security_group.docker_machine.id}",
  description:
    "ID of the security group attached to the docker machine runners.",
});

