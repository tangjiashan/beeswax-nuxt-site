<template>
  <div>
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">Our Products</h1>
        <p class="section-subtitle mx-auto">Beeswax bread bags, reusable wraps, and custom eco bags for bakeries, retailers, and eco-conscious brands.</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :href="product.href"
          />
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-16 bg-honey-50">
      <div class="section-container text-center">
        <h2 class="text-2xl font-bold text-bark-800 mb-3">Need Something Custom?</h2>
        <p class="text-bark-500 mb-6">We can create bespoke beeswax products tailored to your brand and requirements.</p>
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
import ProductCard from '~/components/ProductCard.vue'
import Footer from '~/components/Footer.vue'
import standard from '~/assets/images/bee2.jpg'
import wraps from '~/assets/images/beebag2.jpg'
import custom from '~/assets/images/breadbag2.jpg'

const products = [
  { id: 1, title: 'Beeswax Bread Bag - Standard', image: standard, description: 'Reusable beeswax bread bag, size L. Custom logo and packaging available.', href: '/products/standard' },
  { id: 2, title: 'Beeswax Wraps - Set of 3', image: wraps, description: 'Assorted sizes, food-safe, machine-washable. Perfect starter set.', href: '/products/wraps' },
  { id: 3, title: 'Custom Eco Bag', image: custom, description: 'Custom sizes and packaging for wholesale OEM orders.', href: '/products/custom' }
]

definePageMeta({
  title: 'Products — Beeswax Bread Bags Factory',
})
useHead({
  title: 'Products — Beeswax Bread Bags Factory',
  meta: [
    { name: 'description', content: 'Wholesale beeswax bread bags, reusable wraps and custom eco bags. OEM available, low MOQ.' },
    { name: 'keywords', content: 'beeswax bread bags, bread bags, reusable wraps, wholesale, OEM' }
  ]
})
</script>
