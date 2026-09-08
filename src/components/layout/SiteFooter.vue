<template>
  <footer class="bg-primary-dark text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="" class="h-10 w-10 shrink-0" />
            <span class="font-display text-xl">The Craft Box Porthcawl</span>
          </div>
          <p class="text-white/70 text-sm leading-relaxed">
            Supporting local artists and providing a dedicated creative space for the Porthcawl community.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Quick Links</h3>
          <ul class="list-none m-0 p-0 space-y-2">
            <li v-for="entry in primaryNav" :key="entry.path">
              <router-link :to="entry.path" class="text-white/70 hover:text-white transition-colors no-underline text-sm">
                {{ entry.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Contact Us</h3>
          <ul class="list-none m-0 p-0 space-y-3">
            <li class="flex items-start gap-2 text-sm text-white/70">
              <svg class="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:craftboxporthcawl@gmail.com" class="text-white/70 hover:text-white transition-colors no-underline">
                craftboxporthcawl@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-2 text-sm text-white/70">
              <svg class="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hillsboro car park, Porthcawl</span>
            </li>
          </ul>

          <h3 class="font-semibold text-sm uppercase tracking-wider mt-6 mb-3 text-white/90">Follow Us</h3>
          <div class="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61584483924526"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white transition-colors"
              aria-label="The Craft Box Porthcawl on Facebook"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/craftboxporthcawl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white transition-colors"
              aria-label="The Craft Box Porthcawl on Instagram"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.13s-.01 3.07-.06 4.13c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.07-.01-4.13-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.07 2 14.73 2 12s.01-3.07.06-4.13c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.93 2.01 9.27 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zM17.5 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        <p>© {{ currentYear }} The Craft Box Porthcawl. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { primaryNav } from '../../router'

const currentYear = new Date().getFullYear()
</script>
