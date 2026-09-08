import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { SITE_ORIGIN, siteSchemaGraph } from '../seo/siteSchema'

/** title/description/OG copy per route. One entry per seoKey used in router/index.ts. */
const pageMeta: Record<string, { title: string; description: string; ogTitle?: string }> = {
  home: {
    title: 'The Craft Box Porthcawl — Handmade Crafts & Local Art',
    description:
      'A cosy little haven of handmade creativity in Porthcawl. Browse handmade crafts and original artwork from local resident artists, or join the community.',
  },
  events: {
    title: 'Events — The Craft Box Porthcawl',
    description: 'Upcoming events, workshops and markets at The Craft Box Porthcawl.',
  },
  artists: {
    title: "Meet the Artists — The Craft Box Porthcawl",
    description:
      'Meet the resident artists and makers behind The Craft Box Porthcawl — from seaglass jewellery to ceramics, painting and more.',
  },
  about: {
    title: 'About Us — The Craft Box Porthcawl',
    description:
      "The story behind The Craft Box Porthcawl: a creative hub founded by Amanda, supporting local artists and makers in the heart of Porthcawl.",
  },
  notFound: {
    title: 'Page Not Found — The Craft Box Porthcawl',
    description: 'The page you were looking for could not be found.',
  },
}

export function useSeoMeta() {
  const route = useRoute()

  const seoKey = computed(() => (route.meta.seoKey as string | undefined) ?? 'home')
  const isNotFound = computed(() => seoKey.value === 'notFound')
  const homeMeta = pageMeta.home as { title: string; description: string; ogTitle?: string }
  const meta = computed(() => pageMeta[seoKey.value] ?? homeMeta)

  const title = computed(() => meta.value.title)
  const description = computed(() => meta.value.description)
  const ogTitle = computed(() => meta.value.ogTitle ?? meta.value.title)

  const canonical = computed(() => `${SITE_ORIGIN}${route.path === '/' ? '' : route.path}`)

  useHead({
    htmlAttrs: { lang: 'en-GB' },
    title,
    link: computed(() => (isNotFound.value ? [] : [{ rel: 'canonical', href: canonical.value }])),
    meta: computed(() => [
      { name: 'description', content: description.value },
      {
        name: 'robots',
        content: isNotFound.value
          ? 'noindex, follow'
          : 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      { name: 'author', content: 'The Craft Box Porthcawl' },
      { property: 'og:title', content: ogTitle.value },
      { property: 'og:description', content: description.value },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical.value },
      { property: 'og:site_name', content: 'The Craft Box Porthcawl' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:image', content: `${SITE_ORIGIN}/og-image.png` },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'The Craft Box Porthcawl' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle.value },
      { name: 'twitter:description', content: description.value },
      { name: 'twitter:image', content: `${SITE_ORIGIN}/og-image.png` },
      { name: 'twitter:image:alt', content: 'The Craft Box Porthcawl' },
    ]),
    script: [
      {
        key: 'site-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(siteSchemaGraph),
      },
    ],
  })
}
