<template>
  <component
    :is="to ? 'router-link' : 'a'"
    :to="to"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-semibold rounded-full transition-colors no-underline',
      sizeClasses,
      variantClasses,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
}>(), {
  variant: 'primary',
  size: 'md',
})

const sizeClasses = computed(() => ({
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}[props.size]))

const variantClasses = computed(() => ({
  primary: 'bg-primary hover:bg-primary-light text-white',
  secondary: 'bg-white hover:bg-surface text-primary border border-primary',
  accent: 'bg-accent hover:bg-accent-light text-white',
}[props.variant]))
</script>
