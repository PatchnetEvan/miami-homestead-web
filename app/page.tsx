import Link from "next/link";
import LiveStatus from "../components/LiveStatus";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const categories = [
    {
      title: "Lodging",
      href: "/lodging",
      description: "Hotels and motels with trailer-friendly parking capacity.",
      status: "2 items within 3 miles",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    },
    {
      title: "Hardware & Supplies",
      href: "/hardware",
      description: "Emergency industrial tools and specialized hardware.",
      status: "0 items within 3 miles",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 14l-5 5a2 2 0 0 0 3 3l5-5" /><path d="M14.2 9.8a5 5 0 1 1 7-7 5 5 0 0 1-7 7z" /><circle cx="17" cy="7" r="1" /></svg>
    },
    {
      title: "Auto & Moto Services",
      href: "/auto-moto-services",
      description: "Specialized mechanical support and performance parts.",
      status: "1 item within 3 miles",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M2 12h3" /><path d="M19 12h3" /></svg>
    },
    {
      title: "Dining",
      href: "/dining",
      description: "Low-sodium and clean protein locations.",
      status: "2 items within 3 miles",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
    },
    {
      title: "General Resources",
      href: "/resources",
      description: "Public safety, medical, and civil infrastructure.",
      status: "Civic utilities",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    },
    {
      title: "Directory Inclusion",
      href: "/partnership",
      description: "Data submission forms for local business owners.",
      status: "Intake forms",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600 dark:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
    }
  ];

  return (
    <main className="!max-w-none !px-0 bg-white dark:bg-slate-950 transition-colors duration-200">
      {/* Desktop Header Toggle Placeholder */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section
        className="relative px-6 py-20 sm:py-28 overflow-hidden border-b border-gray-200 dark:border-slate-800 transition-colors duration-200"
        style={{
          backgroundImage: `url('/technical_paddock_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'luminosity',
        }}
      >
        <div className="absolute inset-0 z-0 bg-white/85 dark:bg-slate-950/90 transition-colors duration-200"></div>
        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5 dark:opacity-10 transition-opacity duration-200"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: `20px 20px`,
            backgroundPosition: `center center`
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="bg-white/60 dark:bg-slate-900/60 transition-colors duration-200 backdrop-blur-sm p-8 rounded-xl shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-50/10 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-sans tracking-tight text-slate-900 dark:text-slate-50 mb-6 !mt-0 !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none transition-colors duration-200">
              Regional Logistics: Homestead-Miami
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium !mb-0 !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none transition-colors duration-200">
              A high-utility directory for track-weekend participants. Factual data on lodging, hardware, and services within a 10-mile radius of Gate 18.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-200 dark:border-slate-800 pb-3 !mt-0 transition-colors duration-200">
          Directory Indexes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group flex flex-col p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 rounded-sm transition-all duration-200 shadow-sm hover:shadow-md h-full"
            >
              <div className="mb-4 flex items-center space-x-3">
                {category.icon}
                <h3 className="text-xl font-sans tracking-tight font-semibold text-slate-900 dark:text-slate-50 m-0 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 !mt-0">
                  {category.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow font-sans transition-colors duration-200">
                {category.description}
              </p>
              <div className="flex items-center mt-auto">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-200/50 dark:bg-slate-800/50 text-xs font-medium text-slate-700 dark:text-slate-300 font-mono tracking-tight uppercase group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors duration-200 border border-slate-200 dark:border-slate-700">
                  {category.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 dark:border-slate-800 pb-3 !mt-8 transition-colors duration-200">
          Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/about"
            className="block p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          >
            <h3 className="text-sm font-sans tracking-tight font-semibold text-slate-900 dark:text-slate-50 !m-0 transition-colors duration-200">About MiamiHomestead.com</h3>
          </Link>
        </div>
      </section>
      <LiveStatus />
    </main>
  );
}
