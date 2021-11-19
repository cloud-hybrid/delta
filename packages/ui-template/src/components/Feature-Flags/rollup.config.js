/***
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates.
 *
 * @package     {@link https://github.com/cloud-hybrid/delta @cloud-technology}
 */

import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import stripBanner from "rollup-plugin-strip-banner";

const BANNER = [
    "/***",
    " * @author      Jacob B. Sanders",
    " * @license     BSD 3-Clause License",
    " * @copyright   Cloud-Technology LLC. & Affiliates.",
    " *",
    " * @package     {@link https://github.com/cloud-hybrid/delta @cloud-technology}",
    "*/"
].join("\n");

const baseConfig = {
    external: [],
    plugins: [
        resolve(),
        babel({ babelHelpers: "bundled" }),
        stripBanner(),
        {
            renderChunk(code) {
                return `${ BANNER }\n${ code }`;
            }
        }
    ]
};

export default [
    {
        ... baseConfig,
        input: path.join(__dirname, "./src/index.js"),
        output: {
            file: "es/index.js",
            format: "esm"
        }
    },
    {
        ... baseConfig,
        input: path.join(__dirname, "./src/index.js"),
        output: {
            file: "lib/index.js",
            format: "commonjs"
        }
    }
];