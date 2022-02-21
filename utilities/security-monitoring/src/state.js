import { Command } from "./subprocess.js";

const Export = () => {
    const Data = Command("terraform show --json");

    const Serial = JSON.parse(Data);

    console.debug("[Debug] State (Object)" + ":", Serial, "\n");

    const State = JSON.stringify(Serial, null, 4);

    return State;
}

export { Export };

export default Export;