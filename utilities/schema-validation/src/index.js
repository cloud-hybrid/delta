/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Schema Validation
 *
 * @license     BSD 2-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import Path from "path";
import Module from "module";
import { Compiler } from "./compiler.js";
//import { JSONSchemaType } from "ajv";
//
//import { JTDDataType, ValidateFunction } from "ajv/dist/jtd";
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
const $$$ = Import("./base.schema.json");
//type $Base = ValidateFunction<typeof $$$>;
//type $Configuration = ValidateFunction<typeof import("./configuration.schema.json")>;
//type $Package = ValidateFunction<typeof import("./package.schema.json")>;
const Base = Import("./base.schema.json");
const Configuration = Import("./configuration.schema.json");
const Package = Import("./package.schema.json");
//interface Validation {
//    Base: JSONSchemaType<$Base>;
//    Configuration: JSONSchemaType<$Configuration>;
//    Package: JSONSchemaType<$Package>;
//}
//type Types<$> = $ extends TType ? Type[$] : any;
// { Base: JTDSchemaType<typeof import("./base.schema.json")>, Configuration: JTDSchemaType<typeof import("./configuration.schema.json")> }
const validateBase = ($) => {
    const self = this || Base;
    console.log("[Log] Validation Data" + ":", $, "\n");
    const Validator = Compiler.compile(self);
    const Valid = Compiler.validate(Validator.schema, $);
    const Schema = JSON.stringify(Validator.schema, null, 4);
    const Errors = JSON.stringify(Validator?.errors, null, 4) || null;
    (Valid) ? console.log("[Log] Schema" + ":", self, "\n")
        : console.warn("[Warning]", "Validation: Unsuccessful", Validator?.errors?.map(($) => {
            return {
                Context: $.instancePath,
                Message: $.message,
                Input: $.data,
                $
            };
        }), "\n");
    console.log("[Log] Validation Result(s)" + ":", (Valid) ? "Successful" : "Unsuccessful");
};
const $ = {
    ID: "string",
    Comment: "hello world",
    Title: "null",
    Description: "Test",
    Source: null,
    References: null,
    Definitions: null,
    Documentation: null,
    Deprecated: null,
    Type: "Provider-Environment-Type",
    Resources: [{}]
};
validateBase($);
//# sourceMappingURL=index.js.map