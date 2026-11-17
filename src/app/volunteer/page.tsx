"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

import { volunteeringRoles } from "@/data/siteData";
import { PageIntro } from "@/components/PageIntro";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    profession: "",
    engagement: "",
    message: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("/api/volunteer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      profession: "",
      engagement: "",
      message: "",
    });
  };

  return (
    <div>
      <PageIntro
        eyebrow="Bénévolat"
        title="Votre engagement peut changer une vie."
        description="Rejoignez une équipe de terrain qui aide les jeunes à grandir en santé, à se protéger et à croire en leur avenir."
      />
      <div className="section-shell py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Que vous soyez professionnel de santé, éducateur ou simplement motivé à agir, il existe une place pour votre énergie et vos compétences.
          </p>

          <div className="mt-8 space-y-4">
            {volunteeringRoles.map((role) => (
              <div key={role} className="premium-card flex items-center gap-3 rounded-[1.25rem] bg-white p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#174c73] to-[#1fa2b8] text-sm font-bold text-white">✓</div>
                <span className="text-base font-medium text-slate-700">{role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e4eceb] bg-white p-6 shadow-[0_30px_75px_-45px_rgba(18,49,74,0.45)] sm:p-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#eb5b2a]">On avance ensemble</p>
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold tracking-tight text-[#12314a] sm:text-3xl">Parlons de votre engagement.</h2>
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Nom et prénom
                <input value={form.name} onChange={(event) => handleChange("name", event.target.value)} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Téléphone
                <input value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Adresse e-mail
                <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Ville
                <input value={form.city} onChange={(event) => handleChange("city", event.target.value)} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
              Profession
              <input value={form.profession} onChange={(event) => handleChange("profession", event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Domaine d&apos;engagement
              <select value={form.engagement} onChange={(event) => handleChange("engagement", event.target.value)} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]">
                <option value="">Sélectionnez un domaine</option>
                {volunteeringRoles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Message
              <textarea value={form.message} onChange={(event) => handleChange("message", event.target.value)} required rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#174c73]" />
            </label>

            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#eb5b2a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#d84722]">
              Envoyer ma candidature <ArrowRight size={16} />
            </button>

            {submitted ? (
              <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Merci ! Votre demande a bien été reçue. Nous reviendrons vers vous rapidement.
              </div>
            ) : null}
          </form>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="premium-card rounded-[1.5rem] bg-white p-5">
          <Mail className="text-[#174c73]" size={22} />
          <p className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">Nous écrire</p>
          <p className="mt-2 text-sm text-slate-600">contact@unenfantunsourire.org</p>
        </div>
        <div className="premium-card rounded-[1.5rem] bg-white p-5">
          <Phone className="text-[#174c73]" size={22} />
          <p className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">Téléphone</p>
          <p className="mt-2 text-sm text-slate-600">+223 00 00 00 00</p>
        </div>
        <div className="premium-card rounded-[1.5rem] bg-white p-5">
          <MapPin className="text-[#174c73]" size={22} />
          <p className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">Localisation</p>
          <p className="mt-2 text-sm text-slate-600">Bamako, Mali</p>
          </div>
        </div>
      </div>
    </div>
  );
}
