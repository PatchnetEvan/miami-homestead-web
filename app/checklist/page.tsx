import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Technical Paddock Checklist | Homestead Logistics",
    description: "A disciplined checklist for mechanical and electronic verification in the paddock before and after active track sessions.",
};

export default function ChecklistPage() {
    const sections = [
        {
            title: "Mechanical Integrity",
            items: [
                { term: "Torque Verification", desc: "Confirm critical fasteners (axles, calipers, pinch bolts) are marked and secured." },
                { term: "Thermal Management", desc: "Verify coolant levels and inspect for leaks after heat-cycling." },
                { term: "Fluid Systems", desc: "Inspect brake fluid clarity and lever pressure; ensure no weeping at the master cylinder." },
                { term: "Driveline", desc: "Check chain tension or belt alignment; lubricate as required for high-speed operation." }
            ]
        },
        {
            title: "Electronic Logic & Sensors",
            items: [
                { term: "Mode Verification", desc: "Confirm the active Ride Mode (e.g., Race/Track) and its impact on sub-systems." },
                { term: "Brake Switch Logic", desc: "For machines in dedicated Race Modes, verify if the brake switch logic is disabled to prevent interference with advanced telemetry or ABS optimization." },
                { term: "Data Acquisition", desc: "Initialize lap timers and transponders; verify GPS lock and sensor data logging." },
                { term: "Tire Pressure (Cold)", desc: "Set pressures to manufacturer-spec for specific track compounds." }
            ]
        },
        {
            title: "Safety & Personal Gear",
            items: [
                { term: "Helmet Integrity", desc: "Inspect for impact damage and ensure the visor is secured with a tear-off or clean surface." },
                { term: "Suit & Armor", desc: "Check all sliders and zippers for structural integrity." },
                { term: "Hydration", desc: "Monitor electrolyte intake between sessions to maintain cognitive performance in high-G environments." }
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-200">
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-sans font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors uppercase tracking-widest"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                    Back to Home
                </Link>
            </div>

            <header className="mb-16 border-b-4 border-slate-900 dark:border-slate-50 pb-8 transition-colors duration-200">
                <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-black dark:text-white mb-6 uppercase transition-colors duration-200">
                    Technical Paddock Checklist
                </h1>
                <p className="text-xl text-slate-900 dark:text-slate-300 font-sans leading-relaxed max-w-4xl font-semibold transition-colors duration-200">
                    High-performance machine preparation requires a disciplined approach to mechanical and electronic verification. This checklist is designed for use in the paddock to ensure system integrity before and after active track sessions.
                </p>
            </header>

            <div className="space-y-16">
                {sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-3xl font-sans tracking-tight font-extrabold text-black dark:text-white mb-8 uppercase border-b-2 border-slate-300 dark:border-slate-700 pb-3 transition-colors duration-200">
                            {section.title}
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-start p-6 bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-sm transition-colors duration-200">
                                    <div className="flex-shrink-0 flex flex-col items-center mr-6 mt-1">
                                        <div className="w-8 h-8 border-4 border-slate-900 dark:border-slate-400 rounded-sm bg-white dark:bg-slate-950 mb-2 transition-colors duration-200"></div>
                                        <span className="text-[11px] font-mono text-slate-700 dark:text-slate-400 uppercase tracking-widest font-bold transition-colors duration-200">Ready</span>
                                    </div>
                                    <div>
                                        <strong className="text-black dark:text-white font-mono text-xl font-bold block mb-2 tracking-tight transition-colors duration-200">{item.term}</strong>
                                        <span className="text-slate-800 dark:text-slate-300 block leading-relaxed text-base font-medium transition-colors duration-200">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <footer className="mt-20 pt-8 border-t-4 border-slate-900 dark:border-slate-50 transition-colors duration-200">
                <p className="text-sm text-black dark:text-slate-400 font-mono tracking-widest uppercase leading-relaxed font-bold transition-colors duration-200">
                    This checklist is for informational purposes. Consult your machine's technical manual for specific torque values and electronic configurations.
                </p>
            </footer>
        </div>
    );
}
