import type { VenueModel } from '~/types/VenueModel';
import fs from 'fs';
import util from 'util';
const writeFile = util.promisify(fs.writeFile);

const venues: VenueModel[] = [
    {
        title: 'Rapscallions Portsmouth',
        slug: 'rapscallions',
        logo: 'https://scontent.flhr1-2.fna.fbcdn.net/v/t39.30808-6/431283490_727712156140142_6616832393032287132_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nxz00MmnEmQQ7kNvgFIm9GS&_nc_ht=scontent.flhr1-2.fna&cb_e2o_trans=q&oh=00_AYAS31PhU3NrCU0lm9w6K87JTWvswzWiMMhEy6cj-QyzHA&oe=664576E6',
        location: {
            slug: 'portsmouth'
        },
        lat: 51.5074,
        lng: 0.1278,
        events: [
            {
                title: 'Rapscallions Live',
                startsAt: '2022-01-01T20:00:00',
                endsAt: '2022-01-01T23:00:00',
                artists: [
                    {
                        name: 'Ian Jamieson',
                        image: 'https://via.placeholder.com/150',
                        links: [
                            {
                                name: 'Instagram',
                                url: 'https://www.instagram.com/ianjamiesonmusic'
                            }
                        ]
                    },
                    {
                        name: 'Hari',
                        image: 'https://via.placeholder.com/150',
                        links: [
                            {
                                name: 'Instagram',
                                url: 'https://www.instagram.com/hariband'
                            }
                        ]
                    }
                ],
            },
            {
                title: 'Rapscallions Open Mic',
                startsAt: '2024-04-25T20:00:00',
                endsAt: '2024-04-25T23:00:00',
                artists: [
                    {
                        name: 'Damian Andrews',
                        image: 'https://via.placeholder.com/150',
                        links: [
                            {
                                name: 'Instagram',
                                url: 'https://www.instagram.com/ianjamiesonmusic'
                            }
                        ]
                    }
                ],
            },
            {
                title: 'Rapscallions Live',
                startsAt: '2024-05-09T20:00:00',
                endsAt: '2024-05-09T23:00:00',
                artists: [
                    {
                        name: 'Ian Jamieson',
                        image: 'https://via.placeholder.com/150',
                        links: [
                            {
                                name: 'Instagram',
                                url: 'https://www.instagram.com/ianjamiesonmusic'
                            }
                        ]
                    },
                    {
                        name: 'Hari',
                        image: 'https://via.placeholder.com/150',
                        links: [
                            {
                                name: 'Instagram',
                                url: 'https://www.instagram.com/hariband'
                            }
                        ]
                    }
                ],
            }
        ]
    }
];

venues.forEach(async (venue) => {
    await writeFile(`./.data/venues/${venue.slug}-${venue.location.slug}`, JSON.stringify(venue, null, 2));
});
