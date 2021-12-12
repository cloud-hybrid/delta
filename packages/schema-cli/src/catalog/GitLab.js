const API = await import("./../request.js");

const URL = [
    "gitlab.com", "/gitlab-org/gitlab/-/raw/master/app/assets/javascripts/editor/schema/ci.json"
];

const Headers = {};

const Request = API.Configuration(... URL);

const Query = await API.Query(Request, Headers);

export const Catalog = JSON.parse(Query.Response);
export const Serial = JSON.stringify(Catalog, null, 4);

export default Catalog;