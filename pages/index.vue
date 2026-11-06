<template>
  <div>
    <Navbar />
    <Hero />
    <WhyChooseUs />

    <!-- Products Showcase -->
    <section ref="productsSection" class="py-20 bg-gradient-to-b from-white to-bark-50">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Our Products</h2>
          <p class="section-subtitle mx-auto">Explore beeswax bread bags for bakeries, canvas cosmetic bags for gifting, and canvas totes for retail and events.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in productCategories"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            href="/products"
            action-label="View products"
          />
        </div>
      </div>
    </section>

    <!-- Factory Interior -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Inside Our Factory</h2>
          <p class="section-subtitle mx-auto">State-of-the-art production facilities with rigorous quality control at every step.</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory1" alt="Factory production line" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Production Line</p>
              <p class="text-sm text-white/80">Automated machinery & assembly</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory2" alt="Quality control" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Quality Control</p>
              <p class="text-sm text-white/80">Inspection & testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-bark-700 to-bark-800"></div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-honey-400/10 rounded-full blur-3xl"></div>

      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Start Your Beeswax Product Line Today</h2>
        <p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">Get pricing, samples, and customization options. Our team responds within 24 hours.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-honey-500 text-white font-semibold rounded-xl shadow-lg shadow-honey-500/30 hover:bg-honey-400 hover:shadow-xl transition-all duration-300 text-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Send Inquiry
          </NuxtLink>
          <NuxtLink to="/products" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import WhyChooseUs from '~/components/WhyChooseUs.vue'
import ProductCard from '~/components/ProductCard.vue'
import Footer from '~/components/Footer.vue'
import factory1 from '~/assets/images/factory1.png'
import factory2 from '~/assets/images/factory2.png'
import { productCategories } from '~/data/product-categories'
import { ref } from 'vue'

const productsSection = ref(null)
</script>
