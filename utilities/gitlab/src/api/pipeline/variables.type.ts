/***
 * Pipeline Variables
 * ---
 *
 * @todo Create enumeration for `variable_type`
 * @event GET GET /projects/:id/pipelines/:pipeline_id/variables
 *
 * @example
 * [
 *     {
 *         "key": "RUN_NIGHTLY_BUILD",
 *         "variable_type": "env_var",
 *         "value": "true"
 *     },
 *     {
 *         "key": "foo",
 *         "value": "bar"
 *     }
 * ];
 *
 */

interface VariablesType {
    key: string;
    variable_type?: string | undefined;
    value?: string | undefined;
}

export type { VariablesType };