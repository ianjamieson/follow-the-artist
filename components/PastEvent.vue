<script lang="ts" setup>
import type { EventModel } from '~/types/EventModel';

const props = defineProps<{
    pastEvent: EventModel;
}>()

const withArtists = props.pastEvent.artists.map((artist) => artist.name).join(', ')

</script>
<template>
    <div class="flex space-x-4">
        <Date
            :date="new Date(pastEvent.startsAt)"
            class="flex-none"
        />
        <div class="bg-black bg-opacity-40 flex-1 px-5 py-2">
            <p class="text-2xl font-freeman">{{ pastEvent.title }}</p>
            <p class="text-gray-100">With {{ withArtists }}</p>
        </div>
    </div>
</template>