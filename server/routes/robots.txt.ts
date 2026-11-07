export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const baseUrl = config.public.siteUrl || 'https://aurelia-jewelry.vercel.app'

  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /checkout
Disallow: /order-confirmation

Sitemap: ${baseUrl}/sitemap.xml
`

  setHeader(event, 'Content-Type', 'text/plain')
  return robots
})
