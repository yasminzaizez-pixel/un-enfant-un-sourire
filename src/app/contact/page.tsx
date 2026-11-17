"use client";

import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

import { contactDetails } from "@/data/siteData";
import { PageIntro } from "@/components/PageIntro";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageIntro
        eyebrow="Contact"
        title="Parlons ensemble de l’avenir des jeunes."
        description="Une question, une idée ou l’envie de soutenir nos actions ? Notre équipe vous répond avec simplicité et bienveillance."
      />
      <div className="section-shell py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Retrouvez-nous à Bamako ou écrivez-nous directement. Nous sommes disponibles pour les familles, les enseignants, les professionnels et les partenaires.
          </p>

          <div className="mt-8 space-y-4">
            <div className="premium-card flex items-start gap-3 rounded-[1.5rem] bg-white p-4">
              <MapPin className="mt-1 text-[#174c73]" size={20} />
              <div>
                <p className="font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">Adresse</p>
                <p className="text-sm text-slate-600">{contactDetails.address}</p>
              </div>
            </div>
            <div className="premium-card flex items-start gap-3 rounded-[1.5rem] bg-white p-4">
              <Phone className="mt-1 text-[#174c73]" size={20} />
              <div>
                <p className="font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">Téléphone</p>
                <p className="text-sm text-slate-600">{contactDetails.phone}</p>
              </div>
            </div>
            <div className="premium-card flex items-start gap-3 rounded-[1.5rem] bg-white p-4">
              <Mail className="mt-1 text-[#174c73]" size={20} />
              <div>
                <p className="font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">E-mail</p>
                <p className="text-sm text-slate-600">{contactDetails.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e4eceb] bg-white p-6 shadow-[0_30px_75px_-45px_rgba(18,49,74,0.45)] sm:p-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#eb5b2a]">Nous sommes à votre écoute</p>
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold tracking-tight text-[#12314a] sm:text-3xl">Envoyez-nous un message.</h2>
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Nom et prénom
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                E-mail
                <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              Objet
              <input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Message
              <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required rows={6} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#174c73]" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#174c73] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#084c95]">
              Envoyer mon message <ArrowRight size={16} />
            </button>
            {submitted ? (
              <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Votre message a bien été envoyé. Nous vous répondrons prochainement.
              </div>
            ) : null}
          </form>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#e4eceb] bg-white shadow-[0_25px_70px_-45px_rgba(18,49,74,0.4)]">
        <iframe
          title="Carte de localisation"
          src="https://www.google.com/maps?q=Bamako%20Mali&z=12&output=embed"
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>

      <div className="section-shell pb-14">
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e4eceb] bg-white px-4 py-2.5"><MessageCircle size={15} className="text-[#174c73]" /> {contactDetails.facebook}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e4eceb] bg-white px-4 py-2.5"><MessageCircle size={15} className="text-[#eb5b2a]" /> {contactDetails.instagram}</span>
        </div>
      </div>
    </div>
  );
}
