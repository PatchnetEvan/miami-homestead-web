import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Logistical Resources | Homestead Track Day Logistics',
    description: 'Emergency safety numbers, hospital locations, and infrastructure details for Homestead-Miami Speedway participants.'
};

export default function Resources() {
    const supportSubject = encodeURIComponent("[Support Request] – MiamiHomestead.com Logistical Inquiry");
    const supportBody = encodeURIComponent(`Logistical Diagnostic Information

Inquiry Type: [Missing Resource / Broken Link / Data Correction / General Inquiry]

Related Page/Category: [e.g., /lodging, /checklist, /hardware]

Device/Browser: [e.g., Mobile/Chrome, Desktop/Safari]

Description of Issue or Suggestion
[Please provide a brief summary of the technical discrepancy or the high-utility business you would like to suggest for inclusion within our 10-mile radius.]

Logistical Data (If suggesting a new listing)

Business Name:

Coordinate/Proximity: [Distance from Gate 18]

Utility Note: [e.g., "Sells 110-octane fuel," "Open 24h for emergency trailer repair"]

Closing
This inquiry will be reviewed for alignment with our current design doctrine and logistical standards.`);

    const mailtoLink = `mailto:support@miamihomestead.com?subject=${supportSubject}&body=${supportBody}`;

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
            <h1>General Resources</h1>

            <p>
                This page serves as a directory for regional public safety and infrastructure services. These listings are provided for informational and logistical purposes only.
            </p>

            <h2>Public Safety & Medical</h2>

            <div className="mb-6">
                <h3>Emergency Services</h3>
                <p>
                    <strong>Dial 911.</strong>
                </p>
            </div>

            <div className="mb-6">
                <h3>Baptist Health Homestead Hospital</h3>
                <p>
                    <strong>Phone:</strong> (786) 243-8000<br />
                    <strong>Address:</strong> 975 Baptist Way, Homestead, FL 33033<br />
                    <strong>Details:</strong> Includes 24-hour emergency services and a specialized pediatric area.
                </p>
            </div>

            <div className="mb-6">
                <h3>Homestead Police Department (Non-Emergency)</h3>
                <p>
                    <strong>Phone:</strong> (305) 247-1535<br />
                    <strong>Address:</strong> 45 NW 1st Avenue, Homestead, FL 33030
                </p>
            </div>

            <div className="mb-6">
                <h3>Campbell Urgent Care</h3>
                <p>
                    <strong>Phone:</strong> (305) 245-5555<br />
                    <strong>Address:</strong> 1855 NE 8th St, Homestead, FL 33033<br />
                    <strong>Details:</strong> Open Saturday and Sunday, 10:00 AM – 4:00 PM for minor injuries.
                </p>
            </div>

            <h2>Regional Infrastructure & Venues</h2>

            <div className="mb-6">
                <h3>Homestead-Miami Speedway (Public Information)</h3>
                <p>
                    <strong>Phone:</strong> (305) 230-5000<br />
                    <strong>Address:</strong> One Ralph Sanchez Speedway Blvd, Homestead, FL 33035
                </p>
            </div>

            <div className="mb-6">
                <h3>Florida’s Turnpike Roadside Assistance</h3>
                <p>
                    <strong>Details:</strong> Dial *347 (*FHP) on your mobile device for the Road Ranger service.
                </p>
            </div>

            <div className="mb-6">
                <h3>Utility Outages (City of Homestead)</h3>
                <p>
                    <strong>Phone:</strong> (305) 224-4800
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 transition-colors duration-200">
                <h2>Support & Suggestions</h2>
                <p className="mb-6 font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200">
                    If you encounter a technical discrepancy, a broken link, or would like to suggest a high-utility business for inclusion within our 10-mile radius, please route a diagnostic report to our team.
                </p>
                <a
                    href={mailtoLink}
                    className="inline-flex items-center text-sm font-sans font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors uppercase tracking-widest bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-4 rounded-sm shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    Report a Logistical Discrepancy
                </a>
            </div>

        </main>
    );
}
