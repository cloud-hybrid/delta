import AJV from "ajv";

const Compiler = new AJV({
    allErrors: false,
    verbose: false,
    strict: false,
    allowUnionTypes: true,
    allowMatchingProperties: true,
    validateFormats: false
});

export { Compiler };

export default Compiler;