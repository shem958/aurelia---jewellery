<template>
  <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    <!-- Breadcrumbs -->
    <nav class="flex items-center text-xs text-noir-500 uppercase tracking-widest mb-8 space-x-2">
      <NuxtLink to="/" class="hover:text-gold-700 transition-colors">Home</NuxtLink>
      <span>/</span>
      <NuxtLink to="/products" class="hover:text-gold-700 transition-colors">Creations</NuxtLink>
      <span>/</span>
      <NuxtLink :to="`/products?category=${product.category}`" class="hover:text-gold-700 transition-colors capitalize">
        {{ product.categoryLabel }}
      </NuxtLink>
      <span>/</span>
      <span class="text-noir-900 font-medium truncate max-w-xs">{{ product.name }}</span>
    </nav>

    <!-- Main Product Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Column: Gallery (7 Cols) -->
      <div class="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
        
        <!-- Thumbnail strip -->
        <div class="flex md:flex-col gap-3 shrink-0 overflow-x-auto md:overflow-y-auto">
          <button
            v-for="(img, idx) in product.images"
            :key="idx"
            @click="activeImage = img"
            class="w-16 h-20 md:w-20 md:h-24 bg-sand-100 overflow-hidden border-2 transition-all shrink-0"
            :class="activeImage === img ? 'border-gold-600 shadow-md' : 'border-sand-200 hover:border-gold-300 opacity-70 hover:opacity-100'"
            :aria-label="`Select image view ${idx + 1}`"
          >
            <img :src="img" :alt="`${product.name} view ${idx + 1}`" class="w-full h-full object-cover" />
          </button>
        </div>

        <!-- Main High-Resolution Image -->
        <div class="flex-1 aspect-[4/5] bg-sand-100 overflow-hidden relative border border-sand-200/80 shadow-md group">
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            fetchpriority="high"
          />
          <div class="absolute top-4 left-4 flex flex-col gap-2">
            <span v-if="product.isNew" class="bg-noir-950 text-gold-200 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 shadow-sm">
              New Arrival
            </span>
            <span v-if="product.isFeatured" class="bg-gold-600 text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 shadow-sm">
              Signature Collection
            </span>
          </div>
        </div>

      </div>

      <!-- Right Column: Product Actions & Buy Box (5 Cols) -->
      <div class="lg:col-span-5 space-y-6">
        
        <div>
          <div class="flex items-center justify-between text-xs text-noir-500 uppercase tracking-widest mb-1">
            <span>{{ product.categoryLabel }} &bull; SKU: {{ product.sku }}</span>
            <span v-if="product.inStock" class="text-emerald-700 font-semibold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              In Stock
            </span>
          </div>
          
          <h1 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal leading-tight">
            {{ product.name }}
          </h1>

          <p class="text-xs sm:text-sm text-gold-800 font-medium mt-1">
            {{ product.subtitle }}
          </p>

          <!-- Reviews Rating Summary -->
          <div class="flex items-center space-x-2 mt-3">
            <div class="flex text-amber-500 text-xs">
              <span v-for="i in 5" :key="i">
                <svg
                  class="w-4 h-4"
                  :class="i <= Math.round(product.rating) ? 'text-gold-500 fill-current' : 'text-sand-300 fill-current'"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <a href="#reviews" class="text-xs text-noir-600 underline hover:text-gold-700">
              {{ product.rating.toFixed(1) }} ({{ product.reviewCount }} Verified Client Reviews)
            </a>
          </div>
        </div>

        <!-- Pricing & Payment Installments -->
        <div class="py-4 border-y border-sand-200">
          <div class="flex items-baseline space-x-3">
            <span class="font-serif text-3xl font-bold text-noir-950">
              ${{ product.price.toLocaleString() }}
            </span>
            <span v-if="product.compareAtPrice" class="text-sm text-noir-400 line-through">
              ${{ product.compareAtPrice.toLocaleString() }}
            </span>
            <span v-if="product.compareAtPrice" class="text-xs text-rose-700 bg-rose-50 px-2 py-0.5 font-semibold">
              Save ${{ (product.compareAtPrice - product.price).toLocaleString() }}
            </span>
          </div>
          <p class="text-xs text-noir-500 mt-1.5 flex items-center gap-1">
            <span>Or 4 interest-free installments of <strong>${{ Math.round(product.price / 4) }}</strong> with Klarna</span>
          </p>
        </div>

        <!-- Material Selection -->
        <div>
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="uppercase tracking-wider font-semibold text-noir-900">Precious Metal:</span>
            <span class="text-gold-800 font-medium">{{ selectedMaterial }}</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="mat in product.materials"
              :key="mat"
              @click="selectedMaterial = mat"
              class="px-3 py-2.5 text-xs text-center border transition-all flex items-center justify-center gap-2"
              :class="selectedMaterial === mat ? 'border-gold-600 bg-gold-50/50 text-noir-950 font-semibold shadow-sm' : 'border-sand-300 text-noir-700 hover:border-sand-400 bg-white'"
            >
              <span
                class="w-3 h-3 rounded-full border border-noir-300 shrink-0"
                :class="{
                  'bg-[#E5C158]': mat.includes('Yellow'),
                  'bg-[#E0E0E0]': mat.includes('White') || mat.includes('Platinum'),
                  'bg-[#E8B59B]': mat.includes('Rose')
                }"
              ></span>
              <span class="truncate">{{ mat }}</span>
            </button>
          </div>
        </div>

        <!-- Size Selection & Size Guide Trigger -->
        <div>
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="uppercase tracking-wider font-semibold text-noir-900">Select Size:</span>
            <button
              @click="sizeGuideOpen = true"
              class="text-xs text-gold-700 hover:text-gold-900 underline flex items-center gap-1"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Size Guide</span>
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              class="px-4 py-2 text-xs border text-center transition-all min-w-[50px]"
              :class="selectedSize === size ? 'border-noir-950 bg-noir-950 text-white font-medium' : 'border-sand-300 bg-white text-noir-800 hover:border-gold-400'"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div class="space-y-3 pt-2">
          <div class="flex items-center gap-3">
            <!-- Stepper -->
            <div class="flex items-center border border-sand-300 bg-white h-12">
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                class="px-3.5 h-full text-sm text-noir-700 hover:bg-sand-100 transition-colors"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <span class="px-4 text-xs font-semibold text-noir-950 min-w-[32px] text-center">
                {{ quantity }}
              </span>
              <button
                @click="quantity = Math.min(product.stockCount, quantity + 1)"
                class="px-3.5 h-full text-sm text-noir-700 hover:bg-sand-100 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <!-- Primary Add to Cart CTA -->
            <button
              @click="handleAddToCart"
              class="flex-1 bg-noir-950 hover:bg-gold-700 text-gold-100 h-12 px-6 text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <svg class="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Shopping Bag &bull; ${{ (product.price * quantity).toLocaleString() }}</span>
            </button>
          </div>

          <!-- Express Checkout CTA -->
          <button
            @click="handleExpressBuy"
            class="w-full border border-noir-950 text-noir-950 hover:bg-noir-950 hover:text-gold-100 h-11 text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Express Acquire Now
          </button>
        </div>

        <!-- Trust Badges Under Buy Box -->
        <div class="bg-sand-50 p-4 border border-sand-200/80 space-y-2.5 text-xs text-noir-600">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Complimentary Insured Overnight Courier:</strong> Adult signature required</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>30-Day Risk-Free Returns & Resizing:</strong> Prepaid return courier included</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Maison Certificate & Lifetime Care:</strong> Free annual prong check & polish</span>
          </div>
        </div>

      </div>

    </div>

    <!-- Product Details, Specifications & Care Tabs -->
    <div class="mt-20 border-t border-sand-200 pt-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <!-- Column 1: The Design & Description -->
        <div class="space-y-4">
          <h3 class="font-serif text-xl font-medium text-noir-950">
            The Design
          </h3>
          <p class="text-xs sm:text-sm text-noir-600 leading-relaxed">
            {{ product.description }}
          </p>
          <div class="pt-2 text-xs text-noir-500">
            <p><strong>Gemstone:</strong> {{ product.gemstone }}</p>
            <p v-if="product.caratWeight"><strong>Carat Weight:</strong> {{ product.caratWeight }}</p>
          </div>
        </div>

        <!-- Column 2: Material Specifications -->
        <div class="space-y-4">
          <h3 class="font-serif text-xl font-medium text-noir-950">
            Specifications & Craft
          </h3>
          <ul class="space-y-2 text-xs text-noir-600 divide-y divide-sand-200">
            <li v-for="item in product.details" :key="item.label" class="pt-2 first:pt-0 flex justify-between">
              <span class="text-noir-500">{{ item.label }}:</span>
              <span class="font-medium text-noir-900 text-right">{{ item.value }}</span>
            </li>
          </ul>
        </div>

        <!-- Column 3: Care & Shipping -->
        <div class="space-y-4">
          <h3 class="font-serif text-xl font-medium text-noir-950">
            Care & Presentation
          </h3>
          <p class="text-xs text-noir-600 leading-relaxed">
            {{ product.careInstructions }}
          </p>
          <div class="bg-sand-100 p-3.5 border border-sand-200 text-xs text-noir-700">
            <strong class="block text-noir-950 font-semibold mb-1">Presentation Kept Safe:</strong>
            Shipped in an unmarked security parcel containing our lacquered walnut presentation case, certificate dossier, and travel pouch.
          </div>
        </div>

      </div>
    </div>

    <!-- Client Reviews Section -->
    <section id="reviews" class="mt-20 border-t border-sand-200 pt-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-1">
            Client Voices
          </span>
          <h2 class="font-serif text-3xl text-noir-950 font-normal">
            Verified Reviews ({{ product.reviews?.length || 0 }})
          </h2>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-serif text-3xl font-bold text-noir-950">{{ product.rating.toFixed(1) }}</span>
          <div class="flex text-amber-500 text-sm">
            <span v-for="i in 5" :key="i">&starf;</span>
          </div>
          <span class="text-xs text-noir-500">Overall Rating</span>
        </div>
      </div>

      <div v-if="product.reviews && product.reviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="rev in product.reviews"
          :key="rev.id"
          class="bg-white p-6 border border-sand-200 shadow-sm space-y-3"
        >
          <div class="flex justify-between items-start">
            <div>
              <div class="flex text-amber-500 text-xs mb-1">
                <span v-for="i in rev.rating" :key="i">&starf;</span>
              </div>
              <h4 class="font-serif text-base font-semibold text-noir-950">{{ rev.title }}</h4>
            </div>
            <span class="text-[11px] text-noir-400">{{ rev.date }}</span>
          </div>
          <p class="text-xs text-noir-600 leading-relaxed italic">
            &ldquo;{{ rev.comment }}&rdquo;
          </p>
          <div class="flex items-center gap-2 pt-2 border-t border-sand-100 text-[11px]">
            <span class="font-semibold text-noir-900">{{ rev.author }}</span>
            <span v-if="rev.verified" class="text-emerald-700 font-medium flex items-center gap-1">
              &bull; Verified Client
            </span>
          </div>
        </div>
      </div>

      <div v-else class="bg-sand-50 p-8 text-center border border-sand-200">
        <p class="text-xs text-noir-600">Be among the first discerning collectors to review {{ product.name }}.</p>
      </div>
    </section>

    <!-- Related Products: "Complete the Look" -->
    <section v-if="relatedProducts.length > 0" class="mt-24 border-t border-sand-200 pt-16">
      <div class="text-center max-w-xl mx-auto mb-12">
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-1">
          Harmonious Pairings
        </span>
        <h2 class="font-serif text-3xl text-noir-950 font-normal">
          You May Also Admire
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="rel in relatedProducts"
          :key="rel.id"
          :product="rel"
        />
      </div>
    </section>

    <!-- Ring / Bracelet Size Guide Modal -->
    <div v-if="sizeGuideOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="fixed inset-0 bg-noir-950/70 backdrop-blur-sm" @click="sizeGuideOpen = false"></div>
      <div class="relative bg-white max-w-md w-full p-6 shadow-2xl border border-sand-200 space-y-4">
        <div class="flex justify-between items-center border-b border-sand-200 pb-3">
          <h3 class="font-serif text-lg font-semibold text-noir-950 uppercase">Maison Size Guide</h3>
          <button @click="sizeGuideOpen = false" class="text-noir-500 hover:text-noir-950">&times;</button>
        </div>
        <p class="text-xs text-noir-600 leading-relaxed">
          All AURELIA rings are manufactured in standard US sizing with interior comfort-fit profiling. If you fall between sizes, we recommend selecting the larger size.
        </p>
        <table class="w-full text-xs text-left border border-sand-200">
          <thead class="bg-sand-100 font-semibold text-noir-900 uppercase">
            <tr>
              <th class="p-2 border-b border-sand-200">US Size</th>
              <th class="p-2 border-b border-sand-200">Circumference (mm)</th>
              <th class="p-2 border-b border-sand-200">EU / UK Equivalent</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-sand-200 text-noir-700">
            <tr><td class="p-2 font-medium">US 5</td><td class="p-2">49.3 mm</td><td class="p-2">J 1/2 (49)</td></tr>
            <tr><td class="p-2 font-medium">US 6</td><td class="p-2">51.9 mm</td><td class="p-2">L 1/2 (51)</td></tr>
            <tr><td class="p-2 font-medium">US 7</td><td class="p-2">54.4 mm</td><td class="p-2">N 1/2 (54)</td></tr>
            <tr><td class="p-2 font-medium">US 8</td><td class="p-2">57.0 mm</td><td class="p-2">P 1/2 (57)</td></tr>
            <tr><td class="p-2 font-medium">US 9</td><td class="p-2">59.5 mm</td><td class="p-2">R 1/2 (59)</td></tr>
          </tbody>
        </table>
        <div class="pt-2 text-[11px] text-noir-500 italic">
          * Complimentary size adjustments are honored within 60 days of acquisition.
        </div>
        <button
          @click="sizeGuideOpen = false"
          class="w-full bg-noir-950 text-gold-100 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-gold-700"
        >
          Got It
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product } from '~/server/db/schema'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const slug = String(route.params.slug)

// Fetch product & related items via SSR
const { data, error } = await useFetch<{ product: Product; related: Product[] }>(`/api/products/${slug}`)

if (error.value || !data.value?.product) {
  throw createError({
    statusCode: 404,
    statusMessage: `Creation with slug "${slug}" was not found.`
  })
}

const product = computed(() => data.value!.product)
const relatedProducts = computed(() => data.value!.related || [])

// Component State
const activeImage = ref(product.value.images[0] || product.value.thumbnail)
const selectedMaterial = ref(product.value.defaultMaterial || product.value.materials[0])
const selectedSize = ref(product.value.defaultSize || product.value.sizes[0])
const quantity = ref(1)
const sizeGuideOpen = ref(false)

const handleAddToCart = () => {
  cartStore.addItem(product.value, quantity.value, selectedMaterial.value, selectedSize.value)
}

const handleExpressBuy = () => {
  cartStore.addItem(product.value, quantity.value, selectedMaterial.value, selectedSize.value)
  cartStore.closeCart()
  router.push('/checkout')
}

// SEO & Schema.org JSON-LD Structured Data
const siteUrl = 'https://aurelia-jewelry.vercel.app'
const canonicalUrl = `${siteUrl}/products/${product.value.slug}`

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Product',
            '@id': `${canonicalUrl}/#product`,
            'name': product.value.name,
            'image': product.value.images,
            'description': product.value.description,
            'sku': product.value.sku,
            'category': product.value.categoryLabel,
            'brand': {
              '@type': 'Brand',
              'name': 'AURELIA Fine Jewelry'
            },
            'offers': {
              '@type': 'Offer',
              'url': canonicalUrl,
              'priceCurrency': 'USD',
              'price': product.value.price,
              'priceValidUntil': '2027-12-31',
              'itemCondition': 'https://schema.org/NewCondition',
              'availability': product.value.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
              'seller': {
                '@type': 'Organization',
                'name': 'AURELIA Fine Jewelry'
              }
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': product.value.rating,
              'reviewCount': product.value.reviewCount
            }
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': siteUrl
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Creations',
                'item': `${siteUrl}/products`
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': product.value.categoryLabel,
                'item': `${siteUrl}/products?category=${product.value.category}`
              },
              {
                '@type': 'ListItem',
                'position': 4,
                'name': product.value.name,
                'item': canonicalUrl
              }
            ]
          }
        ]
      })
    }
  ]
})

// Page SEO Meta Tags
useSeoMeta({
  title: () => `${product.value.name} in Solid 18k Gold | AURELIA`,
  description: () => product.value.description,
  ogTitle: () => `${product.value.name} | AURELIA Fine Jewelry`,
  ogDescription: () => product.value.subtitle,
  ogImage: () => product.value.thumbnail || product.value.images[0],
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${product.value.name} | AURELIA Fine Jewelry`,
  twitterDescription: () => product.value.subtitle,
  twitterImage: () => product.value.thumbnail || product.value.images[0]
})
</script>
