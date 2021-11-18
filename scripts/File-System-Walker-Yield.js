import FS from "fs";
import Path from "path";

function* walkSync(dir) {
    const files = FS.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(Path.join(dir, file.name));
        } else {
            yield Path.join(dir, file.name);
        }
    }
}

for (const filePath of walkSync(".")) {
    console.log(filePath);
}
