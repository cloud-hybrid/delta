import { API } from "library";
const Application = API();

function Server (): typeof Application {
    return Application;
}

export { Application, Server };

export default Server;