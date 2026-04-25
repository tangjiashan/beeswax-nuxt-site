<template>
  <section class="min-h-screen flex items-center bg-gradient-to-br from-cream-50 via-honey-50 to-cream-100 relative overflow-hidden">
    <!-- Dot pattern overlay -->
    <div class="absolute inset-0 bg-pattern opacity-50" />

    <!-- Decorative blur circles -->
    <div class="absolute top-20 right-20 w-72 h-72 bg-honey-200/30 rounded-full blur-3xl animate-pulse-slow" />
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-honey-100/40 rounded-full blur-3xl" />

    <div class="section-container relative z-10 py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Copy -->
        <div class="animate-fade-in-up">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-honey-100 border border-honey-200 rounded-full text-sm font-medium text-honey-700 mb-6">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Factory Direct
          </div>

          <!-- Heading -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-bark-800 leading-[1.15] mb-6">
            Professional <span class="text-gradient">Beeswax Bags</span><br />
            & Bread Bag Manufacturer
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-bark-500 mb-8 max-w-lg leading-relaxed">
            OEM/ODM customization available, 15+ years of production experience, FDA certified, exported to 30+ countries worldwide.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 mb-10">
            <NuxtLink to="/products" class="btn-primary">
              View Products
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact Us
            </NuxtLink>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm text-bark-600">MOQ <span class="font-bold text-bark-800">200 pcs</span></span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm text-bark-600"><span class="font-bold text-bark-800">FDA</span> Certified</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm text-bark-600">Export to <span class="font-bold text-bark-800">30+</span> Countries</span>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="relative animate-fade-in" style="animation-delay: 0.2s">
          <div class="rounded-3xl overflow-hidden shadow-2xl shadow-bark-300/20 relative">
            <img
              src="~/assets/images/main.png"
              alt="Beeswax bags product showcase"
              class="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/30 to-transparent" />
          </div>

          <!-- Floating card -->
          <div class="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg animate-float">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-honey-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-honey-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <p class="font-bold text-bark-800 text-sm">50+ Happy Clients</p>
                <p class="text-xs text-bark-500">Across 30+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
