// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
"use strict";

import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

import { default as Paths } from "./File-System.js";

import * as Resolve from "resolve";

/***
 * Compatability Replacement for `URI` (Commonjs)
 *
 * @type {string}
 *
 * @constructor
 *
 * @example
 * >>> const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 */

const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");

/***
 * Compatability Replacement for `require` (Commonjs)
 *
 * @type {NodeRequire}
 *
 * @constructor
 *
 * @example
 * >>> const Import = Module.createRequire(URI());
 * >>> const Package = Import("package.json");
 *
 */

const Import = Module.createRequire(URI());

/**
 * Get additional module paths based on the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */
function getAdditionalModulePaths(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return "";
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
    // the default behavior.
    if ( Path.relative(Paths.appNodeModules, baseUrlResolved) === "" ) {
        return null;
    }

    // Allow the user set the `baseUrl` to `appSrc`.
    if ( Path.relative(Paths.appSrc, baseUrlResolved) === "" ) {
        return [Paths.appSrc];
    }

    // If the path is equal to the root directory we ignore it here.
    // We don't want to allow importing from the root directly as source files are
    // not transpiled outside of `src`. We do allow importing them with the
    // absolute path (e.g. `src/Components/Button.js`) but we set that up with
    // an alias.
    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return null;
    }

    // Otherwise, throw an error.
    throw new Error("Your project's `baseUrl` can only be set to `src` or `node_modules`." +
        " Create React App does not support other values at this time."
    );
}

/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getWebpackAliases(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return {};
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return {
            src: Paths.appSrc
        };
    }
}

/**
 * Get jest aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getJestAliases(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return {};
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return {
            "^src/(.*)$": "<rootDir>/src/$1"
        };
    }
}

function getModules() {
    // Check if TypeScript is setup
    const hasTsConfig = FS.existsSync(Paths.appTsConfig);
    const hasJsConfig = FS.existsSync(Paths.appJsConfig);

    if ( hasTsConfig && hasJsConfig ) {
        throw new Error(
            "You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file."
        );
    }

    let config;

    // If there's a tsconfig.json we assume it's a
    // TypeScript project and set up the config
    // based on tsconfig.json
    if ( hasTsConfig ) {
        const ts = Import(Resolve.sync("typescript", {
            basedir: Paths.appNodeModules
        }));
        config = ts.readConfigFile(Paths.appTsConfig, ts.sys.readFile).config;
        // Otherwise we'll check if there is jsconfig.json
        // for non TS projects.
    } else if ( hasJsConfig ) {
        config = Import(Paths.appJsConfig);
    }

    config = config || {};
    const options = config.compilerOptions || {};

    const additionalModulePaths = getAdditionalModulePaths(options);

    return {
        additionalModulePaths: additionalModulePaths,
        webpackAliases: getWebpackAliases(options),
        jestAliases: getJestAliases(options),
        hasTsConfig
    };
}

export { getModules };

export default getModules;