-- ============================================================
-- AURELIA Fine Jewelry - Supabase Database Schema & Seed
-- Run this script in the Supabase SQL Editor if using Supabase
-- ============================================================

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  category TEXT REFERENCES public.categories(slug) ON DELETE CASCADE,
  category_label TEXT,
  price NUMERIC(10, 2) NOT NULL,
  compare_at_price NUMERIC(10, 2),
  rating NUMERIC(3, 2) DEFAULT 5.0,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT TRUE,
  stock_count INTEGER DEFAULT 10,
  is_featured BOOLEAN DEFAULT FALSE,
  is_new BOOLEAN DEFAULT FALSE,
  materials JSONB DEFAULT '[]'::jsonb,
  default_material TEXT,
  sizes JSONB DEFAULT '[]'::jsonb,
  default_size TEXT,
  gemstone TEXT,
  carat_weight TEXT,
  images JSONB DEFAULT '[]'::jsonb,
  thumbnail TEXT,
  sku TEXT,
  details JSONB DEFAULT '[]'::jsonb,
  care_instructions TEXT,
  shipping_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer JSONB NOT NULL,
  shipping_address JSONB NOT NULL,
  items JSONB NOT NULL,
  subtotal NUMERIC(10, 2) NOT NULL,
  discount NUMERIC(10, 2) DEFAULT 0,
  tax NUMERIC(10, 2) NOT NULL,
  shipping NUMERIC(10, 2) DEFAULT 0,
  total NUMERIC(10, 2) NOT NULL,
  payment_method TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public categories are viewable by everyone" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public products are viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public can insert orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can read own orders by order_number" ON public.orders FOR SELECT USING (true);
