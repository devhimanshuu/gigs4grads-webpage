import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Gigs4Grads — Real Experience. Local Opportunity. (v2 Premium)",
  description:
    "Gigs4Grads connects verified U.S. companies with vetted students and graduates for short-term, in-person white-collar assignments. Find gigs, build your reputation, grow your career.",
  keywords: [
    "gigs for graduates",
    "student jobs",
    "in-person gigs",
    "white-collar freelancing",
    "entry level career",
    "college campus brand ambassador",
    "verified escrow gigs",
  ],
  authors: [{ name: "Gigs4Grads, Inc." }],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    title: "Gigs4Grads — Real Experience. Local Opportunity.",
    description:
      "Connecting verified U.S. companies with vetted students and graduates for high-trust, in-person assignments.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
