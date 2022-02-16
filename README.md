# `cloud-technology/delta` [![lerna](https://img.shields.io/badge/Maintained%20via-Lerna-cc00ff.svg)](https://lerna.js.org/) #

## Task Board ##

- [ ] Read [Nest's Design Pattern](https://github.com/nestjs/nest)
    - [Implement OOP for Exceptions](https://github.com/nestjs/nest/tree/master/packages/common/exceptions)

## Overview ## 

[...] (*Under Development*)

## Workspace(s) ##

```bash
npm run start --workspace packages/api
```

## Publishing to NPM Registry ##

```bash
npm publish --access "public" --workspace utilities/cli-prompt
```

## Updating NPM Dependencies ##

In order to update all dependencies across all module(s) or package(s):

```bash
npm update
```

Updates can also be safely checked via a ***dry-run***:

```bash
npm update dry-run
```

or

```bash
npm outdated
```

## Hoisting Considerations ##

Lighter, non-compiled projects see installation and hoist-related benefits from mono-repository configuration(s);
however, compiled projects that may extend or implement `create-react-app`, `webpack`, `babel`, and other alike
packages, it's difficult to keep a consistent and pure packgage list.

For such mono-repositories, where hoisting may be a problem, consider the following setup:

`lerna.json`

```json
{
    "version": "0.0.0",
    "npmClient": "npm",
    "useWorkspaces": false,
    "command": {
        "publish": {
            "ignoreChanges": [
                "ignored-file"
            ],
            "message": "[Chore] (Release): Publish",
            "registry": "https://npm.pkg.github.com"
        },
        "bootstrap": {
            "npmClientArgs": [
                "--no-package-lock"
            ]
        }
    },
    "packages": [
        "packages/*",
        "documentation/*",
        "utilities/*"
    ]
}
```

For `package.json`:

```json
{
    "...": "...",
    "scripts": {
        "react": "npm run setup && npm run start --workspace packages/react-app",
        "commit": "git commit --all --file - ",
        "push": "lerna version patch"
    }
}
```

Such will avoid lifting `node_modules` associated with `packages/react-app` out from its source directory and into the
repository's root.


---

Terraform CDKTF Idea: Wrap `git clone` to parse template repository




- Serverless Refactor Epic
  - HTTP API Gateways
  - Moving layers into package.json for lambda-related repositories
  - Restructure lambda-related repositories with package.json and handler? At the root folder level


Testing API Functionality in Postman vs just Collections
Why: Collections cannot be synchronized automatically
How: Using API
Additional: API Automiatically includes both Versions and Collections


I have a bi-weekly touch base with Zemlin tomorrow morning. I have a few questions if you could be so kind to answer:

1. Have the GitLab pipelines been optimized to deploy code faster (not waiting for infrastructure updates)?
  - Have you ever heard of Conway’s Law? It’s a really fun, interesting topic that involves both a bit of CompSci 
    and organizational psychology. 
  
  > *“Any organization will produce a design whose structure is a copy of the organization’s communication structure”.*

I didn’t separate the infrastructure from the code. I also am of strong opinion it shouldn’t be because it puts us
a step back into the place we were just a few months ago.

Anyways, *nothing is separate* -- Rather than most of my other pipelines, where they typically fan out from a single 
source, and then merge back together (diamond dependencies), I strictly defined a directed acyclic graph pipline (DAG); 
execution is performed in the quickest possible manner, regardless how stages may be set up.

The infrastructure component takes less than 30 seconds to validate itself *once correctly built out*, whereas the code component
will always take a linear ~ 5 minutes depending on the front-end complexity + dependencies.

The trade-off here is experience, where I did not correctly architect the pipeline with this goal initially - the need for a complete
teardown and re-deployment today was such a side effect.

1. Anything else need to be done with the eBook staging infrastructure?
  - Absolutely. I don't know what yet, but there will certainly be additional pieces of infrastructure required; and as we progress,
    the more likely a refactor will be needed to compensate for making tight deadlines. 
  - But as far as what's certain:
    - API Gateway for Book-related utility functions + general use-cases -- Carlos' lambda function being the first
      appropriate canidate
    - Splitting of User-Service, Auth-Service, and Content Service. There's a lot of uncertainty with the outcome(s) here.
      But I do know that if my hand is forced, these changes will likely have to be manual and without consistent environment-separated
      configuration(s).
    - Document-DB Audit Logging -- I'm planning on doing this tomororow.
    - Azure Functions - these still need to get JWTs enabled, and I genuinely fear that's going to be a last minute
      implementation.
    - IaCing those scaling related updates to the Azure Application(s), and IaCing logging. While not entirely difficult,
      it is overhead and it's important we don't drift consistency across environments.
    - Runners are in a terrible state right now. There not contained, and they're limited to a single runner. I'm unsure
      when there's going to be a patch released. Additionally, Alex Stone may hit this very same road block next time he's
      looking to deploy.
    
2. Can I assume we'll test out the Azure function throughput again before you leave for vacation, Jake?
   - I'll try. I think I can get to it Wednesday morning.
3. Anything blocking the GSW team? 
   - The front-end pipelines today; however, this is going to be remediated shortly -- assuming code-related compilations
     remain consistent.
4. Anything not going well? Anything going really well?
   - Overall it's going pretty well -- Cody has been exceptionally interested and open to communication; additionally,
     we seem to both be well understood that while perhaps I favor infrastructure, and he development, we both have valuable
     input on either side and we're filling in when appropriate.
   - I am feeling some pressure relating to deadlines, and consequently, I'm without the comfortable certainty that things
     are in a perfect state. Maybe this is a reality I'm growing into -- maybe not.

5. Anything else transpire in the last few days I should be aware of?
  - I really don't think so -- I've been trying my best to communicate to both teams to keep everyone in the know,
    but as a reality in this very moment, I'm forgoing providing an update tonight to GSW due to how late it is... even
    though I said I would. I'll probably just send a scheduled response whenever I get done with a few last items here tonight.

