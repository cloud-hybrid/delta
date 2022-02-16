import * as SDK from "@aws-sdk/client-s3";
import { Stream } from "./stream.js";
/***
 * AWS S3 Presigned-URL File Interface
 *
 * @example
 * const interface = new File();
 * await interface.get({
 *      Bucket: "aws-s3-example-bucket-name",
 *      Key: "example-file.zip"
 * });
 *
 * @param expiration {number}
 *
 */
class File extends Stream {
    /***
     * AWS S3 Presigned-URL File Interface
     *
     * @example
     * const interface = new File();
     * await interface.get({
     *      Bucket: "aws-s3-example-bucket-name",
     *      Key: "example-file.zip"
     * });
     *
     * @param expiration {number}
     *
     */
    constructor(expiration = 300) {
        super(expiration);
    }
    /***
     * GET an AWS S3 Object via Pre-Signed URL
     *
     * **Note**: S3 `Bucket` parameter should not contain "s3://" protocol prefix.
     */
    async get(settings, local) {
        const location = String(local ?? settings["Key"]);
        const command = new SDK.GetObjectCommand(settings);
        await this.generate(command);
        return this.download(location);
    }
    /***
     * PUT an AWS S3 Object via Pre-Signed URL
     *
     * @returns {Promise<void>}
     *
     * @param settings { SDK.PutObjectCommandInput }
     * @param remote {PathLike | string}
     *
     * @param debug {boolean}
     *
     */
    async put(settings, remote, debug = false) {
        const location = String(remote ?? settings["Key"]);
        const command = new SDK.PutObjectCommand(settings);
        await this.generate(command);
        const descriptor = this.download(location);
        (debug) && console.debug("[Debug] Response", descriptor);
        return descriptor;
    }
}
export { File };
export default File;
