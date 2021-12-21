/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import FS from "fs";
import Path from "path";
import Module from "module";

import Assertion from "assert";

import { Compiler } from "./compiler.js";

/*** ESM Resolver for *Current-Working-Directory* */
const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

/*** ESM Resolver for Package Directory relative to Current Working Directory */
const PKG = Path.dirname(CWD);

/*** ESM Resolver for Source Directory relative to the Current Working Directory */
const Source = Path.dirname(PKG);

/*** ESM Resolver for Schemas Directory relative to the Current Working Directory */
const Schemas = Path.dirname(Source);

/*** ESM Compatability & JSON Importer */
const Import = Module.createRequire(import.meta.url);

let Total = 0;
const Validations = [];
const Validate = {
    Base: Compiler.compile(Import("./base.json")),
    Configuration: Compiler.compile(Import("./configuration.json"))
};

const Configuration = ($) => {
    Total += 1;

    const Valid = Validate.Configuration($);
    const Schema = JSON.stringify(Validate.Configuration.schema, null, 4);
    const Errors = JSON.stringify(Validate?.errors, null, 4) || null;

    (Valid) ? console.debug("[Debug]", "Schema" + ":", Schema)
        : console.warn("[Warning]", "Validation: Unsuccessful", Validate.Configuration.errors.map(($) => {
            return {
                Context: $.instancePath,
                Message: $.message,
                Input: $.data,
                $
            };
        }));

    (Valid) && Validations.push(Schema);
};

const Base = ($) => {
    Total += 1;

    const Valid = Validate.Base($);
    const Schema = JSON.stringify(Validate.Base.schema, null, 4);
    const Errors = JSON.stringify(Validate?.errors, null, 4) || null;

    (Valid) ? console.debug("[Debug]", "Schema" + ":", Schema)
        : console.warn("[Warning]", "Validation: Unsuccessful", Validate.Base.errors.map(($) => {
            return {
                Context: $.instancePath,
                Message: $.message,
                Input: $.data,
                $
            };
        }));

    (Valid) && Validations.push(Schema);
};

Configuration({
    Organization: "Cloud-Technology",
    Environments: [
        "Development",
        "QA",
        "Staging",
        "UAT",
        "Production"
    ]
});

Base({
    ID: "ID",
    Title: "Title",
    Description: "Description",
    Type: "Cloud-Technology-Development-Database-API",
    Resources: {
        Test: {
            required: [
                "Name",
                "Status"
            ],
            properties: {
                "Name": {
                    "type": "string",
                    "minLength": 20,
                    "maxLength": 250
                },
                "Status": {
                    "type": "string",
                    "enum": [
                        "NOT_STARTED",
                        "CANCELLED"
                    ]
                },
                "Authors": {
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                }
            }
        }
    }
});

console.log("[Log]", "Valid Unit-Test(s)" + ":", Validations.length + "/" + Total);