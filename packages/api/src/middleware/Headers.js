import { Application } from "./../index.js";

const Overwrites = [
    {
        Key: "Server",
        Value: "Nexus-API"
    },
    {
        Key: "X-Powered-By",
        Value: "Cloud-Technology"
    }
];

Application.use((_, response, $) => {
    Overwrites.forEach((Element, Index) => {
        response.setHeader(Element.Key, Element.Value);
    });
    
    $();
});

export const Headers = () => Application;