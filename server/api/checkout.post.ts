import { db } from '../db'
import type { Order, OrderItem } from '../db/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Cart is empty. At least one item is required.'
    })
  }

  if (!body.customer?.email || !body.customer?.firstName) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Customer name and email are required for order fulfillment.'
    })
  }

  // Calculate totals from database verified prices
  let subtotal = 0
  const orderItems: OrderItem[] = []

  for (const item of body.items) {
    const product = db.getProductBySlug(item.slug)
    const price = product ? product.price : (item.price || 0)
    const quantity = Math.max(1, Number(item.quantity) || 1)
    subtotal += price * quantity

    orderItems.push({
      productId: product?.id || item.productId || 'aur-custom',
      name: product?.name || item.name,
      slug: item.slug,
      price,
      quantity,
      material: item.material || product?.defaultMaterial || '18k Yellow Gold',
      size: item.size || product?.defaultSize || 'Standard',
      image: item.image || product?.thumbnail || ''
    })
  }

  // Discount calculation
  let discount = 0
  if (body.couponCode) {
    const code = String(body.couponCode).toUpperCase().trim()
    if (code === 'WELCOME10') {
      discount = Math.round(subtotal * 0.1) // 10%
    } else if (code === 'LUXE20') {
      discount = Math.round(subtotal * 0.2) // 20%
    }
  }

  const taxableAmount = Math.max(0, subtotal - discount)
  // Standard luxury excise / sales tax rate (~7.5%)
  const tax = Math.round(taxableAmount * 0.075)
  // Complimentary shipping on orders above $150
  const shipping = taxableAmount >= 150 ? 0 : 25
  const total = taxableAmount + tax + shipping

  const orderNumber = `AUR-${Math.floor(100000 + Math.random() * 900000)}`
  const order: Order = {
    id: `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    orderNumber,
    createdAt: new Date().toISOString(),
    customer: {
      firstName: body.customer.firstName || 'Valued',
      lastName: body.customer.lastName || 'Client',
      email: body.customer.email,
      phone: body.customer.phone || '+1 (555) 019-2831'
    },
    shippingAddress: {
      street: body.shippingAddress?.street || '742 Evergreen Terrace',
      city: body.shippingAddress?.city || 'New York',
      state: body.shippingAddress?.state || 'NY',
      zipCode: body.shippingAddress?.zipCode || '10001',
      country: body.shippingAddress?.country || 'United States'
    },
    items: orderItems,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    status: 'confirmed',
    paymentMethod: body.paymentMethod || 'Credit Card (Mock)'
  }

  db.createOrder(order)

  return {
    success: true,
    message: 'Order placed successfully. A confirmation email has been dispatched.',
    order
  }
})
