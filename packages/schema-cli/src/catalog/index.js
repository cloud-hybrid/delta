const API = await import("./../request.js");

const Query = await API.Query(API.Configuration("www.schemastore.org", "/api/json/catalog.json"), {
    Host: "www.schemastore.org"
});

export const Index = JSON.parse(Query.Response);

export const Names = JSON.stringify({
        Schemas: Index.schemas.map(($) => {
            return $["name"];
        })
    }, null, 4
);

export const Descriptions = JSON.stringify({
        Schemas: Index.schemas.map(($) => {
            return {
                description: $["description"]
            };
        })
    }, null, 4
);

export const URLs = JSON.stringify({
        Schemas: Index.schemas.map(($) => {
            return {
                url: $["url"]
            };
        })
    }, null, 4
);

export const Versions = JSON.stringify({
        Schemas: Index.schemas.map(($) => {
            return {
                versions: $["versions"] || null
            };
        })
    }, null, 4
);

export default Index;

console.log(Index);