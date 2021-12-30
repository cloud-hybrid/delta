/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

import { Install, Repository } from "./Installer.js";

/***
 * Compatability (ESM) Replacement for `__dirname` (Common-JS)
 *
 * @type {function(): string}
 * @constructor
 *
 * @example
 *
 * const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 * >>> "index.js"
 *
 */

const URI = (): string => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());

/*** Current Working Directory */
const CWD: string = Directory();

/*** CI Directory */
const CID: string = Path.resolve(Path.dirname(CWD));

/*** Package Directory */
const PKD: string = Path.resolve(Path.dirname(CID));

const Directories = FS.statSync(PKD);

/***
 * Compatability (ESM) Replacement for `require` (Common-JS)
 *
 * @type {NodeRequire}
 * @constructor
 *
 * @example
 *
 * const Import = Module.createImport(URI());
 * const Package = Import("package.json");
 *
 * >>> { "name": "@organization/example", "version": "0.0.1", "...": "..." }
 *
 */

const Import = Module.createRequire(URI());