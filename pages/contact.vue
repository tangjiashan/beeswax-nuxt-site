<template>
  <div>
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">Get in Touch</h1>
        <p class="section-subtitle mx-auto">Have a question or need a quote? Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info Sidebar -->
          <div class="lg:col-span-2 space-y-8">
            <div class="card p-6">
              <h3 class="font-bold text-bark-800 text-lg mb-6">Contact Information</h3>
              <ul class="space-y-5">
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">Email</p>
                    <p class="text-bark-500 text-sm">contact@beeswaxbag.cn</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">WhatsApp</p>
                    <p class="text-bark-500 text-sm">+86 19042786974</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">Address</p>
                    <p class="text-bark-500 text-sm">Zhongshan Ave & G232 Intersection, Zhongshan, Hezhou, Guangxi, China</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Response Time -->
            <div class="card p-6 bg-honey-50 border-honey-200">
              <div class="flex items-center gap-3 mb-3">
                <svg class="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="font-bold text-bark-800">Fast Response</h3>
              </div>
              <p class="text-bark-500 text-sm">We typically respond within 24 hours on business days. For urgent inquiries, please reach out via WhatsApp.</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import ContactForm from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'
</script>
