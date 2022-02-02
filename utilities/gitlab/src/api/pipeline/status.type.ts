/***
 * The Status of a Pipeline
 * ---
 *
 * String, Type-Enumeration:
 * - `created`
 * - `waiting_for_resource`
 * - `preparing`
 * - `pending`
 * - `running`
 * - `success`
 * - `failed`
 * - `canceled`
 * - `skipped`
 * - `manual`
 * - `scheduled`
 */

enum Enumeration {
    created = "created",
    waiting_for_resource = "waiting_for_resource",
    preparing = "preparing",
    pending = "pending",
    running = "running",
    success = "success",
    failed = "failed",
    canceled = "canceled",
    skipped = "skipped",
    manual = "manual",
    scheduled = "scheduled",
}

/*** @see {@link Enumeration} */
type Status = keyof typeof Enumeration;

export type { Status };

export default Enumeration;