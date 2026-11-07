<template>
  <div class="min-h-screen bg-[#FCFAF7] flex flex-col justify-between">
    <header class="py-6 border-b border-sand-200 text-center">
      <NuxtLink to="/" class="font-serif text-2xl tracking-widest uppercase font-semibold text-noir-950">
        AURELIA
      </NuxtLink>
    </header>

    <main class="max-w-xl mx-auto px-4 text-center py-20">
      <div class="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 mx-auto mb-6">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
        Error {{ error?.statusCode || 404 }}
      </span>
      <h1 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal mb-3">
        Creation Not Found
      </h1>
      <p class="text-xs sm:text-sm text-noir-600 mb-8 leading-relaxed">
        {{ error?.statusMessage || "The page or bespoke creation you are searching for may have been archived or moved." }}
      </p>
      <div class="flex justify-center gap-4">
        <button
          @click="handleClearError"
          class="bg-noir-950 text-gold-100 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
        >
          Return to Atelier Home
        </button>
      </div>
    </main>

    <footer class="py-6 border-t border-sand-200 text-center text-xs text-noir-400">
      &copy; {{ new Date().getFullYear() }} AURELIA Fine Jewelry.
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>
