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
import Process from "process";
import Child from "child_process";

import { Packages } from "./Walker.js";
import { default as Root } from "./Git-Directory-Subprocess.js";

/***
 * Compatability (ESM) Replacement for `__dirname` (Common-JS)
 *
 * @type {function(): string}
 * @constructor
 *
 * @example
 *
 * const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 * >>> "index.js"
 *
 */

const URI = (): string => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());

/*** Mono-Repository or otherwise Root Git Directory */
const Mono: { Data: BufferConstructor; Error: Error | null; Status: Number } = await Root();

/*** Current Working Directory */
const CWD: string = Directory();

const Resolve = () => Path.dirname(Process.env["_"]);

const NPM = (OS.platform().startsWith("win")) ? "npm.cmd" : "npm"; // Path.join(Resolve(), "npm");

/***
 *
 * @param {string} target
 *
 * @return {ChildProcess}
 *
 * @constructor
 *
 */

const Spawn = (target: string) => Child.spawn(NPM, ["i"], {
    env: Process.env,
    cwd: target,
    stdio: "inherit",
});

/***
 *
 * ...
 *
 * @param {{Data: BufferConstructor, Error: Error | null, Status: Number}} target
 *
 * @return {ChildProcess}
 *
 * @constructor
 *
 */

const Setup = (target: string) => {
    const CWD = Process.cwd();

    Process.chdir(target);
    Child.spawnSync("npm", ["i"], {
        cwd: Process.cwd(),
        stdio: "ignore",
    });

    const Output = Child.spawnSync("npm", ["run", "setup"], {
        cwd: Process.cwd(),
        stdio: "pipe",
    });

    Process.chdir(CWD);

    const Buffer = Output.output.filter(($) => $ !== null);
    const Data = Buffer.toString().trim().split("\n").pop();
    const Packages = Data.match(/(\d+)/);

    console.debug("[Debug] Successfully Installed" + " " + Packages[0] + " " + "Packages");
};

const Package = () => {
    const Packages = Path.resolve(".", "packages");

    Spawn(Process.cwd());

    FS.readdirSync(Packages).forEach(($) => {
        const Target = Path.join(Packages, $);

        if (!FS.existsSync(Path.join(Target, "package.json"))) {
            return;
        }

        Spawn(Target);
    });
};

const Install = (directory: FS.PathLike) => {
    const CWD = Process.cwd();

    Process.chdir(String(directory));
    Spawn(Process.cwd());
    Process.chdir(CWD);
};

const System = (directory: FS.PathLike) => {
    const Packages = Path.resolve(String(directory));

    Spawn(Process.cwd());

    FS.readdirSync(Packages).forEach(($) => {
        const Target = Path.join(Packages, $);

        if (!FS.existsSync(Path.join(Target, "package.json"))) {
            return;
        }

        Spawn(Target);
    });
};

const Repository = async () => {
    const Target = await Mono?.Data?.toString();

    (Target) && Setup(Target);
};

export { Install, Package, System, Repository };

export default Install;
