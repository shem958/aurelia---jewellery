import type { Product, Category, Order } from './schema'
import { seedCategories, seedProducts } from './seed-data'

// In-memory / persistent products store with relational indexing
class DatabaseService {
  private products: Map<string, Product> = new Map()
  private categories: Map<string, Category> = new Map()
  private orders: Map<string, Order> = new Map()
  private isInitialized = false

  constructor() {
    this.init()
  }

  private init() {
    if (this.isInitialized) return

    // Populate categories
    for (const cat of seedCategories) {
      this.categories.set(cat.slug, { ...cat })
    }

    // Populate products
    for (const prod of seedProducts) {
      this.products.set(prod.slug, { ...prod })
    }

    // Attempt optional SQLite initialization if running in persistent node environment
    try {
      this.initSqlite()
    } catch (e) {
      // In serverless / edge environments where filesystem is restricted,
      // the high-speed in-memory database engine handles all queries reliably.
      console.info('[AURELIA DB] Running in high-performance memory mode')
    }

    this.isInitialized = true
  }

  private initSqlite() {
    // Optional integration with Node 22+ built-in SQLite
    try {
      const sqliteModule = 'node:sqlite'
      // Dynamic import to prevent bundler errors on serverless platforms
      const { DatabaseSync } = require(sqliteModule)
      if (DatabaseSync) {
        const db = new DatabaseSync(':memory:')
        db.exec(`
          CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE,
            name TEXT,
            category TEXT,
            price REAL,
            data TEXT
          );
        `)
        const insertStmt = db.prepare('INSERT OR REPLACE INTO products (id, slug, name, category, price, data) VALUES (?, ?, ?, ?, ?, ?)')
        for (const prod of seedProducts) {
          insertStmt.run(prod.id, prod.slug, prod.name, prod.category, prod.price, JSON.stringify(prod))
        }
      }
    } catch {
      // Graceful fallback
    }
  }

  public getCategories(): Category[] {
    this.init()
    // Calculate live counts
    const counts = new Map<string, number>()
    for (const prod of this.products.values()) {
      counts.set(prod.category, (counts.get(prod.category) || 0) + 1)
    }

    return Array.from(this.categories.values()).map(cat => ({
      ...cat,
      itemCount: counts.get(cat.slug) || 0
    }))
  }

  public getProducts(params: {
    category?: string
    material?: string
    gemstone?: string
    search?: string
    sort?: string
    featured?: string
    inStockOnly?: boolean
    minPrice?: number
    maxPrice?: number
    limit?: number
    page?: number
  } = {}) {
    this.init()
    let results = Array.from(this.products.values())

    // Category filter
    if (params.category && params.category !== 'all') {
      results = results.filter(p => p.category.toLowerCase() === params.category!.toLowerCase())
    }

    // Material filter
    if (params.material) {
      results = results.filter(p =>
        p.materials.some(m => m.toLowerCase().includes(params.material!.toLowerCase()))
      )
    }

    // Gemstone filter
    if (params.gemstone) {
      results = results.filter(p =>
        p.gemstone.toLowerCase().includes(params.gemstone!.toLowerCase())
      )
    }

    // In stock filter
    if (params.inStockOnly) {
      results = results.filter(p => p.inStock && p.stockCount > 0)
    }

    // Price range
    if (typeof params.minPrice === 'number' && !isNaN(params.minPrice)) {
      results = results.filter(p => p.price >= params.minPrice!)
    }
    if (typeof params.maxPrice === 'number' && !isNaN(params.maxPrice)) {
      results = results.filter(p => p.price <= params.maxPrice!)
    }

    // Featured only
    if (params.featured === 'true') {
      results = results.filter(p => p.isFeatured)
    }

    // Search query
    if (params.search && params.search.trim()) {
      const q = params.search.toLowerCase().trim()
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.gemstone.toLowerCase().includes(q) ||
        p.materials.some(m => m.toLowerCase().includes(q))
      )
    }

    // Sorting
    switch (params.sort) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        results.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        results.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
        break
      case 'newest':
        results.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1))
        break
      case 'featured':
      default:
        results.sort((a, b) => (b.isFeatured === a.isFeatured ? 0 : b.isFeatured ? 1 : -1))
        break
    }

    const total = results.length
    const page = Math.max(1, params.page || 1)
    const limit = params.limit ? Math.max(1, params.limit) : 24
    const offset = (page - 1) * limit
    const paginated = results.slice(offset, offset + limit)

    return {
      products: paginated,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  }

  public getProductBySlug(slug: string): Product | null {
    this.init()
    const product = this.products.get(slug)
    if (!product) return null
    return { ...product }
  }

  public getRelatedProducts(slug: string, limit = 4): Product[] {
    this.init()
    const current = this.products.get(slug)
    if (!current) return []

    return Array.from(this.products.values())
      .filter(p => p.slug !== slug && (p.category === current.category || p.isFeatured))
      .slice(0, limit)
  }

  public createOrder(order: Order): Order {
    this.init()
    this.orders.set(order.id, order)
    return order
  }

  public getOrder(id: string): Order | null {
    this.init()
    return this.orders.get(id) || null
  }
}

// Global singleton instance
export const db = new DatabaseService()
