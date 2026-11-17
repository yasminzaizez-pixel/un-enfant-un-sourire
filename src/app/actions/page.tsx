"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Sparkles, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { actions } from "@/data/siteData";

const filters = [
  "Toutes les activités",
  "Lutte contre les stupéfiants",
  "Santé bucco-dentaire",
  "Activités scolaires",
  "Campagnes communautaires",
];

export default function ActionsPage() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [selectedAction, setSelectedAction] = useState<(typeof actions)[number] | null>(null);

  const visibleActions = useMemo(() => {
    if (selectedFilter === "Toutes les activités") return actions;
    return actions.filter((action) => action.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div>
      <PageIntro
        eyebrow="Nos actions"
        title="Des initiatives concrètes, visibles et porteuses d’impact."
        description="Chaque action est pensée pour sensibiliser, accompagner et renforcer la confiance des jeunes, des familles et des communautés."
      />

      <div className="section-shell py-14 sm:py-16">
        <div className="premium-card flex flex-col gap-4 rounded-[2rem] bg-white p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-[#174c73] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <Search size={16} />
            {visibleActions.length} actions
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleActions.map((action) => (
            <motion.article
              key={action.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card group overflow-hidden rounded-[2rem] bg-white"
            >
              <button
                type="button"
                onClick={() => setSelectedAction(action)}
                className="block h-full w-full text-left"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={action.image}
                    alt={action.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-4 text-white">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      <Tag size={12} /> {action.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    <span>{action.date}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={12} /> {action.location}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-manrope)] text-xl font-extrabold leading-snug tracking-tight text-[#12314a] sm:text-2xl">
                    {action.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{action.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174c73]">
                    Ouvrir la fiche <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAction ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedAction(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-64 w-full sm:h-80">
                <Image src={selectedAction.image} alt={selectedAction.title} fill sizes="(max-width: 768px) 100vw, 896px" className="object-cover" />
                <button
                  type="button"
                  onClick={() => setSelectedAction(null)}
                  className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#12314a] shadow-lg"
                >
                  Fermer
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-slate-500">
                  <span>{selectedAction.date}</span>
                  <span>•</span>
                  <span>{selectedAction.location}</span>
                  <span>•</span>
                  <span>{selectedAction.category}</span>
                </div>
                <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[#12314a]">
                  {selectedAction.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">{selectedAction.description}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-[#f4f9f8] p-5">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#174c73]"><Sparkles size={15} /> Objectif</p>
                    <p className="text-base leading-7 text-slate-700">{selectedAction.objective}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#fff7f1] p-5">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#d94824]"><Sparkles size={15} /> Impact</p>
                    <p className="text-base leading-7 text-slate-700">{selectedAction.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
