import { defineConfig } from 'vite'
// @ts-expect-error -- plain .mjs build helper, no types needed
import { generateSitemap } from './scripts/generate-sitemap.mjs'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import type { ViteSSGOptions } from 'vite-ssg'
import { artists } from './src/data/artists'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    strictPort: false,
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'minify',
    includedRoutes(paths: string[]) {
      // /commissions/:slug is dynamic -- swap it for the concrete artist
      // paths, derived from data so a newly-flagged artist is picked up
      // automatically without touching this file.
      const commissionPaths = artists
        .filter((artist) => artist.hasCommissionPage)
        .map((artist) => `/commissions/${artist.slug}`)

      return [
        ...paths.filter((path) => !path.includes(':pathMatch') && !path.includes(':slug')),
        ...commissionPaths,
      ]
    },
    // Sitemap is generated from the rendered output, not a hand-kept list, so
    // a new route can never be silently missing from it.
    onFinished() {
      const { pages, urls } = generateSitemap('dist')
      console.log(`[sitemap] ${urls} URLs across ${pages} pages -> dist/sitemap.xml`)
    },
  } satisfies ViteSSGOptions,
})
