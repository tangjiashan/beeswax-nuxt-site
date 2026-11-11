import { trackEnquiry } from '~/utils/analytics'

export default defineNuxtPlugin(() => {
  if (import.meta.dev || !['www.beeswaxbag.cn', 'beeswaxbag.cn'].includes(window.location.hostname)) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', 'G-8YX343DNZ7')
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8YX343DNZ7'
  document.head.appendChild(script)

  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null
    if (!link) return
    const url = new URL(link.href)
    const position = link.dataset.analyticsPosition || 'contact_details'
    if (url.protocol === 'mailto:') trackEnquiry('email_click', position)
    if (url.hostname === 'wa.me') trackEnquiry('whatsapp_click', position)
  })
})
