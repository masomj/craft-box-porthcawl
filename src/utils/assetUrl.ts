/**
 * Prepends Vite's base path to a root-absolute public asset path (e.g. '/logo.png').
 * Vite only rewrites static `src="/…"` template literals at build time — a path
 * coming from data (like artist.photo) needs this to resolve under a non-root base.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
