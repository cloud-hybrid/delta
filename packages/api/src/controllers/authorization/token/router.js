import { Controller } from "./controller.js";

import { Normalize } from "./../../../utilities/configuration.js";

import { Validate } from "./api.js";

Controller.post("/", async (request, response) => {
    const Token = request.body["Token"] || request.body["token"] || null;

    if ( Token === null ) {
        response.statusCode = 422;
        response.shouldKeepAlive = false;
        response.statusMessage = "JWT Malformation";

        response.setHeader("WWW-Authenticate", "Realm Nexus-JWT-Validator");
        response.type("Application/JSON");

        response.send(JSON.stringify({
            Message: "JWT Required as Input",
            Error: "JWT",
            Realm: "Nexus",
            Status: 401
        }, null, 4));
    } else {
        try {
            const $ = await Validate(Token);
            console.log($);
        } catch ( e ) {
            console.log(e);
        }
        const $ = await Validate(Token);

        const Query = Normalize(request, response, $);
        const Response = Query.toJSON();

        console.debug("[Authorization (Token)]", "[Debug]", "Request" + " " + "-", request.originalUrl);
        console.debug("[Authorization (Token)]", "[Debug]", "Response" + ":", $);

        if ( $.Verification === false || $.Error === true ) {
            switch ( $.Type ) {
            case null:
                response.statusCode = 500;
                response.statusMessage = "Server Error";

                break;
            default:
                response.statusCode = 401;
                response.statusMessage = "Unauthorized";

                response.setHeader("WWW-Authenticate", "Realm Nexus-JWT-Validator");

                break;
            }
        } else {
            response.statusMessage = "Verified";
        }

        response.send(Response);
    }
});

export default Controller;
