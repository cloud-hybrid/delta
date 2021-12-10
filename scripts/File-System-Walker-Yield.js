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
 * @example
 * >>> import { default as Walk } from "Walker.js";
 * >>> const Descriptors = Walk();
 * >>> console.log(Descriptors);
 * >>> process.exit(0);
 *
 */

import FS from "fs";
import Path from "path";
import Process from "process";

/***
 *
 * @param directory {String}
 * @return {any}
 *
 */

export function * Walk(directory) {
    const files = FS.readdirSync(directory, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield * Walk(Path.join(directory, file.name));
        } else {
            yield Path.join(directory, file.name);
        }
    }
}

for (const $ of Walk(Process.cwd())) console.log($);

export default Walk;
