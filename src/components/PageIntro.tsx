import { HeartHandshake } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="page-intro-ring" />
      <div className="section-shell relative flex min-h-[300px] items-center justify-between gap-8 py-14 sm:min-h-[340px] sm:py-16">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b9edf0] backdrop-blur sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f4b11e]" />
            {eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>
        <div className="relative z-10 hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[#f4b11e] shadow-[0_0_70px_-20px_rgba(31,162,184,0.65)] backdrop-blur sm:flex lg:mr-8 lg:h-32 lg:w-32">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <HeartHandshake className="h-9 w-9 lg:h-11 lg:w-11" strokeWidth={1.4} />
        </div>
      </div>
    </section>
  );
}
