import { ArrowRight, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

import { donationOptions, partners } from "@/data/siteData";
import { PageIntro } from "@/components/PageIntro";

export default function PartnersPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Partenariats & dons"
        title="Ensemble, donnons plus de force à la solidarité."
        description="Votre organisation peut contribuer à des actions concrètes de prévention, d’éducation et de santé au bénéfice des jeunes."
      />
      <div className="section-shell py-14 sm:py-16">

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          { title: "Partenariat institutionnel", description: "Soutenir les campagnes scolaires et les actions de terrain.", icon: ShieldCheck },
          { title: "Partenariat financier", description: "Aider au financement des programmes de sensibilisation.", icon: HeartHandshake },
          { title: "Partenariat médical", description: "Associer des professionnels et structures de santé au service des jeunes.", icon: Stethoscope },
        ].map(({ title, description, icon: Icon }) => (
          <div key={title} className="premium-card rounded-[2rem] bg-white p-7">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#174c73] to-[#1fa2b8] text-white">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900">{title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#f4f9f8] p-8">
        <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold text-slate-900">Nos partenaires</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner} className="premium-card rounded-[1.5rem] bg-white px-5 py-6 text-center text-base font-semibold text-slate-700">
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#102d45] to-[#174c73] p-8 text-white shadow-[0_30px_75px_-45px_rgba(18,49,74,0.7)]">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Faire un don</p>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold">Soutenez les actions qui changent des vies.</h2>
          <div className="mt-8 space-y-4">
            {donationOptions.map((option) => (
              <div key={option.title} className="rounded-[1.5rem] border border-slate-700 bg-white/5 p-5">
                <p className="font-[family-name:var(--font-manrope)] text-xl font-bold">{option.title}</p>
                <p className="mt-2 text-base leading-7 text-slate-300">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e4eceb] bg-white p-6 shadow-[0_30px_75px_-45px_rgba(18,49,74,0.45)] sm:p-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#eb5b2a]">Construisons un projet utile</p>
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold tracking-tight text-[#12314a] sm:text-3xl">Parlons partenariat.</h2>
          <form className="mt-7 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Nom de l&apos;organisation
                <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Contact
                <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              E-mail
              <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Type de partenariat
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]">
                <option>Partenariat institutionnel</option>
                <option>Partenariat financier</option>
                <option>Partenariat éducatif</option>
                <option>Partenariat médical</option>
                <option>Don matériel</option>
                <option>Soutien aux campagnes scolaires</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Message
              <textarea rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#174c73] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#084c95]">
              Envoyer ma demande <ArrowRight size={16} />
            </button>
          </form>
        </div>
        </div>
      </div>

      <div className="section-shell pb-14">
        <div className="rounded-[2rem] border border-dashed border-[#d6e3e3] bg-[#f4f9f8] p-6 text-sm leading-7 text-slate-600">
          <strong className="font-semibold text-[#12314a]">Note :</strong> Les solutions de paiement Orange Money et Moov Money pourront être intégrées dans une seconde phase, sans simulation de transactions ni confirmation factice.
        </div>
      </div>
    </div>
  );
}
