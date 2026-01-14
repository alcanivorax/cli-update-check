<h1 align="center">cli-update-check</h1>

<br />

<p align="center">Minimal, zero-config update checker for CLI tools.</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/cli-update-check?color=6366f1" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/cli-update-check?color=0f172a" alt="npm downloads" />
  <img src="https://img.shields.io/github/license/alcanivorax/cli-update-check?color=22c55e" alt="license" />
</p>

<br />

<p align="center">
  <img
    src="https://raw.githubusercontent.com/alcanivorax/cli-update-check/main/assets/cli-update-check-preview.png"
    alt="cli-update-check preview"
    width="700"
  />
</p>

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
