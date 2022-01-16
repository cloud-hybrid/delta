#!/usr/bin/env node

import Path from "path";
import Module from "module";

/*** *Current Module Path* */
const CWD = Path.dirname(import.meta.url.replace( "file" + ":" + "//", "" ));
const Package = Path.dirname(CWD);
const Import = Module.createRequire( Package );

const Subprocess = await import("child_process");

/*** @param command {string} - Command as String for Shell Inherited Execution */
const Execute = (command) => {
    Subprocess.execSync(command, {
        env: process.env,
        shell: process.env["SHELL"] ?? null,
        encoding: "utf-8",
        stdio: "inherit"
    });
};

export { Execute, Import, Package };

export default Execute;