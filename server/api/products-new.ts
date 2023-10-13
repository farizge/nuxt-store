import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event);

    const { data } = await client
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);

    return { products: data };
});
