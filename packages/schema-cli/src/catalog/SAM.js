const API = await import("./../request.js");

const URL = [
    "raw.githubusercontent.com", "/awslabs/goformation/v5.2.11/schema/sam.schema.json"
];

const Headers = {
    Host: "raw.githubusercontent.com"
};

const Request = API.Configuration(... URL);

const Query = await API.Query(Request, Headers);

export const Data = {
    JSON: JSON.parse(Query.Response),
    String: () => JSON.stringify(Data.JSON, null, 4)
};

export default Data;

console.log(Data.String());