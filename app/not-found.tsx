import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-slate-950 min-h-[70vh] text-center transition-colors duration-200">
            <div className="mb-6">
                {/* Warning Triangle Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-slate-900 dark:text-slate-50 mb-6 uppercase transition-colors duration-200">
                404: Resource Not Found
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-2xl mb-12 transition-colors duration-200">
                The requested path is unavailable. Like a missing safety wire or a slow leak in the paddock, something in the link's logic has gone off-track.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-8 text-left max-w-2xl w-full mb-12 shadow-sm rounded-sm transition-colors duration-200">
                <h2 className="text-xl font-bold font-sans text-slate-900 dark:text-slate-50 mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-3 uppercase tracking-tight transition-colors duration-200">
                    Possible Discrepancies
                </h2>

                <ul className="space-y-6">
                    <li className="flex flex-col">
                        <strong className="text-slate-900 dark:text-slate-300 font-mono text-sm uppercase tracking-widest mb-1 transition-colors duration-200">Mechanical Failure</strong>
                        <span className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-200">The URL may have been moved or archived during a system update.</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-slate-900 dark:text-slate-300 font-mono text-sm uppercase tracking-widest mb-1 transition-colors duration-200">Navigation Error</strong>
                        <span className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-200">There may be a syntax error in the address bar.</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-slate-900 dark:text-slate-300 font-mono text-sm uppercase tracking-widest mb-1 transition-colors duration-200">Low Signal</strong>
                        <span className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-200">If you are currently in the paddock, network congestion may have interrupted the request.</span>
                    </li>
                </ul>
            </div>

            <div className="text-center">
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-6 uppercase tracking-wider font-mono text-sm transition-colors duration-200">
                    Action Required: Please return to the main hub to recalibrate your logistics.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-widest bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-200 rounded-sm shadow-sm"
                >
                    Return to Gate 18 Hub
                </Link>
            </div>
        </main>
    );
}
