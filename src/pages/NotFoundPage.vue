<template>
  <div class="max-w-2xl mx-auto px-4 py-24 text-center">
    <p class="font-display text-3xl text-accent mb-2">Oh, crumbs!</p>
    <h1 class="text-3xl font-bold text-primary mb-4">Page not found</h1>
    <p class="text-text-secondary mb-8">
      This page isn't available. It may have moved, or the link might be out of date.
    </p>
    <BaseButton to="/">Back to Homepage</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../components/shared/BaseButton.vue'
</script>
