"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { CREDENTIALS } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Credentials() {
  const { t, lang } = useLanguage();

  return (
    <section id="credentials" className="section-pad bg-neutral-50">
      <div className="max-w-6xl mx-auto container-pad">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="section-tag">{t.credentials.subtitle}</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900">
              {t.credentials.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREDENTIALS.map((cred, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="card p-6 hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {cred.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-2">
                  {cred.title[lang]}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {cred.desc[lang]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
