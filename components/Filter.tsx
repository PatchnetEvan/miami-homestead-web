"use client";

interface FilterProps {
    currentFilter: 'all' | 'trackside';
    setFilter: (val: 'all' | 'trackside') => void;
    openNow: boolean;
    setOpenNow: (val: boolean) => void;
}

export default function Filter({ currentFilter, setFilter, openNow, setOpenNow }: FilterProps) {
    return (
        <div className="flex gap-4 mb-8 text-sm text-gray-800 dark:text-gray-300 border-b border-gray-200 dark:border-slate-800 pb-2 transition-colors duration-200">
            <button
                onClick={() => setFilter('all')}
                style={{ appearance: 'none', backgroundColor: 'transparent', border: 'none', padding: 0 }}
                className={`cursor-pointer ${currentFilter === 'all' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'} transition-colors duration-200`}
            >
                Full Directory (≤ 10.0 miles)
            </button>
            <span className="text-gray-300 dark:text-slate-700">|</span>
            <button
                onClick={() => setFilter('trackside')}
                style={{ appearance: 'none', backgroundColor: 'transparent', border: 'none', padding: 0 }}
                className={`cursor-pointer ${currentFilter === 'trackside' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'} transition-colors duration-200`}
            >
                Track Side (&lt; 3.0 miles)
            </button>
            <span className="text-gray-300 dark:text-slate-700">|</span>
            <button
                onClick={() => setOpenNow(!openNow)}
                style={{ appearance: 'none', backgroundColor: 'transparent', border: 'none', padding: 0 }}
                className={`cursor-pointer ${openNow ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'} transition-colors duration-200`}
            >
                Show Open Now
            </button>
        </div>
    );
}
