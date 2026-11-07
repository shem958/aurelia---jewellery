<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0 translate-y-4"
    enter-to-class="transform opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform opacity-100 translate-y-0"
    leave-to-class="transform opacity-0 translate-y-4"
  >
    <div
      v-if="cartStore.toastMessage"
      class="fixed bottom-6 right-6 z-50 max-w-sm bg-noir-950 text-white border border-gold-500/40 shadow-2xl p-4 flex items-center space-x-3 pointer-events-auto"
    >
      <div class="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="flex-1 text-xs">
        <p class="font-semibold text-gold-200 uppercase tracking-wider text-[10px]">AURELIA Concierge</p>
        <p class="text-sand-100 mt-0.5">{{ cartStore.toastMessage }}</p>
      </div>
      <button
        @click="cartStore.toastMessage = null"
        class="text-sand-400 hover:text-white p-1"
        aria-label="Dismiss toast"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
</script>
