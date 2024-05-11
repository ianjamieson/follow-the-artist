<script lang="ts" setup>
defineProps<{
    date: Date;
}>()
</script>

<template>
    <div class="flex flex-col items-center">
        <span class="text-2xl">{{ date.toLocaleDateString('en-GB', { day: 'numeric' }) }}</span>
        <span class="text-sm">{{ date.toLocaleDateString('en-GB', { month: 'short' }) }}</span>
        <span class="text-sm">{{ date.toLocaleDateString('en-GB', { year: 'numeric' }) }}</span>
    </div>
</template>