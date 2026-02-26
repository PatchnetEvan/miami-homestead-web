"use client";
import Link from "next/link";
import { useState } from "react";
import { Listing } from "../../types";
import Filter from "../../components/Filter";
import { isOpenNow } from "../../utils/isOpen";
export default function Lodging() {
    const [filter, setFilter] = useState<'all' | 'trackside'>('all');
    const [openNow, setOpenNow] = useState<boolean>(false);

    const listings: Listing[] = [
        {
            name: "TownePlace Suites Miami Homestead",
            address: "935 NE 30th Terrace, Homestead, FL 33033",
            accessNote: "Offers ample parking for race trailers with straightforward access from the Florida Turnpike.",
            hoursDisplay: "Check-in: 3:00 PM; Check-out: 12:00 PM.",
            proximity: 2.5
        },
        {
            name: "Courtyard Miami Homestead",
            address: "2905 NE 9th Street, Homestead, FL 33033",
            accessNote: "Designated parking for customers and close proximity to Speedway (approx. 2 miles).",
            hoursDisplay: "Check-in: 3:00 PM; Check-out: 11:00 AM.",
            proximity: 2.0
        },
        {
            name: "Travelodge by Wyndham Florida City",
            address: "Not Provided",
            accessNote: "Offers rare, dedicated truck and trailer parking for race teams.",
            proximity: 4.1
        },
        {
            name: "Fairfield Inn & Suites Homestead Florida City",
            address: "Not Provided",
            accessNote: "A modern option for those prioritizing comfort and standardized amenities over track-side proximity.",
            proximity: 4.3
        },
        {
            name: "Best Western Gateway to the Keys",
            address: "Not Provided",
            accessNote: "Reliable for teams traveling south from the Miami area.",
            proximity: 4.8
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
                "description": `Capacity: ${l.accessNote || ''} Proximity: ${l.proximity !== undefined ? l.proximity + ' miles from Gate 18' : 'Not Provided'}`,
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
            <h1>Lodging</h1>

            <p>
                A directory of accommodations with specific utilities for track attendees, focusing on parking capacity, trailer access, and proximity to the venue.
            </p>

            <h2>Who This Is For</h2>

            <p>
                Participants traveling with enclosed trailers, race teams requiring secure parking, or attendees needing early checkout options.
            </p>

            <h2>Types of Businesses Included</h2>

            <ul>
                <li>Hotels with trailer-friendly parking lots</li>
                <li>Short-term rentals with multi-vehicle capacities</li>
                <li>Campgrounds and RV parks with hookups</li>
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
                                {listing.hoursDisplay && listing.hoursDisplay !== "Not Provided" && <><strong className="mt-2 text-sm text-gray-500">Hours:</strong> {listing.hoursDisplay}<br /></>}
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
                                {listing.hours && <><strong className="mt-2 text-sm text-gray-500">Hours:</strong> {listing.hours}<br /></>}
                                {listing.focus && <><strong className="mt-2 text-sm text-gray-500">Focus:</strong> {listing.focus}<br /></>}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </main>
    );
}
