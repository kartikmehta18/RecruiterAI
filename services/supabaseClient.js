import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://osbbyjrcyezqxdifqxmz.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zYmJ5anJjeWV6cXhkaWZxeG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzczMzgsImV4cCI6MjA2Nzc1MzMzOH0.J7fwX3PIUAUt3jusWyEXfXyv7baM-Cnvs9aezRC0NJs";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
