import Path from "path";
const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
console.log(URI())
