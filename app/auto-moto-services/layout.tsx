import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Auto & Moto Services | Homestead Track Day Logistics',
    description: 'A directory of nearby automotive and motorcycle service centers, parts stores, and specialized repair facilities near Gate 18.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
