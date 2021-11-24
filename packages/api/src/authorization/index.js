import { Token } from "./../library/index.js";

const Secret = await import("./../library/secret.js").then((Module) => Module.Secret);

export const Authenticate = (request, response, callback) => {
    const Header = request.headers.authorization;

    if ( Header ) {
        const JWT = Header.split(" ")[1];

        Token.verify(JWT, Secret, (error, user) => {
            if ( error ) {
                console.log(error);
                console.error("[Authorization (Middleware)]", "[Error]", JSON.stringify(error, null, 4));

                response.statusCode = 403;
                response.statusMessage = "Access-Denied";

                response.type("Application/JSON");
                return response.send(JSON.stringify({
                    Message: "Validation Failure",
                    Error: "Access-Denied",
                    Realm: "Nexus",
                    Status: 403
                }, null, 4));
            }

            response.statusMessage = "Verified";

            console.log("[Authorization (Middleware)]", "[Log]", "Successful JWT Validation" + ":", JSON.stringify(user, null, 4));

            callback();
        });
    } else {
        console.error("[Authorization (Middleware)]", "[Error]", "Unauthorized Access Attempt");

        response.statusCode = 401;
        response.statusMessage = "Unauthorized";

        response.setHeader("WWW-Authenticate", "Realm Nexus-JWT-Validator");

        response.type("Application/JSON");
        response.send(JSON.stringify({
            Error: "JWT",
            Realm: "Nexus",
            Status: 401
        }, null, 4));
    }
};