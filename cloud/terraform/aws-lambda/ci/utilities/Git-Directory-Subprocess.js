import OS from "os";
import Process from "process";
import { spawn as Spawn } from "child_process";
const Signals = OS.constants.errno;
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
const Directory = () => new Promise(async (resolve, reject) => {
    const $ = {
        Data: Buffer,
        Error: null,
        Status: -1,
    };
    /***
     *
     * Simple Lexical Parsing
     *
     * With standard-input closed from TTY stream(s), serialized
     * input parameters make for a better security-first approach
     * to sub-processing.
     *
     * @type {[string, string[]]}
     *
     */
    const Lexicon = [
        "git",
        ["rev-parse", "--show-toplevel"],
    ];
    const Subprocess = Spawn(Lexicon[0], Lexicon[1]);
    const Output = Subprocess.stdout;
    const Error = Subprocess.stderr;
    Output.on("data", async (_) => {
        let Allocation = 0;
        /*** Allocate an Array Buffer of (n + 1) Bytes */
        const Buffer = await _;
        for (const Chunk of new Array(Buffer[Symbol.asyncIterator])) {
            $.Data += await Chunk;
        }
        /*** Shift <-- Left to Release Empty Byte for String[0] */
        $.Data = Buffer.toString("UTF-8", Allocation - 1);
    });
    Error.on("data", async (_) => {
        let Allocation = 0;
        /*** Allocate an Array Buffer of (n + 1) Bytes */
        const Buffer = await _;
        new Array(Buffer[Symbol.iterator]).forEach((_) => (Allocation += 1));
        /*** Shift <-- Left to Release Empty Byte for String[0] */
        const Output = Buffer.toString("UTF-8", Allocation - 1);
        Process.stderr.write(Output);
        $.Status = Signals.ECANCELED;
    });
    Subprocess.on("error", (transmission) => {
        $.Error = transmission;
        resolve($);
    });
    Subprocess.on("close", (transmission) => {
        $.Status = $.Status === -1 ? 0 : $.Status;
        resolve($);
    });
});
console.log(await Directory());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0LURpcmVjdG9yeS1TdWJwcm9jZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2l0LURpcmVjdG9yeS1TdWJwcm9jZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFFOUIsT0FBTyxFQUFFLEtBQUssSUFBSSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFFbkM7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsTUFBTSxTQUFTLEdBQUcsR0FJZixFQUFFLENBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNsQyxNQUFNLENBQUMsR0FBOEQ7UUFDakUsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDYixDQUFDO0lBRUY7Ozs7Ozs7Ozs7T0FVRztJQUVILE1BQU0sT0FBTyxHQUF5QztRQUNsRCxLQUFLO1FBQ0wsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUM7S0FDbkMsQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakQsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFbkIsaURBQWlEO1FBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1lBQ3pELENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxLQUFLLENBQUM7U0FDekI7UUFFRCwwREFBMEQ7UUFDMUQsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLGlEQUFpRDtRQUNqRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUN0QyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRSxVQUFVLElBQUksQ0FBQyxDQUFFLENBQzdCLENBQUM7UUFFRiwwREFBMEQ7UUFDMUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUU7UUFDcEMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFFdkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sU0FBUyxFQUFFLENBQUMsQ0FBQyJ9