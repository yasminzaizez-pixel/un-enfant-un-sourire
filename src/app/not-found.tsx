import Link from "next/link";
import { ArrowLeft, HeartHandshake } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[65vh] items-center justify-center py-16 sm:py-20">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#102d45] to-[#174c73] px-6 py-14 text-center text-white shadow-[0_35px_90px_-45px_rgba(18,49,74,0.65)] sm:px-12 sm:py-20">
        <div aria-hidden="true" className="page-intro-ring" />
        <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-[#f4b11e]">
          <HeartHandshake size={30} strokeWidth={1.5} />
        </div>
        <p className="relative z-10 mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#b9edf0]">Erreur 404</p>
        <h1 className="relative z-10 mt-3 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">
          Cette page s’est égarée.
        </h1>
        <p className="relative z-10 mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          La page recherchée n&apos;existe pas ou a été déplacée. Revenez à l’accueil pour continuer votre visite.
        </p>
        <Link href="/" className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-[#eb5b2a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_-12px_rgba(235,91,42,0.8)] transition hover:-translate-y-0.5 hover:bg-[#f06a37]">
          <ArrowLeft size={16} /> Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
