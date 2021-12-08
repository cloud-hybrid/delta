import Process from "process";

import Data from "./src/index.js";

const Normalized = JSON.stringify(Data, null, 4);

Process.stdout.write(Normalized + "\n");