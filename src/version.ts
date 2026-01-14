import fs from "node:fs";
import path from "node:path";

export function resolveLocalPackage() {
  try {
    if (process.env.npm_package_name && process.env.npm_package_version) {
      return {
        name: process.env.npm_package_name,
        version: process.env.npm_package_version,
      };
    }

    const pkgPath = path.join(process.cwd(), "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    return { name: pkg.name, version: pkg.version };
  } catch {
    return null;
  }
}
