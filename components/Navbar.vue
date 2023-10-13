<template>
    <nav class="bg-white border-b border-neutral-300">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-40 p-4"
        >
            <div class="flex flex-col">
                <h1 class="font-black text-2xl leading-none">NUXT.</h1>
                <p class="leading-none font-medium">SHOP</p>
            </div>

            <div class="flex gap-8">
                <div v-for="link in links" :key="link.name">
                    <a :href="link.link">{{ link.name }}</a>
                </div>
            </div>

            <div class="w-full max-w-lg relative flex items-center">
                <div class="absolute left-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>

                <input
                    type="search"
                    class="bg-neutral-200 rounded-full p-3 text-sm w-full indent-8"
                    placeholder="Search"
                />
            </div>
            <div class="flex gap-4 items-center">
                <NuxtLink to="/cart">
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
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                    </svg>
                </NuxtLink>

                <NuxtLink
                    v-if="user"
                    href="/dashboard/product/list"
                    class="bg-black text-white px-2 py-1 rounded"
                >
                    DASHBOARD
                </NuxtLink>
                <NuxtLink
                    v-else
                    to="/login"
                    class="bg-black text-white text-bold px-2 py-1 rounded-md"
                >
                    LOG IN
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
const links = [
    { name: "Shop", link: "/" },
    { name: "New Arrivals", link: "/" },
    { name: "Category", link: "/" },
];
const user = useSupabaseUser();
</script>

<style scoped>
.nav-links {
    display: flex;
    justify-content: flex-end;
    list-style: none;
}

.nav-links li {
    margin-left: 1rem;
}
</style>
