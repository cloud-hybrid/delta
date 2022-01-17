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

Process.chdir(Path.join(Package, "front-end"));

Subprocess.execSync("npm install --no-audit --no-funding", { stdio: "inherit" });
Subprocess.execSync("npm run build", { stdio: "inherit" });

Process.chdir(Package);

Execute("npm run build");

Process.chdir(CWD);