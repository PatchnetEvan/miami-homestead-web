import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Homestead Logistics Directory',
        short_name: 'Logistics',
        description: 'Track Day Logistics and Resources for Homestead-Miami.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        icons: [
            {
                src: '/icon-192x192.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
            },
            {
                src: '/icon-512x512.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
            },
        ],
    };
}
