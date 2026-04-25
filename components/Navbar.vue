<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      scrolled
        ? 'h-16 md:h-[72px] bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.04)] border-b border-bark-100/60'
        : 'h-16 md:h-20 bg-gradient-to-b from-white/80 to-transparent'
    ]"
  >
    <!-- Subtle top accent line -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey-400/40 to-transparent transition-opacity duration-500"
      :class="scrolled ? 'opacity-0' : 'opacity-100'"
    />

    <div class="section-container h-full flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div class="relative">
          <div class="w-10 h-10 bg-gradient-to-br from-honey-400 to-honey-500 rounded-xl flex items-center justify-center shadow-md shadow-honey-500/20 group-hover:shadow-lg group-hover:shadow-honey-500/30 transition-all duration-300">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg leading-tight text-bark-800 tracking-tight"><span class="text-honey-500">YiMei Textile</span></span>
          <span class="text-[10px] leading-tight text-bark-400 font-medium tracking-widest uppercase">Factory Direct</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="relative px-3.5 py-2 text-sm font-medium text-bark-500 rounded-lg hover:text-bark-800 transition-colors duration-200"
          :class="{ 'text-bark-800': route.path === item.path }"
        >
          <span class="relative z-10">{{ item.label }}</span>
          <!-- Active indicator -->
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-honey-500 transition-all duration-300"
            :class="route.path === item.path ? 'w-5' : 'w-0 hover:w-4'"
          />
        </NuxtLink>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- CTA button (desktop) -->
        <NuxtLink
          to="/contact"
          class="btn-primary text-sm px-5 py-2.5 hidden md:inline-flex items-center gap-2 group"
        >
          Get Free Quote
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>

        <!-- Mobile toggle -->
        <button
          class="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center text-bark-600 hover:text-honey-600 hover:bg-honey-50 transition-all duration-200"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Toggle menu</span>
          <div class="w-5 h-4 relative flex flex-col justify-between">
            <span
              class="block w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"
              :class="mobileOpen ? 'rotate-45 translate-y-[6px]' : ''"
            />
            <span
              class="block w-full h-0.5 bg-current rounded-full transition-all duration-300"
              :class="mobileOpen ? 'opacity-0 scale-0' : ''"
            />
            <span
              class="block w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"
              :class="mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-bark-800/20 backdrop-blur-sm z-[-1]"
        @click="mobileOpen = false"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div v-if="mobileOpen" class="md:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-bark-800/10 border border-bark-100/50 overflow-hidden">
        <div class="p-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-bark-600 hover:text-bark-800 hover:bg-honey-50/80 transition-all duration-200"
            :class="{ 'text-bark-800 bg-honey-50': route.path === item.path }"
            @click="mobileOpen = false"
          >
            <span class="w-1.5 h-1.5 rounded-full" :class="route.path === item.path ? 'bg-honey-500' : 'bg-bark-200'" />
            {{ item.label }}
          </NuxtLink>
        </div>
        <div class="p-3 pt-0">
          <NuxtLink
            to="/contact"
            class="btn-primary text-sm w-full justify-center"
            @click="mobileOpen = false"
          >
            Get Free Quote
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
