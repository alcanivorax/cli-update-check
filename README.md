# cli-update-check

Minimal, zero-config update checker for CLI tools.

<br />

<br />

## Installation

```bash
npm install cli-update-check
```

<br />

# Basic Usage

```ts
import { checkForCliUpdate } from "cli-update-check";

setTimeout(async () => {
  const msg = await checkForCliUpdate({
    name: "your-package-name",
    version: "0.1.0",
  });

  if (msg) {
    console.log(msg);
  }
}, 0);
```

<br />

## Options

```ts
checkForCliUpdate({
  name?: string;            // npm package name
  version?: string;         // current version
  installCommand?: string;  // custom update command
});
```

If `name` and `version` are not provided, they are resolved from the local
`package.json`. The function should be called from the project root in that case.

<br />

### Behavior

- Returns a string when an update is available
- Returns null otherwise
- Never throws
- Never logs
- Never blocks CLI execution
