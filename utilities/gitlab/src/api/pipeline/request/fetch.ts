import URI from "url";

const URL = URI.URL;
const Parameters = URI.URLSearchParams;

const Fetch = (await import("node-fetch")).default;

/// fetch('https://httpbin.org/post', { method: 'POST', body: params })
///     .then(res => res.json())
///     .then(json => console.log(json));

export { URL, Parameters, Fetch };

export default { URL, Parameters, Fetch };