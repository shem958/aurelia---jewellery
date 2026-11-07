<template>
  <div class="group relative flex flex-col bg-white border border-sand-200/70 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-lg">
    
    <!-- Image & Badges Container -->
    <div class="relative aspect-square w-full overflow-hidden bg-sand-100">
      <NuxtLink :to="`/products/${product.slug}`" class="block w-full h-full">
        <!-- Primary image -->
        <img
          :src="product.thumbnail || product.images[0]"
          :alt="product.name"
          class="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
          :class="{ 'group-hover:opacity-0': product.images[1] }"
          loading="lazy"
        />
        
        <!-- Secondary image on hover if present -->
        <img
          v-if="product.images[1]"
          :src="product.images[1]"
          :alt="`${product.name} alternate view`"
          class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Floating Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
        <span
          v-if="product.isNew"
          class="bg-noir-950 text-gold-200 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 shadow-sm"
        >
          New
        </span>
        <span
          v-else-if="product.isFeatured"
          class="bg-gold-600 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 shadow-sm"
        >
          Signature
        </span>
        <span
          v-if="product.stockCount <= 4"
          class="bg-rose-900/90 text-rose-100 text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 shadow-sm"
        >
          Only {{ product.stockCount }} left
        </span>
      </div>

      <!-- Quick Add Overlay Button -->
      <div class="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden sm:block">
        <button
          @click.stop.prevent="quickAdd"
          class="w-full bg-noir-950/90 backdrop-blur-sm text-gold-100 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-gold-700 hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Quick Acquire</span>
        </button>
      </div>
    </div>

    <!-- Details Section -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
      <div>
        <!-- Category & Gemstone -->
        <div class="flex items-center justify-between text-[11px] text-noir-500 uppercase tracking-wider mb-1">
          <span>{{ product.categoryLabel }}</span>
          <span v-if="product.caratWeight" class="text-gold-700 font-medium">{{ product.caratWeight }}</span>
        </div>

        <!-- Name -->
        <h3 class="font-serif text-base sm:text-lg font-medium text-noir-950 group-hover:text-gold-700 transition-colors line-clamp-1">
          <NuxtLink :to="`/products/${product.slug}`">
            {{ product.name }}
          </NuxtLink>
        </h3>

        <!-- Subtitle -->
        <p class="text-xs text-noir-500 line-clamp-1 mt-0.5">
          {{ product.subtitle }}
        </p>
      </div>

      <div>
        <!-- Star Rating -->
        <div class="flex items-center space-x-1.5 mb-2">
          <div class="flex text-amber-500 text-xs">
            <span v-for="i in 5" :key="i">
              <svg
                class="w-3.5 h-3.5"
                :class="i <= Math.round(product.rating) ? 'text-gold-500 fill-current' : 'text-sand-300 fill-current'"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
          <span class="text-[11px] text-noir-400">({{ product.reviewCount }})</span>
        </div>

        <!-- Pricing -->
        <div class="flex items-baseline space-x-2 pt-1 border-t border-sand-100">
          <span class="font-serif text-lg font-bold text-noir-950">
            ${{ product.price.toLocaleString() }}
          </span>
          <span
            v-if="product.compareAtPrice"
            class="text-xs text-noir-400 line-through"
          >
            ${{ product.compareAtPrice.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>

    <!-- Mobile Quick Add -->
    <div class="sm:hidden px-5 pb-5">
      <button
        @click.stop.prevent="quickAdd"
        class="w-full bg-noir-950 text-gold-100 py-2 text-xs uppercase tracking-wider font-medium hover:bg-gold-700 transition-colors"
      >
        Quick Acquire
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/server/db/schema'
import { useCartStore } from '~/stores/cart'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const quickAdd = () => {
  cartStore.addItem(props.product, 1)
}
</script>
