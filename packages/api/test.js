import HTTP from "http";
import Utility from "util";

import Framework from "express";

const Application = Framework();
const Router = Framework.Router;

function extend(source, target) {
    target.prototype = Object.create(source.prototype);
    target.prototype.constructor = new Proxy(target, {
        construct: function (instance, properties) {
            const $ = Object.create(target.prototype);
            this.apply(instance, $, properties);
            return $;
        },
        apply: function (instance, composite, args) {
            source.apply(composite, args);
            instance.apply(composite, args);
        }
    });

    return target.prototype.constructor;
}

const Base = Router();

Base.get("/user/:name", async function (request, response, callback = null, name = null) {
    const $ = {
        Status: 200,
        Message: "Online",
        Type: "Application/JSON",
        Parameters: request.params
    };

    response.type($.Type);
    response.status($.Status);
    response.contentType($.Type);

    response.statusMessage = $.Message;

    // const Inspection = Utility.inspect(
    //     { request, response }, {
    //         showHidden: true,
    //         showProxy: true,
    //         getters: true,
    //         sorted: true,
    //         colors: true,
    //
    //         depth: 1
    //     });

    // console.log("Base Request, Response Inspection" + ":", Inspection, "\n");

    (callback) ? await callback() : await response.send();
});

const Inspection = Utility.inspect(Base.prototype, {
    showHidden: true,
    showProxy: true,
    getters: true,
    sorted: true,
    colors: true,

    depth: Infinity
});

console.log("Base Inspection" + ":", Inspection, "\n");

/***
 *
 * @param instance {Router}
 * @param extension
 * @return {import("express").Router}
 *
 * @constructor
 *
 */

const Abstract = (instance, extension) => {
    const $ = extend(instance, function (request, response) {
        $.prototype = instance;
        $.prototype.extensions = extension;

        const Inspection = Utility.inspect($.prototype, {
            showHidden: true,
            showProxy: true,
            getters: true,
            sorted: true,
            colors: true,

            depth: Infinity
        });

        console.log("Router, Extended Inspection" + ":", Inspection, "\n");

        response.send(
            JSON.stringify({
                Data: [ "Attribute-1", "Attribute-2", "Attribute-3" ]
            }, null, 4)
        );
    });

    return $.prototype.constructor;
};

const Controller = Abstract(Base, {
    Key: "Value",
    Name: "Abstract-Instance",
    Method: () => { return "..."; }
});

Controller.inspection = Utility.inspect(Controller, {
    showHidden: true,
    showProxy: true,
    getters: true,
    sorted: true,
    colors: true,

    depth: Infinity
});

console.log("Proxy Inspection" + ":", Controller.inspection, "\n");

Application.use(Controller);

HTTP.createServer(Application).listen(3000);
