import { Controller } from "./controller.js";

import { Normalize } from "./../../../utilities/configuration.js";

import { default as User } from "./../../../database/model/user/index.js";

import { Generate } from "./api.js";

Controller.get("/", async (request, response) => {
    const Profile = await User.findOne({Username: "Administrator"});
    const $ = await Generate(Profile, "Kn0wledge!");

    const Query = Normalize(request, response, $);
    const Response = Query.toJSON();

    console.debug("[Debug]", "Request" + " " + "-", request.originalUrl);
    console.debug("[Debug]", "Response" + ":", JSON.stringify({Username: "Administrator", Query: Profile, Result: $}, null, 4));

    response.send(Response);
});

export default Controller;
