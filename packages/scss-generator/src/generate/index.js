import { Definitions as definitions } from "./../types/index.js";

import { default as createPrinter } from "./printer.js";

function generate(ast) {
    const printer = createPrinter(definitions);

    printer.print(ast);

    return {
        code: printer.get()
    };
}

module.exports = {
    generate
};