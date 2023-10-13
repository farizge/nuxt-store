<template>
    <div class="flex p-2 border-b border-neutral-300 h-24">
        <figure class="rounded w-24"><img src="" alt="" /></figure>
        <div class="flex-1 flex flex-col justify-between">
            <h1 class="text-xl">Title</h1>
            <p class="font-bold text-xl">$999</p>
        </div>
        <div class="flex flex-col justify-between items-end">
            <button class="">
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div
                class="flex bg-white px-1 py-2 rounded-full w-24 items-center justify-between leading-none"
            >
                <button class="text-2xl">
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
                            d="M18 12H6"
                        />
                    </svg>
                </button>
                <p class="text-lg font-medium">1</p>
                <button class="text-2xl">
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
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
