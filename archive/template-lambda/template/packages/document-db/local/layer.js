const FS = require("fs");
const Path = require("path");
const Subprocess = require("child_process");
const Process = require("process");

const CWD = __dirname;
const CID = Path.dirname(CWD);
const PKG = Path.dirname(CID);

const Copy = require("./copy");

Process.chdir(PKG);

FS.mkdirSync(Path.join(CID, "distribution", "nodejs"), { recursive: true });

Subprocess.execSync(["npm", "install"].join(" "), { stdio: "inherit", shell: false });

FS.rm(Path.join(CID, "distribution", "nodejs", "node_modules"), { force: true, recursive: true, maxRetries: 5 });

Copy(Path.join(PKG, "node_modules"), Path.join(CID, "distribution", "nodejs", "node_modules"));

process.exit(0);