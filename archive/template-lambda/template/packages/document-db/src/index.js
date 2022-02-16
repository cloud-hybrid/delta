const { Response } = require("./module.js");

const Test = () => {
    return Response(JSON.stringify({Message: "Hello World"}, null, 4), 200, {});
};

console.log("Loading Function ...");

/**
 * Lambda Function Handler
 * ---
 *
 * @param   {import("@types/aws-lambda").APIGatewayEvent} event - The trigger event originating from AWS API-REST-Gateway
 * @param   {import("@types/aws-lambda").Context} context - The Lambda Function's request context
 *
 * @return  {Promise<Object>}
 *
 */
exports.handler = async (event, context) => {
    console.trace("[Trace] Invocation Context" + ":", JSON.stringify(context));

    return Test();
}