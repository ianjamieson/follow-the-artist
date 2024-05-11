<script setup type="ts">
import { isPast } from 'date-fns';
const route = useRoute();
const { data: venue } = await useFetch(`/api/venue/${route.params.venue}/${route.params.location}`)

const pastEvents = computed(() => venue.value.events
    .filter((event) => isPast(new Date(event.startsAt)))
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime()))

</script>

<template>
    <div class="space-y-14">
        <!-- Header -->
        <div class="text-center space-y-4">
            <div class="rounded-full w-[180px] overflow-hidden z-10 border-2 border-[#666666] mx-auto">
                <img :src="venue.logo"  />
            </div>

            <div>
                <Heading level="1">{{ venue.title }}</Heading>
            </div>
        </div>

        <!-- Now -->
        <div class="space-y-4">
            <div class="text-right">
                <Heading level="3" class="neon font-neon text-5xl">Live now</Heading>
            </div>
            <div class="relative flex bg-opacity-40 bg-black p-5 pl-[130px]">
                <span class="text-2xl font-freeman">Ian Jamieson</span>
                <div class="absolute -top-[40px] -left-[10px] rounded-full overflow-hidden">
                    <img
                        class="w-[120px] h-[120px] object-cover"
                        src="https://assets-global.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce0f7c_how-to-start-a-band-and-get-booked-header.jpeg">
                </div>
            </div>
        </div>

        <!-- Next -->
        <div class="space-y-4 opacity-40">
            <div class="text-right">
                <Heading level="3">Coming up...</Heading>
            </div>
            <div class="relative flex bg-opacity-40 bg-black p-5 pl-[130px]">
                <span class="text-2xl font-freeman">The Beatles</span>
                <div class="absolute -top-[40px] -left-[10px] rounded-full overflow-hidden">
                    <img
                        class="w-[120px] h-[120px] object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg/640px-Beatles_ad_1965_just_the_beatles_crop.jpg">
                </div>
            </div>
        </div>


        <!-- Past events -->
        <div class="space-y-6 opacity-100">
            <Heading level="2">Past events</Heading>

            <div class="space-y-6">
                <PastEvent v-for="pastEvent in pastEvents" :past-event="pastEvent" />
            </div>
        </div>

    </div>
</template>