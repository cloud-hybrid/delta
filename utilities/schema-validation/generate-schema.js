// main.js

import Path from "path";
import TSJ from "ts-json-schema-generator";
import FS from "fs";

/*** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
    path: Path.join(process.cwd(), "src", "input.type.ts"),
    tsconfig: Path.join(process.cwd(), "tsconfig.json"),
    jsDoc: "extended", expose: "all", additionalProperties: true, encodeRefs: false, skipTypeCheck: false, strictTuples: true, sortProps: true,
    type: "*" // Or <type-name> if you want to generate schema for that one type only
};

const output_path = "test.schema.json";

const schema = TSJ.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 4);
FS.writeFile(output_path, schemaString, (err) => {
    if (err) throw err;
});
