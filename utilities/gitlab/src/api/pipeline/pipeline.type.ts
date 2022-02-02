import { User } from "./user.type.js";
import { Status } from "./status.type.js";
import { Source } from "./source.type.js";

/***
 * Pipeline Response
 * ---
 *
 * @event GET /projects/:id/pipelines/:pipeline_id
 *
 * @example
 * {
 *     "id": 46,
 *     "iid": 11,
 *     "project_id": 1,
 *     "status": "success",
 *     "ref": "main",
 *     "sha": "a91957a858320c0e17f3a0eca7cfacbff50ea29a",
 *     "before_sha": "a91957a858320c0e17f3a0eca7cfacbff50ea29a",
 *     "tag": false,
 *     "yaml_errors": null,
 *     "user": {
 *         "name": "Administrator",
 *         "username": "root",
 *         "id": 1,
 *         "state": "active",
 *         "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon",
 *         "web_url": "http://localhost:3000/root"
 *     },
 *     "created_at": "2016-08-11T11:28:34.085Z",
 *     "updated_at": "2016-08-11T11:32:35.169Z",
 *     "started_at": null,
 *     "finished_at": "2016-08-11T11:32:35.145Z",
 *     "committed_at": null,
 *     "duration": 123.65,
 *     "queued_duration": 0.010,
 *     "coverage": "30.0",
 *     "web_url": "https://example.com/foo/bar/pipelines/46"
 * };
 *
 */

interface Interface {
    /*** Unique Identifier */
    id?: number | undefined;

    /*** Pipeline ID */
    iid?: number | undefined;

    /*** Project ID */
    project_id?: number | undefined;

    /*** VCS Commit Hash */
    sha?: string | undefined;

    /*** Tag Indicator */
    tag?: boolean | undefined;

    /*** VCS Commit Hash, Pre-Trigger */
    before_sha?: string | undefined;

    /*** Repository's Pipeline Branch */
    ref?: string | undefined;

    /*** Pipeline Runtime Status */
    status?: Status | undefined;

    /*** Pipeline Trigger Source */
    source?: Source | undefined;

    /*** Start Time */
    started_at?: Date | undefined;

    /*** Creation Time */
    created_at?: Date | undefined;

    /*** Last Pipeline Update */
    updated_at?: Date | undefined;

    /*** Git Commit Time */
    committed_at?: Date | undefined;

    /*** Web URL */
    web_url?: URL | undefined;

    /*** Trigger User */
    user?: User | undefined;

    /*** Pipeline Runtime Duration */
    duration?: number | undefined;

    /*** Queue Duration */
    queued_duration?: number | undefined;

    /*** Coverage Report Percentage */
    coverage?: string | undefined;
}

export type { Interface };
