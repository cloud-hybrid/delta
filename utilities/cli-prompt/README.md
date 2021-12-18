# `@cloud-vault/cli-prompt` - ESM CLI Prompt #

## Overview ##

`cli-prompt` is a zero dependency, node.js ESM-compliant *commandline prompt*.

As an ESM module, when running via a compatible (16+) `node.js` runtime, package(s)
benefit from running `await` via the global namespace for blocking cli-prompt callables.

## Setup ##

```bash
npm install --save "@cloud-vault/cli-prompt"
```

### Development ###

*If installing only for development or POC-related purposes*

```bash
npm install --save-dev "@cloud-vault/cli-prompt"
```

## Usage ##

`index.js`

```javascript
import Prompt from "@cloud-vault/cli-prompt";

const Query = await Prompt("First Name" + ":");

// $ "Jacob"
console.debug(Query);

// >>> "Jacob"

process.exit(0);
```

***Note*** - Ensure to have `"type": "module"` configured in `package.json`.

- Please see the [example](./examples) package for more details on usage.
