/***
 * User Reference
 * ---
 *
 * @todo Create Enumeration for `state`
 */
interface User {
    name: string;
    username: string;
    id: number;
    state: string;
    avatar_url?: URL | undefined;
    web_url?: URL | undefined;

}

export type { User };