import { Status } from "./status.type.js";
import { Source } from "./source.type.js";

/***
 * Pipeline Response, Array Index
 * ---
 *
 * @event GET /projects/:id/pipelines
 *
 * @example
 * {
 *      "id": 1000,
 *      "project_id": 1,
 *      "sha": '0000000000000000000000000000000000000000',
 *      "ref": 'Development',
 *      "status": 'success',
 *      "source": 'web',
 *      "created_at": '2022-01-06T22:02:03.527Z',
 *      "updated_at": '2022-01-06T22:07:36.121Z',
 *      "web_url": 'https://gitlab.example.com/parent-group/child-group/repository-1/-/pipelines/1000'
 * }
 *
 */

interface Interface {
    /*** Project Identifier */
    id?: number | undefined;

    /*** Pipeline ID */
    iid?: number | undefined;

    /*** Project-ID - Unique */
    project_id?: number | undefined;

    /*** VCS Commit Hash */
    sha?: string | undefined;

    /*** Repository's Pipeline Branch */
    ref?: string | undefined;

    /*** Pipeline Runtime Status */
    status?: Status | undefined;

    /*** Pipeline Trigger Source */
    source?: Source | undefined;

    /*** Start Time */
    created_at?: Date | undefined;

    /*** Last Pipeline Update */
    updated_at?: Date | undefined;

    /*** Web URL */
    web_url?: URL | undefined;
}

type Interfaces = Interface[];

export type { Interface, Interfaces };