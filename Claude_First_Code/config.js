// Shared Supabase connection — used by every page.
// Replace the key below with your real publishable key from Supabase → Settings → API Keys.
const SUPABASE_URL = "https://dmlqnpusubvzbptbtfzg.supabase.co";
const SUPABASE_KEY = "sb_publishable_tOqvWlWf2oF35aCa-ONyfQ_vabcBEA2";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const CATEGORIES = ["Hostel", "Mess/Food", "Wifi/IT", "Maintenance", "Academic", "Other"];
