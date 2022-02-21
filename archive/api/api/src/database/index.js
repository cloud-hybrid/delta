import * as Library from "./../library/index.js";

export const Cryptography = Library.Cryptography;

Library.ORM.set("autoIndex", false);

await import("./server.js").then(async (Module) => await Module.Connection());

export const ORM = Library.ORM;
export const {Schema, Types} = ORM;

export default ORM;

