import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[REBOULO] Supabase environment variables not configured. Auth and data features will not work until connected.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
);

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: { id: string; name: string; brand_name: string | null; owner_id: string; created_at: string; trial_ends_at: string; subscription_status: string };
      };
      profiles: {
        Row: { id: string; email: string; first_name: string; last_name: string; company_id: string; role: string };
      };
    };
  };
};
