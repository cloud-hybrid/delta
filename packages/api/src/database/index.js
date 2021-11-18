import * as Library from "./../library/index.js";

Library.ORM.set("autoIndex", false);

export const ORM = Library.ORM;
export const Schema = ORM.Schema;
export const Types = ORM.Types;

/***
 *
 * @param name {String}
 * @param schema {Schema}
 * @param collection {String}
 * @param skipInit {Boolean}
 *
 * @returns {Model}
 *
 * @constructor
 *
 */

export const Model = (name, schema, collection, skipInit) => ORM.model(name, schema, collection, skipInit);

await Library.ORM.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
    dbName: "Nexus-Dashboard",
    maxPoolSize: 10,
    keepAlive: true,
    autoIndex: true,
    appName: process.env["Server"] || "Nexus-API"
}, ((error) => {
    if ( error ) {
        console.error("[Error]", "Fatal Error While Establishing Connection to Database", error);
        console.error("[Error]", "Exiting ...");
        process.exit(1);
    } else {
        console.debug("[Debug]", "Successfully Established Connection to Database");
    }
}));

export default Library.ORM;