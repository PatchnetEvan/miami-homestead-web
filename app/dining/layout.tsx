import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trackside Dining & Clean Protein | Homestead Track Day Logistics',
    description: 'A guide focusing on "Clean Protein" locations, steakhouses, and whole-food kitchens near the Speedway for optimal track weekend recovery.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
