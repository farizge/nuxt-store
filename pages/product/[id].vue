<template>
    <div class="mx-40 my-8 flex gap-8">
        <img
            :alt="product.product_title"
            :src="imageUrl + product.img_file"
            class="object-cover object-center w-[30%] rounded-lg border-2"
        />
        <div class="flex flex-col gap-4 mt-5">
            <div class="flex flex-col">
                <h1 class="font-bold text-xl">
                    {{ product.product_title }}
                </h1>
                <h3 class="uppercase">{{ product.product_brand }}</h3>
            </div>
            <h3 class="text-2xl font-bold">Rp. {{ product.product_price }}</h3>
            <div class="flex flex-col gap-2">
                <p class="font-semibold">Description:</p>
                <p class="w-[50%]">{{ product.product_desc }}</p>
            </div>
            <button
                class="bg-black text-white font-medium px-2 py-1 w-36 rounded"
            >
                + Cart
            </button>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const imageUrl = runtimeConfig.public.baseImageUrl;
const { product, error } = await $fetch(`/api/product/${route.params.id}`);
if (error) {
    console.log(error);
}
</script>
