import { db } from '../../db'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const category = query.category ? String(query.category) : undefined
  const material = query.material ? String(query.material) : undefined
  const gemstone = query.gemstone ? String(query.gemstone) : undefined
  const search = query.search ? String(query.search) : undefined
  const sort = query.sort ? String(query.sort) : undefined
  const featured = query.featured ? String(query.featured) : undefined
  const inStockOnly = query.inStockOnly === 'true'
  const minPrice = query.minPrice ? Number(query.minPrice) : undefined
  const maxPrice = query.maxPrice ? Number(query.maxPrice) : undefined
  const page = query.page ? Number(query.page) : 1
  const limit = query.limit ? Number(query.limit) : 24

  return db.getProducts({
    category,
    material,
    gemstone,
    search,
    sort,
    featured,
    inStockOnly,
    minPrice,
    maxPrice,
    page,
    limit
  })
})
