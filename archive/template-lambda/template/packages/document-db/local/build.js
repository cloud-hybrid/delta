const FS = require("fs");
const Path = require("path");
const Subprocess = require("child_process");

const Pathing = require("./pathing");

process.chdir(Pathing.pkg);

FS.rm(Path.join(Pathing.pkg, ".aws-sam"), { force: true, recursive: true, maxRetries: 5 });

const Copy = require("./copy");

FS.mkdirSync(Path.join(Pathing.cid, "layer", "nodejs"), { recursive: true });

Subprocess.execSync(["npm", "install"].join(" "), { stdio: "inherit", shell: false });

FS.rm(Path.join(Pathing.cid, "layer", "nodejs", "node_modules"), { force: true, recursive: true, maxRetries: 5 });

Copy(Path.join(Pathing.pkg, "node_modules"), Path.join(Pathing.cid, "layer", "nodejs", "node_modules"));

Subprocess.execSync(["sam", "build", "--debug", "--config-file", Path.join(Pathing.pkg, "samconfig.toml"), "--template", Path.join(Pathing.pkg, "template.yml")].join(" "), { stdio: "inherit", shell: false });

process.exit(0);
