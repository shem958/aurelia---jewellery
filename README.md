# AURELIA | Haute Joaillerie & Artisanal Fine Jewelry

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.15-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Pinia](https://img.shields.io/badge/Pinia-State%20Management-FFE564)](https://pinia.vuejs.org)
[![Schema.org](https://img.shields.io/badge/SEO-Schema.org%20JSON--LD-blue)](https://schema.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)

An online fine jewelry boutique engineered with **Nuxt 3**, **Tailwind CSS**, a full-stack **Nitro backend & database service** (with optional **Supabase** connectivity), client-side **Pinia** bag state, and comprehensive **technical SEO** (dynamic XML sitemap, Schema.org JSON-LD structured data, Open Graph cards, canonical URLs, and responsive modern image handling).

---

## 🏛️ Brand Concept & Unique Identity

**AURELIA** is an original bespoke brand concept designed specifically for this take-home project. It does not copy or clone any existing commercial jewelry store's branding, photography trademarks, or stylesheets.

* **Ethos**: Ethical, contemporary heirloom fine jewelry cast in 100% recycled 18k solid gold (yellow, white, rose) and 950 platinum, featuring conflict-free certified lab diamonds and gemstones.
* **Palette**: Haute horlogerie & atelier aesthetic — rich Obsidian Noir (`#0d0d0e`), warm Champagne Gold (`#d4af37`), and Sandstone Parchment (`#FCFAF7`).
* **Typography**: Editorial serif typography (`Cormorant Garamond`) paired with high-legibility geometric sans-serif (`Plus Jakarta Sans`).

---

## ✨ Features Overview

### 1. Product Listing Page (PLP) (`/products`)
* **Multi-Facet Filtering**:
  * Filter by category (Rings, Necklaces & Pendants, Bracelets & Bangles, Earrings).
  * Filter by precious metal (18k Yellow Gold, 18k White Gold, 18k Rose Gold, 950 Platinum).
  * Filter by gemstone (Lab Diamond, Emerald, Ceylon Sapphire, Cultured Pearl).
  * Filter by price tier (`Under $1,000`, `$1,000 - $2,000`, `$2,000+`).
  * "In Stock Only" toggle.
* **Search Integration**: Instant full-text search across titles, descriptions, materials, and stone types.
* **URL Sync**: All active filters and search terms are two-way synced to browser query parameters for direct link sharing and bookmarking.
* **Dynamic Sorting**: Featured creations, New Arrivals, Price (Low to High), Price (High to Low), and Verified Reviews.
* **Active Filter Chips**: 1-click removal of individual tags or a full "Reset All" action.
* **Card Interactivity**: Dual-image hover transitions displaying secondary angles, stock warnings, and "Quick Acquire" buttons.

### 2. Product Detail Page (PDP) (`/products/[slug]`)
* **Clean URLs**: SEO-friendly slugs (e.g. `/products/celestial-solitaire-diamond-ring`).
* **Interactive Visual Gallery**: High-resolution primary viewport with thumbnail strip switcher.
* **Metal & Size Selectors**: Visual color swatches with dynamic inventory feedback and modal-driven **Maison Sizing Guide**.
* **Financing Callout**: Realistic installments display (e.g., *"Or 4 interest-free payments of $X with Klarna"*).
* **Tabbed Craftsmanship Accordion**:
  * Architectural design description.
  * Technical specifications table (carat weight, color grade, clarity, metal purity).
  * Care instructions and tamper-evident packaging details.
* **Verified Customer Reviews**: Real client reviews, star rating distribution, and verified patron badges.
* **"Complete The Look"**: Dynamically recommended related items matching the category or collection.

### 3. Shopping Bag & Checkout Flow (`/cart` & `/checkout`)
* **Dual Bag Interface**:
  * **Global Slide-Over Drawer**: Instantly accessible from the header anywhere in the application with backdrop blur.
  * **Full Cart Page (`/cart`)**: Detailed itemized review with line totals, quantity stepper, and clear bag options.
* **Free Shipping Gamification**: Progress indicator calculating the threshold needed for complimentary express courier delivery (unlocked at $150).
* **Privilege Promotional Code System**:
  * Enter `WELCOME10` for **10% off**.
  * Enter `LUXE20` for **20% off**.
* **Client-Side Persistence**: Synchronized via Pinia store to `localStorage` to ensure cart items persist across browser reloads.
* **Mock Checkout (`/checkout`)**:
  * Step-by-step form for client dossier (contact info, white-glove delivery address).
  * Mock payment methods (Encrypted Credit Card simulation, Apple Pay).
  * Server-side order generation via `POST /api/checkout`.
  * Verified Order Confirmation receipt modal with unique order number (`AUR-XXXXXX`), summary, and printable receipt.

### 4. Technical SEO Done Properly
* **Unique Per-Page Meta**: Distinct page `<title>`, `<meta name="description">`, and canonical links configured with `useSeoMeta()` and `useHead()`.
* **Social Open Graph & Twitter Cards**: Dynamic `og:title`, `og:description`, `og:image`, `twitter:card="summary_large_image"` for all catalog items and marketing pages.
* **Schema.org Structured Data**:
  * `JewelryStore` and `WebSite` schema on the homepage.
  * `Product` and `Offer` schema on every detail page (includes price, currency, availability, and aggregate review ratings).
  * `BreadcrumbList` schema on category and detail views.
* **Dynamic XML Sitemap (`/sitemap.xml`)**: Nitro server route generating standards-compliant XML listing all static pages, category filters, and every product slug dynamically pulled from the database.
* **Robots Configuration (`/robots.txt`)**: Search engine crawl directives referencing the live sitemap and disallowing private checkout endpoints.
* **Fast Image Handling**: Responsive image delivery, WebP format support, aspect-ratio containers preventing Cumulative Layout Shift (CLS), and explicit `fetchpriority="high"` on above-the-fold hero imagery.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Key Responsibility |
|---|---|---|
| **Framework** | **Nuxt 3 / 4** | Universal SSR / SSG, auto-imported composables, file-system routing |
| **Styling** | **Tailwind CSS 3.4** | Bespoke luxury theme, customized typography, responsive layout |
| **State Management** | **Pinia** | Cart persistence, discount management, toast notifications |
| **Backend Engine** | **Nitro (Nuxt Server Engine)** | Full-stack Node API routes (`/api/products`, `/api/checkout`, etc.) |
| **Database** | **Relational Store + Node SQLite / Supabase** | High-speed structured product catalog with filtering and order storage |
| **Icons** | **Bespoke Inline SVGs & Lucide** | Minimal footprint, zero hydration layout shift |

---

## 🚀 How to Run Locally

### Prerequisites
* **Node.js**: v18.0.0 or higher (Node 20+ or 22+ recommended)
* **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation Steps

1. **Navigate to the project folder**:
   ```bash
   cd aurelia-jewellery
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables** (Optional):
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   > *Note: The application includes a self-contained in-memory and SQLite fallback database with 16 pre-seeded fine jewelry pieces. It will run out of the box with zero external configuration!*

4. **Start the Development Server**:
   ```bash
   pnpm dev
   ```
   Open your browser at **[http://localhost:3000](http://localhost:3000)**.

5. **Build for Production**:
   ```bash
   pnpm build
   ```
   To preview the production build locally:
   ```bash
   pnpm preview
   # Or run directly via Node:
   node .output/server/index.mjs
   ```

---

## 🗄️ Database Architecture & Supabase Integration

The backend is built around a unified service layer (`server/db/index.ts`) providing:
1. **Zero-Configuration Out-of-the-Box Mode**: Self-seeding database that runs instantly during local evaluation and serverless deployments.
2. **Built-In Node SQLite**: Uses Node's native SQLite support to store and query relational tables.
3. **Supabase Production Support**:
   If you wish to attach a live Supabase PostgreSQL database:
   1. Create a project in [Supabase](https://supabase.com).
   2. Open the SQL Editor and execute the provided `supabase-schema.sql` file located in the root of this repository.
   3. Add your credentials to `.env`:
      ```env
      SUPABASE_URL=https://your-project.supabase.co
      SUPABASE_KEY=your-supabase-anon-key
      ```

---

## 🌐 Deploying Live (Vercel, Netlify, or Node Host)

This project is pre-configured for one-click deployment:

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects the **Nuxt** framework preset.
4. Set the Root Directory to `aurelia-jewellery` (if part of a monorepo) or the project root.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://app.netlify.com).
2. Netlify reads the included `netlify.toml`:
   * Build command: `pnpm build`
   * Publish directory: `.output/public`
3. Click **Deploy Site**.

---

## 📐 Key Architectural Decisions

1. **Nuxt 3 with Server-Side Rendering (SSR)**:
   * *Why*: E-commerce requires superior First Contentful Paint (FCP) and infallible SEO. Server-side rendering ensures web crawlers (Googlebot, Bingbot, social scrapers) receive fully populated HTML with product titles, pricing, and JSON-LD metadata on the initial payload without relying on client-side JS hydration.

2. **Unified Nitro Backend vs. Standalone Express/Nest Service**:
   * *Why*: Nitro server routes (`/server/api/*`) provide TypeScript end-to-end type safety, zero CORS latency, and compile into lightweight serverless functions that deploy seamlessly to Vercel/Netlify in a single atomic repository.

3. **Hybrid Database Strategy with Fallback**:
   * *Why*: Reviewers and interviewers should not have to register for external cloud accounts or configure secrets just to inspect code and run the app. The database layer automatically seeds itself in memory and supports SQLite, while also exposing full Supabase configuration for production scale.

4. **Pinia Store with Client-Side Hydration**:
   * *Why*: Pinia provides a clean, predictable state machine for the shopping bag. LocalStorage synchronization ensures items are preserved when refreshing or navigating across pages, while `import.meta.client` guards eliminate any SSR hydration mismatches.

5. **Schema.org Structured Data Implementation**:
   * *Why*: Utilizing `@context: https://schema.org` with `Product`, `Offer`, `BreadcrumbList`, and `JewelryStore` unlocks Google Rich Snippets (showing price badges, stock status, and star rating directly in search engine results).

---

## 🔮 What I’d Improve with More Time

Given the 8–10 hour time budget, the focus was kept on polish, clean code architecture, working SEO, and a complete user journey. With more time, the following enhancements would be added:

1. **Live Stripe / Apple Pay Webhooks**:
   * Integrate Stripe Elements with real PaymentIntents and server-side webhook signatures (`stripe-signature`) for automated order fulfillment and PDF receipt generation via Resend/SendGrid.

2. **User Authentication & Customer Dashboard**:
   * Add Supabase Auth (or Nuxt Auth / Lucia) for client profiles, saved shipping addresses, order tracking history, and personalized wishlists.

3. **Live Inventory Reservation & Concurrency Handling**:
   * Implement Redis-backed atomic inventory decrement locks during checkout so two simultaneous customers cannot acquire the last one-of-a-kind bespoke piece.

4. **Visual Virtual Try-On / 3D Model Viewer**:
   * Embed `<model-viewer>` with GLTF/USDZ 3D models allowing clients to inspect ring settings in 360° AR on iOS and Android devices.

5. **Automated End-to-End Testing (Playwright)**:
   * Implement a Playwright E2E suite covering:
     * Filtering by metal and gemstone.
     * Adding to bag and verifying coupon deduction math.
     * Completing the mock checkout flow and verifying order confirmation.

---

## 📄 License

MIT License &bull; Created for the Take-Home Project submission.
