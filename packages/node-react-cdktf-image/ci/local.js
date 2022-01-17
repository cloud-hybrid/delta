#!/usr/bin/env node

import Process from "process";

const CWD = Process.cwd();

import { Execute, Package } from "./index.js";

export {};

export default {};

Execute("npm install --save --quiet --user --save-dev --strict-peer-deps --no-audit --no-fund" + " " + Package);
