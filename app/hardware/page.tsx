"use client";
import Link from "next/link";
import { useState } from "react";
import { Listing } from "../../types";
import Filter from "../../components/Filter";
import { isOpenNow } from "../../utils/isOpen";
export default function Hardware() {
    const [filter, setFilter] = useState<'all' | 'trackside'>('all');
    const [openNow, setOpenNow] = useState<boolean>(false);

    const listings: Listing[] = [
        {
            name: "Lowe’s Home Improvement (Store #2707)",
            address: "1850 N.E. 8th Street, Homestead, FL 33033",
            hoursDisplay: "Saturday 6:00 AM – 10:00 PM; Sunday 7:00 AM – 8:00 PM.",
            focus: "Industrial supplies, tools, and emergency building materials.",
            proximity: 5.5,
            hours: {
                weekday: { open: "06:00", close: "22:00" },
                saturday: { open: "06:00", close: "22:00" },
                sunday: { open: "07:00", close: "20:00" }
            }
        },
        {
            name: "Homestead Gas & Supply",
            address: "129 SW 3rd Ave, Homestead, FL 33030",
            hoursDisplay: "Saturday 8:00 AM – 12:00 PM; Sunday Closed.",
            focus: "Essential for specialized welding gases and industrial hardware that generic stores do not carry.",
            proximity: 3.8,
            hours: {
                weekday: { open: "08:00", close: "17:00" },
                saturday: { open: "08:00", close: "12:00" },
                sunday: { open: "00:00", close: "00:00" } // Closed
            }
        },
        {
            name: "The Home Depot (Naranja)",
            address: "Not Provided",
            hoursDisplay: "Not Provided",
            focus: "Secondary source for heavy-duty supplies if the primary Homestead Lowe's is out of stock on track-day consumables.",
            proximity: 5.5
        }
    ];

    const baseListings = openNow ? listings.filter(l => isOpenNow(l)) : listings;
    const trackSideListings = baseListings.filter(l => l.proximity !== undefined && l.proximity < 3.0);
    const regionalListings = baseListings.filter(l => l.proximity !== undefined && l.proximity >= 3.0 && l.proximity <= 10.0);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": listings.map((l, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "LocalBusiness",
                "name": l.name,
                "address": l.address !== "Not Provided" ? l.address : undefined,
                "description": `Utility: ${l.focus || ''} Capacity: ${l.accessNote || ''} Proximity: ${l.proximity !== undefined ? l.proximity + ' miles from Gate 18' : 'Not Provided'}`,
                "openingHours": l.hoursDisplay !== "Not Provided" ? l.hoursDisplay : undefined
            }
        }))
    };

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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1>Hardware & Supplies</h1>

            <p>
                A guide to local hardware stores, industrial suppliers, and specialty fastener shops for trackside repairs.
            </p>

            <h2>Who This Is For</h2>

            <p>
                Drivers and crew members needing emergency tools, specific hardware grades, safety wire, fluids, or fabrication supplies during an event.
            </p>

            <h2>Types of Businesses Included</h2>

            <ul>
                <li>Big-box hardware stores with extended weekend hours</li>
                <li>Locally-owned hardware shops</li>
                <li>Specialty fastener and industrial suppliers</li>
                <li>Welding and gas suppliers</li>
            </ul>

            <h2>Local Listings</h2>
            <Filter currentFilter={filter} setFilter={setFilter} openNow={openNow} setOpenNow={setOpenNow} />

            {trackSideListings.length > 0 && (
                <div className="mb-8">
                    <div className="border-b border-gray-200 pb-2 mb-6">
                        <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Track Side (&lt; 3.0 miles)</span>
                    </div>
                    {trackSideListings.map((listing, index) => (
                        <div key={index} className="mb-6">
                            <h3>{listing.name}</h3>
                            <p>
                                {listing.proximity !== undefined && <><strong className="mt-2 text-sm text-gray-500">Proximity:</strong> {listing.proximity.toFixed(1)} Miles from Gate 18<br /></>}
                                {listing.address !== "Not Provided" && <><strong>Address:</strong> {listing.address}<br /></>}
                                {listing.accessNote && <><strong className="mt-2 text-sm text-gray-500">Access:</strong> {listing.accessNote}<br /></>}
                                {listing.hoursDisplay && listing.hoursDisplay !== "Not Provided" && <><strong className="mt-2 text-sm text-gray-500">Weekend Hours:</strong> {listing.hoursDisplay}<br /></>}
                                {listing.focus && <><strong className="mt-2 text-sm text-gray-500">Focus:</strong> {listing.focus}<br /></>}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {filter === 'all' && regionalListings.length > 0 && (
                <div className="mb-8">
                    <div className="border-b border-gray-200 pb-2 mb-6">
                        <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Regional Support (3.0 – 10.0 miles)</span>
                    </div>
                    {regionalListings.map((listing, index) => (
                        <div key={index} className="mb-6">
                            <h3>{listing.name}</h3>
                            <p>
                                {listing.proximity !== undefined && <><strong className="mt-2 text-sm text-gray-500">Proximity:</strong> {listing.proximity.toFixed(1)} Miles from Gate 18<br /></>}
                                {listing.address !== "Not Provided" && <><strong>Address:</strong> {listing.address}<br /></>}
                                {listing.accessNote && <><strong className="mt-2 text-sm text-gray-500">Access:</strong> {listing.accessNote}<br /></>}
                                {listing.hoursDisplay && listing.hoursDisplay !== "Not Provided" && <><strong className="mt-2 text-sm text-gray-500">Weekend Hours:</strong> {listing.hoursDisplay}<br /></>}
                                {listing.focus && <><strong className="mt-2 text-sm text-gray-500">Focus:</strong> {listing.focus}<br /></>}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </main>
    );
}
