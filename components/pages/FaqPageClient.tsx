"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, Clock, FlaskConical, GraduationCap, HelpCircle, Mail, MapPin, MessageCircle, Phone, Search, ShieldCheck, Star, X } from "lucide-react";
import Link from "next/link";

import type { FaqPageContent } from "@/lib/cms";
import PageHeader from "@/components/ui/PageHeader";

type FaqPageClientProps = {
  content: FaqPageContent;
};

const faqIconMap = {
  bookOpen: BookOpen,
  clock: Clock,
  flaskConical: FlaskConical,
  graduationCap: GraduationCap,
  helpCircle: HelpCircle,
  shieldCheck: ShieldCheck,
  star: Star,
};

export default function FaqPageClient({ content }: FaqPageClientProps) {
  const { categories, faqs, stats } = content;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    setOpenItems((previous) =>
      previous.includes(key) ? previous.filter((item) => item !== key) : [...previous, key],
    );
  };

  const filtered = faqs
    .filter((section) => activeCategory === "All" || section.category === activeCategory)
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          !search ||
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((section) => section.items.length > 0);

  const totalVisible = filtered.reduce((sum, section) => sum + section.items.length, 0);
  const hasFilters = search || activeCategory !== "All";

  const handleReset = () => {
    setSearch("");
    setActiveCategory("All");
    setOpenItems([]);
  };

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about ZABS services, standards, certification, and testing"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        badge="Help Centre"
      />

      <section className="section-padding bg-grey-50 min-h-screen">
        <div className="container-custom">
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = faqIconMap[stat.icon as keyof typeof faqIconMap];
              return (
                <div key={stat.label} className="group rounded-2xl border border-grey-100 bg-white p-5 text-center transition-all hover:border-primary-200 hover:shadow-lg">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 transition-transform group-hover:scale-110">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="font-heading text-2xl font-black text-primary-700">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold text-grey-800">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-grey-500">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="relative mx-auto mb-10 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-400" />
            <input
              type="text"
              placeholder="Search FAQ - e.g. certification, testing, standards, training..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-2xl border border-grey-200 bg-white py-4 pl-12 pr-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-400 hover:text-grey-600"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const categoryData = faqs.find((section) => section.category === category);
              const count =
                category === "All"
                  ? faqs.reduce((sum, section) => sum + section.items.length, 0)
                  : categoryData?.items.length || 0;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenItems([]);
                  }}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 font-medium transition-all ${
                    isActive
                      ? "bg-primary-700 text-white shadow-md"
                      : "border border-grey-200 bg-white text-grey-700 hover:border-primary-200 hover:bg-primary-50"
                  }`}
                >
                  {category !== "All" && categoryData?.icon && (
                    (() => {
                      const Icon = faqIconMap[categoryData.icon as keyof typeof faqIconMap];
                      return <Icon size={14} className={isActive ? "text-secondary-400" : ""} />;
                    })()
                  )}
                  <span>{category}</span>
                  <span className={`text-xs ${isActive ? "text-primary-200" : "text-grey-400"}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {hasFilters && (
            <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between">
              <p className="text-sm text-grey-500">
                Found <strong className="text-grey-800">{totalVisible}</strong> result{totalVisible !== 1 ? "s" : ""}
                {search && (
                  <>
                    {" "}
                    for &ldquo;<em className="text-primary-700">{search}</em>&rdquo;
                  </>
                )}
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in <strong className="text-primary-700">{activeCategory}</strong>
                  </>
                )}
              </p>
              <button onClick={handleReset} className="text-sm font-medium text-primary-600 hover:text-primary-700">
                Clear filters
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-grey-100 bg-white p-16 text-center">
              <HelpCircle size={48} className="mx-auto mb-4 text-grey-300" />
              <h3 className="mb-2 text-lg font-semibold text-grey-600">No results found</h3>
              <p className="mb-4 text-sm text-grey-400">Try different keywords or browse all categories.</p>
              <button onClick={handleReset} className="text-sm font-medium text-primary-600 hover:text-primary-700">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl space-y-8">
              {filtered.map((section) => {
                const Icon = faqIconMap[section.icon as keyof typeof faqIconMap];
                const isPrimary = section.color === "primary";

                return (
                  <div key={section.category}>
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isPrimary ? "bg-primary-100" : "bg-secondary-100"
                        }`}
                      >
                        <Icon size={18} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                      </div>
                      <h2 className="text-xl font-black text-grey-900">{section.category}</h2>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, index) => {
                        const key = `${section.category}-${index}`;
                        const isOpen = openItems.includes(key);

                        return (
                          <div
                            key={key}
                            className={`rounded-2xl border bg-white transition-all ${
                              isOpen ? "border-primary-200 shadow-lg" : "border-grey-100 shadow-sm hover:shadow-md"
                            }`}
                          >
                            <button
                              onClick={() => toggleItem(key)}
                              className="flex w-full items-start justify-between gap-4 px-6 py-4 text-left"
                            >
                              <span
                                className={`text-sm font-semibold leading-snug sm:text-base ${
                                  isOpen ? "text-primary-700" : "text-grey-800"
                                }`}
                              >
                                {item.q}
                              </span>
                              <span className="mt-0.5 flex-shrink-0">
                                {isOpen ? (
                                  <ChevronUp size={18} className="text-primary-600" />
                                ) : (
                                  <ChevronDown size={18} className="text-grey-400" />
                                )}
                              </span>
                            </button>
                            {isOpen && (
                              <div className="border-t border-grey-100 px-6 pb-5 pt-2">
                                <p className="text-sm leading-relaxed text-grey-600">{item.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-white/5" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
                <MessageCircle size={14} className="text-secondary-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Still Have Questions?</span>
              </div>
              <h2 className="mb-4 font-heading text-2xl font-black md:text-3xl">Can&apos;t Find What You&apos;re Looking For?</h2>
              <p className="mx-auto mb-8 max-w-lg text-primary-100">
                Our team is ready to assist you with any enquiry about ZABS services, standards, or accreditation.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+260211231987"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-600"
                >
                  <Phone size={16} /> Call Our Team
                </a>
                <a
                  href="mailto:info@zabs.org.zm"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
                >
                  <Mail size={16} /> Send an Email
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
                >
                  <MapPin size={16} /> Visit Our Office
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-grey-500">
              Alternatively, reach us directly at{" "}
              <a href="tel:+260211231987" className="font-medium text-primary-700 hover:text-primary-800">
                +260 211 231 987
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="font-medium text-primary-700 hover:text-primary-800">
                Contact Page
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
