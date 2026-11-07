import { createClient } from '@supabase/supabase-js'

export const getSupabaseClient = () => {
  const config = useRuntimeConfig()
  const url = config.supabaseUrl || process.env.SUPABASE_URL
  const key = config.supabaseKey || process.env.SUPABASE_KEY

  if (!url || !key) {
    return null
  }

  return createClient(url, key)
}
