import type { EventModel } from './EventModel';

export interface VenueModel {
    title: string;
    slug: string;
    logo: string;
    location: {
        slug: string;
    };
    events: EventModel[];
    lat: number;
    lng: number;
}