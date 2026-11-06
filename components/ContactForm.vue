<template>
  <div class="card p-8">
    <h2 class="text-2xl font-bold text-bark-800 mb-2">Send Us a Message</h2>
    <p class="text-bark-400 mb-8">Fill out the form and we'll get back to you soon.</p>

    <p v-if="category" class="mb-5 font-semibold">Product enquiry: {{ category.title }}</p>
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label class="label">Name</label>
          <input v-model="form.name" type="text" class="input-field" placeholder="Your name" aria-required="true" />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label class="label">Email</label>
          <input v-model="form.email" type="email" class="input-field" placeholder="you@example.com" aria-required="true" />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
      </div>

      <div>
        <label for="whatsapp-number" class="label">WhatsApp</label>
        <div class="grid gap-2 sm:grid-cols-[min(35%,11rem)_minmax(0,1fr)]">
          <select v-model="country" aria-label="Country or region calling code" autocomplete="tel-country-code" class="input-field min-w-0">
            <option value="">Country code</option>
            <option v-for="item in countries" :key="item.code" :value="item.code">+{{ item.dial }} · {{ item.name }}</option>
          </select>
          <input id="whatsapp-number" v-model="form.whatsapp" type="tel" autocomplete="tel" class="input-field min-w-0" placeholder="Phone number" aria-required="true" aria-describedby="whatsapp-help whatsapp-error" :aria-invalid="Boolean(errors.whatsapp)" />
        </div>
        <p id="whatsapp-help" class="text-sm mt-1">Choose a country for a local number, or enter a full number starting with +.</p>
        <p id="whatsapp-error" aria-live="polite" class="text-red-500 text-sm">{{ errors.whatsapp }}</p>
      </div>

      <div>
        <label class="label">Company Name</label>
        <input v-model="form.company" type="text" class="input-field" placeholder="Your company name" />
      </div>

      <div>
        <label class="label">Message</label>
        <textarea v-model="form.message" class="input-field resize-none" rows="5" placeholder="Tell us about your requirements..."></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
      </div>

      <div class="flex items-center gap-4 pt-2">
        <button type="submit" class="btn-primary" :disabled="submitting">
          <svg v-if="submitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
        <button type="button" @click="resetForm" :disabled="submitting" class="btn-secondary">
          Reset
        </button>
      </div>

      <div v-if="success" class="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
        <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Message sent successfully! We'll get back to you within 24 hours.
      </div>
    </form>
  </div>
</template>

<script setup>
import parsePhoneNumber, { getCountries, getCountryCallingCode } from 'libphonenumber-js/min'
import { computed, reactive, ref } from 'vue'
import { productCategories } from '~/data/product-categories'
const route = useRoute()
const category = computed(() => productCategories.find(item => item.slug === route.query.product))

const form = reactive({ name: '', email: '', company: '', whatsapp: '', message: '' })
const errors = reactive({ name: '', email: '', company: '', whatsapp: '', message: '' })
const success = ref(false)
const submitting = ref(false)

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const country = ref('')
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
const countries = getCountries().map(code => ({
  code, name: regionNames.of(code), dial: getCountryCallingCode(code),
})).sort((a, b) => a.name.localeCompare(b.name, 'en'))

const phone = computed(() => parsePhoneNumber(form.whatsapp.trim(), {
  defaultCountry: country.value || undefined,
  extract: false,
}))

function whatsappError() {
  if (!country.value && !form.whatsapp.trim().startsWith('+')) {
    return 'Choose your country or enter the full number with its calling code.'
  }
  if (!phone.value?.isPossible() || phone.value.ext) return 'Enter a valid phone number.'
  if (country.value && phone.value.countryCallingCode !== getCountryCallingCode(country.value)) {
    return 'The calling code does not match the selected country.'
  }
  return ''
}

function validate() {
  errors.name = form.name.trim().length < 2 ? 'Please enter your name.' : ''
  errors.email = !validateEmail(form.email) ? 'Please enter a valid email.' : ''
  errors.whatsapp = whatsappError()
  errors.message = form.message.trim().length < 6 ? 'Please enter a brief message.' : ''
  return !errors.name && !errors.email && !errors.whatsapp && !errors.message
}

async function handleSubmit() {
  success.value = false
  if (!validate()) return
  submitting.value = true
  try {
    const response = await fetch('https://formspree.io/f/mgordrrz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        product: category.value?.title,
        name: form.name,
        email: form.email,
        company: form.company,
        whatsapp: phone.value.number,
        message: form.message,
      }),
    })
    if (response.ok) {
      resetForm()
      success.value = true
    } else {
      console.error('Formspree error:', await response.text())
    }
  } catch (e) {
    console.error('Failed to submit form:', e)
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  country.value = ''
  Object.assign(form, { name: '', email: '', company: '', whatsapp: '', message: '' })
  success.value = false
  Object.assign(errors, { name: '', email: '', company: '', whatsapp: '', message: '' })
}
</script>
