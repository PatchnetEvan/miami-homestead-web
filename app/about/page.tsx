import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About MiamiHomestead.com | Track Day Logistics',
    description: 'A specialized digital directory designed to provide logistical clarity for participants and visitors attending regional motorsports events.'
};

export default function About() {
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
            <h1>About MiamiHomestead.com</h1>

            <p>
                MiamiHomestead.com is a specialized digital directory designed to provide logistical clarity for participants and visitors attending regional motorsports events. Our mission is to bridge the gap between visiting enthusiasts and the local business ecosystem through a clean, high-utility interface.
            </p>

            <h2>Why This Exists</h2>
            <p>
                Large-scale events at regional venues bring a significant influx of visitors who require specific logistical support—ranging from heavy-vehicle parking to specialized mechanical services.
            </p>
            <p>
                Traditional search platforms often fail to filter for these technical needs. This project was built to provide a focused, neutral, and factual resource that highlights businesses capable of supporting these unique requirements.
            </p>

            <h2>Who We Serve</h2>
            <div className="mb-6">
                <h3>Visiting Enthusiasts</h3>
                <p>
                    Providing immediate access to "Track Side" services, 24-hour hardware, and clean dining options.
                </p>
            </div>
            <div className="mb-6">
                <h3>Local Businesses</h3>
                <p>
                    Offering a platform to be discovered by a high-intent, specialized demographic without the clutter of a marketing funnel.
                </p>
            </div>
            <div className="mb-6">
                <h3>Community Partners</h3>
                <p>
                    Serving as a digital companion to local civic and commerce organizations by organizing regional resources into a logical, documentation-style format.
                </p>
            </div>

            <h2>Our Core Values</h2>
            <div className="mb-6">
                <h3>Neutrality</h3>
                <p>
                    We do not rank or endorse. We categorize and inform.
                </p>
            </div>
            <div className="mb-6">
                <h3>Utility</h3>
                <p>
                    Every feature—from our 10-mile radius filter to our "Open Now" status—is built for real-world reliability.
                </p>
            </div>
            <div className="mb-6">
                <h3>Independence</h3>
                <p>
                    We operate as a private initiative to ensure the directory remains fast, uncluttered, and free of third-party advertisements.
                </p>
            </div>

            <p className="mt-12 pt-4 border-t border-gray-200 text-sm italic text-gray-500">
                MiamiHomestead.com is an independent directory and does not constitute an official affiliation with any municipal or private venue.
            </p>
        </main>
    );
}
