const API = await import("./../request.js");

const URL = [
    "raw.githubusercontent.com", "/awslabs/goformation/v5.2.11/schema/cloudformation.schema.json"
];

const Headers = {
    Host: "raw.githubusercontent.com"
};

const Request = API.Configuration(... URL);

const Query = await API.Query(Request, Headers);

export const Catalog = JSON.parse(Query.Response);
export const Serial = JSON.stringify(Catalog, null, 4);

export default Catalog;