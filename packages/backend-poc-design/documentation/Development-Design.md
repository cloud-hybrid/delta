# Development Philosophies #

## "Local" vs "Cloud" Environments ##

Using the cloud to ***extend local development*** is a difficult, yet fun and creative problem that's often
impossible to perfectly establish. But globally distributed micro-services cannot be limited to a single system's 
local environment.

Moreover, engineering that's kept only local is unrealistic and prevents development
teams from foreseeing issues with distributing their source code; debugging can too easily become an
after thought, and worse, re-usability almost always ends in [code smells](https://en.wikipedia.org/wiki/Code_smell).

Large benefits become immediately available when interfacing the cloud:
- The potential for secrets to leak is forcefully limited
- Debugging becomes resolvable from a single point of failure
- Onboarding is faster and training less costly

Development teams will spend less time overall configuring their local systems -- configuration that should
limited to their cloud-targeted application(s) anyways.

## Determining Support Systems ##

Distributed systems such as databases or caching servers are often too much of a burden to
configure, run, and then perfectly replicate in a local environment. 100% of the time, it's
best to leave these resources in the cloud, regardless of local vs. cloud context(s). Failure
to establish a shareable support system amounts in massive technical debt that's forced on external
teams -- logarithmically if drift or misconfiguration surfaces.

The justification is rather easily explained: [**Backing Services**](https://12factor.net/backing-services)

Perhaps surprisingly, **such support system(s) includes all databases**; e.g. An authorization service's
database, or an organization's central data-warehouse.

**Limitus Test**: should a deployable prevent pushing its distribution if a support system isn't available, or will the 
runtime of the application result in failure to keep alive without it?
    - If the answer is "Yes" -- reconsider the definition of a "dependency" and "micro-service".
    
The language above is intentionally harsh because of the burden associated with long term maintenance. Especially
when support system modifications attempt to never require code changes from linked repositories, but almost always
requires IaC reconfiguration *and* code changes when un-accounted, non-persistent mutations occur.

## Runtime Configuration ##

Backend applications often need to **dynamically reconfigure runtime(s) or runtime logic**. 

The most simple example includes changing a variable's value to a URL according to an environment.

But, most importantly, note that configuration **doesn't always mean *environment 
variables***. See the section [*Process Management*](#process-management) for an equally
large configuration concern.

### Environment Variables ###

...

### Process Management ###

Let's acknowledge that `npm` isn't always available as the process manager. 

Use-cases & examples:

- Entry points that are invoked via a proprietary framework
    - AWS **Lambda**
    - Azure **Functions**
- Invocation via `forever` and `pnm2`, or via a daemon manager such as `systemd`
    - A long running polling service
    - Orchestrator or Security Monitors
    - A CI-CD Runner
    - QA Application(s) (`selenium grid`)
- Locked, virtualized environments (Containers)
    - Anything that requires `node` vs `npm` to invoke a packaged entry point

## References, Supplemental Documentation, and Recommendations ##

### Module(s) ###

When using `node` & `commonjs` modules, it's important to know:

```js
module.exports = exports = {};
```

`module.exports` and `exports` refer to the same object.

Use of `module.export` vs `export` is preferred; given `module` is of a
special type [`NodeModule`](https://nodejs.org/api/modules.html), use of `module` will allow 
IDEs to programmatically evaluate errors or anti-patterns, and will overall facilitate 
development with type-hinting and inline documentation.

#### `module` and Pathing ####

```node
require("assert").equal(module.path, __dirname); // True
```

#### The Node.js Runtime ####

Here's how `node` implicitly imports `module` and `exports` during the runtime
of a Node.js application:

```node
(function (exports, require, module, __filename, __dirname) {   // Implicitly added by Node.js
    var example = function () {
        console.log("Hello World");
    };

    module.exports = example;
}).apply();                                                     // Implicitly added by Node.js

return module.exports;                                          // Implicitly added by Node.js
```

Therefore, design patterns regarding lambda functions don't need to specifically define
`module` nor `exports` so long as at least one is used -- this allows for some additional 
freedom and relief of potentially breaking change(s).
