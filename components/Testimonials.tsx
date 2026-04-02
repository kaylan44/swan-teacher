"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TESTIMONIALS } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="section-pad bg-neutral-50">
      <div className="max-w-6xl mx-auto container-pad">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="section-tag">{t.testimonials.subtitle}</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900">
              {t.testimonials.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-600 text-sm leading-relaxed flex-grow mb-5">
                  "{item.text[lang]}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${item.color}`}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.name}</p>
                    <p className="text-neutral-400 text-xs">{item.country}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
