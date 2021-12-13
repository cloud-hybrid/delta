import * as AJV from "ajv";

const Compiler = new AJV.default({
    allErrors: true,
    verbose: true,
    strict: "log",
    allowUnionTypes: true,
    allowMatchingProperties: true
});

export { Compiler };

export default Compiler;