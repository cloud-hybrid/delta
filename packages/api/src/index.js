import { API } from "@cloud/library";
const Application = API();
function Server() {
    return Application;
}
export { Application, Server };
export default Server;
