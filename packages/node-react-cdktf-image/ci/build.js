#!/usr/bin/env node

import Path from "path";
import Process from "process";
import Subprocess from "child_process";

const CWD = Process.cwd();

import { Execute, Package } from "./index.js";

export {};

export default {};

await import("./local.js");
await import("./generate.js");

Process.chdir(Path.join(Package, "front-end-2"));

Subprocess.spawnSync("npm install --no-audit --no-funding", {
    env: process.env,
    shell: process.env["SHELL"] ?? null,
    encoding: "utf-8",
    stdio: "inherit"
});

Subprocess.spawnSync("npm run build", {
    env: process.env,
    shell: process.env["SHELL"] ?? null,
    encoding: "utf-8",
    stdio: "inherit"
});

Process.chdir(Package);

Execute("npm run build");

Process.chdir(CWD);