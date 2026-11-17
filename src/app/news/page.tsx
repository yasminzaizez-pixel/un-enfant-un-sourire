"use client";

import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { newsArticles, newsCategories } from "@/data/siteData";

export default function NewsPage() {
  const [category, setCategory] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory = category === "Toutes" || article.category === category;
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.summary.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div>
      <PageIntro
        eyebrow="Actualités & conseils"
        title="Des repères utiles pour mieux grandir ensemble."
        description="Conseils, actualités et initiatives pour renforcer la prévention et la santé des enfants, avec des informations accessibles aux familles."
      />

      <div className="section-shell py-14 sm:py-16">
        <div className="premium-card rounded-[2rem] bg-white p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === item ? "bg-[#174c73] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
              <Search size={15} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher un article"
                className="w-52 bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredArticles.map((article) => (
            <article key={article.title} className="premium-card group overflow-hidden rounded-[2rem] bg-white">
              <div className="overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="font-[family-name:var(--font-manrope)] text-xl font-extrabold leading-snug tracking-tight text-[#12314a] sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{article.summary}</p>
                <button type="button" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174c73]">
                  Lire la suite <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-[#e4eceb] bg-white p-8 text-center text-slate-600">
            Aucun article ne correspond à votre recherche.
          </p>
        ) : null}
      </div>
    </div>
  );
}
