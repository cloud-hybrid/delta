/*****
 *
 * @type {{CWD: string, Configuration: string, Version: string, Local: string, Name: string}}
 *
 */

const Data = {
    Name: process.env.npm_package_name,
    Local: process.env.npm_config_local_prefix,
    CWD: process.env.INIT_CWD,
    Configuration: process.env.npm_package_json,
    Version: process.env.npm_package_version
};

/*****
 *
 * @type {string[]}
 *
 */

export const Callable = [
    "package"
];

/*****
 *
 * @type {(string|*[])[]}
 *
 */

export const Command = [
    ... Callable, []
];

export default Data;