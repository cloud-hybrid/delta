const API = await import("./../request.js");

const Query = await API.Query(API.Configuration("gitlab.com", "/gitlab-org/gitlab/-/raw/master/app/assets/javascripts/editor/schema/ci.json"));

export const Catalog = JSON.parse(Query.Response);
export const Serial = JSON.stringify(Catalog, null, 4);

console.log(Serial);

export default Catalog;