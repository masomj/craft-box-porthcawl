import { defineConfig } from 'vite'
// @ts-expect-error -- plain .mjs build helper, no types needed
import { generateSitemap } from './scripts/generate-sitemap.mjs'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import type { ViteSSGOptions } from 'vite-ssg'

// GitHub Pages serves this repo from /craft-box-porthcawl/ (no custom
// domain wired up yet), so assets need that base path only for the
// `build:pages` script; local builds/previews stay rooted at /.
const base = process.env.npm_lifecycle_event === 'build:pages'
  ? '/craft-box-porthcawl/'
  : '/'

export default defineConfig({
  base,
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
      return paths.filter(path => !path.includes(':pathMatch'))
    },
    // Sitemap is generated from the rendered output, not a hand-kept list, so
    // a new route can never be silently missing from it.
    onFinished() {
      const { pages, urls } = generateSitemap('dist')
      console.log(`[sitemap] ${urls} URLs across ${pages} pages -> dist/sitemap.xml`)
    },
  } satisfies ViteSSGOptions,
})
