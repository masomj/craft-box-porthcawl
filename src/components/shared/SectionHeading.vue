<template>
  <div :class="['mb-8', center ? 'text-center' : '']">
    <p v-if="kicker" class="font-display text-2xl text-accent mb-1">{{ kicker }}</p>
    <h2 class="text-3xl sm:text-4xl font-bold text-primary">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 text-text-secondary text-lg max-w-2xl" :class="center ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  kicker?: string
  subtitle?: string
  center?: boolean
}>(), {
  center: false,
})
</script>
