<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="animate-fade-in-up" v-for="(stat, i) in stats" :key="i">
          <p class="text-4xl md:text-5xl font-bold text-gradient mb-2">{{ stat.value }}</p>
          <p class="text-bark-500 text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '30+', label: 'Countries Exported' },
  { value: '50+', label: 'Happy Clients' },
  { value: '200', label: 'Min Order (pcs)' },
  { value: '15+', label: 'Years Experience' },
]
</script>
