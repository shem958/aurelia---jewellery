<template>
  <footer class="bg-noir-950 text-sand-100 border-t border-noir-800">
    <!-- Value Pillars / Trust Badges -->
    <div class="border-b border-noir-800/80 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div class="flex flex-col items-center md:items-start space-y-2">
            <div class="w-10 h-10 rounded-full bg-noir-800 flex items-center justify-center text-gold-400 mb-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="font-serif text-base tracking-wide text-white uppercase">Solid 18k & Platinum</h4>
            <p class="text-xs text-sand-300 leading-relaxed max-w-xs">Forged purely in 18k gold and 950 platinum. Never plated, never filled.</p>
          </div>

          <div class="flex flex-col items-center md:items-start space-y-2">
            <div class="w-10 h-10 rounded-full bg-noir-800 flex items-center justify-center text-gold-400 mb-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="font-serif text-base tracking-wide text-white uppercase">Ethical Provenance</h4>
            <p class="text-xs text-sand-300 leading-relaxed max-w-xs">100% conflict-free laboratory and traceable earth-friendly gemstones.</p>
          </div>

          <div class="flex flex-col items-center md:items-start space-y-2">
            <div class="w-10 h-10 rounded-full bg-noir-800 flex items-center justify-center text-gold-400 mb-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 class="font-serif text-base tracking-wide text-white uppercase">Insured Courier</h4>
            <p class="text-xs text-sand-300 leading-relaxed max-w-xs">Complimentary overnight armored shipping with adult signature confirmation.</p>
          </div>

          <div class="flex flex-col items-center md:items-start space-y-2">
            <div class="w-10 h-10 rounded-full bg-noir-800 flex items-center justify-center text-gold-400 mb-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 class="font-serif text-base tracking-wide text-white uppercase">Lifetime Warranty</h4>
            <p class="text-xs text-sand-300 leading-relaxed max-w-xs">Annual ultrasonic inspection, prong tightening, and polish included for life.</p>
          </div>

        </div>
      </div>
    </div>

    <!-- Main Footer Directory -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        
        <!-- Brand Description -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex flex-col">
            <span class="font-serif text-3xl tracking-widest uppercase font-semibold text-white">
              AURELIA
            </span>
            <span class="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-medium">
              Fine Jewelry & Atelier
            </span>
          </div>
          <p class="text-xs text-sand-300 leading-relaxed max-w-sm">
            Handcrafted with architectural balance and eternal restraint. Every AURELIA jewel is made to outlive generations, celebrated in timeless 18k solid gold and platinum.
          </p>
          <div class="pt-2 text-xs text-sand-400 space-y-1">
            <p>Atelier: 540 Madison Avenue, New York, NY</p>
            <p>Concierge: concierge@aurelia-jewelry.com</p>
          </div>
        </div>

        <!-- Collections -->
        <div>
          <h5 class="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-4">
            Collections
          </h5>
          <ul class="space-y-2.5 text-xs text-sand-300">
            <li><NuxtLink to="/products?category=rings" class="hover:text-gold-300 transition-colors">Solitaires & Rings</NuxtLink></li>
            <li><NuxtLink to="/products?category=necklaces" class="hover:text-gold-300 transition-colors">Pendants & Chains</NuxtLink></li>
            <li><NuxtLink to="/products?category=bracelets" class="hover:text-gold-300 transition-colors">Tennis Bracelets & Cuffs</NuxtLink></li>
            <li><NuxtLink to="/products?category=earrings" class="hover:text-gold-300 transition-colors">Diamond Studs & Hoops</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-gold-300 transition-colors">All Creations</NuxtLink></li>
          </ul>
        </div>

        <!-- Client Care -->
        <div>
          <h5 class="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-4">
            Client Services
          </h5>
          <ul class="space-y-2.5 text-xs text-sand-300">
            <li><NuxtLink to="/about" class="hover:text-gold-300 transition-colors">The Maison Heritage</NuxtLink></li>
            <li><NuxtLink to="/cart" class="hover:text-gold-300 transition-colors">Shopping Bag</NuxtLink></li>
            <li><span class="hover:text-gold-300 transition-colors cursor-pointer">Ring Sizing Guide</span></li>
            <li><span class="hover:text-gold-300 transition-colors cursor-pointer">Ethical Sourcing Dossier</span></li>
            <li><span class="hover:text-gold-300 transition-colors cursor-pointer">Complimentary Returns</span></li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div>
          <h5 class="text-xs uppercase tracking-widest text-gold-300 font-semibold mb-4">
            Privilege Club
          </h5>
          <p class="text-xs text-sand-300 mb-3 leading-relaxed">
            Subscribe for private salon previews and receive 10% off with code <strong class="text-gold-300">WELCOME10</strong>.
          </p>
          <form @submit.prevent="subscribed = true" class="space-y-2">
            <div class="flex">
              <input
                v-model="emailInput"
                type="email"
                required
                placeholder="Enter your email"
                class="w-full bg-noir-900 border border-noir-700 px-3 py-2 text-xs text-white placeholder-sand-400 focus:outline-none focus:border-gold-500 rounded-none"
              />
              <button
                type="submit"
                class="bg-gold-500 text-noir-950 px-4 text-xs font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors"
              >
                Join
              </button>
            </div>
            <p v-if="subscribed" class="text-[11px] text-gold-300 mt-1">
              Thank you for subscribing. Use code <strong>WELCOME10</strong> at checkout.
            </p>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-noir-800 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400 gap-4">
        <p>&copy; {{ new Date().getFullYear() }} AURELIA Fine Jewelry. All rights reserved.</p>
        <div class="flex items-center space-x-6">
          <NuxtLink to="/about" class="hover:text-gold-300 transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gold-300 transition-colors">Terms of Sale</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="hover:text-gold-300 transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emailInput = ref('')
const subscribed = ref(false)
</script>
