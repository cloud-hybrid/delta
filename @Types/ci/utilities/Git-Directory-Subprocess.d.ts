/***
 *
 * System Relative Pathing Function
 *
 * Asynchronous function that uses native process spawning & `git` to calculate a relative root directory.
 *
 * @async
 * @constructor
 *
 * @typedef {{
 *     Data: BufferConstructor,
 *     Error: Error | null,
 *     Status: Number
 * }}
 *
 */
declare const Directory: () => Promise<{
    Data: BufferConstructor;
    Error: Error | null;
    Status: Number;
}>;
export { Directory };
export default Directory;
//# sourceMappingURL=Git-Directory-Subprocess.d.ts.map