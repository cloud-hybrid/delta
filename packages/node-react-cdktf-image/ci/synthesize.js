#!/usr/bin/env node

import FS from "fs";
import Path from "path";
import Process from "process";
import Assertion from "assert";

import { Execute, Package, Name } from "./index.js";

import { Walker } from "./../compilation/src/utility/distribution.js";

/*** Ensures not to Write-Over the Local Development Repository or NPX Path (1) */
Assertion.notEqual(Process.cwd(), Package, "Process CWD Must be Different than Source");

await import("./local.js");
await import("./generate.js");
await import("./build.js");

await import("./../compilation/src/index.js");

const CWD = Process.cwd();

/*** Ensures not to Overwrite the Local Development Repository or NPX Path (2) */
Assertion.notEqual(CWD, Package, "Process CWD Must be Different than Source");

const Target = Path.join(Process.cwd(), Name);

const Distribution = new Walker(Target, false, [
    "tfstate",
    "manifest.json",
    "package-lock.json",
    ".git",
    ".npmignore",
    ".prettierignore",

], false);

Distribution.copy(Package, Target);

const CDK = JSON.parse(FS.readFileSync(Path.join(Package, "cdktf.json")));

CDK["app"] = "npx --ignore-existing --quiet ts-node@latest" + " " + Name + "/compilation/src/index.js";

CDK["projectId"] = null;

FS.writeFileSync(Path.join(CWD, "cdktf.json"), JSON.stringify(CDK, null, 4));

Process.chdir(Package);

/// Execute("npm run test");

Process.chdir(Target);

Execute("npm run synth");

Process.chdir(CWD);
