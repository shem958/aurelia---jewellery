<template>
  <div class="min-h-screen flex flex-col bg-[#FCFAF7] text-noir-950 font-sans selection:bg-gold-200">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <CartDrawer />
    <ToastNotification />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.initFromStorage()
})
</script>
