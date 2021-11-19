import * as Library from "./../library/index.js";

const URI = "mongodb://localhost:27017";

export const Connection = async () => {
    try {
        await Library.ORM.connect(URI, {
            useNewUrlParser: true,
            dbName: "Nexus-Dashboard",
            maxPoolSize: 10,
            keepAlive: true,
            autoIndex: true,
            appName: process.env["Server"] || "Nexus-API"
        });

        console.debug("[Debug]", "Successfully Established Connection to Database");
    } catch ( error ) {
        console.error("[Error]", "Fatal Error While Establishing Connection to Database", error);
        console.error("[Error]", "Exiting ...");

        throw error;
    }
};

export default Connection;
