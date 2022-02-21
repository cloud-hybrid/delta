/***
 * @copyright
 */
//
//const Require = Module.createRequire(import.meta.url);
//
//Reflect.set(Environment.Process, "package", Require("./package.json"));
export default await import("./src").then(($) => $.Server());
await import("./src/server");
