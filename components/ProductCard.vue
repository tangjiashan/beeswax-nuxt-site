<template>
  <NuxtLink :to="href" class="group card block overflow-hidden">
    <!-- Image Area -->
    <div class="relative overflow-hidden h-56 bg-bark-50">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        :onerror="`this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f5f0eb%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%23b5a488%22 font-size=%2216%22 dy=%22.3em%22>${encodeURIComponent(title)}</text></svg>'`"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-honey-100 to-cream-200 flex items-center justify-center">
        <span class="text-bark-300 text-sm">{{ title }}</span>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-bark-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-4 left-4 text-white animate-fade-in-up">
          <span class="text-sm font-medium">View Details</span>
          <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3 class="font-bold text-lg text-bark-800 group-hover:text-honey-600 transition-colors">{{ title }}</h3>
      <p class="text-bark-400 text-sm mt-2 leading-relaxed">{{ description }}</p>
      <div class="mt-3 flex items-center justify-between">
        <span class="text-honey-600 font-semibold text-sm">Get Quote</span>
        <span class="opacity-0 group-hover:opacity-100 transition-opacity text-honey-500 text-sm font-medium">
          Inquiry Now &rarr;
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  description: string
  href?: string
}>()
</script>
