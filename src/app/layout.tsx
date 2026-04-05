import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaabad Touk — AI Engineer",
  description:
    "Portfolio of Aaabad Touk (@aaabadcode) — AI engineer building intelligent systems, from LLMs to computer vision.",
  openGraph: {
    title: "Aaabad Touk — AI Engineer",
    description:
      "AI engineer building intelligent systems, from LLMs to computer vision.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaabad Touk — AI Engineer",
    description:
      "AI engineer building intelligent systems, from LLMs to computer vision.",
    creator: "@aaabadcode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
