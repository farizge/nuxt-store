<template>
    <div class="flex flex-col px-20">
        <h1 class="text-xl font-bold text-center">ADD PRODUCT</h1>
        <form @submit.prevent="addProduct" class="flex flex-col gap-6 mt-4">
            <div class="relative">
                <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    v-model="title"
                />
                <label
                    for="title"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Title</label
                >
            </div>
            <div class="relative">
                <input
                    type="text"
                    name="brand"
                    placeholder="Product Brand"
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    v-model="brand"
                />
                <label
                    for="brand"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Brand</label
                >
            </div>
            <div class="relative">
                <input
                    type="number"
                    name="price"
                    placeholder="Price Rp."
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    v-model="price"
                />
                <label
                    for="price"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Price Rp.</label
                >
            </div>
            <div class="relative">
                <input
                    type="number"
                    name="stock"
                    placeholder="Product Stock"
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    v-model="stock"
                />
                <label
                    for="stock"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Stock</label
                >
            </div>
            <div class="relative">
                <input
                    type="text"
                    name="category"
                    placeholder="Product Category"
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    v-model="category"
                />
                <label
                    for="category"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Category</label
                >
            </div>
            <div class="relative">
                <textarea
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500"
                    v-model="description"
                />
                <label
                    for="description"
                    class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-[75%] transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >Description</label
                >
            </div>
            <div class="flex flex-col gap-2">
                <label for="image" class="text-gray-400">Input Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    class="text-gray-400"
                    @change="getFileName"
                    ref="imageInput"
                />
            </div>
            <button
                type="submit"
                class="bg-black py-2 w-1/4 text-white self-center rounded-md mt-8"
            >
                Add Product
            </button>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "dashboard",
    middleware: "auth",
});
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
const title = ref("");
const brand = ref("");
const price = ref(null);
const stock = ref(null);
const category = ref("");
const description = ref("");
const fileName = ref(null);
const imageInput = ref(null);
const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();

const getFileName = async (e) => {
    const name = e.target.value.replace(/.*[\/\\]/, "");
    fileName.value = name;
};

const uploadFile = async () => {
    const file = imageInput.value.files[0];
    const { data, error } = await client.storage
        .from("product-images")
        .upload(fileName.value, file);
    if (error) {
        console.log(error);
    }
};

const addProduct = async () => {
    //upload image
    uploadFile();
    //record to database
    const product = {
        product_id: uuidv4(),
        user_id: user.value.id,
        product_title: title.value,
        product_brand: brand.value,
        product_price: price.value,
        product_stock: stock.value,
        product_category: category.value,
        product_desc: description.value,
        img_file: fileName.value,
    };
    const { error } = await client
        .from("products")
        .upsert({ ...product })
        .select();
    if (error) {
        console.log(error);
    } else {
        await router.push("/dashboard/product/list");
        useNuxtApp().$toast.success("Product Successfully Added");
    }
};
</script>
