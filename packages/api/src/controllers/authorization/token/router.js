import { Controller } from "./controller.js";

import { Normalize } from "./../../../utilities/configuration.js";

import { Validate } from "./api.js";

Controller.get("/", async (request, response) => {
    const $ = await Validate("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjYxOTg1NDlmMjRmY2YxMDI2NmMyYzQxOCIsImlhdCI6MTYzNzQ2NjQ1NywiZXhwIjoxNjM3NTUyODU3fQ.ZlyZLI83wrfigWf6j0YMvjuLldsHHpV7AMG4ctYptao");

    const Query = Normalize(request, response, $);
    const Response = Query.toJSON();

    console.debug("[Debug]", "Request" + " " + "-", request.originalUrl);
    console.debug("[Debug]", "Response" + ":", $);

    response.send(Response);
});

export default Controller;
