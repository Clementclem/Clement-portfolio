import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clement-portfolio-five.vercel.app"),
  title: {
    default: "Clement Wanjihia",
    template: "%s | Clement Wanjihia",
  },
  description:
    "Software Engineer and Cybersecurity Student building ecommerce experiences, digital products, and secure systems.",
  keywords: [
    "Clement Wanjihia",
    "Software Engineer",
    "Cybersecurity Student",
    "Next.js Developer",
    "React Developer",
    "Kenya Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Clement Wanjihia" }],
  creator: "Clement Wanjihia",

  openGraph: {
    title: "Clement Wanjihia",
    description:
      "Software Engineer and Cybersecurity Student building ecommerce experiences, digital products, and secure systems.",
    url: "https://clement-portfolio-five.vercel.app",
    siteName: "Clement Wanjihia",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clement Wanjihia",
    description:
      "Software Engineer and Cybersecurity Student building ecommerce experiences, digital products, and secure systems.",
    creator: "@clem_clement_",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}