import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionTitle } from "@/components/SectionTitle";
import { actions, impactStats, testimonials } from "@/data/siteData";

export default function HomePage() {
  return (
    <div>
      <section className="hero-premium relative isolate overflow-hidden text-white">
        <div aria-hidden="true" className="hero-orb hero-orb-one" />
        <div aria-hidden="true" className="hero-orb hero-orb-two" />
        <div className="section-shell relative grid gap-12 py-16 sm:py-20 md:min-h-[620px] md:grid-cols-[1.04fr_0.96fr] md:items-center md:gap-6 md:py-16 lg:min-h-[690px] lg:gap-8 lg:py-24">
          <div className="intro-stagger relative z-10">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b9edf0] backdrop-blur">
              <HeartHandshake size={15} className="text-[#f4b11e]" />
              Prévention · santé · avenir
            </div>
            <h1 className="max-w-3xl font-[family-name:var(--font-manrope)] text-[clamp(3.35rem,7vw,6.6rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-white md:text-[clamp(2.8rem,6vw,4.2rem)] lg:text-[clamp(3.35rem,7vw,6.6rem)]">
              Protéger
              <br />
              l’enfance.
              <br />
              <span className="hero-title-accent">Faire grandir</span>
              <br />
              l’avenir.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Agir aujourd’hui pour que chaque jeune puisse grandir en santé, faire ses choix en confiance et sourire à demain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-col lg:flex-row">
              <Link href="/combats" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#eb5b2a] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_-12px_rgba(235,91,42,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#f06a37]">
                Découvrir nos actions
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-white/40 hover:bg-white/10">
                Rejoindre l’association
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300 sm:text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="text-[#54c4d2]" size={17} /> Prévention des addictions</div>
              <div className="flex items-center gap-2"><Sparkles className="text-[#f4b11e]" size={17} /> Santé bucco-dentaire</div>
            </div>
          </div>

          <div className="intro-visual relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="hero-image-frame relative rounded-[2rem] border border-white/20 bg-white/10 p-2.5 shadow-[0_40px_110px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-3">
              <div className="relative h-[390px] overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:rounded-[2rem] md:h-[440px] lg:h-[560px]">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=85"
                  alt="Des jeunes réunis autour de l’apprentissage et de l’avenir"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092239]/80 via-[#092239]/5 to-transparent" />
              </div>
            </div>
            <div className="hero-impact-card absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl border border-white/60 bg-white p-4 text-[#12314a] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] sm:-left-12 sm:bottom-10 sm:gap-5 sm:rounded-3xl sm:p-5 md:bottom-6 md:left-0 lg:bottom-10 lg:-left-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e9] text-[#eb5b2a] sm:h-14 sm:w-14">
                <HeartHandshake size={25} />
              </div>
              <div>
                <div className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                  <AnimatedCounter value={12500} suffix="+" />
                </div>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">jeunes sensibilisés</p>
              </div>
            </div>
            <div className="absolute -right-2 top-8 hidden h-20 w-20 items-center justify-center rounded-full border border-[#f4b11e]/40 bg-[#f4b11e] text-center text-[10px] font-extrabold uppercase leading-tight tracking-[0.12em] text-[#12314a] shadow-xl shadow-black/20 sm:flex">
              Agir<br />pour demain
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10">
          <div className="section-shell flex items-center justify-between py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            <span>Association engagée au Mali</span>
            <a href="#nos-priorites" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
              Découvrir notre mission <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </section>

      <section id="nos-priorites" className="section-shell py-20 sm:py-28">
        <SectionTitle
          eyebrow="Nos priorités"
          title="Deux combats, une seule mission : protéger, informer et accompagner."
          description="Nous mettons en place des actions concrètes autour de la prévention des addictions et de la santé bucco-dentaire, avec un souci constant d'accès, de pédagogie et de bienveillance."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="premium-card rounded-[2rem] bg-white p-8 sm:p-10">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef7f7] text-[#174c73]">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold text-slate-900">Lutte contre les stupéfiants</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nous aidons les jeunes à mieux comprendre les dangers des stupéfiants, à développer une résilience solide et à faire des choix sains pour leur avenir.
            </p>
            <Link href="/combats" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174c73]">
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>

          <div className="premium-card rounded-[2rem] bg-white p-8 sm:p-10">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e9] text-[#eb5b2a]">
              <Sparkles size={28} />
            </div>
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold text-slate-900">Hygiène bucco-dentaire</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              À travers des démonstrations simples et des ateliers pratiques, nous encourageons des habitudes quotidiennes qui protègent le sourire et la santé globale.
            </p>
            <Link href="/combats" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174c73]">
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#12314a] py-20 text-white">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <SectionTitle eyebrow="Impact" title="Des actions qui laissent des traces durables." description="Chaque intervention est pensée pour être concrète, accessible et utile pour les familles, les enseignants et les jeunes." />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.09]">
                <div className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-tight text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.12em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow="Nos actions" title="Des programmes conçus pour toucher les jeunes là où ils vivent." description="Nous créons des espaces d'échange, de sensibilisation et d'accompagnement directement dans les écoles, les communautés et les lieux de vie." />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {actions.slice(0, 3).map((action) => (
            <article key={action.title} className="premium-card group overflow-hidden rounded-[2rem] bg-white">
              <div className="overflow-hidden">
                <Image src={action.image} alt={action.title} width={900} height={600} className="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#174c73]">
                  {action.category}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold text-slate-900">{action.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{action.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="overflow-hidden rounded-[2rem] border border-[#e2eceb] bg-white shadow-[0_30px_80px_-35px_rgba(18,49,74,0.24)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174c73]">Notre affiche de campagne</p>
            <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Une image forte pour une mission claire.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Cette affiche illustre notre engagement pour la prévention des addictions et la protection de la santé bucco-dentaire des enfants, avec un message simple, visuel et accessible pour les familles et les communautés.
            </p>
            <Link href="/about" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#174c73] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#123f61]">
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>

          <div className="min-h-[360px] overflow-hidden bg-[#f5f4ef] p-3 sm:p-5 lg:min-h-[560px]">
            <Image
              src="/branding/affiche-association.jpeg"
              alt="Affiche de campagne Un Enfant, Un Sourire"
              width={1200}
              height={1600}
              className="h-full max-h-[680px] w-full rounded-[1.4rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9f8] py-20">
        <div className="section-shell">
          <SectionTitle eyebrow="Témoignages" title="La confiance des familles, des enseignants et des partenaires." description="Nos actions sont pensées pour inspirer la confiance, soutenir les jeunes et renforcer les liens entre les acteurs de leur environnement." align="center" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="premium-card rounded-[1.75rem] bg-white p-6">
                <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                <footer className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-[#174c73]">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#174c73] to-[#1fa2b8] p-8 text-white shadow-[0_30px_70px_-25px_rgba(23,76,115,0.45)] md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Soutenez notre mission</p>
              <h2 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl font-extrabold sm:text-4xl">Donnez à chaque enfant une chance de grandir en sécurité.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/partners" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#174c73] transition hover:bg-slate-100">Soutenir l’association</Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
