import type { Metadata } from "next";
import { Archivo, Sora } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-display" });
const sora = Sora({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "CreatorWaitlist — Launch with Hype",
  description:
    "CreatorWaitlist helps creators launch products with referral rewards, live demand bars, and automated nurture sequences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
