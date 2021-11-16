# `@cloud-technology/cli-prompt` #

## Overview ##

`cli-prompt` is a zero dependency, node.js ESM-compliant *commandline prompt*.

As an ESM module, when running via a compatible (16+) `node.js` runtime, package(s)
benefit from running `await` via the global namespace for blocking cli-prompt
callables.

## Usage ##

***Note*** - Ensure to have `"type": "module"` configured in `package.json`.

`index.js`

```javascript
import Prompt from "@cloud-technology/cli-prompt";

const Query = await Prompt("First Name");

console.debug(Query);

process.exit(0);
```
