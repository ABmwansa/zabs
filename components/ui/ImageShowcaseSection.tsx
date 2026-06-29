import Image from "next/image";

import type { ShowcaseImageAsset } from "@/lib/content/site-images";
import Reveal from "@/components/ui/Reveal";

type ImageShowcaseSectionProps = {
  badge: string;
  title: string;
  description?: string;
  items: ShowcaseImageAsset[];
  backgroundClassName?: string;
  hideItemCaptions?: boolean;
};

export default function ImageShowcaseSection({
  badge,
  title,
  description,
  items,
  backgroundClassName = "bg-white",
  hideItemCaptions = false,
}: ImageShowcaseSectionProps) {
  return (
    <section className={`section-padding ${backgroundClassName}`}>
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-badge mx-auto mb-4 w-fit">{badge}</div>
          <h2 className="section-title mb-4">{title}</h2>
          {description ? <p className="section-subtitle">{description}</p> : null}
        </div>

        <div className={`grid gap-6 ${items.length === 2 ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {items.map((item, index) => (
            <Reveal key={item.src} delay={index * 70}>
              <article className="overflow-hidden rounded-[1.75rem] border border-grey-100 bg-white shadow-[0_24px_60px_-42px_rgba(16,34,53,0.22)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_-42px_rgba(16,34,53,0.3)]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={items.length === 2 ? "(min-width: 1024px) 44vw, 100vw" : "(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"}
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    style={{ objectPosition: item.position || "center center" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,43,0.06)_0%,rgba(8,27,43,0.14)_100%)]" />
                </div>

                {!hideItemCaptions ? (
                  <div className="p-6">
                    <h3 className="text-xl font-black text-grey-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey-600">{item.description}</p>
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
