import { Controller } from "./controller.js";

import { Normalize } from "./../../../utilities/configuration.js";

import { Validate } from "./api.js";

Controller.get("/", async (request, response) => {
    const $ = await Validate("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWExODQwMGE2NDAyOTA0ZTQxZWRmNCIsImlhdCI6MTYzNzU0NzAwNiwiZXhwIjozMjc1MDk3NjEyLCJhdWQiOiJBdWRpZW5jZSIsImlzcyI6Iklzc3VlciJ9.Mk0SuJsbliibHeYFW3mZEcuT_AfHgxklmjjGcOLb0B0");

    const Query = Normalize(request, response, $);
    const Response = Query.toJSON();

    console.debug("[Debug]", "Request" + " " + "-", request.originalUrl);
    console.debug("[Debug]", "Response" + ":", $);

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
});

export default Controller;
