import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Un Enfant, Un Sourire | Association de prévention et d'éducation",
  description:
    "Association engagée pour la prévention des addictions et la santé bucco-dentaire auprès des enfants et des jeunes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${poppins.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#faf9f5] text-slate-800">
        <SiteHeader />
        <main className="page-enter">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
