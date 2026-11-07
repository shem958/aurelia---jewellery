import { defineStore } from 'pinia'
import type { Product } from '~/server/db/schema'

export interface CartItem {
  id: string // composite key: `${slug}-${material}-${size}`
  productId: string
  slug: string
  name: string
  price: number
  compareAtPrice?: number | null
  image: string
  material: string
  size: string
  quantity: number
  inStock: boolean
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    isOpen: false,
    couponCode: '',
    discountPercent: 0,
    toastMessage: '' as string | null
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    subtotal: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    discountAmount(): number {
      if (!this.discountPercent) return 0
      return Math.round(this.subtotal * (this.discountPercent / 100))
    },

    shippingCost(): number {
      if (this.subtotal === 0) return 0
      const afterDiscount = this.subtotal - this.discountAmount
      return afterDiscount >= 150 ? 0 : 25
    },

    estimatedTax(): number {
      const taxable = Math.max(0, this.subtotal - this.discountAmount)
      return Math.round(taxable * 0.075)
    },

    grandTotal(): number {
      if (this.items.length === 0) return 0
      return Math.max(0, this.subtotal - this.discountAmount) + this.shippingCost + this.estimatedTax
    }
  },

  actions: {
    initFromStorage() {
      if (import.meta.client) {
        try {
          const saved = localStorage.getItem('aurelia_cart')
          if (saved) {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed.items)) {
              this.items = parsed.items
            }
            if (parsed.couponCode && parsed.discountPercent) {
              this.couponCode = parsed.couponCode
              this.discountPercent = parsed.discountPercent
            }
          }
        } catch (e) {
          console.error('Error hydrating cart from localStorage', e)
        }
      }
    },

    saveToStorage() {
      if (import.meta.client) {
        try {
          localStorage.setItem(
            'aurelia_cart',
            JSON.stringify({
              items: this.items,
              couponCode: this.couponCode,
              discountPercent: this.discountPercent
            })
          )
        } catch (e) {
          console.error('Error saving cart to localStorage', e)
        }
      }
    },

    addItem(product: Product, quantity = 1, material?: string, size?: string) {
      const selectedMaterial = material || product.defaultMaterial || product.materials[0] || '18k Solid Gold'
      const selectedSize = size || product.defaultSize || product.sizes[0] || 'Standard'
      const key = `${product.slug}__${selectedMaterial}__${selectedSize}`

      const existingIndex = this.items.findIndex(i => i.id === key)

      if (existingIndex > -1) {
        this.items[existingIndex].quantity += quantity
      } else {
        this.items.push({
          id: key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          image: product.thumbnail || product.images[0],
          material: selectedMaterial,
          size: selectedSize,
          quantity,
          inStock: product.inStock
        })
      }

      this.saveToStorage()
      this.triggerToast(`Added "${product.name}" to your shopping bag`)
      this.isOpen = true
    },

    removeItem(itemId: string) {
      this.items = this.items.filter(i => i.id !== itemId)
      this.saveToStorage()
    },

    updateQuantity(itemId: string, quantity: number) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(itemId)
        } else {
          item.quantity = Math.min(20, quantity)
          this.saveToStorage()
        }
      }
    },

    applyCoupon(code: string): { success: boolean; message: string } {
      const normalized = code.trim().toUpperCase()
      if (normalized === 'WELCOME10') {
        this.couponCode = 'WELCOME10'
        this.discountPercent = 10
        this.saveToStorage()
        return { success: true, message: 'Code WELCOME10 applied! 10% discount added.' }
      } else if (normalized === 'LUXE20') {
        this.couponCode = 'LUXE20'
        this.discountPercent = 20
        this.saveToStorage()
        return { success: true, message: 'Code LUXE20 applied! 20% VIP discount added.' }
      } else {
        return { success: false, message: 'Invalid or expired promotional code. Try WELCOME10 or LUXE20.' }
      }
    },

    removeCoupon() {
      this.couponCode = ''
      this.discountPercent = 0
      this.saveToStorage()
    },

    clearCart() {
      this.items = []
      this.couponCode = ''
      this.discountPercent = 0
      this.saveToStorage()
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    },

    toggleCart() {
      this.isOpen = !this.isOpen
    },

    triggerToast(message: string) {
      this.toastMessage = message
      setTimeout(() => {
        if (this.toastMessage === message) {
          this.toastMessage = null
        }
      }, 3500)
    }
  }
})
