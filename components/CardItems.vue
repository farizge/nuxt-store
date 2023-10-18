<template>
    <NuxtLink :to="`/product/${item.product_id}`">
        <div class="w-72 shadow-lg flex flex-col justify-between">
            <figure class="grid place-items-center rounded overflow-hidden">
                <img
                    :alt="item.product_title"
                    :src="imageUrl + item.img_file"
                    class="object-cover object-center max-h-96 hover:scale-110 transition-all ease-in-out duration-300"
                />
            </figure>
            <div class="mt-4 p-4 flex flex-col gap-2">
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
                    <p class="font-bold">Rp. {{ item.product_price }}</p>
                    <button class="bg-black text-white p-2 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>
<script setup>
const runtimeConfig = useRuntimeConfig();
const imageUrl = runtimeConfig.public.baseImageUrl;
</script>
