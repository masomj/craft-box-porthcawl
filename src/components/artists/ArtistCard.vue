<template>
  <article class="bg-white rounded-2xl border border-border p-6 flex flex-col gap-3 h-full">
    <div class="w-16 h-16 rounded-full bg-surface-dark flex items-center justify-center shrink-0 text-primary font-display text-2xl" aria-hidden="true">
      {{ initial }}
    </div>
    <div>
      <h3 class="text-lg font-bold text-primary leading-snug">{{ artist.name }}</h3>
      <p v-if="artist.studio" class="text-sm font-semibold text-accent-dark">{{ artist.studio }}</p>
    </div>
    <p class="text-sm text-text-secondary leading-relaxed" :class="{ italic: !artist.hasBio }">
      {{ artist.bio }}
    </p>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Artist } from '../../data/artists'

const props = defineProps<{ artist: Artist }>()
const initial = computed(() => props.artist.name.charAt(0).toUpperCase())
</script>
