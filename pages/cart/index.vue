<template>
    <div class="mx-40 my-10">
        <h1 class="font-bold text-2xl uppercase mb-4">your cart</h1>
        <div class="flex gap-8">
            <div class="w-1/2 flex flex-col gap-2">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div class="w-1/2 border border-black">
                <p>Summary</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: "auth",
});
</script>
