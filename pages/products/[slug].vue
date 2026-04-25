<template>
  <div>
    <Navbar />

    <div v-if="product" class="pt-24 pb-20">
      <div class="section-container">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-bark-400 mb-8">
          <NuxtLink to="/" class="hover:text-honey-500 transition-colors">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/products" class="hover:text-honey-500 transition-colors">Products</NuxtLink>
          <span>/</span>
          <span class="text-bark-700">{{ product.title }}</span>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Product Image -->
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img :src="product.image" :alt="product.title" class="w-full h-80 md:h-[500px] object-cover" />
          </div>

          <!-- Product Info -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-honey-100 text-honey-700 text-xs font-semibold rounded-full mb-4">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              In Stock
            </div>

            <h1 class="text-3xl md:text-4xl font-bold text-bark-800 mb-4">{{ product.title }}</h1>
            <p class="text-lg text-bark-500 leading-relaxed mb-8">{{ product.description }}</p>

            <!-- Specs -->
            <div class="bg-bark-50 rounded-2xl p-6 mb-8">
              <h3 class="font-semibold text-bark-800 mb-4">Product Specifications</h3>
              <dl class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <dt class="text-bark-400">Material</dt>
                  <dd class="font-medium text-bark-700">Organic Cotton + Natural Beeswax</dd>
                </div>
                <div class="flex justify-between border-t border-bark-100 pt-3">
                  <dt class="text-bark-400">Min Order</dt>
                  <dd class="font-medium text-bark-700">200 pcs</dd>
                </div>
                <div class="flex justify-between border-t border-bark-100 pt-3">
                  <dt class="text-bark-400">Lead Time</dt>
                  <dd class="font-medium text-bark-700">15-25 days</dd>
                </div>
                <div class="flex justify-between border-t border-bark-100 pt-3">
                  <dt class="text-bark-400">Certification</dt>
                  <dd class="font-medium text-bark-700">FDA Compliant</dd>
                </div>
                <div class="flex justify-between border-t border-bark-100 pt-3">
                  <dt class="text-bark-400">Customization</dt>
                  <dd class="font-medium text-bark-700">Logo, Size, Packaging</dd>
                </div>
              </dl>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contact" class="btn-primary text-base">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Get Quote
              </NuxtLink>
              <button class="btn-secondary text-base">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="pt-32 pb-20 text-center">
      <div class="section-container">
        <div class="w-20 h-20 mx-auto mb-6 bg-bark-100 rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 text-bark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-bark-800 mb-3">Product Not Found</h2>
        <p class="text-bark-400 mb-8">The product you're looking for doesn't exist.</p>
        <NuxtLink to="/products" class="btn-primary">Browse All Products</NuxtLink>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { products } from '~/data/products'
import standardImg from '~/assets/images/bee1.jpg'
import wrapsImg from '~/assets/images/beebag1.jpg'
import customImg from '~/assets/images/breadbag1.jpg'
import { useRoute } from 'vue-router'
import { useHead } from '#imports'

const route = useRoute()
const slug = route.params.slug
const product = products.find(p => p.slug === slug)

if (product) {
  const imageMap = { standard: standardImg, wraps: wrapsImg, custom: customImg }
  product.image = imageMap[product.slug] || ''

  useHead({
    title: `${product.title} — Beeswax Bags Factory`,
    meta: [
      { name: 'description', content: product.description },
      { property: 'og:title', content: product.title },
      { property: 'og:description', content: product.description },
      { property: 'og:image', content: product.image }
    ]
  })
}
</script>
