<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="text-center mb-14">
        <h2 class="section-title mb-4">What Our Clients Say</h2>
        <p class="section-subtitle mx-auto">Trusted by brands across 30+ countries.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="card p-8 hover:-translate-y-1"
        >
          <!-- Stars -->
          <div class="flex gap-1 text-honey-400 mb-4">
            <svg v-for="s in 5" :key="s" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-bark-600 leading-relaxed mb-6 italic">
            &ldquo;{{ t.quote }}&rdquo;
          </p>

          <!-- Footer -->
          <div class="pt-4 border-t border-bark-100 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-honey-300 to-honey-500 flex items-center justify-center text-white font-bold text-sm">
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-bark-800 text-sm">{{ t.name }}</p>
              <p class="text-bark-400 text-xs">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Bakery Owner — UK',
    quote: 'The quality of the beeswax bags has been very consistent. After two years of cooperation, never had a single quality issue. The low MOQ was perfect for testing our new product line.',
  },
  {
    name: 'David K.',
    role: 'Food Trader — Germany',
    quote: 'The custom logo printing came out sharper than expected — clean and durable. Customer feedback has been excellent. Fast delivery and smooth cooperation throughout.',
  },
  {
    name: 'Anna L.',
    role: 'Eco Brand — Australia',
    quote: 'FDA and eco-certifications make our products more competitive in the international market. A reliable supplier with solid manufacturing capability and good communication.',
  },
]
</script>
