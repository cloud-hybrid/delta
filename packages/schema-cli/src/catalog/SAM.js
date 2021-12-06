const API = await import("./../request.js");

const Query = await API.Query(API.Configuration("raw.githubusercontent.com", "/awslabs/goformation/v5.2.11/schema/sam.schema.json"), {
    Host: "raw.githubusercontent.com"
});

export const Catalog = JSON.parse(Query.Response);
export const Serial = JSON.stringify(Catalog, null, 4);

console.log(Serial);

export default Catalog;