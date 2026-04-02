"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-amber-100 rounded-3xl -rotate-2 scale-105 opacity-50" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/secondary-img-swan.jpg"
                  alt="Swan teaching online with warmth and passion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 400px"
                />
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-3 -right-3 lg:-right-6 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-1">
                <span className="text-3xl">🇫🇷</span>
                <span className="text-xs font-bold text-neutral-700">French</span>
                <span className="text-2xl">🇬🇧</span>
                <span className="text-xs font-bold text-neutral-700">English</span>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="section-tag">{t.about.subtitle}</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                {t.about.title} 👋
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4 text-lg">
                {t.about.p1}
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                {t.about.p2}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-neutral-50 rounded-2xl">
                {[
                  { num: "100+", label: "Students" },
                  { num: "5+", label: "Years exp." },
                  { num: "30", label: "Min free trial" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display font-bold text-2xl text-primary-600">{num}</p>
                    <p className="text-xs text-neutral-500 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 {t.nav.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
