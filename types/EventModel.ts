import type { ArtistModel } from './ArtistModel';

export interface EventModel {
    title: string;
    startsAt: string;
    endsAt: string;
    artists: ArtistModel[];
}
