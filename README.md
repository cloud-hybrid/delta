# delta #

> *Constructs are classes which define a “piece of system state”. Constructs can be composed together to form higher-level building blocks which represent more complex state. Constructs are often used to represent the desired state of cloud applications. For example, in the AWS CDK, which is used to define the desired state for AWS infrastructure using CloudFormation, the lowest-level construct represents a resource definition in a CloudFormation template. These resources are composed to represent higher-level logical units of a cloud application, etc.*

## Overview ## 

[...] (*Under Development*)

## Workspace(s) ##

```bash
npm run start --workspace packages/api
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

## Considerations around Hoisting ##

Lighter, non-compiled projects see installation and hoist-related benefits from mono-repository configuration(s); however, compiled projects that may extend or implement `create-react-app`, `webpack`, `babel`, and other alike packages, it's
difficult to keep a consistent and pure packgage list.

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

Such will avoid lifting `node_modules` associated with `packages/react-app` out from its source directory and into the repository's root.
