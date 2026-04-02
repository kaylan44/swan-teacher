"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Personal() {
  const { t } = useLanguage();

  return (
    <section id="personal" className="section-pad bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <FadeIn direction="left">
            <div>
              <p className="section-tag">{t.personal.subtitle}</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                {t.personal.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4 text-lg">
                {t.personal.p1}
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4 text-lg">
                {t.personal.p2}
              </p>
              <p className="text-neutral-700 leading-relaxed mb-8 text-lg font-medium italic font-display">
                "{t.personal.p3}"
              </p>

              {/* Hobby tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {t.personal.hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-neutral-100 hover:bg-primary-50 hover:text-primary-700 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-default"
                  >
                    {hobby}
                  </span>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 Let&apos;s connect!
              </a>
            </div>
          </FadeIn>

          {/* Image collage */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative h-[480px] hidden lg:block">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-64 h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                  alt="Swan enjoying her hobbies and travels"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 w-56 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80"
                  alt="Swan with books and language learning"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 text-center z-10 border border-neutral-100">
                <span className="text-3xl block mb-1">🌍</span>
                <p className="text-xs font-bold text-neutral-700">Languages</p>
                <p className="text-xs text-neutral-500">open worlds</p>
              </div>
            </div>

            {/* Mobile: single image */}
            <div className="lg:hidden relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"
                alt="Swan enjoying her hobbies"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
