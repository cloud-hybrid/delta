const API = require("./api.js");

console.log("Loading Function ...");
exports.handler = async (event, context) => {
    console.trace("[Trace] Invocation Context" + ":", JSON.stringify(context));
    return await API(event, context);
};

