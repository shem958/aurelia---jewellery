<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative min-h-[85vh] flex items-center justify-center bg-noir-950 text-white overflow-hidden">
      <!-- Background Luxury Visual with Subtle Dark Gradient Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=85"
          alt="AURELIA Haute Joaillerie fine jewelry collection"
          class="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-noir-950/40"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.25em] font-medium mb-6">
          <span>Artisanal Haute Joaillerie</span>
          <span class="w-1 h-1 rounded-full bg-gold-400"></span>
          <span>Solid 18k & Platinum</span>
        </div>

        <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-white leading-[1.1] mb-6">
          Timeless Allure, <br class="hidden sm:inline" />
          <span class="italic font-normal text-gold-200">Handcrafted</span> Permanence.
        </h1>

        <p class="text-sm sm:text-base md:text-lg text-sand-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Discover bespoke creations forged in 100% recycled 18k solid gold, 950 platinum, and scintillating conflict-free lab diamonds. Built to be worn today and cherished for generations.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/products"
            class="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-noir-950 px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all shadow-xl hover:shadow-gold-500/20 text-center"
          >
            Explore All Creations
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="w-full sm:w-auto border border-sand-400/40 hover:border-gold-300 text-sand-100 hover:text-white px-8 py-4 text-xs uppercase tracking-widest font-medium transition-all text-center bg-noir-900/40 backdrop-blur-sm"
          >
            The Maison Story
          </NuxtLink>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <div class="flex flex-col items-center text-sand-400 text-[10px] uppercase tracking-widest gap-2 animate-bounce">
          <span>Discover</span>
          <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Categories Showcase -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
          Curated Galleries
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal">
          Explore by Category
        </h2>
        <div class="w-12 h-0.5 bg-gold-400 mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="cat in categories"
          :key="cat.id"
          :to="`/products?category=${cat.slug}`"
          class="group relative overflow-hidden aspect-[4/5] bg-sand-200 border border-sand-300/80 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <img
            :src="cat.image"
            :alt="`${cat.name} fine jewelry collection`"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-noir-950/85 via-noir-950/20 to-transparent"></div>

          <div class="absolute bottom-0 inset-x-0 p-6 text-white transform transition-transform duration-300">
            <span class="text-[10px] uppercase tracking-widest text-gold-300 font-semibold block mb-1">
              {{ cat.itemCount }} Exclusive Pieces
            </span>
            <h3 class="font-serif text-2xl font-light tracking-wide text-white group-hover:text-gold-200 transition-colors">
              {{ cat.name }}
            </h3>
            <p class="text-xs text-sand-200 mt-1 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
              {{ cat.description }}
            </p>
            <div class="mt-4 flex items-center gap-1.5 text-xs text-gold-300 font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View Collection</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Signature Creations (Featured Products) -->
    <section class="bg-sand-50/70 border-y border-sand-200/80 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
              Bespoke Selection
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal">
              Signature Creations
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-noir-900 hover:text-gold-700 transition-colors border-b border-noir-900 pb-1"
          >
            <span>View All Creations</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <!-- Atelier Heritage Spotlight -->
    <section class="py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 relative">
            <div class="aspect-[4/5] bg-sand-200 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Jewelry artisan hand-setting lab diamonds in solid gold"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <!-- Offset decorative box -->
            <div class="hidden sm:block absolute -bottom-8 -right-8 bg-noir-950 text-gold-100 p-8 max-w-xs shadow-2xl border border-gold-500/20">
              <p class="font-serif text-2xl text-white mb-2 italic">“Perfection in every micron.”</p>
              <p class="text-[11px] uppercase tracking-widest text-gold-400">Master Goldsmith, Antwerp</p>
            </div>
          </div>

          <div class="lg:col-span-6 space-y-6 lg:pl-6">
            <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
              The AURELIA Distinction
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal leading-snug">
              Ethical Fine Jewelry Without Compromise or Illusion
            </h2>
            <p class="text-sm text-noir-600 leading-relaxed">
              We reject the smoke and mirrors of traditional retail markups. Every single piece in the AURELIA catalog is forged with certified recycled 18k solid gold, 950 platinum, and scientifically identical conflict-free diamonds.
            </p>
            <div class="grid grid-cols-2 gap-6 pt-4 border-t border-sand-200">
              <div>
                <h4 class="font-serif text-xl font-medium text-noir-900">100% Recycled Gold</h4>
                <p class="text-xs text-noir-500 mt-1">Zero newly mined gold. Substantially lower carbon footprint.</p>
              </div>
              <div>
                <h4 class="font-serif text-xl font-medium text-noir-900">Lab Diamond Purity</h4>
                <p class="text-xs text-noir-500 mt-1">Type IIa carbon purity with identical optical and physical hardness.</p>
              </div>
              <div>
                <h4 class="font-serif text-xl font-medium text-noir-900">Lifetime Care</h4>
                <p class="text-xs text-noir-500 mt-1">Free yearly cleanings, claw inspections, and size adjustments.</p>
              </div>
              <div>
                <h4 class="font-serif text-xl font-medium text-noir-900">Complimentary Courier</h4>
                <p class="text-xs text-noir-500 mt-1">Discreet insured overnight courier with direct handover.</p>
              </div>
            </div>
            <div class="pt-4">
              <NuxtLink
                to="/about"
                class="inline-block bg-noir-950 text-gold-100 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
              >
                Learn More About Our Standards
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="bg-noir-950 text-white py-20 border-t border-noir-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div class="flex justify-center text-gold-400 mb-6 space-x-1">
          <span v-for="i in 5" :key="i">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
        <blockquote class="font-serif text-2xl sm:text-3xl text-sand-100 font-light italic leading-relaxed mb-6">
          “The Celestial Solitaire ring arrived in an exquisite wooden velvet-lined box. The diamond fire is incandescent. In an era of mass manufactured jewelry, AURELIA feels like a return to authentic, personal artistry.”
        </blockquote>
        <div class="text-xs uppercase tracking-widest text-gold-300 font-semibold">
          Camilla H. &mdash; Manhattan, New York
        </div>
        <p class="text-[11px] text-sand-400 mt-1">Verified Acquisition &bull; 1.50ct Celestial Solitaire in 18k Solid Gold</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Product, Category } from '~/server/db/schema'

// Fetch Categories and Featured Products via SSR
const { data: categories } = await useFetch<Category[]>('/api/categories')
const { data: featuredData } = await useFetch<{ products: Product[] }>('/api/products', {
  query: { featured: 'true', limit: 4 }
})

const featuredProducts = computed(() => featuredData.value?.products || [])

// Structured Data: Schema.org Organization & WebSite
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'JewelryStore',
            '@id': 'https://aurelia-jewelry.vercel.app/#store',
            'name': 'AURELIA Fine Jewelry',
            'url': 'https://aurelia-jewelry.vercel.app',
            'logo': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
            'description': 'Handcrafted fine jewelry crafted in ethical 18k solid gold, 950 platinum, and conflict-free lab diamonds.',
            'priceRange': '$$$',
            'currenciesAccepted': 'USD, EUR, GBP',
            'paymentAccepted': 'Credit Card, Apple Pay, PayPal',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '540 Madison Avenue',
              'addressLocality': 'New York',
              'addressRegion': 'NY',
              'postalCode': '10022',
              'addressCountry': 'US'
            }
          },
          {
            '@type': 'WebSite',
            '@id': 'https://aurelia-jewelry.vercel.app/#website',
            'url': 'https://aurelia-jewelry.vercel.app',
            'name': 'AURELIA Fine Jewelry',
            'publisher': {
              '@id': 'https://aurelia-jewelry.vercel.app/#store'
            }
          }
        ]
      })
    }
  ]
})

// Page SEO Meta
useSeoMeta({
  title: 'Artisanal Haute Joaillerie & Fine Jewelry',
  description: 'Shop handcrafted fine jewelry crafted in solid 18k gold and 950 platinum. Discover timeless engagement rings, tennis bracelets, necklaces, and diamond earrings.',
  ogTitle: 'AURELIA | Artisanal Haute Joaillerie & Fine Jewelry',
  ogDescription: 'Shop handcrafted fine jewelry crafted in solid 18k gold and 950 platinum. Conflict-free lab diamonds and complimentary insured courier.',
  ogImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
  ogUrl: 'https://aurelia-jewelry.vercel.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'AURELIA | Artisanal Haute Joaillerie',
  twitterDescription: 'Handcrafted fine jewelry in solid 18k gold and 950 platinum.',
  twitterImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80'
})
</script>
