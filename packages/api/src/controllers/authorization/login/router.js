import { Controller } from "./controller.js";

import { Normalize, Reject } from "./../../../utilities/configuration.js";

import { default as User } from "./../../../database/model/user/index.js";

import { Generate } from "./api.js";

Controller.get("/", async (request, response) => {
    const Profile = await User.findOne({Username: "Administrator"});

    try {
        const $ = await Generate(Profile, "Kn0wledge!");

        const Query = Normalize(request, response, $);
        const Response = Query.toJSON();

        console.debug("[Authorization (Login)]", "[Debug]", "Request" + ":", JSON.stringify({
            Request: {
                URL: request.originalUrl,
                Headers: request.headers,
                Body: request?.body || null,
                Method: request.method,
                Cookies: {
                    $: request.cookies || null,
                    Signed: request.signedCookies || null
                }
            }
        }, null, 4));

        console.debug("[Authorization (Login)]", "[Debug]", "Response" + ":", JSON.stringify({
            Response: {
                Body: JSON.parse(Response),
                Headers: response.getHeaders()
            }
        }, null, 4));

        response.statusMessage = "Authorized";

        response.send(Response);
    } catch ( e ) {
        console.debug("[Authorization (Login)]", "[Error]", JSON.stringify({Query: {... Profile.toJSON(), ... {Password: "[Redacted]"}}}, null, 4));

        const Query = Reject(request, response, {
                Message: "Incorrect Username or Password",
                Error: "Bad Authentication Attempt",
                Realm: "Nexus",
                Status: 401
            }, {"WWW-Authenticate": "Realm Nexus-JWT-Validator"},
            401, "Unauthorized"
        );

        const Response = Query.toJSON();

        console.debug("[Authorization (Login)]", "[Error]", "Request" + ":", JSON.stringify({
            Request: {
                URL: request.originalUrl,
                Headers: request.headers,
                Body: request?.body || null,
                Method: request.method,
                Cookies: {
                    $: request.cookies || null,
                    Signed: request.signedCookies || null
                }
            }
        }, null, 4));

        console.debug("[Authorization (Login)]", "[Error]", "Response" + ":", JSON.stringify({
            Response: {
                Body: JSON.parse(Response),
                Headers: response.getHeaders()
            }
        }, null, 4));

        response.send(Response);
    }
});

export default Controller;
