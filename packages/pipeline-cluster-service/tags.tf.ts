const agentTags =
  '${merge(\n    {\n      "Name" = format("%s", local.name_runner_agent_instance)\n    },\n    {\n      "Environment" = format("%s", var.environment)\n    },\n    var.tags,\n    var.agent_tags\n  )}';
const tags =
  '${merge(\n    {\n      "Name" = format("%s", var.environment)\n    },\n    {\n      "Environment" = format("%s", var.environment)\n    },\n    var.tags,\n  )}';

