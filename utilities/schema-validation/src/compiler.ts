import AJV from "ajv";

const Compiler = new AJV({
    allErrors: true,
    verbose: true,
    strict: true,
    allowUnionTypes: true,
    allowMatchingProperties: true,
    validateFormats: true
});

export { Compiler };

export default Compiler;