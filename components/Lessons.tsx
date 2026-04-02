"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Lessons() {
  const { t } = useLanguage();

  return (
    <section id="lessons" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto container-pad">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="section-tag">{t.lessons.subtitle}</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900">
              {t.lessons.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* French Lessons - highlighted */}
          <FadeIn delay={0.1}>
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {t.lessons.french.tag}
                </span>
                <div className="text-4xl mb-3">🇫🇷</div>
                <h3 className="font-display text-3xl font-bold mb-2">
                  {t.lessons.french.title}
                </h3>
                <p className="text-primary-200 text-sm mb-6 font-medium">
                  {t.lessons.french.for}
                </p>
                <ul className="space-y-3">
                  {t.lessons.french.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary-50 transition-colors shadow-md"
                >
                  Start learning French →
                </a>
              </div>
            </div>
          </FadeIn>

          {/* English Lessons */}
          <FadeIn delay={0.2}>
            <div className="card p-8 h-full border-2 hover:border-primary-100">
              <span className="inline-flex items-center bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                {t.lessons.english.tag}
              </span>
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 mb-2">
                {t.lessons.english.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 font-medium">
                {t.lessons.english.for}
              </p>
              <ul className="space-y-3">
                {t.lessons.english.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 text-xs">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-secondary text-sm w-full justify-center"
              >
                Start learning English →
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Footer info */}
        <FadeIn delay={0.3}>
          <div className="bg-neutral-50 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.lessons.footer.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center sm:justify-start"
              >
                <span className="text-neutral-600 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
