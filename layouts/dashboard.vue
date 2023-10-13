<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex-1 flex gap-4 mx-40 my-8">
            <div
                class="bg-neutral-200 w-1/4 rounded-md flex flex-col gap-6 px-4 py-8"
            >
                <NuxtLink
                    href="/dashboard"
                    class="hover:font-medium cursor-default"
                    >Profile</NuxtLink
                >
                <NuxtLink
                    href="/dashboard/product/list"
                    class="hover:font-medium cursor-default"
                    >Products</NuxtLink
                >
                <NuxtLink
                    href="/dashboard/product/add"
                    class="hover:font-medium cursor-default"
                >
                    Add Product
                </NuxtLink>
                <button
                    @click="signOut"
                    class="bg-black text-white px-2 py-1 rounded mt-8"
                >
                    LOG OUT
                </button>
            </div>
            <div class="flex-1">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: "auth",
});
const router = useRouter();
const client = useSupabaseClient();
const signOut = async () => {
    const { error } = await client.auth.signOut();
    router.push("/");
};
</script>
