import { execSync } from "node:child_process";

export async function getLatestNpmVersion(pkg: string): Promise<string | null> {
  try {
    return execSync(`npm view ${pkg} version`, {
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();
  } catch {
    return null;
  }
}
