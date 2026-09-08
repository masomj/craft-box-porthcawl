<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <SectionHeading
      kicker="Our makers"
      title="The Talent Behind the Craft"
      subtitle="Meet the resident artists and makers who fill The Craft Box with handmade work, from seaglass jewellery to ceramics, painting and more."
      center
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ArtistCard v-for="artist in artists" :key="artist.slug" :artist="artist" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '../components/shared/SectionHeading.vue'
import ArtistCard from '../components/artists/ArtistCard.vue'
import { artists } from '../data/artists'
import { usePageSchema } from '../composables/usePageSchema'
import { SITE_ORIGIN } from '../seo/siteSchema'

usePageSchema({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: artists.map((artist, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Person',
      name: artist.name,
      ...(artist.studio ? { affiliation: artist.studio } : {}),
    },
  })),
  url: `${SITE_ORIGIN}/meet-the-artists`,
})
</script>
