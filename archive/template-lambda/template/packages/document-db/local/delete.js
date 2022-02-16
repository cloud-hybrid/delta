/***
 * @example
 * ```bash
 * #!/bin/bash --norc
 *
 * set -eo pipefail
 *
 * sam delete --debug --config-file configuration/samconfig.toml
 *
 * [[ "${?}" == "0" ]] && rm -f .stack || true
 *
 * exit ${?}
 * ```
 */

const Path = require("path");
const Subprocess = require("child_process");

Subprocess.execSync(["sam", "delete", "--debug", "--config-file", Path.join(__dirname, "..", "configuration", "samconfig.toml")].join(" "), { stdio: "inherit", shell: false });

process.exit(0);