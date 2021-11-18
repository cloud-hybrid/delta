import FS from "fs";
import OS from "os";
import Path from "path";
import Child from "child_process";

import Process from "process";

const Packages = Path.resolve(".", "packages");

Child.spawn(OS.platform().startsWith("win") ? "npm.cmd" : "npm", ["i"], {
    env: Process.env,
    cwd: Process.cwd(),
    stdio: "inherit"
});

FS.readdirSync(Packages).forEach(($) => {
    const Target = Path.join(Packages, $);

    if ( !FS.existsSync(Path.join(Target, "package.json")) ) {
        return;
    }

    const CMD = OS.platform().startsWith("win") ? "npm.cmd" : "npm";
    Child.spawn(CMD, ["i"], {
        env: Process.env,
        cwd: Target,
        stdio: "inherit"
    });
});