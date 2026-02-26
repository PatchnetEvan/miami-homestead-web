import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | MiamiHomestead.com',
    description: 'Conditions of use and privacy priorities for the MiamiHomestead.com logistical directory.'
};

export default function Terms() {
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
            <h1>Terms of Service & Privacy</h1>

            <p>
                This page outlines the conditions of use for this informational directory and our commitment to user privacy. By accessing this site, you acknowledge that the information provided is for logistical reference only.
            </p>

            <h2>No Affiliation or Endorsement</h2>
            <p>
                This website is an independently operated project. It is not affiliated with, sponsored by, or endorsed by the Homestead-Miami Speedway, the City of Homestead, or any individual business listed in the directory. All trademarks and brand names are the property of their respective owners and are used here for informational purposes under nominative fair use.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
                While we strive for precision in distances and operating hours, all data is subject to change without notice. We provide no guarantee of accuracy and are not liable for logistical delays or financial loss resulting from reliance on this directory. Users are encouraged to verify critical details (such as fuel availability or hotel parking) directly with the provider.
            </p>

            <h2>Privacy & Data Collection</h2>
            <p>
                We prioritize minimalist infrastructure. This site does not use tracking cookies, does not require user accounts, and does not sell user data. Any telemetry collected is strictly for technical optimization and performance monitoring.
            </p>

            <p className="mt-12 pt-4 border-t border-gray-200 text-sm italic text-gray-500">
                Listings are informational and do not constitute legal agreements or official partnerships.
            </p>
        </main>
    );
}
