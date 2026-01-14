import semver from "semver";
import { resolveLocalPackage } from "./version.js";
import { getLatestNpmVersion } from "./npm.js";
import type { UpdateOptions } from "./types.js";

export async function checkForCliUpdate(
  options: UpdateOptions = {}
): Promise<string | null> {
  try {
    const local =
      options.name && options.version
        ? { name: options.name, version: options.version }
        : resolveLocalPackage();

    if (!local?.name || !local?.version) return null;

    const latest = await getLatestNpmVersion(local.name);
    if (!latest) return null;

    if (semver.lt(local.version, latest)) {
      return options.message
        ? options.message(local.version, latest)
        : `Update available: ${local.version} → ${latest}\nRun npm i -g ${local.name}`;
    }

    return null;
  } catch {
    return null;
  }
}
