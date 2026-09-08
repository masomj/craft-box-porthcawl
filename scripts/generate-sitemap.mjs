// Generates public-facing sitemap.xml from what was ACTUALLY prerendered.
//
// Walking the build output rather than a hand-kept list means a new page can
// never be silently missing from the sitemap: if vite-ssg rendered it, it is
// in here. Adding a route requires no change to this file.

import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ORIGIN = 'https://thecraftboxporthcawl.co.uk'

/** Priority and change frequency per path. Anything unlisted falls back to
 *  DEFAULT_RANK, so a new page still gets a sane entry. */
const RANKS = {
  '/': { priority: '1.0', changefreq: 'monthly' },
  '/meet-the-artists': { priority: '0.9', changefreq: 'monthly' },
  '/events': { priority: '0.8', changefreq: 'weekly' },
  '/about-us': { priority: '0.6', changefreq: 'yearly' },
}
const DEFAULT_RANK = { priority: '0.5', changefreq: 'monthly' }

function findRoutes(dir, base = '') {
  const routes = []

  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)

    if (statSync(full).isDirectory()) {
      routes.push(...findRoutes(full, `${base}/${entry}`))
    } else if (entry === 'index.html') {
      routes.push(base || '/')
    }
  }

  return routes
}

export function generateSitemap(outDir = 'dist') {
  const dist = resolve(outDir)
  const paths = [...new Set(findRoutes(dist))].sort((a, b) =>
    a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)
  )

  const urls = paths.map((path) => {
    const rank = RANKS[path] ?? DEFAULT_RANK

    return `  <url>
    <loc>${ORIGIN}${path}</loc>
    <changefreq>${rank.changefreq}</changefreq>
    <priority>${rank.priority}</priority>
  </url>`
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

  writeFileSync(join(dist, 'sitemap.xml'), xml, 'utf8')
  return { pages: paths.length, urls: urls.length }
}
