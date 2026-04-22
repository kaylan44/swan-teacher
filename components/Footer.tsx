"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK, EMAIL } from "@/lib/constants";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#lessons", label: t.nav.lessons },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      {/* Top CTA band */}
      <div className="bg-primary-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-3">
            Ready to start your language journey?
          </h3>
          <p className="mb-6 text-primary-200">{t.hero.trust}</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-3.5 rounded-full hover:bg-primary-50 transition-colors shadow-lg text-base"
          >
            🎉 {t.nav.cta}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl text-white mb-3">
              Swan<span className="text-primary-400">.</span>
            </p>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-neutral-800 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-neutral-400 hover:text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="w-9 h-9 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-sm">✉️</span>
              </a>
            </div>
          </div>


          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  ✉️ {EMAIL}
                </a>
              </li>
              <li className="text-sm text-neutral-500 flex items-center gap-2">
                📍 Online — Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            © {year} Swan — French & English Teacher. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            {["🇫🇷", "🇬🇧", "🇪🇸"].map((flag) => (
              <span key={flag} className="text-lg">
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
