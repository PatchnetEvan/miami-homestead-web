import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hardware & Industrial Supplies | Homestead Track Day Logistics',
    description: 'A guide to local hardware stores, industrial suppliers, and specialty fastener shops for emergency trackside repairs.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
