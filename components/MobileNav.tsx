import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-[env(safe-area-inset-bottom)] md:hidden transition-colors duration-200">
            <div className="flex justify-around items-center h-16 px-4">
                {/* Status */}
                <Link href="/#status" className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform">
                    <svg className="w-6 h-6 text-slate-800 dark:text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span className="text-[10px] font-sans font-medium text-slate-800 dark:text-slate-400">Status</span>
                </Link>

                {/* Checklist */}
                <Link href="/checklist" className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform">
                    <svg className="w-6 h-6 text-slate-800 dark:text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[10px] font-sans font-medium text-slate-800 dark:text-slate-400">Checklist</span>
                </Link>

                {/* Resources */}
                <Link href="/resources" className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform">
                    <svg className="w-6 h-6 text-slate-800 dark:text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span className="text-[10px] font-sans font-medium text-slate-800 dark:text-slate-400">Resources</span>
                </Link>

                {/* Theme */}
                <div className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform">
                    <ThemeToggle />
                    <span className="text-[10px] font-sans font-medium text-slate-800 dark:text-slate-400 mt-[2px]">Theme</span>
                </div>
            </div>
        </nav>
    );
}
