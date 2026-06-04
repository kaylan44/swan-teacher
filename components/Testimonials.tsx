"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import FadeIn from "./FadeIn";

type Review = {
  _id: string;
  reviewer: string;
  reviewText: string;
};

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let mounted = true;

    client
      .fetch<Review[]>('*[_type == "review"]{_id, reviewer, reviewText}')
      .then((data) => {
        if (mounted && data?.length) {
          setReviews(data);
        }
      })
      .catch(() => {
        // Ignore fetch errors and keep fallback testimonials if needed
      });

    return () => {
      mounted = false;
    };
  }, []);

  const testimonials = reviews.length ? reviews : TESTIMONIALS;

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
          {testimonials.map((item, i) => {
            const isSanityReview = "reviewText" in item && "reviewer" in item;
            const quote = isSanityReview ? item.reviewText : item.text[lang];
            const reviewer = isSanityReview ? item.reviewer : item.name;
            const initials = isSanityReview
              ? item.reviewer?.charAt(0).toUpperCase() ?? "R"
              : item.avatar;
            const subtitle = isSanityReview ? null : item.country;
            const badgeClass = isSanityReview ? "bg-neutral-200 text-neutral-700" : item.color;

            return (
              <FadeIn key={isSanityReview ? item._id : i} delay={i * 0.1}>
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
                    "{quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${badgeClass}`}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{reviewer}</p>
                      {subtitle ? <p className="text-neutral-400 text-xs">{subtitle}</p> : null}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
