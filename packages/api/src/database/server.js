import * as Library from "./../library/index.js";

const URI = "mongodb://localhost:27017";

export const Connection = async () => {
    try {
        await Library.ORM.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "Authorization",
            maxPoolSize: 10,
            keepAlive: true,
            autoIndex: true,
            appName: process.env["Server"] || "Nexus-API"
        });

        console.debug("[Debug]", "Successfully Established Connection to Database");
    } catch ( error ) {
        console.trace("[Error]", "Fatal Error While Establishing Connection to Database", "\n", error);
        console.error("[Error]", "Exiting ...");

        /*** {@link https://github.com/cloud-hybrid/delta/tree/Development/packages/api# GitHub} */

        process.exit(172);
    }
};

export default Connection;
