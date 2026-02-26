import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://miamihomestead.com';
    const currentTimestamp = new Date();

    const staticRoutes = [
        { path: '', changeFrequency: 'monthly', priority: 1.0 },
        { path: '/about', changeFrequency: 'monthly', priority: 0.5 },
        { path: '/resources', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/checklist', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
        { path: '/partnership', changeFrequency: 'monthly', priority: 0.5 },
    ] as const;

    const directoryRoutes = [
        { path: '/lodging', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/hardware', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/auto-moto-services', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/dining', changeFrequency: 'weekly', priority: 0.9 },
    ] as const;

    const generateRoutes = (routes: typeof staticRoutes | typeof directoryRoutes) => {
        return routes.map((route) => ({
            url: `${baseUrl}${route.path}`,
            lastModified: currentTimestamp,
            changeFrequency: route.changeFrequency as "weekly" | "monthly" | "yearly" | "always" | "hourly" | "daily" | "never",
            priority: route.priority,
        }));
    };

    return [
        ...generateRoutes(staticRoutes),
        ...generateRoutes(directoryRoutes),
    ];
}
