import * as Library from "./../library/index.js";

Library.ORM.set("autoIndex", false);

export const ORM = Library.ORM;
export const Schema = ORM.Schema;
export const Types = ORM.Types;

export const Model = Library.ORM.model;

await Library.ORM.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
    dbName: "Nexus-Dashboard",
    maxPoolSize: 10,
    keepAlive: true,
    autoIndex: true,
    appName: process.env["Server"] || "Nexus-API"
});

export default Library.ORM;