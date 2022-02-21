# Schema Validation #

## Code Generation ##

Given any arbitrary JSON schema file, `schema.json`, code can be automatically generated via:

```bash
ajv compile -s schema.json -o validate-schema.js
```

or via node

```javascript
import FS                from "fs";
import Module            from "module";
import Path              from "path";
import Ajv               from "ajv";

import { default as Standalone } from "ajv/dist/standalone";

/*** ESM Resolver for *Current-Working-Directory* */
const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

/*** ESM Compatability & JSON Importer */
const Import = Module.createRequire(import.meta.url);

const schemaFoo = {
    $id: "#/definitions/Foo",
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        foo: {"$ref": "#/definitions/Bar"}
    }
}
const schemaBar = {
    $id: "#/definitions/Bar",
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        bar: {type: "string"},
    },
    "required": ["bar"]
}

// For ESM, the export name needs to be a valid export name, it can not be `export const #/definitions/Foo = ...;` so we
// need to provide a mapping between a valid name and the $id field. Below will generate
// `export const Foo = ...;export const Bar = ...;`
// This mapping would not have been needed if the `$ids` was just `Bar` and `Foo` instead of `#/definitions/Foo`
// and `#/definitions/Bar` respectfully
const ajv = new Ajv({schemas: [schemaFoo, schemaBar], code: {source: true, esm: true}})
let moduleCode = Standalone(ajv, {
    "Foo": "#/definitions/Foo",
    "Bar": "#/definitions/Bar"
})

// Now you can write the module code to file
FS.writeFileSync(Path.join(CWD, "validate-esm.mjs"), moduleCode)
```