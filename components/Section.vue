<template>
    <section class="px-40 py-20 flex flex-col gap-10 items-center">
        <h1 class="uppercase text-4xl tracking-tighter font-black">
            new <span class="font-normal">arrivals</span>
        </h1>
        <div
            v-if="products"
            class="grid grid-flow-col auto-cols-max gap-8 overflow-x-scroll no-scrollbar"
        >
            <CardItems
                v-for="item in products"
                :key="item.product_id"
                :item="item"
            />
        </div>
    </section>
</template>

<script setup>
const { products } = await $fetch("/api/products-new");
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
