import { productCategories } from '~/data/product-categories'

export function trackEnquiry(eventName, buttonPosition) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const url = new URL(window.location.href)
  const category = productCategories.find(item =>
    item.slug === url.searchParams.get('product') ||
    item.path === url.pathname.replace(/\/+$/, '') + '/',
  )
  // Only send known product identifiers and the path, never form contents.
  window.gtag('event', eventName, {
    page_path: url.pathname,
    product_category: category?.slug || 'general',
    button_position: buttonPosition,
    transport_type: 'beacon',
  })
}
