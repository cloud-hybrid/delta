import * as AJV from "ajv";

export const Compiler = new AJV.default({
    allErrors: true, verbose: true, strict: "log", allowUnionTypes: true
});

export default Compiler;