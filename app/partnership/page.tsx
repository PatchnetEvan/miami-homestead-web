"use client";
import Link from "next/link";

export default function DirectoryInclusion() {
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
            <h1>Directory Inclusion</h1>

            <p>
                Local business owners within a 10-mile radius of the Homestead-Miami Speedway may request inclusion in this directory. We prioritize listings that provide specific logistical utility to the regional motorsports community.
            </p>

            <h2>Submission Guidelines</h2>
            <p>
                To maintain the integrity of the directory, all submissions must meet the following criteria:
            </p>
            <ul>
                <li><strong>Proximity:</strong> Business must be located within 10 miles of Gate 18.</li>
                <li><strong>Utility:</strong> Business must fall under one of our established categories (Lodging, Hardware, Auto/Moto, or Dining).</li>
                <li><strong>Transparency:</strong> Must provide verifiable operating hours and a physical address.</li>
            </ul>

            <h2>Request Form</h2>
            <p className="mb-6">
                This form is for data submission only. We do not accept paid placements to ensure the neutrality of the directory.
            </p>

            <form className="max-w-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-800 mb-2">Business Name</label>
                    <input
                        type="text"
                        id="businessName"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        placeholder="e.g., Homestead Gas & Supply"
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-800 mb-2">Category</label>
                    <select
                        id="category"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white transition-colors"
                    >
                        <option value="">Select a category</option>
                        <option value="lodging">Lodging</option>
                        <option value="hardware">Hardware</option>
                        <option value="auto-moto">Auto/Moto</option>
                        <option value="dining">Dining</option>
                        <option value="professional-services">Professional Services</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="technicalNote" className="block text-sm font-semibold text-gray-800 mb-2">Technical Note</label>
                    <input
                        type="text"
                        id="technicalNote"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        placeholder="e.g., 'Trailer-friendly parking', 'Low-sodium menu options'"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">Contact Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        placeholder="owner@business.com"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Submit Request
                    </button>
                </div>
            </form>

            <p className="mt-12 pt-4 border-t border-gray-200 text-sm italic text-gray-500">
                Listings are added at the discretion of the site architect to ensure alignment with the design doctrine.
            </p>
        </main>
    );
}
