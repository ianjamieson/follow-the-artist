<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'min-h-[100vh] bg-gradient-to-br bg-black from-[#000000] to-black text-white'
    }
})
</script>

<template>
    <div class="p-5 max-w-4xl mx-auto">
        <slot />
    </div>
</template>