import * as Library from "./../library/index.js";

Library.ORM.set("autoIndex", false);

await import("./server.js").then(async (Module) => await Module.Connection());

export const ORM = Library.ORM;
export const Schema = ORM.Schema;
export const Types = ORM.Types;

export const Cryptography = Library.Cryptography;

export default ORM;

