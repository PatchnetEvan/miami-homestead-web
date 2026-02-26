import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "../components/MobileNav";
import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Miami Homestead Directory | Track Day Logistics & Resources",
  description: "A neutral logistical directory for Homestead-Miami Speedway participants. Access 10-mile proximity filters for trailer-friendly lodging, 24-hour hardware, and clean dining.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <div className="flex-grow pb-16 md:pb-0">
            {children}
          </div>
          <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-slate-800 pb-24 md:pb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center space-x-2">
              <span>MiamiHomestead.com is an independent directory.</span>
              <a href="/about" className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors underline">About</a>
              <span>&middot;</span>
              <a href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors underline">Terms</a>
            </p>
          </footer>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
