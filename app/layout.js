import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { BLOG } from "./_utils/constants";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: `%s | ${BLOG.APP_NAME}`,
    default: `Welcome | ${BLOG.APP_NAME}`,
  },
  description: "A simple blog app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-950 text-primary-100 h-full`}
      >
        <div className="flex flex-col h-screen overflow-hidden">
          {/* Fixed Header */}
          <header className="sticky top-0 z-50 bg-primary-950 border-b border-primary-800">
            <Header />
          </header>

          {/* Scrollable Main Content */}
          <main className="flex-1 overflow-y-auto px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
