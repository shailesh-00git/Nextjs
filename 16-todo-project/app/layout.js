import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/provider/query-provider";
import { Toaster } from "sonner";

// High readability for UI
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents layout shift
});

// Great for IDs or technical todo notes
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Modern Todo App",
  description: "A clean, readable task manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* 'font-sans' ensures your app actually uses the Geist font. 
          'text-slate-900' provides better readability than pure #000 
      */}
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen">
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
