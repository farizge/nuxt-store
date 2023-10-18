import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const client = await serverSupabaseClient(event);

    const { data } = await client
        .from("products")
        .select("*")
        .eq("product_id", id)
        .single();

    return { product: data };
});
