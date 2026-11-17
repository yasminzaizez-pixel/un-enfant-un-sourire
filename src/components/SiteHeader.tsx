"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/data/siteData";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fffefa]/90 shadow-[0_8px_35px_-28px_rgba(18,49,74,0.5)] backdrop-blur-2xl">
      <div className="section-shell flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="brand-mark relative h-12 w-12 overflow-hidden rounded-2xl border border-[#d8ecec] bg-white shadow-[0_8px_24px_-12px_rgba(23,76,115,0.45)]">
            <Image src="/branding/logo-association.jpg" alt="Logo Un Enfant, Un Sourire" fill sizes="48px" className="object-cover" priority />
          </div>
          <div>
            <div className="font-[family-name:var(--font-manrope)] text-base font-extrabold uppercase tracking-[-0.035em] text-[#12314a] sm:text-lg">
              Un Enfant, Un Sourire
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              association & prévention
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[13px] font-semibold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-[#eb5b2a] after:transition-transform ${
                  isActive ? "text-[#174c73] after:scale-x-100" : "text-slate-600 after:scale-x-0 hover:text-[#12314a] hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/volunteer" className="inline-flex items-center justify-center rounded-full bg-[#eb5b2a] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_28px_-13px_rgba(235,91,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d84722]">
            Devenir bénévole
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex rounded-full border border-[#d8e4e6] bg-white p-2.5 text-[#12314a] shadow-sm transition hover:border-[#1fa2b8] hover:text-[#174c73] xl:hidden"
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#e6eeee] bg-[#fffefa] shadow-xl shadow-[#12314a]/10 xl:hidden"
          >
            <div className="section-shell flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    pathname === item.href ? "bg-sky-50 text-[#174c73]" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/volunteer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#eb5b2a] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Devenir bénévole
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
