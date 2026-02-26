import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-slate-900 dark:text-slate-50 text-lg tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                    MiamiHomestead.com
                </Link>

                <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
                        Directory
                    </Link>
                    <Link href="/checklist" className="hover:text-black dark:hover:text-white transition-colors">
                        Checklist
                    </Link>
                    <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
