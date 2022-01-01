import * as TTY from "tty";

const Hide = () => process.stdout.write("\x1b[?25l");
const Show = "\x1b[?25h";

const Spinner = [
    "┃ ●    ┃",
    "┃  ●   ┃",
    "┃   ●  ┃",
    "┃    ● ┃",
    "┃     ●┃",
    "┃    ● ┃",
    "┃   ●  ┃",
    "┃  ●   ┃",
    "┃ ●    ┃",
    "┃●     ┃"
];

let $ = 0;
const Handler = async () => setInterval(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    $ = ($ + 1) % Spinner.length;

    process.stdout.write("Installing" + " " + Spinner[$]);
}, 150);

export const Exit = ($) => {
    process.stdout.write(Show);

    process.exit($);
};

export default (TTY.isatty(process.stdin.fd))
    ? Hide() && Handler
    : () => null;
