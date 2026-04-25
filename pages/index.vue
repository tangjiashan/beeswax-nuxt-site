<template>
  <div>
    <Navbar />
    <Hero />
    <TrustStats />
    <WhyChooseUs />

    <!-- Products Showcase -->
    <section ref="productsSection" class="py-20 bg-gradient-to-b from-white to-bark-50">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Our Products</h2>
          <p class="section-subtitle mx-auto">Discover our range of eco-friendly beeswax bread bags, wraps, and custom solutions.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in productsList"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :href="product.href"
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

    <!-- Certifications -->
    <section class="py-20 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Certifications & Standards</h2>
          <p class="section-subtitle mx-auto">Our products meet the highest safety and quality standards for food contact materials.</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="card p-8 flex flex-col sm:flex-row items-center gap-6">
            <div class="w-32 h-32 shrink-0 bg-gradient-to-br from-honey-100 to-honey-200 rounded-2xl flex items-center justify-center">
              <svg class="w-16 h-16 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div class="text-center sm:text-left">
              <h3 class="font-bold text-xl text-bark-800 mb-2">FDA Food Contact Compliant</h3>
              <p class="text-bark-400 leading-relaxed">All materials and beeswax coatings comply with FDA food contact requirements. Certified safe for direct food packaging use.</p>
              <div class="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  FDA Approved
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Food Safe
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Biodegradable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <Testimonials />

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
import TrustStats from '~/components/TrustStats.vue'
import WhyChooseUs from '~/components/WhyChooseUs.vue'
import ProductCard from '~/components/ProductCard.vue'
import Testimonials from '~/components/Testimonials.vue'
import Footer from '~/components/Footer.vue'
import factory1 from '~/assets/images/factory2.jpg'
import factory2 from '~/assets/images/factory2.png'
import standard from '~/assets/images/bee1.jpg'
import wraps from '~/assets/images/breadbag1.jpg'
import custom from '~/assets/images/beebag1.jpg'
import { ref } from 'vue'

const productsList = [
  { id: 1, title: 'Beeswax Bread Bag - Standard', image: standard, description: 'Reusable beeswax bread bag, size L. Custom logo and packaging available.', href: '/products/standard' },
  { id: 2, title: 'Beeswax Wraps - Set of 3', image: wraps, description: 'Assorted sizes, food-safe, machine-washable. Perfect starter set.', href: '/products/wraps' },
  { id: 3, title: 'Custom Eco Bag', image: custom, description: 'Custom sizes and packaging for wholesale OEM orders.', href: '/products/custom' }
]

const productsSection = ref(null)
</script>
