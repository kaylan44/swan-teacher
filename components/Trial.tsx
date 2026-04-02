"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Trial() {
  const { t } = useLanguage();

  return (
    <section id="trial" className="section-pad bg-gradient-to-br from-primary-50 via-rose-50 to-amber-50">
      <div className="max-w-4xl mx-auto container-pad text-center">
        <FadeIn>
          <p className="section-tag">{t.trial.tag}</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {t.trial.title}
          </h2>
          <p className="text-xl text-neutral-500 mb-12">{t.trial.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {t.trial.includes.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-white flex flex-col items-center gap-3"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="text-neutral-700 font-medium text-sm text-center leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 text-lg"
          >
            🎉 {t.trial.cta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
