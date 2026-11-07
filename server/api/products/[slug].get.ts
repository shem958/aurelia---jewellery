import { db } from '../../db'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product slug is required'
    })
  }

  const product = db.getProductBySlug(slug)
  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: `Product with slug "${slug}" not found`
    })
  }

  const related = db.getRelatedProducts(slug, 4)

  return {
    product,
    related
  }
})
