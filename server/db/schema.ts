export interface ProductReview {
  id: string
  author: string
  rating: number
  date: string
  title: string
  comment: string
  verified: boolean
}

export interface ProductDetailItem {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  subtitle: string
  description: string
  category: 'rings' | 'necklaces' | 'bracelets' | 'earrings'
  categoryLabel: string
  price: number
  compareAtPrice?: number | null
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  isFeatured: boolean
  isNew: boolean
  materials: string[]
  defaultMaterial: string
  sizes: string[]
  defaultSize: string
  gemstone: string
  caratWeight?: string
  images: string[]
  thumbnail: string
  sku: string
  details: ProductDetailItem[]
  careInstructions: string
  shippingInfo: string
  reviews?: ProductReview[]
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  image: string
  itemCount: number
}

export interface OrderItem {
  productId: string
  name: string
  slug: string
  price: number
  quantity: number
  material: string
  size: string
  image: string
}

export interface Order {
  id: string
  orderNumber: string
  createdAt: string
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  items: OrderItem[]
  subtotal: number
  discount: number
  tax: number
  shipping: number
  total: number
  status: 'confirmed' | 'processing' | 'shipped'
  paymentMethod: string
}
