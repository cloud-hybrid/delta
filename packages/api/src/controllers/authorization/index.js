import * as Library from "./../../library/index.js";

/// --> Utilities
import { Normalize } from "./../../utilities/configuration.js";

/// --> Controller(s)
import { default as Token } from "./token/index.js";
import { default as Login } from "./login/index.js";

/// --> Base Controller
const Controller = Library.Router();

/// --> Route(s)

Controller.use("/", Token);
Controller.use("/login", Login);

export default Controller;