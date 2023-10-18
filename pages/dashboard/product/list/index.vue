<template>
    <div>
        <div class="flex flex-col px-10">
            <h1 class="text-xl font-bold text-center">LIST PRODUCTS</h1>
            <div v-if="items" class="flex flex-col gap-4">
                <div
                    class="shadow-lg flex"
                    v-for="item in items"
                    :key="item.product_id"
                >
                    <figure class="overflow-hidden p-2">
                        <img
                            :alt="item.product_title"
                            :src="imageUrl + item.img_file"
                            class="object-cover object-center w-32 rounded-md"
                        />
                    </figure>
                    <div class="mt-4 p-4 flex flex-col gap-2 flex-1">
                        <div class="flex flex-col gap-0">
                            <h2
                                class="text-neutral-700 tracking-tighter uppercase font-semibold"
                            >
                                {{ item?.product_brand }}
                            </h2>
                            <h2 class="text-neutral-700">
                                {{ item?.product_title?.substring(0, 50) }}
                            </h2>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="font-bold">
                                Rp. {{ item?.product_price }}
                            </p>
                            <div class="flex gap-2">
                                <NuxtLink
                                    class="border border-black p-2 rounded-lg"
                                    :to="`/dashboard/product/edit/${item.product_id}`"
                                >
                                    Edit
                                </NuxtLink>
                                <button
                                    @click="deleteProduct(item.product_id)"
                                    class="bg-black text-white p-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "dashboard",
    middleware: "auth",
});
const client = useSupabaseClient();
const runtimeConfig = useRuntimeConfig();
const imageUrl = runtimeConfig.public.baseImageUrl;

const items = ref([]);

const loadData = async () => {
    const { products, error } = await $fetch("/api/products");
    if (error) {
        console.log(error);
    } else {
        items.value = products;
    }
};

const deleteProduct = async (id) => {
    const { data, error } = await client
        .from("products")
        .delete()
        .eq("product_id", id);

    if (error) {
        console.error(error);
    } else {
        items.value = items.value.filter(
            (product) => product.product_id !== id
        );
        useNuxtApp().$toast.error("Product Deleted");
    }
};

onMounted(() => {
    loadData();
});
</script>
