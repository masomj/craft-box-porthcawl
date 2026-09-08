<template>
  <SkipLink />
  <SiteHeader />
  <main id="main-content" tabindex="-1">
    <router-view />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import SkipLink from './components/layout/SkipLink.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import { useSeoMeta } from './composables/useSeoMeta'

useSeoMeta()

const router = useRouter()
watch(() => router.currentRoute.value.path, () => {
  if (typeof document === 'undefined') return
  const main = document.getElementById('main-content')
  main?.focus()
})
</script>

<style>
#main-content:focus {
  outline: none;
}
</style>
