<template>
    <div id="app" class="flex flex-col min-h-screen scroll-smooth">
        <Navbar />
        <div class="flex-1">
            <slot />
        </div>
        <Footer />
    </div>
</template>
