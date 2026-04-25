<template>
  <div>
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">About Us</h1>
        <p class="section-subtitle mx-auto">15+ years of beeswax bag R&D and production, delivering eco-friendly packaging solutions worldwide.</p>
      </div>
    </section>

    <!-- Company Intro -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title mb-6">Guangxi YiMei Textile Co., Ltd.</h2>
            <p class="text-bark-500 leading-relaxed mb-4">
              Founded in Hezhou, Guangxi, YiMei Textile is a professional manufacturer of beeswax bags, bread bags, food storage bags and other eco-friendly packaging products. With over 15 years of production experience, our products are exported to Europe, Southeast Asia and 30+ countries worldwide.
            </p>
            <p class="text-bark-500 leading-relaxed mb-4">
              We operate a complete production line covering raw material sourcing, beeswax formula R&D, fabric processing, finished product manufacturing, and quality inspection. Every step follows the ISO9001 quality management system to ensure stable and reliable product quality.
            </p>
            <p class="text-bark-500 leading-relaxed">
              Our products are made with natural beeswax, jojoba oil, and organic cotton — reusable, biodegradable, and an ideal alternative to plastic wrap. We are committed to providing sustainable eco-packaging solutions for customers worldwide.
            </p>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory1" alt="Factory" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory Photos -->
    <section class="py-20 bg-gradient-to-b from-white to-bark-50">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Factory Environment</h2>
          <p class="section-subtitle mx-auto">Modern production base, advanced equipment, strict quality control</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory3" alt="Production line" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Production Workshop</p>
              <p class="text-sm text-white/80">Automated assembly line</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory2" alt="Quality inspection" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Quality Inspection</p>
              <p class="text-sm text-white/80">Strict testing and verification</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">Certifications</h2>
          <p class="section-subtitle mx-auto">Internationally certified, quality guaranteed</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div v-for="cert in certifications" :key="cert.name" class="card p-6 text-center hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-4 bg-honey-100 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="6"/>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
                <path d="M9 8l2 2 4-4"/>
              </svg>
            </div>
            <h4 class="font-bold text-bark-800">{{ cert.name }}</h4>
            <p class="text-bark-400 text-sm mt-1">{{ cert.desc }}</p>
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
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Looking Forward to Working With You</h2>
        <p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">Get pricing, samples, and customization options. Our team responds within 24 hours.</p>
        <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
          Contact Us
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import factory1 from '~/assets/images/factory1.png'
import factory2 from '~/assets/images/factory2.png'
import factory3 from '~/assets/images/factory2.jpg'

const certifications = [
  { name: 'ISO9001', desc: 'Quality Management System' },
  { name: 'FDA', desc: 'US Food Contact Certified' },
  { name: 'SGS', desc: 'SGS Test Report' },
  { name: 'LFGB', desc: 'German Food Grade Certified' },
]

definePageMeta({
  title: 'About Us — Beeswax Bread Bags Factory',
})

useSeoMeta({
  title: 'About Us — Beeswax Bread Bags Factory',
  description: '15+ years of beeswax bag production experience. ISO9001 certified, FDA food-grade certified, exporting to 30+ countries. A trusted eco-packaging manufacturer.',
})
</script>
