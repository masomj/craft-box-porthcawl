import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/emailjs'

export type CommissionFormStatus = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Drives the commission request form on CommissionPage.vue. Sends via
 * EmailJS client-side -- see src/config/emailjs.ts for the (currently
 * placeholder) project IDs.
 */
export function useCommissionForm(artistName: string, artistSlug: string) {
  const fields = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  })

  const status = ref<CommissionFormStatus>('idle')
  const errorMessage = ref('')

  async function submit() {
    if (fields.honeypot) {
      // Bot filled the hidden field -- pretend success without sending anything.
      status.value = 'success'
      return
    }

    status.value = 'submitting'
    errorMessage.value = ''

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
          // This form sends to one shared inbox (craftboxporthcawl@gmail.com),
          // not a per-artist address -- artistName/artistSlug let Mason see at
          // a glance which artist each enquiry is for. True per-artist routing
          // would need EmailJS's paid dynamic-routing tier, or a separate
          // template per artist; out of scope for this pass.
          artistName,
          artistSlug,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )

      status.value = 'success'
      fields.name = ''
      fields.email = ''
      fields.phone = ''
      fields.message = ''
    } catch {
      status.value = 'error'
      errorMessage.value = "Something went wrong sending your request. Please try again, or email us directly at craftboxporthcawl@gmail.com."
    }
  }

  return { fields, status, errorMessage, submit }
}
