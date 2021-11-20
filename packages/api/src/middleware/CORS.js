import Library from "./../library/index.js";
import { Application } from "./../index.js";

export const Options = {
    origin: "*",
    credentials: false,
    optionsSuccessStatus: 200,
    preflightContinue: true
};

const Middleware = Library.CORS(Options);

Application.use(Middleware);

export const CORS = () => Application;