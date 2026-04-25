<template>
  <footer class="bg-bark-800 text-bark-200">
    <div class="section-container">
      <div class="md:grid md:grid-cols-4 gap-10 py-14">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-honey-400 to-honey-600 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
              </svg>
            </div>
            <span class="font-bold text-xl text-white"><span class="text-honey-400">YiMei Textile</span></span>
          </div>
          <p class="text-bark-300 text-sm leading-relaxed">
            Professional manufacturer of beeswax bags, bread bags and food storage bags. OEM/ODM available, exporting to 30+ countries worldwide.
          </p>
        </div>

        <!-- Products -->
        <div>
          <h4 class="font-semibold text-white mb-4">Products</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/products" class="hover:text-honey-400 transition-colors">Beeswax Bags</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-honey-400 transition-colors">Bread Bags</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-honey-400 transition-colors">Food Storage Bags</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-honey-400 transition-colors">Custom Bags</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-white mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-honey-400 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-honey-400 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-white mb-4">Contact</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-honey-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>contact@beeswaxbag.cn</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-honey-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.45 11.45 0 006.243 6.243l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+86 19042786974</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-honey-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Zhongshan Ave & G232 Intersection, Zhongshan, Hezhou, Guangxi, China</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-bark-700 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-bark-400">
        <p>&copy; {{ new Date().getFullYear() }} GuangXi YiMei Textile Co., Ltd. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-honey-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-honey-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
