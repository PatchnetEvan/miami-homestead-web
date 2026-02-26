"use client";
import Link from "next/link";
import { useState } from "react";
import { Listing } from "../../types";
import Filter from "../../components/Filter";
import { isOpenNow } from "../../utils/isOpen";
export default function Dining() {
    const [filter, setFilter] = useState<'all' | 'trackside'>('all');
    const [openNow, setOpenNow] = useState<boolean>(false);

    const listings: Listing[] = [
        {
            name: "Texas Roadhouse (Homestead)",
            address: "33250 S Dixie Hwy, Florida City, FL 33034",
            hoursDisplay: "Saturday 11:00 AM – 11:00 PM; Sunday 11:00 AM – 10:00 PM.",
            focus: "6 oz Sirloin (approx. 560mg sodium base). Fresh steamed vegetables and plain baked potatoes.",
            proximity: 3.5,
            hours: {
                weekday: { open: "15:00", close: "22:00" },
                saturday: { open: "11:00", close: "23:00" },
                sunday: { open: "11:00", close: "22:00" }
            }
        },
        {
            name: "The Trackside Grill",
            address: "21290 SW 117th Ave, Miami, FL 33177",
            hoursDisplay: "Open during track events.",
            focus: "Located directly at the track, offering convenient options for race day. Menu varies, but typically includes grilled chicken and salads.",
            proximity: 0.1,
            hours: {
                weekday: { open: "00:00", close: "00:00" }, // Closed weekdays
                saturday: { open: "10:00", close: "18:00" },
                sunday: { open: "10:00", close: "18:00" }
            }
        },
        {
            name: "Red Lobster (Homestead)",
            address: "296 N Krome Ave, Florida City, FL 33034",
            hoursDisplay: "Saturday 11:00 AM – 11:00 PM; Sunday 11:00 AM – 10:00 PM.",
            focus: "Wood-Grilled Salmon (approx. 210mg sodium) and Simply Grilled Rainbow Trout. Steamed broccoli (35mg sodium).",
            proximity: 3.0,
            hours: {
                weekday: { open: "11:00", close: "22:00" },
                saturday: { open: "11:00", close: "23:00" },
                sunday: { open: "11:00", close: "22:00" }
            }
        },
        {
            name: "LongHorn Steakhouse (Homestead)",
            address: "3333 NE 10th Terrace, Homestead, FL 33033",
            hoursDisplay: "Saturday 11:00 AM – 11:00 PM; Sunday 11:00 AM – 10:00 PM.",
            focus: "Flo’s Filet or Renegade Sirloin (no seasoning upon request). Fresh asparagus (10mg) and plain baked potatoes.",
            proximity: 2.5,
            hours: {
                weekday: { open: "11:00", close: "22:00" },
                saturday: { open: "11:00", close: "23:00" },
                sunday: { open: "11:00", close: "22:00" }
            }
        },
        {
            name: "Vale Healthy Kitchen",
            address: "13335 SW 124th St, Miami, FL 33186",
            hoursDisplay: "Saturday 9:00 AM – 3:00 PM; Sunday Closed.",
            focus: "Filet & Greens Bowl focusing on hormone-free meats and high-nutrient density for post-track recovery.",
            proximity: 4.5,
            hours: {
                weekday: { open: "09:00", close: "20:00" },
                saturday: { open: "09:00", close: "15:00" },
                sunday: { open: "00:00", close: "00:00" } // Closed
            }
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
            <h1>Where to Eat</h1>

            <p>
                A guide focusing on "Clean Protein" locations near the Speedway.
            </p>

            <h2>Who This Is For</h2>

            <p>
                This directory is for track enthusiasts and athletes prioritizing metabolic health and recovery between sessions.
                It focuses on clean protein sources—specifically steak and fish—while identifying options for low-sodium regimens.
            </p>

            <h2>Types of Businesses Included</h2>

            <ul>
                <li>Custom-Seasoned Steakhouses: Locations capable of preparing fresh cuts without pre-applied salt or butter.</li>
                <li>Wood-Grilled Seafood: Specialists in simply grilled or steamed fish with vegetable-based sides.</li>
                <li>Whole-Food Kitchens: Modern dining focusing on antibiotic-free proteins and complex greens.</li>
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
                                {listing.focus && <><strong className="mt-2 text-sm text-gray-500">Focus:</strong> {listing.focus}<br /></>}
                                {listing.accessNote && <><strong className="mt-2 text-sm text-gray-500">Details:</strong> {listing.accessNote}<br /></>}
                                {listing.hoursDisplay && listing.hoursDisplay !== "Not Provided" && <><strong className="mt-2 text-sm text-gray-500">Weekend Hours:</strong> {listing.hoursDisplay}<br /></>}
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
                                {listing.focus && <><strong className="mt-2 text-sm text-gray-500">Focus:</strong> {listing.focus}<br /></>}
                                {listing.accessNote && <><strong className="mt-2 text-sm text-gray-500">Details:</strong> {listing.accessNote}<br /></>}
                                {listing.hoursDisplay && listing.hoursDisplay !== "Not Provided" && <><strong className="mt-2 text-sm text-gray-500">Weekend Hours:</strong> {listing.hoursDisplay}<br /></>}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </main>
    );
}
