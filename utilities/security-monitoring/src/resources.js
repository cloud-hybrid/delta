import { Command } from "./subprocess.js";

const Objects = Command("terraform state list").split("\n");

console.debug("[Debug] TF-Defined Resources" + ":", Objects, "\n");

export {Objects};

export default Objects;