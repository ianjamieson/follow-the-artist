import { VenueModel } from '~/types/VenueModel';

export default defineEventHandler(async (event) => {
    // if (!event.context.params) {
    //     return {
    //         statusCode: 400,
    //         body: 'Bad request'
    //     };
    // }

    const { name, location } = event.context.params;
    return await useStorage().getItem(`venues:${name}-${location}`) as VenueModel;
})