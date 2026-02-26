import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact & Arrival | Homestead Track Day Logistics',
    description: 'Gate 18 coordinates, map, and arrival instructions for Homestead-Miami Speedway track weekend participants.'
};

export default function Contact() {
    return (
        <main>
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-sans font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors uppercase tracking-widest"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                    Back to Home
                </Link>
            </div>
            <h1>Contact & Arrival</h1>

            <p>
                For logistical inquiries or directory corrections, please use our technical support channels. For immediate navigation to the facility, use the coordinates and instructions provided below.
            </p>

            {/* Technical Static Map Integration */}
            <div className="my-12 relative w-full h-[350px] sm:h-[450px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-sm transition-colors duration-200">
                <iframe
                    title="Gate 18 Location Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-80.4195,25.4395,-80.3995,25.4595&amp;layer=mapnik"
                    className="w-full h-full border-0 grayscale contrast-125 dark:invert dark:hue-rotate-180 dark:opacity-80 pointer-events-none"
                    loading="lazy"
                ></iframe>
                {/* Indigo-600 Marker placed absolutely dead center to match the bbox center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.2)]"></div>
                    <span className="absolute ml-28 text-xs font-mono font-bold text-indigo-900 dark:text-indigo-100 bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded shadow-sm">GATE 18</span>
                </div>
            </div>

            <h2>Operational Anchor: Gate 18</h2>

            <div className="mb-10 space-y-4">
                <p>
                    <strong className="text-slate-900 dark:text-slate-100">Coordinates:</strong> <span className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-1.5 py-0.5 rounded text-sm tracking-tight inline-block ml-1 border border-indigo-100 dark:border-indigo-900/50">25.4495, -80.4095</span>
                </p>
                <p>
                    <strong className="text-slate-900 dark:text-slate-100">Location:</strong> Gate 18 is located off SW 344th St (Palm Drive).
                </p>
                <p>
                    <strong className="text-slate-900 dark:text-slate-100">Arrival Instructions:</strong> From Speedway Blvd (137th Ave), turn East onto Palm Drive (SW 344th St). Gate 18 will be on your left. This is the designated entrance for participant registration, paddock access, and tech inspection.
                </p>
            </div>

            <h2>Technical Support</h2>

            <div className="mb-6 space-y-4">
                <p>
                    <strong className="text-slate-900 dark:text-slate-100">Email:</strong> Use the Logistical Inquiry template provided in our <Link href="/resources" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline underline-offset-2">Resources</Link> section.
                </p>
                <p>
                    <strong className="text-slate-900 dark:text-slate-100">Response Protocol:</strong> Inquiries are prioritized based on their alignment with our 10-mile directory standards and logistical utility.
                </p>
            </div>

        </main>
    );
}
