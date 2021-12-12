/***
 * @name        Installer
 * @module      @cloud-technology
 * @summary     .....
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 *
 * @package     {@link https://github.com/cloud-hybrid/delta @cloud-technology}
 *
 */

import FS from "fs";
import OS from "os";
import Path from "path";
import Child from "child_process";

import Process from "process";

export default () => {
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
};

export const Install = (directory) => {
    const Packages = Path.resolve(".", directory);

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
};

export const System = (directory) => {
    const Packages = Path.resolve(directory);

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
};
