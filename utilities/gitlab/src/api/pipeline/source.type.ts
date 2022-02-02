/***
 * Pipeline Trigger Source
 * ---
 *
 * String, Type-Enumeration:
 * - `push`
 * - `web`
 * - `trigger`
 * - `schedule`
 * - `api`
 * - `external`
 * - `pipeline`
 * - `chat`
 * - `webide`
 * - `merge_request_event`
 * - `external_pull_request_event`
 * - `parent_pipeline`
 * - `ondemand_dast_scan`
 * - `ondemand_dast_validation`
 *
 */

enum Enumeration {
    push = "push",
    web = "web",
    trigger = "trigger",
    schedule = "schedule",
    api = "api",
    external = "external",
    pipeline = "pipeline",
    chat = "chat",
    webide = "webide",
    merge_request_event = "merge_request_event",
    external_pull_request_event = "external_pull_request_event",
    ondemand_dast_validation = "ondemand_dast_validation"
}

/*** @see {@link Enumeration} */
type Source = keyof typeof Enumeration;

export type { Source };

export default Enumeration;