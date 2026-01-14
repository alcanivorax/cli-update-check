export interface UpdateOptions {
  name?: string;
  version?: string;
  message?: (current: string, latest: string) => string;
  installCommand?: string;
}
