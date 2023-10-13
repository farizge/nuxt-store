// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
    supabase: {
        redirect: false,
    },
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
    },
    runtimeConfig: {
        public: {
            baseUrl: "http://localhost:3000/",
            baseImageUrl: `${process.env.SUPABASE_URL}/storage/v1/object/public/product-images/`,
        },
    },
    components: true,
});
