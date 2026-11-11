<template>
  <div>
    <NuxtPage />
    <WhatsAppButton />
  </div>
</template>

<script setup>
const route = useRoute()
useHead(() => ({
  link: [{
    rel: 'canonical',
    href: 'https://www.beeswaxbag.cn' + (route.path.replace(/\/+$/, '') || '') + '/',
  }],
}))
</script>
