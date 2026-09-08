<template>
  <header class="bg-white border-b border-border sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-2 sm:gap-4 py-3 min-h-20">
        <router-link to="/" class="flex items-center gap-2 min-w-0 no-underline" aria-label="The Craft Box Porthcawl — home">
          <img src="/logo.png" alt="" class="h-10 w-10 sm:h-14 sm:w-14 shrink-0" />
          <span class="font-display text-lg sm:text-2xl text-primary leading-tight">The Craft Box<br class="sm:hidden" /> Porthcawl</span>
        </router-link>

        <nav class="hidden md:block" aria-label="Main navigation">
          <ul class="flex items-center gap-1 list-none m-0 p-0">
            <li v-for="entry in primaryNav" :key="entry.path">
              <router-link
                :to="entry.path"
                class="px-3 py-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors no-underline font-medium text-sm whitespace-nowrap"
                active-class="text-primary bg-surface"
              >
                {{ entry.label }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/meet-the-artists"
                class="ml-2 px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-full no-underline font-semibold text-sm transition-colors whitespace-nowrap"
              >
                Meet Our Artists
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="md:hidden shrink-0">
          <button
            class="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            @click="menuOpen = !menuOpen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <MobileMenu :open="menuOpen" @close="menuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MobileMenu from './MobileMenu.vue'
import { primaryNav } from '../../router'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>
