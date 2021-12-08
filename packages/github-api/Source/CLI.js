const Runtime = process;

import * as Reader from "readline";

import * as Users from "github-api/Source/Users.js";
import * as Package from "github-api/Source/Package.js";
import * as Repositories from "github-api/Source/Repositories.js";
import * as CLI from "github-api/Source/CLI.js";

/*****
 *
 * @param input
 * @param _
 * @constructor
 *
 */

const Usage = (input, _) => {
    _(null, [[
        ... Users.Callable,
        ... Repositories.Callable,
        ... Package.Callable
    ], input]);
};

/*****
 *
 * @returns {Promise<void>}
 * @constructor
 *
 */

const Prompt = async () => {
    const Input = Reader.createInterface({
        input: process.stdin,
        output: process.stdout,
        removeHistoryDuplicates: true,
        terminal: true,
        completer: await Usage,
        prompt: "[API]: "
    });

    Input.prompt();

    Input.on("line", async (stream) => {
        const CWD = Runtime.cwd();
        const Variables = Runtime.env;

        switch (stream.trim()) {
            case "":
                Runtime.stdout.write(["  ↳ Error: Invalid Input", " ",
                    "(\"", stream.trim(), "\")",
                        "\n", "\n"
                ].join(""));

                break;
            default:
                let $;

                try {
                    $ = {
                        Users: (await Users.Main(stream.trim())).Users,
                        Repositories: (await Repositories.Main(stream.trim())).Repositories,
                        Package: Package.default
                    };
                } catch (error) {
                    console.error(error);

                    const Error = {
                        Response: error.status,
                        Message: error.response.data.message
                    };

                    if (Error.Response === 401) Runtime.stdout.write([
                        "  ↳ Error: Bad Token Entry", " ",
                            "(\"", stream.trim(), "\")",
                                "\n", "\n"
                    ].join(""))

                    break;
                }

                console.log("Data" + ":", $, "\n");

                /// @Task: console.debug("Response Written to Data.json", "\n");

                break;

        }

        Input.prompt();
    }).on("close", () => {
        console.debug("(SIGTERM)", "...");
        console.debug("  ↳ Exit (0)");
        console.debug("");

        process.exit(0);
    });
};

export const Main = async () => {
    await Prompt();
};


