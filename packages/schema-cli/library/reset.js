/***
 * @name        Schema-Reset
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

const Import = Module.createRequire(import.meta.url);
const Source = Process.env.npm_package_json;

export const Template = Import("./package.template.json");

export const Write = (source) => {
    FS.writeFileSync(source, JSON.stringify(Template, null, 4));
};

export default Template;
