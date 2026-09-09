<template>
  <NotFoundPage v-if="!artist" />

  <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <SectionHeading
      :kicker="artist.studio ?? 'Commission a piece'"
      :title="`Commission ${artist.name}`"
      :subtitle="artist.bio"
    />

    <h2 class="text-2xl font-bold text-primary mb-4">A few things {{ firstName }}'s made</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
      <figure v-for="(item, index) in artist.gallery" :key="index" class="m-0">
        <div
          class="aspect-square rounded-2xl bg-surface-dark border border-border"
          role="img"
          :aria-label="item.alt"
        />
        <figcaption class="mt-2 text-sm text-text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </figcaption>
      </figure>
    </div>

    <div class="text-text-secondary leading-relaxed space-y-4 max-w-2xl mb-16">
      <!-- Placeholder copy -- replace once {{ firstName }} shares real commission-process details. -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <SectionHeading
      kicker="Get in touch"
      title="Request a Commission"
      :subtitle="`Tell ${firstName} a little about what you have in mind and they'll be in touch to talk it through.`"
    />
    <CommissionRequestForm :artist-name="artist.name" :artist-slug="artist.slug" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SectionHeading from '../components/shared/SectionHeading.vue'
import CommissionRequestForm from '../components/commissions/CommissionRequestForm.vue'
import NotFoundPage from './NotFoundPage.vue'
import { artists } from '../data/artists'

const route = useRoute()

const artist = computed(() =>
  artists.find((a) => a.slug === route.params.slug && a.hasCommissionPage) ?? null,
)

const firstName = computed(() => artist.value?.name.split(' ')[0] ?? '')
</script>
