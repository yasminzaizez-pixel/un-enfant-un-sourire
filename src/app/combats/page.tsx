import Link from "next/link";
import { ArrowRight, Brush, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { campaignMessages } from "@/data/siteData";

export default function CombatsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Nos combats"
        title="Deux causes majeures. Une jeunesse à protéger."
        description="Nous agissons sur la prévention des addictions et la santé bucco-dentaire afin que chaque jeune puisse grandir en pleine santé."
      />

      <section className="mt-12 bg-white py-16 sm:mt-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#eef7f7] px-4 py-2 text-sm font-semibold text-[#174c73]">
              <ShieldCheck size={18} /> Lutte contre les stupéfiants
            </div>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-slate-900">
              Une jeunesse sans drogue, un avenir plein d&apos;espoir.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Les stupéfiants peuvent altérer le cerveau, dégrader la santé physique et mentale, compromettre les études et déstabiliser les relations humaines. Nous voulons rompre avec cette logique de dépendance et de perte de repères.
              </p>
              <p>
                Nos programmes de prévention se fondent sur l&apos;information, le dialogue, l&apos;écoute et la présence. Ils visent à aider les jeunes à comprendre les risques, à se protéger et à renforcer leur confiance en eux.
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-base text-slate-700">
              <li>• Les dangers des stupéfiants et leur impact sur le cerveau et la santé.</li>
              <li>• Les risques de dépendance et d&apos;isolement social.</li>
              <li>• Les conséquences sur les études, les projets et la vie familiale.</li>
              <li>• L&apos;importance du dialogue entre parents, élèves et enseignants.</li>
            </ul>
          </div>

          <div className="premium-card relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[520px]">
            <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt="Sensibilisation contre les stupéfiants" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#174c73]">Nos messages aux jeunes</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {campaignMessages.map((message, index) => (
            <div key={message} className="premium-card rounded-[1.5rem] bg-white p-6 text-center">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#174c73] to-[#1fa2b8] font-bold text-white">
                {index + 1}
              </div>
              <p className="font-[family-name:var(--font-manrope)] text-xl font-bold text-slate-900">{message}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f9f8] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[520px]">
            <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80" alt="Hygiène bucco-dentaire" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#fff1e9] px-4 py-2 text-sm font-semibold text-[#d94824]">
              <Sparkles size={18} /> Hygiène bucco-dentaire
            </div>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-slate-900">
              Un sourire sain commence par de bonnes habitudes.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Une hygiène bucco-dentaire de qualité permet de prévenir les caries, les douleurs, les inflammations et les maladies des gencives. Elle participe directement au confort, à la confiance en soi et à la qualité de vie.
              </p>
              <p>
                À travers des démonstrations pratiques, des gestes simples et des explications claires, nous aidons les enfants à comprendre comment protéger leur sourire au quotidien.
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-base text-slate-700">
              <li>• L&apos;importance du brossage des dents et des bons gestes quotidiens.</li>
              <li>• Les conséquences d&apos;une mauvaise hygiène dentaire et des caries.</li>
              <li>• Le rôle de l&apos;alimentation dans la santé bucco-dentaire.</li>
              <li>• L&apos;importance des consultations dentaires régulières.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2rem] border border-[#f2b99a] bg-[#fff8f3] p-8 shadow-lg shadow-orange-100/40">
          <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eb5b2a] to-[#f4b11e] text-white">
              <Brush size={28} />
            </div>
            <p className="font-[family-name:var(--font-manrope)] text-xl font-bold text-slate-900">
              Deux brossages par jour, deux minutes à chaque fois, avec un dentifrice fluoré adapté à l&apos;âge.
            </p>
            <Link href="/actions" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Découvrir nos actions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
