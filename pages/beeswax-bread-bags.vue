<template>
  <div>
    <Navbar />
    <main class="section-container pt-28 pb-20">
      <nav aria-label="Breadcrumb" class="text-sm text-bark-600 mb-6"><NuxtLink to="/products/" class="underline">Products</NuxtLink> / Beeswax bread bags</nav>
      <header class="max-w-3xl">
        <p class="font-semibold text-honey-700">Wholesale · OEM · Private label</p>
        <h1 class="section-title mt-2">Custom Logo Beeswax Bread Bags</h1>
        <p class="mt-4 text-lg">Order from 200 bags with your bakery or retail logo. Compare two closures, choose a single front design or a repeating print, and tell us what you want to see on your private label sample.</p>
        <NuxtLink :to="quote" class="btn-primary mt-5">Request a bread bag quote</NuxtLink>
      </header>
      <section class="mt-12">
        <h2 class="text-2xl font-bold">Which closure works for your bread?</h2>
        <p class="mt-3">Both standard bags are 33 cm wide × 43 cm high. For a custom size, send the dimensions of the loaf and the clearance you need at the opening.</p>
        <div class="grid sm:grid-cols-2 gap-6 mt-5">
          <figure v-for="photo in bag.photos" :key="photo.src" class="card overflow-hidden">
            <img :src="photo.src" :alt="photo.label" class="w-full h-72 md:h-96 bg-bark-50 object-contain" />
            <figcaption class="p-4 font-semibold">{{ photo.label }}</figcaption>
          </figure>
        </div>
      </section>
      <section class="mt-12" aria-labelledby="print-examples">
        <h2 id="print-examples" class="text-2xl font-bold">Two ways to print a bread bag</h2>
        <div class="grid sm:grid-cols-2 gap-6 mt-5">
          <figure class="card overflow-hidden">
            <div class="h-56 overflow-hidden bg-bark-50">
              <img :src="bag.photos[1].src" alt="Detail of lettering above a loaf and wheat illustration on the YX-2027 sample" class="w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <figcaption class="p-5"><strong>YX-2027 · One front design.</strong> On this sample, the lettering sits above the loaf illustration. For a logo in this position, specify its finished width and distance from the top edge.</figcaption>
          </figure>
          <figure class="card overflow-hidden">
            <div class="h-56 overflow-hidden bg-bark-50">
              <img :src="bag.photos[0].src" alt="Detail of the repeating bread illustrations and lettering on the YX-2025 sample" class="w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <figcaption class="p-5"><strong>YX-2025 · Repeating artwork.</strong> Bread motifs and lettering repeat across the fabric. For a repeat using your logo, specify the spacing and check how the pattern meets the seams on your sample.</figcaption>
          </figure>
        </div>
      </section>
      <div class="grid md:grid-cols-2 gap-6 mt-12">
        <section class="card p-6"><h2 class="text-2xl font-bold">What can I print on a 200-bag order?</h2>
          <p class="mt-3">For small batches, discuss digital direct printing. Specify the logo width and its position on the bag. At finished size, text and fine details should be at least 3 mm. If a Pantone color matters to your brand, approve the shade on a physical sample.</p>
          <p class="mt-3">Reactive printing starts at 2,000 metres of fabric; five colors or fewer are recommended. This is a fabric-length requirement, not a minimum of 2,000 bags.</p>
        </section>
        <section class="card p-6"><h2 class="text-2xl font-bold">What changes with an OEM specification?</h2>
          <p class="mt-3">Start with the buckle or L-shaped zipper model. List the dimensions, closure, print and colors you want us to quote. For custom zipper colors, the component minimum is 3,000 metres; ask about stock colors for a shorter run.</p>
          <p class="mt-3">The standard coating formulation is 85% beeswax, 5% jojoba oil and 10% resin. Confirm fabric construction for the selected model. See the <NuxtLink to="/about/#test-reports" class="underline">test reports by bread bag model</NuxtLink> and specify the destination market when asking about your order.</p>
        </section>
        <section class="card p-6"><h2 class="text-2xl font-bold">How do I brief a private label order?</h2>
          <p class="mt-3">Describe how the bag should carry your brand: the logo on the fabric, any label text and how the finished bag should be presented for retail. Separate the bag print from packaging requests so each can be reviewed and priced individually.</p>
          <p class="mt-3">Begin with a written brief. We’ll follow up for artwork and confirm which label and packaging options are available before you approve the sample.</p>
        </section>
        <section class="card p-6"><h2 class="text-2xl font-bold">When can I receive a wholesale order?</h2>
          <p class="mt-3">Allow approximately one week for sampling, subject to the design. Reference production times are seven days for 500–1,000 bags and ten days for 2,000 bags. A 200-bag run needs its own schedule.</p>
          <p class="mt-3">Tell us your destination and required delivery date. Confirm the production start date, freight and trade terms separately; production time is not delivered lead time.</p>
        </section>
      </div>
      <section class="mt-10 rounded-2xl bg-honey-50 p-8">
        <h2 class="text-2xl font-bold">Request a quote for your brand</h2>
        <p class="my-4">Include your preferred model, dimensions, order quantity, logo placement, packaging requirements and destination. These details let us quote the same specification you intend to sample.</p>
        <NuxtLink :to="quote" class="btn-primary">Get a quote</NuxtLink>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { productCategories } from '~/data/product-categories'
const bag = productCategories.find(p => p.slug === 'beeswax-bread-bags')!
const quote = { path: '/contact/', query: { product: bag.slug } }
useSeoMeta({
  title: 'Custom Logo Beeswax Bread Bags | Wholesale & Private Label | YiXing',
  description: 'Compare two beeswax bread bag closures and plan a wholesale order from 200 pieces. Explore logo printing, OEM specifications, private label briefs and sampling.'
})
</script>
