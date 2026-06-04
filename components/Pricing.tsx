"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { PRICING, WHATSAPP_LINK, WHATSAPP_MESSAGE } from "@/lib/constants";
import { useSiteData } from "@/lib/SiteDataContext";
import FadeIn from "./FadeIn";

export default function Pricing() {
  const { t } = useLanguage();
  const site = useSiteData();
  const whatsappLink = site?.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${WHATSAPP_MESSAGE}`
    : WHATSAPP_LINK;

  const pricing = PRICING.map((plan) => {
    if (plan.duration.includes("40")) {
      return { ...plan, price: site?.price40 ?? plan.price };
    }
    if (plan.duration.includes("60")) {
      return { ...plan, price: site?.price60 ?? plan.price };
    }
    return plan;
  });

  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="max-w-4xl mx-auto container-pad">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="section-tag">{t.pricing.subtitle}</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900">
              {t.pricing.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {pricing.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="card border-2 hover:border-primary-100 rounded-3xl p-8 text-center h-full transition-all duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-wide mb-2 text-neutral-400">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="font-display text-6xl font-bold text-neutral-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-500">
                  / {plan.duration}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold text-sm bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200"
                >
                  💬 Book on WhatsApp
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <p className="text-center text-sm text-neutral-400 font-medium">
            {t.pricing.microcopy}
          </p>
          <div className="mt-4 space-y-2 text-center text-sm text-neutral-500 italic">
            {t.pricing.notes?.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
