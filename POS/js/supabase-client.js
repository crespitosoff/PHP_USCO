// Tiendas de Promisión Huila - Supabase MVP Service
// Replace these values with your actual Supabase project credentials.

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR...YOUR_ANON_KEY...';

let supabase = null;

if (window.supabase) {
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase Client initialized. (Ensure matching credentials are correct)");
    } catch(e) {
        console.warn("Could not initialize Supabase. Running in local-only mode.");
    }
}

const supabaseService = {
    async insertSale(saleData) {
        if (!supabase || SUPABASE_URL.includes("YOUR_PROJECT_ID")) {
            console.log("Supabase not configured. Simulating save to DB:", saleData);
            return { success: true, simulated: true };
        }

        try {
            const { data, error } = await supabase
                .from('sales')
                .insert([saleData]);
                
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error("Error saving sale to Supabase:", error);
            return { success: false, error };
        }
    },

    async saveRegisterEvent(eventData) {
        if (!supabase || SUPABASE_URL.includes("YOUR_PROJECT_ID")) {
            console.log("Supabase not configured. Simulating register event save:", eventData);
            return { success: true, simulated: true };
        }

        try {
            const { data, error } = await supabase
                .from('register_events')
                .insert([eventData]);
                
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error("Error saving register event to Supabase:", error);
            return { success: false, error };
        }
    }
};
