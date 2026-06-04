"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import FadeIn from "./FadeIn";

function renderPortableText(blocks: any[]): ReactNode {
  if (!Array.isArray(blocks)) return null;

  const renderSpan = (span: any, block: any, index: number) => {
    let content: ReactNode = span.text;

    if (!span.marks?.length) {
      return <span key={index}>{content}</span>;
    }

    return span.marks.reduceRight((child: ReactNode, mark: string) => {
      if (mark === "strong") {
        return <strong key={`${index}-${mark}`}>{child}</strong>;
      }
      if (mark === "em") {
        return <em key={`${index}-${mark}`}>{child}</em>;
      }

      const definition = block?.markDefs?.find((def: any) => def._key === mark);
      if (definition?._type === "link") {
        return (
          <a
            key={`${index}-${mark}`}
            href={definition.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 underline"
          >
            {child}
          </a>
        );
      }

      return child;
    }, content);
  };

  const renderBlock = (block: any, index: number) => {
    if (block._type === "block") {
      const children = block.children?.map((child: any, childIndex: number) =>
        renderSpan(child, block, childIndex),
      );

      const commonProps = {
        key: block._key ?? index,
        className: "text-neutral-600 leading-relaxed mb-4 text-lg",
      };

      switch (block.style) {
        case "h1":
          return <h1 {...commonProps}>{children}</h1>;
        case "h2":
          return <h2 {...commonProps}>{children}</h2>;
        case "h3":
          return <h3 {...commonProps}>{children}</h3>;
        case "h4":
          return <h4 {...commonProps}>{children}</h4>;
        case "blockquote":
          return (
            <blockquote
              {...commonProps}
              className="border-l-4 border-primary-200 pl-4 italic text-neutral-700"
            >
              {children}
            </blockquote>
          );
        default:
          return <p {...commonProps}>{children}</p>;
      }
    }

    if (block._type === "image" && block.asset) {
      return (
        <div key={block._key ?? index} className="mb-6">
          <img
            src={urlFor(block).width(800).url()}
            alt={block.alt ?? "Illustration"}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      );
    }

    return null;
  };

  const renderedBlocks: ReactNode[] = [];
  let listItems: ReactNode[] = [];

  blocks.forEach((block, index) => {
    if (block._type === "block" && block.listItem === "bullet") {
      listItems.push(renderBlock(block, index));
      return;
    }

    if (listItems.length) {
      renderedBlocks.push(
        <ul key={`list-${index}`} className="list-disc list-inside mb-4 text-neutral-600">
          {listItems.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }

    const rendered = renderBlock(block, index);
    if (rendered) renderedBlocks.push(rendered);
  });

  if (listItems.length) {
    renderedBlocks.push(
      <ul key="list-final" className="list-disc list-inside mb-4 text-neutral-600">
        {listItems.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ul>,
    );
  }

  return renderedBlocks;
}

export default function About() {
  const { lang, t } = useLanguage();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [contentBlocks, setContentBlocks] = useState<any[] | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      setContentBlocks(null);
      const title = `presentation-principale-${lang}`;

      const [imageDoc, textDoc] = await Promise.all([
        client.fetch('*[_type == "imageType" && title == "secondary-picture"][0]'),
        client.fetch('*[_type == "longText" && title == $title][0]{content}', { title }),
      ]);

      if (imageDoc?.image) {
        setImageSrc(urlFor(imageDoc.image).width(800).height(1000).url());
      }

      if (textDoc?.content) {
        setContentBlocks(textDoc.content);
      }
    };

    loadContent();
  }, [lang]);

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
                  src={imageSrc ?? "/secondary-img-swan.jpg"}
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
              {contentBlocks ? (
                renderPortableText(contentBlocks)
              ) : (
                <>
                  <p className="text-neutral-600 leading-relaxed mb-4 text-lg">
                    {t.about.p1}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                    {t.about.p2}
                  </p>
                </>
              )}

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
