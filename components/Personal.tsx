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
      if (mark === "strong") return <strong key={`${index}-${mark}`}>{child}</strong>;
      if (mark === "em") return <em key={`${index}-${mark}`}>{child}</em>;

      const definition = block?.markDefs?.find((def: any) => def._key === mark);
      if (definition?._type === "link") {
        return (
          <a key={`${index}-${mark}`} href={definition.href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
            {child}
          </a>
        );
      }

      return child;
    }, content);
  };

  const renderBlock = (block: any, index: number) => {
    if (block._type === "block") {
      const children = block.children?.map((child: any, childIndex: number) => renderSpan(child, block, childIndex));
      const commonProps = { key: block._key ?? index, className: "text-neutral-600 leading-relaxed mb-4 text-lg" };

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
            <blockquote {...commonProps} className="border-l-4 border-primary-200 pl-4 italic text-neutral-700">
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
          <img src={urlFor(block).width(800).url()} alt={block.alt ?? "Illustration"} className="w-full rounded-2xl object-cover" />
        </div>
      );
    }

    return null;
  };

  const rendered: ReactNode[] = [];
  let listItems: ReactNode[] = [];

  blocks.forEach((block, index) => {
    if (block._type === "block" && block.listItem === "bullet") {
      listItems.push(renderBlock(block, index));
      return;
    }

    if (listItems.length) {
      rendered.push(
        <ul key={`list-${index}`} className="list-disc list-inside mb-4 text-neutral-600">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }

    const r = renderBlock(block, index);
    if (r) rendered.push(r);
  });

  if (listItems.length) {
    rendered.push(
      <ul key="list-final" className="list-disc list-inside mb-4 text-neutral-600">
        {listItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    );
  }

  return rendered;
}

export default function Personal() {
  const { lang, t } = useLanguage();
  const [mainImageSrc, setMainImageSrc] = useState<string | null>(null);
  const [contentBlocks, setContentBlocks] = useState<any[] | null>(null);

  useEffect(() => {
    const load = async () => {
      setContentBlocks(null);
      const title = `presentation-secondaire-${lang}`;

      const [imageDoc, textDoc] = await Promise.all([
        client.fetch('*[_type == "imageType" && title == "lesson-picture"][0]'),
        client.fetch('*[_type == "longText" && title == $title][0]{content}', { title }),
      ]);

      if (imageDoc?.image) {
        setMainImageSrc(urlFor(imageDoc.image).width(600).height(760).url());
      }

      if (textDoc?.content) setContentBlocks(textDoc.content);
    };

    load();
  }, [lang]);

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
              {contentBlocks ? (
                renderPortableText(contentBlocks)
              ) : (
                <>
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
                </>
              )}

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
                  src={mainImageSrc ?? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"}
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
                src={mainImageSrc ?? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"}
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
