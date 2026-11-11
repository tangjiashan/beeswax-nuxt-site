<template>
  <div>
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">About Us</h1>
        <p class="section-subtitle mx-auto">Custom logo beeswax bread bags for bakeries, retailers and private label buyers.</p>
      </div>
    </section>

    <!-- Company Intro -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title mb-6">Guangxi YiXing Textile Co., Ltd.</h2>
            <p class="text-bark-500 leading-relaxed mb-4">
              Based in Hezhou, Guangxi, YiXing Textile specializes in reusable beeswax bread bags printed with your logo. We also customize canvas cosmetic bags and tote bags.
            </p>
            <p class="text-bark-500 leading-relaxed mb-4">
              For bread bags, choose a buckle or an L-shaped zipper. Tell us your preferred size, print placement and order quantity so we can prepare a quote.
            </p>
            <p class="text-bark-500 leading-relaxed">
              Our bread bag coating contains 85% beeswax, 5% jojoba oil and 10% resin.
            </p>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img loading="lazy" decoding="async" :src="factory1" alt="Factory" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="test-reports" aria-labelledby="reports-heading" class="py-16 bg-bark-50">
      <div class="section-container">
        <h2 id="reports-heading" class="section-title mb-4">Beeswax Bread Bag Test Reports</h2>
        <p class="max-w-3xl text-bark-600 leading-relaxed">The laboratories list Guangxi YiXing Textile as the applicant and manufacturer. Each result below applies to the submitted sample and the tests identified in that report.</p>
        <div class="grid gap-6 mt-8 lg:grid-cols-3">
          <article v-for="report in breadBagReports" :key="report.id" class="card overflow-hidden">
            <img :src="report.cover" alt="" width="560" height="210" loading="lazy" decoding="async" class="w-full h-auto" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-bark-800">{{ report.heading }}</h3>
              <p class="mt-2 text-sm text-bark-600">{{ report.models }} · {{ report.date }}</p>
              <p class="mt-4 text-bark-700 leading-relaxed">{{ report.result }}</p>
              <p class="mt-4 text-sm text-bark-600">{{ report.lab }}<br />Report {{ report.id }}</p>
            </div>
          </article>
        </div>
        <p class="mt-8 max-w-3xl text-bark-600">For a custom order, tell us the model, materials and destination market so we can identify the relevant report and discuss any additional testing.</p>
        <NuxtLink to="/contact/?product=beeswax-bread-bags" class="inline-block mt-3 underline font-semibold">Ask about a bread bag report</NuxtLink>
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
            <img loading="lazy" decoding="async" :src="factory3" alt="Production line" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Production Workshop</p>
              <p class="text-sm text-white/80">Automated assembly line</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img loading="lazy" decoding="async" :src="factory2" alt="Quality inspection" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">Quality Inspection</p>
              <p class="text-sm text-white/80">Strict testing and verification</p>
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
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Looking Forward to Working With You</h2>
        <p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">Get pricing, samples, and customization options. Our team responds within 24 hours.</p>
        <NuxtLink to="/contact/" class="btn-primary text-lg px-8 py-4">
          Contact Us
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import factory1 from '~/assets/images/factory1-png.webp'
import factory2 from '~/assets/images/factory2-png.webp'
import factory3 from '~/assets/images/factory2-jpg.webp'

const breadBagReports = [
  {
    heading: 'U.S. FDA reference testing',
    models: 'YX-2025 and YX-2027',
    date: 'March 2026',
    result: 'For the cotton cloth, the lab recorded passing results for lead, cadmium, formaldehyde and colour fastness to rubbing.',
    lab: 'Shenzhen HTT Technology Co., Ltd.',
    id: 'HTT202603552CH1',
    cover: '/report-covers/us-cotton.svg',
  },
  {
    heading: 'German LFGB reference testing',
    models: 'YX-2025 and YX-2027',
    date: 'March 2026',
    result: 'The lab reported passing results for the requested tests, including formaldehyde, chlorophenols, organotin compounds and azo dyes.',
    lab: 'Shenzhen HTT Technology Co., Ltd.',
    id: 'HTT202603552CH',
    cover: '/report-covers/de-substances.svg',
  },
  {
    heading: 'EU food contact testing',
    models: 'YX-2027 cotton cloth',
    date: 'May 2026',
    result: 'The cotton cloth sample passed the listed tests, including odour and taste, phthalate content and specific migration of 19 heavy metals.',
    lab: 'Guangzhou Supreme Technology & Testing Service Co., Ltd.',
    id: 'XNO260518603FX2-1',
    cover: '/report-covers/eu-migration.svg',
  },
]

definePageMeta({
  title: 'About Us — Beeswax Bread Bags Factory',
})

useSeoMeta({
  title: 'About Us — Beeswax Bread Bags Factory',
  description: 'Meet YiXing Textile in Hezhou, Guangxi. We customize beeswax bread bags, canvas cosmetic bags and totes with your brand’s logo.',
})
</script>
