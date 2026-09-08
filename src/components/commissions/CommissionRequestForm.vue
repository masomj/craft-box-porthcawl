<template>
  <form novalidate class="space-y-5 max-w-xl" @submit.prevent="submit">
    <FormField
      id="commission-name"
      v-model="fields.name"
      label="Name"
      required
      autocomplete="name"
    />
    <FormField
      id="commission-email"
      v-model="fields.email"
      label="Email"
      type="email"
      required
      autocomplete="email"
    />
    <FormField
      id="commission-phone"
      v-model="fields.phone"
      label="Phone"
      type="tel"
      autocomplete="tel"
      hint="Only if you'd rather we call you about your request."
    />
    <FormField
      id="commission-message"
      v-model="fields.message"
      label="What would you like commissioned?"
      type="textarea"
      required
      :rows="4"
      hint="A rough idea is plenty for a first enquiry -- sizes, colours, occasion, budget, whatever you have in mind."
    />

    <!-- Honeypot: off-screen, not display:none, so bots that fill every field still get caught. -->
    <div class="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label for="commission-website" aria-hidden="true" tabindex="-1">Leave this field blank</label>
      <input
        id="commission-website"
        v-model="fields.honeypot"
        type="text"
        name="website"
        aria-hidden="true"
        tabindex="-1"
        autocomplete="off"
      />
    </div>

    <BaseButton type="submit" :disabled="status === 'submitting'">
      {{ status === 'submitting' ? 'Sending…' : 'Send Commission Request' }}
    </BaseButton>

    <p role="status" aria-live="polite" class="text-sm" :class="statusClass">
      <template v-if="status === 'success'">Thanks! Your request has been sent -- we'll be in touch soon.</template>
      <template v-else-if="status === 'error'">{{ errorMessage }}</template>
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '../shared/BaseButton.vue'
import FormField from '../shared/FormField.vue'
import { useCommissionForm } from '../../composables/useCommissionForm'

const props = defineProps<{ artistName: string; artistSlug: string }>()

const { fields, status, errorMessage, submit } = useCommissionForm(props.artistName, props.artistSlug)

const statusClass = computed(() => ({
  success: 'text-success',
  error: 'text-error',
}[status.value as 'success' | 'error'] ?? ''))
</script>
