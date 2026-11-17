"use client";

import { BarChart3, BriefcaseBusiness, Inbox, LogIn, ShieldCheck, Users } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { PageIntro } from "@/components/PageIntro";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("admin@unenfantunsourire.org");
  const [password, setPassword] = useState("admin123");

  useEffect(() => {
    const savedSession = localStorage.getItem("ueus-admin");
    if (savedSession === "logged-in") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "admin@unenfantunsourire.org" && password === "admin123") {
      localStorage.setItem("ueus-admin", "logged-in");
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="w-full max-w-md rounded-[2rem] border border-[#e4eceb] bg-white p-8 shadow-[0_30px_75px_-45px_rgba(18,49,74,0.5)]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#174c73] to-[#1fa2b8] text-white">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-[#174c73]">Espace admin</p>
              <h1 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold text-slate-900">Connexion</h1>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              E-mail
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Mot de passe
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#174c73] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#084c95]">
              <LogIn size={16} /> Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageIntro
        eyebrow="Espace administration"
        title="Le suivi de vos actions, en un regard."
        description="Retrouvez les indicateurs clés et les éléments à suivre pour faire avancer les projets de l’association."
      />
      <div className="section-shell py-14 sm:py-16">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#174c73]">Tableau de bord</p>
          <h1 className="mt-2 font-[family-name:var(--font-manrope)] text-4xl font-extrabold text-slate-900">Gestion du site</h1>
        </div>
        <button type="button" onClick={() => { localStorage.removeItem("ueus-admin"); setLoggedIn(false); }} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
          Déconnexion
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: "Actualités", value: "18 articles", icon: BarChart3, tone: "bg-sky-50 text-sky-700" },
          { title: "Candidatures", value: "42 reçues", icon: Users, tone: "bg-emerald-50 text-emerald-700" },
          { title: "Actions", value: "06 programmes", icon: BriefcaseBusiness, tone: "bg-orange-50 text-orange-700" },
          { title: "Messages", value: "14 demandes", icon: Inbox, tone: "bg-violet-50 text-violet-700" },
        ].map(({ title, value, icon: Icon, tone }) => (
          <div key={title} className="premium-card rounded-[2rem] bg-white p-6">
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}>
              <Icon size={22} />
            </div>
            <p className="text-sm uppercase tracking-[0.14em] text-slate-500">{title}</p>
            <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-slate-900">{value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="premium-card rounded-[2rem] bg-white p-7">
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900">Dernières mises à jour</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-4">Campagne contre les stupéfiants : nouvelle sélection de messages à diffuser.</li>
            <li className="rounded-2xl bg-slate-50 p-4">Hygiène bucco-dentaire : ajout d&apos;un atelier pédagogique pour les écoles rurales.</li>
            <li className="rounded-2xl bg-slate-50 p-4">Partenariats : relance des contacts avec les établissements de santé.</li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[#102d45] to-[#174c73] p-7 text-white shadow-[0_30px_75px_-45px_rgba(18,49,74,0.7)]">
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-bold">Actions à planifier</h2>
          <ul className="mt-6 space-y-4 text-slate-200">
            <li className="rounded-2xl border border-slate-700 bg-white/5 p-4">Sensibilisation dans 4 établissements scolaires.</li>
            <li className="rounded-2xl border border-slate-700 bg-white/5 p-4">Brossage des dents : démonstration communautaire la semaine prochaine.</li>
            <li className="rounded-2xl border border-slate-700 bg-white/5 p-4">Nouvelle campagne de prévention pour les parents.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
