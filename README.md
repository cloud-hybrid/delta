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
