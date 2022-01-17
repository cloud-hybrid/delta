#!/usr/bin/env node

import Process from "process";

const CWD = Process.cwd();

import { Execute, Package } from "./index.js";

export {};

export default {};

await import("./local.js");
await import("./generate.js");

Process.chdir(Package);

Execute("npm run build");

Process.chdir(CWD);