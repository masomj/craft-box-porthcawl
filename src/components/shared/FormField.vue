<template>
  <div>
    <label :for="id" class="block text-sm font-semibold text-primary mb-1">
      {{ label }}
      <span v-if="!required" class="font-normal text-text-secondary">(optional)</span>
    </label>
    <p v-if="hint" :id="hintId" class="text-xs text-text-secondary mb-1.5">{{ hint }}</p>

    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :name="id"
      :rows="rows"
      :required="required"
      :aria-describedby="describedBy"
      :aria-invalid="!!error"
      :value="modelValue"
      class="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:outline-none"
      @input="onInput"
    />
    <input
      v-else
      :id="id"
      :name="id"
      :type="type"
      :required="required"
      :autocomplete="autocomplete"
      :aria-describedby="describedBy"
      :aria-invalid="!!error"
      :value="modelValue"
      class="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:outline-none"
      @input="onInput"
    />

    <p v-if="error" :id="errorId" class="text-xs text-error mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  id: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  modelValue: string
  hint?: string
  error?: string
  required?: boolean
  autocomplete?: string
  rows?: number
}>(), {
  type: 'text',
  required: false,
  rows: 4,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const hintId = computed(() => `${props.id}-hint`)
const errorId = computed(() => `${props.id}-error`)
const describedBy = computed(() => {
  const ids = [props.hint ? hintId.value : null, props.error ? errorId.value : null].filter(Boolean)
  return ids.length ? ids.join(' ') : undefined
})

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement | HTMLTextAreaElement).value)
}
</script>
