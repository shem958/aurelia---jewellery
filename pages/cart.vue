<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-noir-500 uppercase tracking-widest mb-6 space-x-2">
      <NuxtLink to="/" class="hover:text-gold-700 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-noir-900 font-medium">Shopping Bag</span>
    </nav>

    <!-- Page Title -->
    <div class="border-b border-sand-200 pb-6 mb-8 flex items-baseline justify-between">
      <h1 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal">
        Your Shopping Bag
      </h1>
      <span class="text-xs text-noir-500 uppercase tracking-wider font-medium">
        {{ cartStore.itemCount }} {{ cartStore.itemCount === 1 ? 'Creation' : 'Creations' }}
      </span>
    </div>

    <!-- Main Content -->
    <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Cart Items Table / List (8 Cols) -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Complimentary Shipping Callout -->
        <div class="bg-sand-100 p-4 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2 text-noir-800">
            <svg class="w-5 h-5 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span v-if="cartStore.subtotal >= 150">
              <strong>Complimentary Insured Overnight Shipping:</strong> Hand-delivered with security seal.
            </span>
            <span v-else>
              Add <strong>${{ 150 - cartStore.subtotal }}</strong> more to unlock Complimentary Insured Shipping.
            </span>
          </div>
          <span class="text-gold-700 font-semibold uppercase tracking-wider text-[11px] shrink-0">
            Discreet Packaging
          </span>
        </div>

        <!-- Items Table -->
        <div class="bg-white border border-sand-200 divide-y divide-sand-200">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <!-- Product Info -->
            <div class="flex items-center space-x-4">
              <NuxtLink :to="`/products/${item.slug}`" class="w-20 h-24 bg-sand-100 shrink-0 overflow-hidden border border-sand-200">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
              </NuxtLink>
              <div>
                <NuxtLink
                  :to="`/products/${item.slug}`"
                  class="font-serif text-base sm:text-lg font-medium text-noir-950 hover:text-gold-700 transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
                <div class="text-xs text-noir-500 mt-1 space-y-0.5">
                  <p>Metal: <span class="text-noir-800 font-medium">{{ item.material }}</span></p>
                  <p>Size: <span class="text-noir-800 font-medium">{{ item.size }}</span></p>
                </div>
                <button
                  @click="cartStore.removeItem(item.id)"
                  class="text-[11px] text-noir-400 hover:text-rose-600 underline mt-2 transition-colors block sm:hidden"
                >
                  Remove Creation
                </button>
              </div>
            </div>

            <!-- Quantity & Pricing -->
            <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-sand-100">
              <!-- Stepper -->
              <div class="flex items-center border border-sand-300 bg-white">
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                  class="px-2.5 py-1 text-xs text-noir-700 hover:bg-sand-100"
                  aria-label="Decrease quantity"
                >
                  &minus;
                </button>
                <span class="px-3 py-1 text-xs font-medium text-noir-900 min-w-[28px] text-center">
                  {{ item.quantity }}
                </span>
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                  class="px-2.5 py-1 text-xs text-noir-700 hover:bg-sand-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <!-- Line Total -->
              <div class="text-right min-w-[90px]">
                <p class="font-serif text-base font-bold text-noir-950">
                  ${{ (item.price * item.quantity).toLocaleString() }}
                </p>
                <p v-if="item.quantity > 1" class="text-[10px] text-noir-400">
                  ${{ item.price.toLocaleString() }} each
                </p>
              </div>

              <!-- Delete Desktop -->
              <button
                @click="cartStore.removeItem(item.id)"
                class="hidden sm:block text-noir-400 hover:text-rose-600 transition-colors p-1"
                aria-label="Remove item"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Back to Shopping Link -->
        <div class="flex justify-between items-center pt-2">
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-noir-800 hover:text-gold-700 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Continue Exploring</span>
          </NuxtLink>

          <button
            @click="cartStore.clearCart"
            class="text-xs text-noir-400 hover:text-rose-600 underline"
          >
            Clear Entire Bag
          </button>
        </div>

      </div>

      <!-- Order Summary Card (4 Cols) -->
      <div class="lg:col-span-4 space-y-6">
        <div class="bg-white border border-sand-200 p-6 shadow-sm space-y-6">
          <h2 class="font-serif text-xl font-medium text-noir-950 uppercase tracking-wide border-b border-sand-200 pb-3">
            Acquisition Summary
          </h2>

          <!-- Promo Code Input -->
          <div>
            <label class="block text-xs uppercase tracking-wider text-noir-800 font-semibold mb-2">
              Privilege / Promo Code
            </label>
            <div v-if="!cartStore.couponCode" class="flex gap-2">
              <input
                v-model="promoCodeInput"
                type="text"
                placeholder="WELCOME10 (10% Off)"
                class="flex-1 bg-sand-50 border border-sand-300 px-3 py-2 text-xs uppercase font-medium focus:outline-none focus:border-gold-600"
              />
              <button
                @click="applyCode"
                class="bg-noir-950 text-gold-100 px-4 text-xs uppercase tracking-wider font-semibold hover:bg-gold-700 transition-colors"
              >
                Apply
              </button>
            </div>
            <div v-else class="flex items-center justify-between bg-gold-50 border border-gold-200 p-2.5 text-xs text-gold-900">
              <span>Code <strong>{{ cartStore.couponCode }}</strong> (-{{ cartStore.discountPercent }}%)</span>
              <button @click="cartStore.removeCoupon" class="text-noir-500 hover:text-rose-600 text-[11px] underline">
                Remove
              </button>
            </div>
            <p v-if="promoFeedback" :class="`text-[11px] mt-1.5 ${promoSuccess ? 'text-emerald-700' : 'text-rose-600'}`">
              {{ promoFeedback }}
            </p>
          </div>

          <!-- Breakdown Line Items -->
          <div class="space-y-2.5 text-xs text-noir-700 border-t border-sand-200 pt-4">
            <div class="flex justify-between">
              <span>Bag Subtotal</span>
              <span class="font-medium text-noir-950">${{ cartStore.subtotal.toLocaleString() }}</span>
            </div>

            <div v-if="cartStore.discountAmount > 0" class="flex justify-between text-gold-700 font-medium">
              <span>VIP Privilege Discount ({{ cartStore.discountPercent }}%)</span>
              <span>-${{ cartStore.discountAmount.toLocaleString() }}</span>
            </div>

            <div class="flex justify-between">
              <span>Insured Overnight Courier</span>
              <span>{{ cartStore.shippingCost === 0 ? 'Complimentary ($0)' : `$${cartStore.shippingCost}` }}</span>
            </div>

            <div class="flex justify-between">
              <span>Estimated Luxury Sales Tax (7.5%)</span>
              <span>${{ cartStore.estimatedTax.toLocaleString() }}</span>
            </div>

            <div class="flex justify-between pt-3 border-t border-sand-200 font-serif text-xl text-noir-950 font-bold">
              <span>Total Investment</span>
              <span>${{ cartStore.grandTotal.toLocaleString() }}</span>
            </div>
          </div>

          <!-- Checkout CTA -->
          <NuxtLink
            to="/checkout"
            class="w-full bg-noir-950 hover:bg-gold-700 text-gold-100 py-4 px-6 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-md group"
          >
            <span>Proceed to Checkout</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Security Callouts -->
          <div class="pt-4 border-t border-sand-200 space-y-2 text-[11px] text-noir-500">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>256-bit bank-grade encryption & security</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-gold-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Authenticity certificate & lifetime warranty included</span>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-white border border-sand-200 p-8">
      <div class="w-20 h-20 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 mx-auto mb-4">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 class="font-serif text-3xl text-noir-900 mb-2">Your Shopping Bag is Empty</h2>
      <p class="text-xs text-noir-500 max-w-md mx-auto mb-8 leading-relaxed">
        You haven't selected any fine jewelry creations yet. Browse our bespoke engagement rings, tennis bracelets, necklaces, and earrings.
      </p>
      <NuxtLink
        to="/products"
        class="bg-noir-950 text-gold-100 px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors inline-block"
      >
        Discover Creations
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const promoCodeInput = ref('')
const promoFeedback = ref('')
const promoSuccess = ref(false)

const applyCode = () => {
  if (!promoCodeInput.value.trim()) return
  const res = cartStore.applyCoupon(promoCodeInput.value)
  promoSuccess.value = res.success
  promoFeedback.value = res.message
  if (res.success) promoCodeInput.value = ''
}

// SEO Meta
useSeoMeta({
  title: 'Shopping Bag | AURELIA Fine Jewelry',
  description: 'Review your selected artisanal fine jewelry creations. Complimentary insured shipping and signature gift box packaging.',
  robots: 'noindex, follow'
})
</script>
