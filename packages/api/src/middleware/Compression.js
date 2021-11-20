import Library from "./../library/index.js";

import { Application } from "./../index.js";

const Compression = Library.Compression;

Application.use(Compression());

export const Compression = () => Application;