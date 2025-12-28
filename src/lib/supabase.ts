import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client with empty strings if env vars are missing (will fail gracefully at runtime)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

