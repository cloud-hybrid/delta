import $ from "ajv";

export const Compiler = new $({
    allErrors: true, verbose: true, strict: "log"
});

export default Compiler;