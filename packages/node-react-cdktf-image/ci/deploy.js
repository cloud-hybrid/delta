#!/usr/bin/env node

import Process from "process";

const CWD = Process.cwd();

import { Execute, Package } from "./index.js";

export {};

export default {};

await import("./local.js");
await import("./generate.js");
await import("./build.js");

await import("./../compilation/src/index.js");

Execute("cdktf deploy --auto-approve");