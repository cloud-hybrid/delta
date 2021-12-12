/***
 * @name        NPM-Package-Assertion
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
import Module from "module";
import Process from "process";
import Assertion from "assert";

const Message = new Error("");

Assertion.equal((Process.env["npm_package_json"] !== null), true);

const Import = Module.createRequire(import.meta.url);
const Source = Process.env.npm_package_json;

const Template = Import(Process.env["npm_package_json"]);

FS.writeFileSync(Source, JSON.stringify(Template, null, 4));

Process.exit(0);
