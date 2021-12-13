import * as Assertion from "assert";

import { default as ANSI } from "./ANSI.js";

const Options = [
    "▓", "▒", "█", "░"
];

function Progress(stream, width) {
    this.cursor = ANSI(stream);
    this.delta = this.cursor.newlines;
    this.width = width;
    this.open = "▌";
    this.close = "▐";
    this.complete = Options[0];
    this.incomplete = Options[1];

    this.progress = 0;
}

// ... const Class = new Proxy(Progress, {
// ...     get, set,
// ...     construct: Object.create(Progress, {
// ...         ... () => Object.defineProperty({
// ...             configurable: true,
// ...             enumerable: true
// ...         })
// ...     })
// ... });
//
// console.log(Class);

Object.defineProperty(Progress.prototype, "progress", {
    get, set, configurable: true, enumerable: true
});

function get() { return this.status; }

function set(value) {
    this.status = Math.max(0, Math.min(value, 100));

    let w = this.width - this.complete.length - this.incomplete.length,
        n = w * (this.status / 100) | 0,
        i = w - n,
        com = c(this.complete, n),
        inc = c(this.incomplete, i),
        delta = this.cursor.newlines - this.delta;

    Assertion.equal(com.length + inc.length, w);

    if ( delta > 0 ) {
        this.cursor.up(delta);
        this.delta = this.cursor.newlines;
    }

    this.cursor
        .horizontalAbsolute(0)
        .eraseLine(2)
        .fg.white()
        .write(this.open)
        .fg.grey()
        .bold()
        .write(com)
        .reset()
        .write(inc)
        .fg.white()
        .write(this.close)
        .fg.reset()
        .write("\n");

    this.cursor.flush();
}

function c(char, length) {
    return Array.apply(null, Array(length)).map(function () {
        return char;
    }).join("");
}

const Prefix = "Progress" + ":" + " ";
const Unit = "%";
const Line = "\n";

const width = parseInt(process.argv[2], 10) || 15 || process.stdout.getWindowSize()[0] / 4;

const p = new Progress(process.stdout, width);

export const Main = () => (function $() {
    p.progress += Math.random() * 5;

    const percent = p.progress.toFixed(1);

    p.cursor
        .eraseLine()
        .write(Prefix)
        .bold()
        .write(percent)
        .reset()
        .write(Unit)
        .write(Line);

    p.cursor.flush();

    const Tick = (p.progress < 100) ? () => setTimeout(() => process.nextTick($), 100)
        : process.exit(0);

    setImmediate(Tick);
})();

await Main();