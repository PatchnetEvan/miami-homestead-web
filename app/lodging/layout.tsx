import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trailer-Friendly Lodging | Homestead Track Day Logistics',
    description: 'A directory of accommodations with specific utilities for track attendees, focusing on parking capacity, trailer access, and proximity to Gate 18.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
