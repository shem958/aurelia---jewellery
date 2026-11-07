<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    
    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-noir-500 uppercase tracking-widest mb-6 space-x-2">
      <NuxtLink to="/cart" class="hover:text-gold-700 transition-colors">Bag</NuxtLink>
      <span>/</span>
      <span class="text-noir-900 font-medium">Secure Checkout</span>
    </nav>

    <div v-if="orderCompleted && confirmedOrder" class="max-w-2xl mx-auto bg-white border border-sand-300 p-8 sm:p-12 shadow-xl text-center space-y-6">
      <!-- Order Success Icon -->
      <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-1">
          Acquisition Confirmed
        </span>
        <h1 class="font-serif text-3xl sm:text-4xl text-noir-950 font-normal">
          Thank You For Your Patronage
        </h1>
        <p class="text-xs text-noir-600 mt-2">
          Your order reference is <strong class="text-noir-950 text-sm tracking-wider">{{ confirmedOrder.orderNumber }}</strong>
        </p>
      </div>

      <div class="bg-sand-50 p-6 border border-sand-200 text-left space-y-3 text-xs text-noir-700">
        <div class="flex justify-between border-b border-sand-200 pb-2">
          <span class="text-noir-500">Recipient:</span>
          <span class="font-semibold text-noir-950">{{ confirmedOrder.customer.firstName }} {{ confirmedOrder.customer.lastName }}</span>
        </div>
        <div class="flex justify-between border-b border-sand-200 pb-2">
          <span class="text-noir-500">Destination:</span>
          <span class="font-medium text-noir-900">{{ confirmedOrder.shippingAddress.street }}, {{ confirmedOrder.shippingAddress.city }}</span>
        </div>
        <div class="flex justify-between border-b border-sand-200 pb-2">
          <span class="text-noir-500">Courier Method:</span>
          <span class="text-emerald-700 font-semibold">Complimentary Overnight Armored Courier</span>
        </div>
        <div class="flex justify-between pt-1 font-serif text-base text-noir-950 font-bold">
          <span>Amount Settled:</span>
          <span>${{ confirmedOrder.total.toLocaleString() }}</span>
        </div>
      </div>

      <p class="text-xs text-noir-500 italic">
        A formal certificate of authenticity and courier tracking details have been sent to <strong>{{ confirmedOrder.customer.email }}</strong>.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <button
          @click="printReceipt"
          class="border border-sand-300 text-noir-800 px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-sand-100 transition-colors"
        >
          Print Formal Receipt
        </button>
        <NuxtLink
          to="/products"
          class="bg-noir-950 text-gold-100 px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
        >
          Continue Exploring
        </NuxtLink>
      </div>
    </div>

    <!-- Active Checkout Form -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Checkout Form Left (7 Cols) -->
      <div class="lg:col-span-7 space-y-8">
        
        <!-- Step 1: Customer Contact -->
        <section class="bg-white border border-sand-200 p-6 space-y-4">
          <div class="flex items-center gap-2 border-b border-sand-200 pb-3">
            <span class="w-6 h-6 rounded-full bg-noir-950 text-gold-200 text-xs flex items-center justify-center font-bold">1</span>
            <h2 class="font-serif text-lg font-medium text-noir-950 uppercase tracking-wide">
              Client Dossier
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">First Name *</label>
              <input
                v-model="customer.firstName"
                type="text"
                required
                placeholder="Eleanor"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Last Name *</label>
              <input
                v-model="customer.lastName"
                type="text"
                required
                placeholder="Vance"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Email Address *</label>
              <input
                v-model="customer.email"
                type="email"
                required
                placeholder="eleanor.vance@example.com"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Phone (Courier Contact) *</label>
              <input
                v-model="customer.phone"
                type="tel"
                required
                placeholder="+1 (555) 019-2831"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
          </div>
        </section>

        <!-- Step 2: Delivery Address -->
        <section class="bg-white border border-sand-200 p-6 space-y-4">
          <div class="flex items-center gap-2 border-b border-sand-200 pb-3">
            <span class="w-6 h-6 rounded-full bg-noir-950 text-gold-200 text-xs flex items-center justify-center font-bold">2</span>
            <h2 class="font-serif text-lg font-medium text-noir-950 uppercase tracking-wide">
              White-Glove Delivery Address
            </h2>
          </div>

          <div>
            <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Street Address *</label>
            <input
              v-model="shippingAddress.street"
              type="text"
              required
              placeholder="740 Park Avenue, Apt 14B"
              class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
            />
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">City *</label>
              <input
                v-model="shippingAddress.city"
                type="text"
                required
                placeholder="New York"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">State / Province *</label>
              <input
                v-model="shippingAddress.state"
                type="text"
                required
                placeholder="NY"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Postal Code *</label>
              <input
                v-model="shippingAddress.zipCode"
                type="text"
                required
                placeholder="10021"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600"
              />
            </div>
          </div>
        </section>

        <!-- Step 3: Mock Payment -->
        <section class="bg-white border border-sand-200 p-6 space-y-4">
          <div class="flex items-center gap-2 border-b border-sand-200 pb-3">
            <span class="w-6 h-6 rounded-full bg-noir-950 text-gold-200 text-xs flex items-center justify-center font-bold">3</span>
            <h2 class="font-serif text-lg font-medium text-noir-950 uppercase tracking-wide">
              Payment Authorization (Mock Sandbox)
            </h2>
          </div>

          <div class="bg-amber-50/70 border border-amber-200 p-3 text-xs text-amber-900 leading-relaxed">
            <strong>Demonstration Mode:</strong> Transactions are simulated for evaluation. No live card charges will occur.
          </div>

          <div class="space-y-2">
            <label class="flex items-center justify-between p-3 border border-gold-600 bg-gold-50/40 text-xs cursor-pointer">
              <div class="flex items-center gap-2.5">
                <input type="radio" value="credit_card" v-model="paymentMethod" class="accent-gold-600" />
                <span class="font-semibold text-noir-950">Encrypted Credit Card</span>
              </div>
              <span class="text-noir-500 text-[11px]">Visa, Mastercard, Amex</span>
            </label>
            <label class="flex items-center justify-between p-3 border border-sand-300 text-xs cursor-pointer hover:border-gold-400">
              <div class="flex items-center gap-2.5">
                <input type="radio" value="apple_pay" v-model="paymentMethod" class="accent-gold-600" />
                <span class="font-semibold text-noir-950">Apple Pay Express</span>
              </div>
              <span class="text-noir-500 text-[11px]">Biometric Auth</span>
            </label>
          </div>

          <div v-if="paymentMethod === 'credit_card'" class="space-y-3 pt-2">
            <div>
              <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Card Number</label>
              <input
                type="text"
                v-model="cardNumber"
                placeholder="4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242"
                class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600 font-mono"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="12 / 28"
                  class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600 font-mono"
                />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider text-noir-700 font-medium mb-1">CVC Code</label>
                <input
                  type="text"
                  placeholder="888"
                  class="w-full bg-sand-50 border border-sand-300 px-3 py-2 text-xs focus:outline-none focus:border-gold-600 font-mono"
                />
              </div>
            </div>
          </div>
        </section>

      </div>

      <!-- Right Summary (5 Cols) -->
      <div class="lg:col-span-5 space-y-6">
        <div class="bg-white border border-sand-200 p-6 shadow-sm space-y-6">
          <h3 class="font-serif text-lg font-medium text-noir-950 uppercase tracking-wide border-b border-sand-200 pb-3">
            Bag Review ({{ cartStore.itemCount }})
          </h3>

          <!-- Items Mini List -->
          <div class="divide-y divide-sand-200 max-h-72 overflow-y-auto pr-1">
            <div v-for="item in cartStore.items" :key="item.id" class="py-3 flex items-center justify-between text-xs">
              <div class="flex items-center space-x-3">
                <img :src="item.image" :alt="item.name" class="w-12 h-14 object-cover border border-sand-200 shrink-0" />
                <div>
                  <p class="font-medium text-noir-950 line-clamp-1">{{ item.name }}</p>
                  <p class="text-noir-500 text-[11px]">{{ item.material }} &bull; Qty: {{ item.quantity }}</p>
                </div>
              </div>
              <span class="font-semibold text-noir-950 shrink-0">
                ${{ (item.price * item.quantity).toLocaleString() }}
              </span>
            </div>
          </div>

          <!-- Totals Breakdown -->
          <div class="space-y-2 text-xs text-noir-700 border-t border-sand-200 pt-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="font-medium text-noir-950">${{ cartStore.subtotal.toLocaleString() }}</span>
            </div>
            <div v-if="cartStore.discountAmount > 0" class="flex justify-between text-gold-700 font-medium">
              <span>Privilege Discount</span>
              <span>-${{ cartStore.discountAmount.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span>Insured Overnight Courier</span>
              <span>Complimentary</span>
            </div>
            <div class="flex justify-between">
              <span>Sales Tax</span>
              <span>${{ cartStore.estimatedTax.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between pt-3 border-t border-sand-200 font-serif text-xl text-noir-950 font-bold">
              <span>Total Payment</span>
              <span>${{ cartStore.grandTotal.toLocaleString() }}</span>
            </div>
          </div>

          <!-- Submit Order CTA -->
          <button
            @click="submitOrder"
            :disabled="submitting || cartStore.items.length === 0"
            class="w-full bg-noir-950 hover:bg-gold-700 disabled:opacity-50 text-gold-100 py-4 px-6 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span v-if="!submitting">Authorize Acquisition &bull; ${{ cartStore.grandTotal.toLocaleString() }}</span>
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-gold-300" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Authenticating Order...</span>
            </span>
          </button>

          <p v-if="errorMessage" class="text-xs text-rose-600 text-center">
            {{ errorMessage }}
          </p>

        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'
import type { Order } from '~/server/db/schema'

const router = useRouter()
const cartStore = useCartStore()

const submitting = ref(false)
const orderCompleted = ref(false)
const confirmedOrder = ref<Order | null>(null)
const errorMessage = ref('')

const paymentMethod = ref('credit_card')
const cardNumber = ref('4242 •••• •••• 4242')

const customer = ref({
  firstName: 'Eleanor',
  lastName: 'Vance',
  email: 'eleanor.vance@maison-client.com',
  phone: '+1 (555) 019-2831'
})

const shippingAddress = ref({
  street: '740 Park Avenue, Apt 14B',
  city: 'New York',
  state: 'NY',
  zipCode: '10021',
  country: 'United States'
})

const submitOrder = async () => {
  if (cartStore.items.length === 0) {
    router.push('/cart')
    return
  }

  submitting.value = true
  errorMessage.value = ''

  try {
    const res = await $fetch<{ success: boolean; order: Order }>('/api/checkout', {
      method: 'POST',
      body: {
        customer: customer.value,
        shippingAddress: shippingAddress.value,
        items: cartStore.items,
        couponCode: cartStore.couponCode,
        paymentMethod: paymentMethod.value === 'credit_card' ? 'Visa •••• 4242' : 'Apple Pay'
      }
    })

    if (res.success && res.order) {
      confirmedOrder.value = res.order
      orderCompleted.value = true
      cartStore.clearCart()
    }
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'An error occurred during order confirmation. Please check all fields.'
  } finally {
    submitting.value = false
  }
}

const printReceipt = () => {
  if (import.meta.client) {
    window.print()
  }
}

useSeoMeta({
  title: 'Secure Checkout | AURELIA Fine Jewelry',
  robots: 'noindex, nofollow'
})
</script>
