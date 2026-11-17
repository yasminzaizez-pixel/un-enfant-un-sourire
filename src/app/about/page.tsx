import Image from "next/image";
import { BookOpen, HandHeart, HeartPulse, Shield, Stethoscope, Users } from "lucide-react";

import { SectionTitle } from "@/components/SectionTitle";
import { PageIntro } from "@/components/PageIntro";
import { team, values } from "@/data/siteData";

const valueIcons = {
  Shield,
  BookOpen,
  HeartPulse,
  Users,
  Stethoscope,
  HandHeart,
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Qui sommes-nous ?"
        title="Une association au service de la jeunesse, de la santé et de l’espoir."
        description="Nous accompagnons les jeunes, les familles et les établissements scolaires pour construire un environnement plus protecteur, plus sain et plus solidaire."
      />

      <section className="section-shell py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#eb5b2a]">Notre engagement</p>
            <h2 className="max-w-2xl font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#12314a] sm:text-4xl">
              Nous croyons au potentiel de chaque jeune.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Nous croyons qu&apos;une jeunesse forte est une jeunesse informée, sensible et bien entourée. C&apos;est pourquoi nous mettons en place des actions concrètes pour prévenir les addictions et renforcer la santé bucco-dentaire.
              </p>
              <p>
                À travers des ateliers, des conférences, des campagnes éducatives et des actions de terrain, nous encourageons les enfants et les adolescents à faire des choix sûrs pour leur avenir.
              </p>
            </div>
          </div>
          <div className="premium-card overflow-hidden rounded-[2rem]">
            <Image src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80" alt="Jeunes en séance de sensibilisation" width={1200} height={900} className="h-[520px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="premium-card rounded-[2rem] bg-[#174c73] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Notre histoire</p>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold">Une voix pour les jeunes</h3>
              <p className="mt-4 text-base leading-7 text-blue-50">
                L&apos;association a été créée pour répondre à un besoin fort : informer, accompagner et protéger la jeunesse face aux dangers des addictions et des mauvaises habitudes de santé.
              </p>
            </div>
            <div className="premium-card rounded-[2rem] bg-[#f4f9f8] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[#174c73]">Notre vision</p>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold text-slate-900">Un avenir sans peur, plein d&apos;espoir</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Nous souhaitons que chaque jeune puisse grandir dans un environnement favorable, entouré de confiance, de prévention et de solidarité.
              </p>
            </div>
            <div className="premium-card rounded-[2rem] bg-[#fff7f1] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[#eb5b2a]">Notre mission</p>
              <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold text-slate-900">Informer, protéger et éduquer</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Nous organisons des sensibilisations et des actions pédagogiques qui donnent aux jeunes les clés pour faire des choix responsables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow="Nos valeurs" title="Les principes qui guident notre action" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = valueIcons[value.icon as keyof typeof valueIcons];

            return (
              <div key={value.title} className="premium-card rounded-[2rem] bg-white p-8">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#174c73] to-[#1fa2b8] text-white">
                  <Icon size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-[2rem]">
            <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80" alt="Ambition collective" width={1200} height={900} className="h-[520px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#9bdde4]">Notre ambition</p>
            <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight">
              Créer une génération plus saine, plus téméraire et plus engagée.
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Notre ambition est d&apos;aider chaque jeune à mieux se connaître, à mieux se protéger et à trouver sa place dans une société plus responsable. Nous voulons rendre la prévention accessible, rassurante et réelle.
            </p>
            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200">
              « Nous ne visons pas seulement à informer ; nous visons à transformer des habitudes, renforcer des liens et donner de l&apos;espoir à des vies qui méritent d&apos;être protégées. »
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow="Notre équipe" title="Des personnes engagées, proches du terrain et soucieuses du bien-être des jeunes" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((person) => (
            <div key={person.name} className="premium-card group overflow-hidden rounded-[2rem] bg-white">
              <div className="overflow-hidden">
                <Image src={person.image} alt={person.name} width={600} height={720} className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#174c73]">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
