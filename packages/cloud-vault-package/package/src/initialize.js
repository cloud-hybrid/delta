import FS from "fs";

import { default as Git } from "./Git/Module.js";
import { default as Package } from "./Package/Module.js";

console.debug(JSON.stringify(Package, null, 4));
console.debug(JSON.stringify(Git, null, 4));
