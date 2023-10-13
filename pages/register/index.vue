<template>
    <div
        class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
    >
        <div class="w-full">
            <div class="text-center">
                <h1 class="text-3xl font-extrabold text-gray-900">SIGN UP</h1>
                <p class="mt-2 text-gray-500">Create your account here</p>
            </div>
            <div class="mt-5">
                <form @submit.prevent="signUp">
                    <div class="relative mt-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            autocomplete="NA"
                            v-model="email"
                        />
                        <label
                            for="email"
                            class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >Email Address</label
                        >
                    </div>
                    <div class="relative mt-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                            v-model="password"
                        />
                        <label
                            for="password"
                            class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >Password</label
                        >
                    </div>
                    <div class="my-6">
                        <button
                            type="submit"
                            class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                        >
                            Register
                        </button>
                    </div>
                    <p class="text-blue-500">{{ successMsg }}</p>
                    <p class="text-center text-sm text-gray-500">
                        Already have an account?
                        <NuxtLink
                            to="/login"
                            class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                            >Sign In</NuxtLink
                        >.
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
    layout: "auth",
    middleware: "no-auth",
});
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const successMsg = ref(null);

const signUp = async () => {
    const { error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
};
</script>
