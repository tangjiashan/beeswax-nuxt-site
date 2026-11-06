<template>
  <div>
    <Navbar />
    <main class="section-container pt-28 pb-20">
      <NuxtLink to="/products" class="text-bark-600 underline">← All products</NuxtLink>
      <h1 class="section-title mt-6">{{ product.title }}</h1>
      <p class="mt-4 text-lg">{{ product.description }}</p>
      <div v-if="product.photos.length" class="grid gap-6 sm:grid-cols-2 my-8">
        <figure v-for="photo in product.photos" :key="photo.src" class="card overflow-hidden">
          <img :src="photo.src" :alt="photo.label" class="w-full h-72 md:h-96 object-contain bg-bark-50" />
          <figcaption class="p-4 font-semibold">{{ photo.label }}</figcaption>
        </figure>
      </div>
      <div class="grid gap-8 md:grid-cols-2 mt-8">
        <section><h2 class="text-2xl font-bold">{{ product.heading }}</h2><p class="mt-4">{{ product.detail }}</p>
          <dl class="mt-4"><div v-for="[label, value] in product.specs" :key="label" class="border-t py-3"><dt class="font-semibold">{{ label }}</dt><dd>{{ value }}</dd></div></dl>
        </section>
        <section class="card p-6 self-start"><h2 class="text-2xl font-bold">Request a quote</h2><p class="my-5">{{ product.brief }}</p>
          <NuxtLink :to="{ path: '/contact', query: { product: product.slug } }" class="btn-primary">Get a quote</NuxtLink>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { productCategories } from '~/data/product-categories'
definePageMeta({ key: route => route.path })
const slug = useRoute().params.category
const product = productCategories.find(item => item.slug === slug)
if (!product) throw createError({ statusCode: 404, statusMessage: 'Category not found' })
useSeoMeta({ title: product.title + ' | YiXing Textile', description: product.description })
</script>
