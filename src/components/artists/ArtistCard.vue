<template>
  <article class="bg-white rounded-2xl border border-border overflow-hidden flex flex-col h-full">
    <div class="p-6 pb-0">
      <img
        v-if="artist.photo"
        :src="artist.photo"
        :alt="`Portrait of ${artist.name}`"
        class="w-full aspect-square object-cover rounded-full"
      />
      <div v-else class="w-full aspect-square bg-surface-dark flex items-center justify-center text-primary font-display text-8xl rounded-full" aria-hidden="true">
        {{ initial }}
      </div>
    </div>
    <div class="p-6 flex flex-col gap-3">
      <div>
        <h3 class="text-lg font-bold text-primary leading-snug">{{ artist.name }}</h3>
        <p v-if="artist.studio" class="text-sm font-semibold text-accent-dark">{{ artist.studio }}</p>
      </div>
      <p class="text-sm text-text-secondary leading-relaxed">
        {{ artist.bio }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Artist } from '../../data/artists'

const props = defineProps<{ artist: Artist }>()
const initial = computed(() => props.artist.name.charAt(0).toUpperCase())
</script>
