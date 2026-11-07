<template>
  <header class="sticky top-0 z-40 w-full transition-all duration-300">
    <!-- Announcement Bar -->
    <div class="bg-noir-950 text-gold-300 py-2 px-4 text-center text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 border-b border-noir-800">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
      <span>Complimentary Insured Overnight Shipping & Signature Velvet Box</span>
      <span class="hidden sm:inline text-gold-500">• Code: <strong class="text-gold-200">WELCOME10</strong> for 10% off</span>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="bg-white/95 backdrop-blur-md border-b border-sand-200 transition-shadow duration-300 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Mobile Menu Button -->
          <div class="flex items-center lg:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 -ml-2 text-noir-800 hover:text-gold-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Desktop Navigation Left -->
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink
              to="/products"
              class="text-xs uppercase tracking-widest font-medium text-noir-800 hover:text-gold-600 transition-colors py-2"
              active-class="text-gold-700 font-semibold"
            >
              All Creations
            </NuxtLink>
            <NuxtLink
              to="/products?category=rings"
              class="text-xs uppercase tracking-widest font-medium text-noir-700 hover:text-gold-600 transition-colors py-2"
            >
              Rings
            </NuxtLink>
            <NuxtLink
              to="/products?category=necklaces"
              class="text-xs uppercase tracking-widest font-medium text-noir-700 hover:text-gold-600 transition-colors py-2"
            >
              Necklaces
            </NuxtLink>
            <NuxtLink
              to="/products?category=bracelets"
              class="text-xs uppercase tracking-widest font-medium text-noir-700 hover:text-gold-600 transition-colors py-2"
            >
              Bracelets
            </NuxtLink>
            <NuxtLink
              to="/products?category=earrings"
              class="text-xs uppercase tracking-widest font-medium text-noir-700 hover:text-gold-600 transition-colors py-2"
            >
              Earrings
            </NuxtLink>
          </div>

          <!-- Brand Logo Center -->
          <div class="flex-1 lg:flex-none text-center">
            <NuxtLink to="/" class="inline-flex flex-col items-center group">
              <span class="font-serif text-2xl sm:text-3xl tracking-widest uppercase font-semibold text-noir-950 group-hover:text-gold-700 transition-colors">
                AURELIA
              </span>
              <span class="text-[9px] tracking-[0.35em] uppercase text-gold-700 -mt-1 font-medium">
                Haute Joaillerie
              </span>
            </NuxtLink>
          </div>

          <!-- Right Action Icons -->
          <div class="flex items-center space-x-3 sm:space-x-5">
            <!-- Search trigger -->
            <button
              @click="searchOpen = !searchOpen"
              class="p-2 text-noir-700 hover:text-gold-700 transition-colors"
              aria-label="Search creations"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- Heritage / About link -->
            <NuxtLink
              to="/about"
              class="hidden sm:inline-block text-xs uppercase tracking-widest font-medium text-noir-700 hover:text-gold-600 transition-colors"
            >
              Maison
            </NuxtLink>

            <!-- Shopping Bag -->
            <button
              @click="cartStore.toggleCart()"
              class="relative p-2 text-noir-900 hover:text-gold-700 transition-colors flex items-center gap-1.5"
              aria-label="Open Shopping Bag"
            >
              <div class="relative">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span
                  v-if="cartStore.itemCount > 0"
                  class="absolute -top-1.5 -right-2 bg-gold-600 text-white font-sans text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm"
                >
                  {{ cartStore.itemCount }}
                </span>
              </div>
              <span class="hidden md:inline text-xs font-semibold uppercase tracking-wider text-noir-800">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Expandable Search Bar Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="searchOpen" class="border-t border-sand-200 bg-sand-50/95 py-4 px-4 sm:px-6">
          <div class="max-w-3xl mx-auto flex items-center gap-3">
            <div class="relative flex-1">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search rings, diamonds, pearls, 18k solid gold..."
                class="w-full bg-white border border-sand-300 rounded-none px-4 py-2.5 pl-10 text-sm text-noir-900 placeholder-noir-400 focus:outline-none focus:border-gold-600"
                @keyup.enter="handleSearch"
              />
              <svg class="w-4 h-4 absolute left-3.5 top-3.5 text-noir-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              @click="handleSearch"
              class="bg-noir-900 text-gold-100 text-xs uppercase tracking-widest px-5 py-3 hover:bg-gold-700 transition-colors font-medium"
            >
              Explore
            </button>
            <button
              @click="searchOpen = false"
              class="p-2 text-noir-500 hover:text-noir-800"
              aria-label="Close search"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </transition>

      <!-- Mobile Dropdown Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-sand-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <NuxtLink
            to="/products"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-noir-900 hover:text-gold-600 border-b border-sand-100"
            @click="mobileMenuOpen = false"
          >
            All Creations
          </NuxtLink>
          <NuxtLink
            to="/products?category=rings"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-noir-800 hover:text-gold-600 border-b border-sand-100"
            @click="mobileMenuOpen = false"
          >
            Rings & Bands
          </NuxtLink>
          <NuxtLink
            to="/products?category=necklaces"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-noir-800 hover:text-gold-600 border-b border-sand-100"
            @click="mobileMenuOpen = false"
          >
            Necklaces & Pendants
          </NuxtLink>
          <NuxtLink
            to="/products?category=bracelets"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-noir-800 hover:text-gold-600 border-b border-sand-100"
            @click="mobileMenuOpen = false"
          >
            Bracelets & Cuffs
          </NuxtLink>
          <NuxtLink
            to="/products?category=earrings"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-noir-800 hover:text-gold-600 border-b border-sand-100"
            @click="mobileMenuOpen = false"
          >
            Earrings & Studs
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block py-2 text-xs uppercase tracking-widest font-medium text-gold-700 hover:text-gold-900"
            @click="mobileMenuOpen = false"
          >
            The Maison & Craftsmanship
          </NuxtLink>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/products',
      query: { search: searchQuery.value.trim() }
    })
    searchOpen.value = false
    searchQuery.value = ''
  }
}
</script>
