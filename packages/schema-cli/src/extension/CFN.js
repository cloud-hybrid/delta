const URL = {
    Ohio: "https://schema.cloudformation.us-east-2.amazonaws.com/CloudformationSchema.zip"
};

import https from "https";
import fs from "fs";

export const Configuration = (host, path, method = "GET", port = 443) => {
    return {
        host: host,
        port: port,
        path: path,
        method: method,
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    };
};

const Settings = Configuration("schema.cloudformation.us-east-2.amazonaws.com", "/CloudformationSchema.zip");

var download = function (url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = https.get(Settings, function (response) {
        response.pipe(file);
        file.on("finish", function () {
            file.close(cb);  // close() is async, call cb after close completes.
        });
    });
};

const Log = ($) => {
    console.log($ || "Complete");
};

download(URL.Ohio, "Test.zip", Log);