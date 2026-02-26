import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Directory Inclusion | Homestead Track Day Logistics',
    description: 'Local business owners within a 10-mile radius of the Homestead-Miami Speedway may request inclusion in this logistical directory.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
