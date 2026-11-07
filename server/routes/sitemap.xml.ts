import { db } from '../db'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const baseUrl = config.public.siteUrl || 'https://aurelia-jewelry.vercel.app'
  const { products } = db.getProducts({ limit: 100 })
  const categories = db.getCategories()

  const staticRoutes = [
    { loc: '', changefreq: 'daily', priority: '1.0' },
    { loc: '/products', changefreq: 'daily', priority: '0.9' },
    { loc: '/about', changefreq: 'monthly', priority: '0.7' },
    { loc: '/cart', changefreq: 'weekly', priority: '0.5' }
  ]

  const categoryRoutes = categories.map(cat => ({
    loc: `/products?category=${cat.slug}`,
    changefreq: 'weekly',
    priority: '0.85'
  }))

  const productRoutes = products.map(prod => ({
    loc: `/products/${prod.slug}`,
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  }))

  const allUrls = [...staticRoutes, ...categoryRoutes, ...productRoutes]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
  </url>`)
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')
  return sitemapXml
})
