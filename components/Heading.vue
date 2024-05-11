<template>
    <component
        :is="`h${level}`"
        :class="{
            'text-4xl': level === '1',
            'text-3xl': level === '2',
            'text-2xl': level === '3',
            'text-xl': level === '4',
            'text-base': level === '5',
            'text-md': level === '6',

        }"
        class="font-freeman font-semibold">
        <slot />
    </component>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps<{
    level: string
}>();
</script>