/***
 * @name        EC2 Utility
 * @package     @cloud-technology
 * @summary     ESM AWS Utilities
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import * as Path from "path";
import * as Module from "module";

/***
 * Compatability Replacement for `__dirname` (Commonjs)
 *
 * @type {function(): string}
 *
 * @constructor
 *
 * @example
 * >>> const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 */

const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());

const CWD = Directory();

/***
 * Compatability Replacement for `require` (Commonjs)
 *
 * @type {NodeRequire}
 *
 * @constructor
 *
 * @example
 * >>> const Import = Module.createImport(URI());
 * >>> const Package = Import("package.json");
 *
 */

const Import = Module.createRequire(URI());

const Configuration = Import(Path.join(CWD, "configuration", "Settings.json"));

export { Configuration, CWD };

export default { Configuration, CWD };
