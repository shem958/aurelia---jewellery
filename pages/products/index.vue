<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    <!-- Breadcrumbs -->
    <nav class="flex items-center text-xs text-noir-500 uppercase tracking-widest mb-6 space-x-2">
      <NuxtLink to="/" class="hover:text-gold-700 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-noir-900 font-medium">Jewelry Creations</span>
      <span v-if="selectedCategory !== 'all'">/</span>
      <span v-if="selectedCategory !== 'all'" class="text-gold-700 font-semibold capitalize">{{ selectedCategory }}</span>
    </nav>

    <!-- Page Title & Header -->
    <div class="border-b border-sand-200 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
          Handcrafted In Solid 18k Gold & Platinum
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl text-noir-950 font-normal">
          {{ pageHeading }}
        </h1>
        <p class="text-xs sm:text-sm text-noir-500 mt-2 max-w-2xl leading-relaxed">
          {{ pageSubheading }}
        </p>
      </div>

      <!-- Quick Category Pills -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categoryPills"
          :key="cat.slug"
          @click="setCategory(cat.slug)"
          class="px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all"
          :class="selectedCategory === cat.slug ? 'bg-noir-950 text-gold-200 shadow-sm' : 'bg-white border border-sand-300 text-noir-700 hover:border-gold-400'"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <!-- Main Content Area: Sidebar Filters + Products Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Filters Sidebar (Desktop) -->
      <aside class="hidden lg:block lg:col-span-1 space-y-8 pr-4 border-r border-sand-200">
        
        <!-- Search within results -->
        <div>
          <label class="block text-xs uppercase tracking-wider text-noir-900 font-semibold mb-2">
            Search Collection
          </label>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Keywords (e.g. Diamond, Solitaire)..."
              class="w-full bg-white border border-sand-300 px-3 py-2 text-xs text-noir-900 focus:outline-none focus:border-gold-600 rounded-none"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-2.5 top-2.5 text-noir-400 hover:text-noir-900 text-xs"
            >
              &times;
            </button>
          </div>
        </div>

        <!-- Material Filter -->
        <div>
          <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-3">
            Precious Metal
          </h4>
          <div class="space-y-2">
            <label
              v-for="mat in materialOptions"
              :key="mat.value"
              class="flex items-center text-xs text-noir-700 hover:text-noir-950 cursor-pointer"
            >
              <input
                type="radio"
                name="material"
                :value="mat.value"
                v-model="selectedMaterial"
                class="accent-gold-600 mr-2.5"
              />
              <span>{{ mat.label }}</span>
            </label>
          </div>
        </div>

        <!-- Gemstone Filter -->
        <div>
          <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-3">
            Gemstone & Diamond
          </h4>
          <div class="space-y-2">
            <label
              v-for="gem in gemstoneOptions"
              :key="gem.value"
              class="flex items-center text-xs text-noir-700 hover:text-noir-950 cursor-pointer"
            >
              <input
                type="radio"
                name="gemstone"
                :value="gem.value"
                v-model="selectedGemstone"
                class="accent-gold-600 mr-2.5"
              />
              <span>{{ gem.label }}</span>
            </label>
          </div>
        </div>

        <!-- Price Range Filter -->
        <div>
          <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-3">
            Price Range
          </h4>
          <div class="space-y-2">
            <label
              v-for="range in priceRanges"
              :key="range.label"
              class="flex items-center text-xs text-noir-700 hover:text-noir-950 cursor-pointer"
            >
              <input
                type="radio"
                name="priceRange"
                :value="range.value"
                v-model="selectedPriceRange"
                class="accent-gold-600 mr-2.5"
              />
              <span>{{ range.label }}</span>
            </label>
          </div>
        </div>

        <!-- In Stock Toggle -->
        <div class="pt-2 border-t border-sand-200">
          <label class="flex items-center text-xs text-noir-900 font-medium cursor-pointer">
            <input
              type="checkbox"
              v-model="inStockOnly"
              class="accent-gold-600 rounded mr-2.5 w-4 h-4"
            />
            <span>In Stock for Immediate Delivery</span>
          </label>
        </div>

        <!-- Reset Button -->
        <button
          v-if="hasActiveFilters"
          @click="resetFilters"
          class="w-full bg-sand-100 hover:bg-sand-200 text-noir-800 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors"
        >
          Reset All Filters
        </button>
      </aside>

      <!-- Products Grid Area -->
      <div class="lg:col-span-3">
        
        <!-- Controls Bar: Count, Active Filter Chips, Sort Dropdown -->
        <div class="bg-white p-4 border border-sand-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div class="flex items-center space-x-3">
            <span class="text-xs font-semibold text-noir-900 uppercase tracking-wider">
              {{ filteredProducts.length }} {{ filteredProducts.length === 1 ? 'Creation' : 'Creations' }}
            </span>
            <span v-if="pending" class="text-xs text-gold-600 animate-pulse font-medium">Updating...</span>
          </div>

          <!-- Mobile Filter Modal Toggle -->
          <button
            @click="mobileFiltersOpen = !mobileFiltersOpen"
            class="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-noir-900 border border-sand-300 px-3 py-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filter Catalog</span>
          </button>

          <!-- Sort Select Dropdown -->
          <div class="flex items-center space-x-2">
            <label for="sortSelect" class="text-xs text-noir-500 uppercase tracking-wider whitespace-nowrap">
              Sort By:
            </label>
            <select
              id="sortSelect"
              v-model="selectedSort"
              class="bg-sand-50 border border-sand-300 text-noir-900 text-xs px-3 py-2 rounded-none focus:outline-none focus:border-gold-600"
            >
              <option value="featured">Featured Curations</option>
              <option value="newest">New Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Client Reviews</option>
            </select>
          </div>
        </div>

        <!-- Active Filter Chips -->
        <div v-if="hasActiveFilters" class="flex flex-wrap gap-2 mb-6">
          <span
            v-if="selectedCategory !== 'all'"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs capitalize border border-sand-300"
          >
            Category: {{ selectedCategory }}
            <button @click="selectedCategory = 'all'" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <span
            v-if="selectedMaterial"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs border border-sand-300"
          >
            Metal: {{ selectedMaterial }}
            <button @click="selectedMaterial = ''" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <span
            v-if="selectedGemstone"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs border border-sand-300"
          >
            Gemstone: {{ selectedGemstone }}
            <button @click="selectedGemstone = ''" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <span
            v-if="selectedPriceRange"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs border border-sand-300"
          >
            Price: {{ selectedPriceRange }}
            <button @click="selectedPriceRange = ''" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <span
            v-if="searchQuery"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs border border-sand-300"
          >
            Search: "{{ searchQuery }}"
            <button @click="searchQuery = ''" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <span
            v-if="inStockOnly"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-100 text-noir-900 text-xs border border-sand-300"
          >
            In Stock Only
            <button @click="inStockOnly = false" class="text-noir-500 hover:text-noir-900">&times;</button>
          </span>
          <button
            @click="resetFilters"
            class="text-xs text-gold-700 underline hover:text-gold-900 ml-2 py-1 font-medium"
          >
            Clear All
          </button>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20 bg-white border border-sand-200 p-8">
          <div class="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-serif text-2xl text-noir-900 mb-2">No Matching Creations Found</h3>
          <p class="text-xs text-noir-500 max-w-md mx-auto mb-6">
            We couldn't find any creations matching your selected filter criteria. Try expanding your price range or clearing material filters.
          </p>
          <button
            @click="resetFilters"
            class="bg-noir-950 text-gold-100 px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>

      </div>

    </div>

    <!-- Mobile Filters Slide-over / Modal -->
    <div v-if="mobileFiltersOpen" class="fixed inset-0 z-50 lg:hidden">
      <div class="fixed inset-0 bg-noir-950/60" @click="mobileFiltersOpen = false"></div>
      <div class="fixed inset-y-0 right-0 max-w-xs w-full bg-white p-6 shadow-2xl flex flex-col overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-sand-200 mb-6">
          <h3 class="font-serif text-lg font-semibold text-noir-950 uppercase">Filter Creations</h3>
          <button @click="mobileFiltersOpen = false" class="text-noir-500 p-1">&times;</button>
        </div>

        <!-- Mobile filter inputs -->
        <div class="space-y-6 flex-1">
          <div>
            <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-2">Category</h4>
            <select v-model="selectedCategory" class="w-full bg-sand-50 border border-sand-300 p-2 text-xs">
              <option value="all">All Categories</option>
              <option value="rings">Rings</option>
              <option value="necklaces">Necklaces</option>
              <option value="bracelets">Bracelets</option>
              <option value="earrings">Earrings</option>
            </select>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-2">Precious Metal</h4>
            <div class="space-y-1.5 text-xs">
              <label v-for="mat in materialOptions" :key="mat.value" class="flex items-center">
                <input type="radio" name="mobile-mat" :value="mat.value" v-model="selectedMaterial" class="mr-2" />
                {{ mat.label }}
              </label>
            </div>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-wider text-noir-900 font-semibold mb-2">Gemstone</h4>
            <div class="space-y-1.5 text-xs">
              <label v-for="gem in gemstoneOptions" :key="gem.value" class="flex items-center">
                <input type="radio" name="mobile-gem" :value="gem.value" v-model="selectedGemstone" class="mr-2" />
                {{ gem.label }}
              </label>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-sand-200 mt-6 space-y-2">
          <button
            @click="mobileFiltersOpen = false"
            class="w-full bg-noir-950 text-gold-100 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700"
          >
            Apply Filters
          </button>
          <button
            @click="resetFilters"
            class="w-full border border-sand-300 py-2.5 text-xs uppercase tracking-widest text-noir-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product } from '~/server/db/schema'

const route = useRoute()
const router = useRouter()

// Reactive filter parameters initialized from URL query params
const selectedCategory = ref(route.query.category ? String(route.query.category) : 'all')
const selectedMaterial = ref(route.query.material ? String(route.query.material) : '')
const selectedGemstone = ref(route.query.gemstone ? String(route.query.gemstone) : '')
const selectedPriceRange = ref(route.query.priceRange ? String(route.query.priceRange) : '')
const searchQuery = ref(route.query.search ? String(route.query.search) : '')
const selectedSort = ref(route.query.sort ? String(route.query.sort) : 'featured')
const inStockOnly = ref(route.query.inStockOnly === 'true')
const mobileFiltersOpen = ref(false)

// Query categories and products from backend API
const { data, pending, refresh } = await useFetch<{ products: Product[] }>('/api/products', {
  query: computed(() => {
    let minPrice: number | undefined
    let maxPrice: number | undefined

    if (selectedPriceRange.value === 'under-1000') {
      maxPrice = 1000
    } else if (selectedPriceRange.value === '1000-2000') {
      minPrice = 1000
      maxPrice = 2000
    } else if (selectedPriceRange.value === 'over-2000') {
      minPrice = 2000
    }

    return {
      category: selectedCategory.value !== 'all' ? selectedCategory.value : undefined,
      material: selectedMaterial.value || undefined,
      gemstone: selectedGemstone.value || undefined,
      search: searchQuery.value || undefined,
      sort: selectedSort.value,
      inStockOnly: inStockOnly.value ? 'true' : undefined,
      minPrice,
      maxPrice
    }
  })
})

const filteredProducts = computed(() => data.value?.products || [])

// Category Pills config
const categoryPills = [
  { name: 'All Creations', slug: 'all' },
  { name: 'Rings', slug: 'rings' },
  { name: 'Necklaces', slug: 'necklaces' },
  { name: 'Bracelets', slug: 'bracelets' },
  { name: 'Earrings', slug: 'earrings' }
]

const materialOptions = [
  { label: 'All Metals', value: '' },
  { label: '18k Yellow Gold', value: 'Yellow Gold' },
  { label: '18k White Gold', value: 'White Gold' },
  { label: '18k Rose Gold', value: 'Rose Gold' },
  { label: '950 Platinum', value: 'Platinum' }
]

const gemstoneOptions = [
  { label: 'All Gems', value: '' },
  { label: 'Lab Diamond', value: 'Diamond' },
  { label: 'Emerald', value: 'Emerald' },
  { label: 'Sapphire', value: 'Sapphire' },
  { label: 'Cultured Pearl', value: 'Pearl' }
]

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $1,000', value: 'under-1000' },
  { label: '$1,000 to $2,000', value: '1000-2000' },
  { label: '$2,000 and Above', value: 'over-2000' }
]

const hasActiveFilters = computed(() => {
  return selectedCategory.value !== 'all' ||
    selectedMaterial.value !== '' ||
    selectedGemstone.value !== '' ||
    selectedPriceRange.value !== '' ||
    searchQuery.value !== '' ||
    inStockOnly.value === true
})

const setCategory = (slug: string) => {
  selectedCategory.value = slug
}

const resetFilters = () => {
  selectedCategory.value = 'all'
  selectedMaterial.value = ''
  selectedGemstone.value = ''
  selectedPriceRange.value = ''
  searchQuery.value = ''
  inStockOnly.value = false
}

// Sync route queries with state
watch(
  [selectedCategory, selectedMaterial, selectedGemstone, selectedPriceRange, searchQuery, selectedSort, inStockOnly],
  () => {
    const query: Record<string, string> = {}
    if (selectedCategory.value !== 'all') query.category = selectedCategory.value
    if (selectedMaterial.value) query.material = selectedMaterial.value
    if (selectedGemstone.value) query.gemstone = selectedGemstone.value
    if (selectedPriceRange.value) query.priceRange = selectedPriceRange.value
    if (searchQuery.value) query.search = searchQuery.value
    if (selectedSort.value !== 'featured') query.sort = selectedSort.value
    if (inStockOnly.value) query.inStockOnly = 'true'

    router.replace({ query })
  }
)

// Dynamic Page Titles and Descriptions
const pageHeading = computed(() => {
  if (selectedCategory.value === 'rings') return 'Artisanal Rings & Bands'
  if (selectedCategory.value === 'necklaces') return 'Pendants & Fluid Chains'
  if (selectedCategory.value === 'bracelets') return 'Tennis Bracelets & Cuffs'
  if (selectedCategory.value === 'earrings') return 'Diamond Studs & Hoops'
  return 'The Fine Jewelry Collection'
})

const pageSubheading = computed(() => {
  if (selectedCategory.value === 'rings') return 'Explore handcrafted solitaire engagement rings, eternity pavé bands, and statement cocktail rings cast in recycled 18k solid gold.'
  if (selectedCategory.value === 'necklaces') return 'Sculptural pendants, iridescent baroque pearls, and liquid Italian herringbone chains made for timeless layered elegance.'
  if (selectedCategory.value === 'bracelets') return 'Fifty-stone continuous diamond tennis bracelets and hand-finished architectural hinged bangles.'
  if (selectedCategory.value === 'earrings') return 'Everyday 3-prong martini diamond studs, detachable baroque pearl drops, and solid 18k gold huggie hoops.'
  return 'Every creation is forged in solid 18k gold and 950 platinum with conflict-free stones. Delivered with certified insurance.'
})

// Breadcrumb Schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://aurelia-jewelry.vercel.app/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Creations',
            'item': 'https://aurelia-jewelry.vercel.app/products'
          }
        ]
      })
    }
  ]
})

// Page SEO Meta
useSeoMeta({
  title: () => `${pageHeading.value} | AURELIA Fine Jewelry`,
  description: () => pageSubheading.value,
  ogTitle: () => `${pageHeading.value} | AURELIA Fine Jewelry`,
  ogDescription: () => pageSubheading.value,
  ogImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image'
})
</script>
