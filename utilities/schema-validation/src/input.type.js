import FS from "fs";
import Path from "path";
import TSJ from "ts-json-schema-generator";
const Module = import.meta.url.replace("file" + ":" + "//", "");
const CWD = Path.dirname(Module);
const Filename = Path.basename(Module);
const Target = Path.join(CWD, [Filename.replace("type.js", "type.schema.json")].join(""));
const Schema = TSJ.createGenerator({
    path: Path.join(CWD, Filename.replace(".js", ".ts")),
    tsconfig: Path.join(process.cwd(), "tsconfig.json"),
    jsDoc: "extended",
    expose: "all",
    additionalProperties: true,
    encodeRefs: false,
    skipTypeCheck: false,
    strictTuples: true,
    sortProps: true,
    type: "*"
}).createSchema();
FS.writeFileSync(Target, JSON.stringify(Schema, null, 4));
//# sourceMappingURL=input.type.js.map