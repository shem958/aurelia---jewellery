<template>
  <div v-if="cartStore.isOpen" class="relative z-50">
    <!-- Dim Backdrop -->
    <div
      class="fixed inset-0 bg-noir-950/60 backdrop-blur-sm transition-opacity"
      @click="cartStore.closeCart()"
    ></div>

    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-auto">
        <!-- Slide-over panel -->
        <div class="w-screen max-w-md bg-[#FCFAF7] border-l border-sand-200 shadow-2xl flex flex-col">
          
          <!-- Header -->
          <div class="p-6 border-b border-sand-200 flex items-center justify-between bg-white">
            <div class="flex items-center space-x-2">
              <h2 class="font-serif text-xl tracking-wide text-noir-950 uppercase font-semibold">
                Shopping Bag
              </h2>
              <span class="text-xs bg-gold-100 text-gold-800 font-semibold px-2 py-0.5 rounded-full">
                {{ cartStore.itemCount }}
              </span>
            </div>
            <button
              @click="cartStore.closeCart()"
              class="p-2 text-noir-400 hover:text-noir-900 transition-colors"
              aria-label="Close bag"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Free Shipping Progress -->
          <div class="px-6 py-3 bg-sand-100/60 border-b border-sand-200">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span v-if="cartStore.subtotal >= 150" class="text-emerald-800 font-medium flex items-center gap-1">
                <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Complimentary Insured Shipping Unlocked
              </span>
              <span v-else class="text-noir-700">
                Add <strong class="text-noir-950">${{ 150 - cartStore.subtotal }}</strong> more for Free Insured Courier
              </span>
              <span class="text-[11px] text-noir-500 font-medium">
                {{ Math.min(100, Math.round((cartStore.subtotal / 150) * 100)) }}%
              </span>
            </div>
            <div class="w-full bg-sand-300 h-1.5 rounded-full overflow-hidden">
              <div
                class="bg-gold-600 h-full transition-all duration-500 ease-out"
                :style="{ width: `${Math.min(100, (cartStore.subtotal / 150) * 100)}%` }"
              ></div>
            </div>
          </div>

          <!-- Bag Items Container -->
          <div class="flex-1 overflow-y-auto p-6 space-y-6">
            <!-- Empty state -->
            <div v-if="cartStore.items.length === 0" class="h-full flex flex-col items-center justify-center text-center py-12">
              <div class="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 class="font-serif text-lg text-noir-900 mb-2">Your Bag is Empty</h3>
              <p class="text-xs text-noir-500 max-w-xs mb-6">
                Discover our curated collection of solid 18k gold rings, necklaces, and bespoke pieces.
              </p>
              <NuxtLink
                to="/products"
                @click="cartStore.closeCart()"
                class="bg-noir-950 text-gold-100 px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
              >
                Explore Creations
              </NuxtLink>
            </div>

            <!-- Items List -->
            <div
              v-for="item in cartStore.items"
              :key="item.id"
              class="flex space-x-4 pb-6 border-b border-sand-200 last:border-b-0"
            >
              <NuxtLink
                :to="`/products/${item.slug}`"
                @click="cartStore.closeCart()"
                class="w-20 h-24 bg-sand-100 rounded-none overflow-hidden shrink-0 border border-sand-200"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </NuxtLink>

              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex justify-between items-start">
                    <NuxtLink
                      :to="`/products/${item.slug}`"
                      @click="cartStore.closeCart()"
                      class="font-serif text-sm font-semibold text-noir-900 hover:text-gold-700 transition-colors line-clamp-1"
                    >
                      {{ item.name }}
                    </NuxtLink>
                    <button
                      @click="cartStore.removeItem(item.id)"
                      class="text-noir-400 hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p class="text-[11px] text-noir-500 mt-1">
                    {{ item.material }} &bull; {{ item.size }}
                  </p>
                </div>

                <div class="flex items-center justify-between mt-3">
                  <!-- Quantity Stepper -->
                  <div class="flex items-center border border-sand-300 bg-white">
                    <button
                      @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                      class="px-2.5 py-1 text-xs text-noir-700 hover:bg-sand-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      &minus;
                    </button>
                    <span class="px-2.5 py-1 text-xs font-medium text-noir-900 min-w-[24px] text-center">
                      {{ item.quantity }}
                    </span>
                    <button
                      @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                      class="px-2.5 py-1 text-xs text-noir-700 hover:bg-sand-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <!-- Price -->
                  <div class="text-right">
                    <span class="text-xs font-semibold text-noir-950">
                      ${{ (item.price * item.quantity).toLocaleString() }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer Summary & Checkout -->
          <div v-if="cartStore.items.length > 0" class="p-6 border-t border-sand-200 bg-white space-y-4">
            
            <!-- Coupon Code Accordion/Input -->
            <div class="space-y-1">
              <div v-if="!cartStore.couponCode" class="flex gap-2">
                <input
                  v-model="promoInput"
                  type="text"
                  placeholder="Promo Code (WELCOME10)"
                  class="flex-1 bg-sand-50 border border-sand-300 px-3 py-1.5 text-xs text-noir-900 uppercase focus:outline-none focus:border-gold-600"
                />
                <button
                  @click="applyPromo"
                  class="bg-noir-900 text-white px-3 py-1.5 text-xs uppercase tracking-wider font-medium hover:bg-gold-700 transition-colors"
                >
                  Apply
                </button>
              </div>
              <div v-else class="flex items-center justify-between text-xs bg-gold-50 p-2 border border-gold-200 text-gold-900">
                <span class="font-medium">Coupon {{ cartStore.couponCode }} (-{{ cartStore.discountPercent }}%)</span>
                <button @click="cartStore.removeCoupon()" class="text-noir-500 hover:text-rose-600 text-[11px] underline">
                  Remove
                </button>
              </div>
              <p v-if="promoFeedback" :class="`text-[11px] ${promoSuccess ? 'text-emerald-700' : 'text-rose-600'}`">
                {{ promoFeedback }}
              </p>
            </div>

            <!-- Financial Totals -->
            <div class="space-y-1.5 text-xs text-noir-700 pt-2 border-t border-sand-200">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="font-medium text-noir-900">${{ cartStore.subtotal.toLocaleString() }}</span>
              </div>
              <div v-if="cartStore.discountAmount > 0" class="flex justify-between text-gold-700 font-medium">
                <span>Special Privilege ({{ cartStore.discountPercent }}%)</span>
                <span>-${{ cartStore.discountAmount.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span>Insured Courier Delivery</span>
                <span>{{ cartStore.shippingCost === 0 ? 'Complimentary' : `$${cartStore.shippingCost}` }}</span>
              </div>
              <div class="flex justify-between pt-2 border-t border-sand-200 font-serif text-base text-noir-950 font-bold">
                <span>Estimated Total</span>
                <span>${{ cartStore.grandTotal.toLocaleString() }}</span>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="space-y-2 pt-2">
              <NuxtLink
                to="/checkout"
                @click="cartStore.closeCart()"
                class="w-full bg-noir-950 text-gold-100 py-3.5 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-gold-700 transition-all shadow-md group"
              >
                <span>Proceed to Checkout</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
              
              <NuxtLink
                to="/cart"
                @click="cartStore.closeCart()"
                class="w-full bg-white border border-sand-300 text-noir-900 py-2.5 px-4 text-xs uppercase tracking-wider font-medium text-center hover:bg-sand-50 transition-colors block"
              >
                View Detailed Bag
              </NuxtLink>
            </div>
            
            <p class="text-[10px] text-center text-noir-400">
              Discreet insured packaging &bull; 30-day returns &bull; Lifetime warranty
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const promoInput = ref('')
const promoFeedback = ref('')
const promoSuccess = ref(false)

const applyPromo = () => {
  if (!promoInput.value.trim()) return
  const result = cartStore.applyCoupon(promoInput.value)
  promoSuccess.value = result.success
  promoFeedback.value = result.message
  if (result.success) {
    promoInput.value = ''
  }
}
</script>
