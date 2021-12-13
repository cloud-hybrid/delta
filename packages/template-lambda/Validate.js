import FS from "fs";
import Path from "path";
import Module from "module";

import { Compiler } from "./src/Schema/library/compiler.js";

/***
 * Compatability Replacement for `URI` (Commonjs)
 *
 * @type {string}
 *
 * @constructor
 *
 * @example
 * >>> const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 */

const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");

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

const Schema = Import("./template/package.template.schema.json");
const Package = Import("./template/package.template.json");

const Validate = {
    Base: Compiler.compile(Schema)
};

const Errors = [];
const Configuration = ($) => {
    const Valid = Validate.Base($);
    const Schema = Validate.Base.schema;
    const Invalidations = JSON.stringify(Validate.Base?.errors, null, 4) || null;

    Validate?.Base.errors.forEach(($) => {
        Errors.push({
            Errors: JSON.parse(Invalidations),
            Context: $.instancePath,
            Message: $.message,
            Input: $.data,
            $
        });
    });

    return {
        Valid, Schema, Errors
    };
};

console.log(Configuration(Package));