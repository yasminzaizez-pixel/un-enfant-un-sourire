import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { navItems } from "@/data/siteData";

export function SiteFooter() {
  return (
    <footer className="bg-[#12314a] text-slate-200">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg shadow-blue-300/30">
              <Image src="/branding/logo-association.jpg" alt="Logo Un Enfant, Un Sourire" fill sizes="44px" className="object-cover" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-manrope)] text-lg font-extrabold uppercase tracking-tight text-white">
                Un Enfant, Un Sourire
              </div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Une association engagée pour protéger la jeunesse, promouvoir une meilleure santé bucco-dentaire et bâtir un avenir plus serein.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-white">Navigation</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[#1fa2b8]" /> Cité de la Paix, Bamako, Mali</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-[#1fa2b8]" /> +223 00 00 00 00</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-[#1fa2b8]" /> contact@unenfantunsourire.org</li>
          </ul>
          <div className="mt-5 flex gap-3 text-slate-200">
            <a href="#" aria-label="Site web" className="rounded-full border border-slate-700 p-2 transition hover:border-[#1fa2b8] hover:text-white"><Globe size={16} /></a>
            <a href="#" aria-label="Messagerie" className="rounded-full border border-slate-700 p-2 transition hover:border-[#1fa2b8] hover:text-white"><MessageCircle size={16} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="section-shell flex flex-col gap-3 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2025 Un Enfant, Un Sourire. Tous droits réservés.</div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">Mentions légales</Link>
            <Link href="/contact" className="hover:text-white">Newsletter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
