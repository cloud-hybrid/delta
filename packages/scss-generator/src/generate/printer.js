import prettier from "prettier";

const prettierOptions = {
    parser: "scss",
    printWidth: 80,
    singleQuote: true,
    trailingComma: "es6",
    proseWrap: "always"
};

function createPrinter(definitions) {
    let buffer = [];
    let indentLevel = 0;

    const printer = {
        append(string) {
            buffer.push(string);
        },

        blockStart(character = "{") {
            printer.token(character);
            indentLevel++;
            printer.newline();
        },

        blockEnd(character = "}") {
            indentLevel--;
            printer.newline();
            printer.token(character);
        },

        get() {
            return prettier.format(buffer.join(""), prettierOptions);
        },

        maybeNewline() {
            if ( buffer[buffer.length - 1] !== "\n" ) {
                printer.newline();
            }
        },

        newline() {
            buffer.push("\n");
            buffer.push(padLeft(indentLevel));
        },

        print(node, parent) {
            definitions[node.type].generate(printer, node, parent);
        },

        space() {
            buffer.push(" ");
        },

        token(characters) {
            return buffer.push(characters);
        }
    };

    return printer;
}

function padLeft(level) {
    return "  ".repeat(level);
}

export default createPrinter;