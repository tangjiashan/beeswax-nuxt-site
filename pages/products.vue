<template>
  <div>
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">Our Products</h1>
        <p class="section-subtitle mx-auto">Explore beeswax bread bags, canvas cosmetic bags and canvas tote bags for your next project.</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid items-stretch gap-8 lg:grid-cols-3">
          <article v-for="product in productCategories" :key="product.id" class="card overflow-hidden flex flex-col">
            <NuxtLink v-if="product.photos.length" :to="product.path" :aria-label="'Learn about ' + product.title">
              <img :src="product.photos[0]?.src" :alt="product.photos[0].label" class="w-full h-64 object-contain bg-bark-50" />
            </NuxtLink>
            <div class="p-6 flex flex-col flex-1">
              <h2 class="font-bold text-2xl text-bark-800"><NuxtLink :to="product.path">{{ product.title }}</NuxtLink></h2>
              <p class="mt-3 text-bark-600">{{ product.description }}</p>
              <dl class="mt-5 divide-y divide-bark-100">
                <div v-for="[label, value] in product.specs" :key="label" class="py-2"><dt class="font-semibold">{{ label }}</dt><dd class="text-sm text-bark-600">{{ value }}</dd></div>
              </dl>
              <div class="mt-auto pt-6 flex flex-wrap gap-4 items-center">
                <NuxtLink :to="product.path" class="underline">Learn more</NuxtLink>
                <NuxtLink :to="{ path: '/contact', query: { product: product.slug } }" class="btn-primary">Get a quote</NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-16 bg-honey-50">
      <div class="section-container text-center">
        <h2 class="text-2xl font-bold text-bark-800 mb-3">Need Something Custom?</h2>
        <p class="text-bark-500 mb-6">Tell us which bag you need, your quantity and how you would like to customize it.</p>
        <NuxtLink to="/contact" class="btn-primary">
          Request Custom Quote
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { productCategories } from '~/data/product-categories'

definePageMeta({
  title: 'Bread Bags & Canvas Bags | YiXing Textile',
})
useHead({
  title: 'Bread Bags & Canvas Bags | YiXing Textile',
  meta: [
    { name: 'description', content: 'Explore beeswax bread bags, canvas cosmetic bags and canvas tote bags, and enquire about customization.' },
    { name: 'keywords', content: 'beeswax bread bags, canvas cosmetic bags, canvas tote bags' }
  ]
})
</script>
