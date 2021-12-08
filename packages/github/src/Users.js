import { Data } from "./Request.js";

//export const People = Data.People.map(($, _) => {
//    return {
//        ID: $["Username"]["id"],
//        URL: $["Username"]["url"],
//        Type: $["Username"]["type"],
//        Username: $["Username"]["login"]
//    };
//});
//
//Users["Total"] = Users.length;

export default JSON.stringify(Data, null, 4);