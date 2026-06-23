"use client";

import { useState } from "react";
import { Award, BarChart2, BookOpen, Calendar, ChevronRight, Download, FileText, Newspaper, Search, Star, TrendingUp, X } from "lucide-react";

import type { PublicationsPageContent } from "@/lib/cms";
import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";

type PublicationsPageClientProps = {
  content: PublicationsPageContent;
};

const publicationsIconMap = {
  award: Award,
  barChart2: BarChart2,
  bookOpen: BookOpen,
  fileText: FileText,
  newspaper: Newspaper,
  trendingUp: TrendingUp,
};

export default function PublicationsPageClient({ content }: PublicationsPageClientProps) {
  const {
    itemsPerPage: itemsPerPage,
    publicationTypeTabDetails,
    publications,
    stats,
    typeBgColors,
    typeColors,
    typeIcons,
    types,
  } = content;

  const publicationTypeTabs = types
    .filter((item) => item !== "All Types")
    .map((item) => {
      const details = publicationTypeTabDetails[item];

      return {
        access: details?.access ?? "Published as part of the ZABS public resource library.",
        filterType: item,
        focus: details?.focus ?? `${item} publications available in the ZABS public library.`,
        id: details?.id ?? item.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        label: details?.label ?? item,
        typicalContent: details?.typicalContent ?? `Documents categorized under ${item}.`,
      };
    });

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("All Years");
  const [page, setPage] = useState(1);
  const [activePublicationTab, setActivePublicationTab] = useState(publicationTypeTabs[0]?.id ?? "");

  const years = ["All Years", ...Array.from(new Set(publications.map((item) => item.year.toString()))).sort().reverse()];
  const selectedPublicationTab = publicationTypeTabs.find((tab) => tab.id === activePublicationTab) ?? publicationTypeTabs[0];
  const activeTypeFilter = selectedPublicationTab?.filterType;

  const filtered = publications.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());
    const matchType = !activeTypeFilter || item.type === activeTypeFilter;
    const matchYear = year === "All Years" || item.year.toString() === year;
    return matchSearch && matchType && matchYear;
  });

  const featured = publications.filter((item) => item.featured);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const selectedPublicationItems = selectedPublicationTab
    ? publications.filter((item) => item.type === selectedPublicationTab.filterType).slice(0, 3)
    : [];

  const handleReset = () => {
    setSearch("");
    setYear("All Years");
    setPage(1);
  };

  const hasFilters = search || year !== "All Years";

  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Access ZABS reports, newsletters, policy documents, standards catalogues, and brochures"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications" }]}
        badge="Resource Library"
      />

      <section className="section-padding bg-grey-50 min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = publicationsIconMap[stat.icon as keyof typeof publicationsIconMap];
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

          <div className="mb-12 overflow-hidden rounded-2xl border border-grey-100 bg-white shadow-sm">
            <div className="border-b border-grey-100 px-6 py-5">
              <div className="section-badge mb-3 w-fit">
                <FileText size={12} /> Publication Types
              </div>
              <h2 className="text-2xl font-black text-grey-900">Types of Publications</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-grey-500">
                The publications library is organised around the main document types used by ZABS for reporting,
                planning, updates, and standards reference material.
              </p>
            </div>

            <div className="border-b border-grey-100 px-4 pt-4 md:px-6">
              <div className="flex flex-wrap gap-2">
                {publicationTypeTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActivePublicationTab(tab.id);
                      setSearch("");
                      setYear("All Years");
                      setPage(1);
                    }}
                    className={`rounded-t-xl px-4 py-3 text-sm font-semibold transition-all ${
                      activePublicationTab === tab.id
                        ? "bg-primary-700 text-white"
                        : "bg-grey-50 text-grey-600 hover:bg-primary-50 hover:text-primary-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedPublicationTab && (
              <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
                <div>
                  <h3 className="text-xl font-black text-grey-900">{selectedPublicationTab.label}</h3>
                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">Focus</div>
                      <p className="mt-2 text-sm leading-relaxed text-grey-600">{selectedPublicationTab.focus}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">Typical Content</div>
                      <p className="mt-2 text-sm leading-relaxed text-grey-600">{selectedPublicationTab.typicalContent}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">Access</div>
                      <p className="mt-2 text-sm leading-relaxed text-grey-600">{selectedPublicationTab.access}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">Available Items</div>
                      <p className="mt-1 text-sm text-grey-600">Quick examples from this publication type.</p>
                    </div>
                    <div className="rounded-xl bg-primary-700 px-4 py-2 text-sm font-semibold text-white">
                      {selectedPublicationItems.length} Item{selectedPublicationItems.length !== 1 ? "s" : ""}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {selectedPublicationItems.map((item) => (
                      <div key={item.id} className="rounded-xl border border-white bg-white px-4 py-4">
                        <div className="flex items-center gap-2 text-xs text-grey-400">
                          <span>{item.type}</span>
                          <span>&bull;</span>
                          <span>{item.year}</span>
                        </div>
                        <div className="mt-2 text-sm font-bold text-grey-900">{item.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-grey-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="section-badge mb-3">
                  <Star size={12} /> Featured
                </div>
                <h2 className="text-2xl font-black text-grey-900">Featured Publications</h2>
              </div>
              <span className="text-sm text-grey-500">{featured.length} featured resources</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featured.slice(0, 3).map((publication) => {
                const Icon = publicationsIconMap[typeIcons[publication.type] as keyof typeof publicationsIconMap] || FileText;
                const gradient = typeBgColors[publication.type] || "from-primary-600 to-primary-800";

                return (
                  <div
                    key={publication.id}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 text-white transition-all hover:shadow-xl`}
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="mb-3 inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold text-white">
                        {publication.type} &bull; {publication.year}
                      </span>
                      <h3 className="mb-2 text-lg font-black leading-snug">{publication.title}</h3>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/80">{publication.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <FileText size={12} />
                          <span>{publication.pages} pages</span>
                          <span>&bull;</span>
                          <span>{publication.size}</span>
                        </div>
                        <a
                          href={`mailto:info@zabs.org.zm?subject=Download Request: ${publication.title}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold transition-all hover:bg-white/30"
                        >
                          <Download size={14} /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-grey-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400" />
                <input
                  type="text"
                  placeholder="Search publications by title or description..."
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  className="w-full rounded-xl border border-grey-200 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="relative">
                <select
                  value={year}
                  onChange={(event) => {
                    setYear(event.target.value);
                    setPage(1);
                  }}
                  className="min-w-32 appearance-none rounded-xl border border-grey-200 bg-white py-2.5 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {years.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronRight size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-grey-400" />
              </div>
              {hasFilters && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                >
                  <X size={14} /> Clear
                </button>
              )}
            </div>
            <div className="mt-3 border-t border-grey-100 pt-2">
              <p className="text-sm text-grey-500">
                Showing <strong className="text-grey-800">{filtered.length}</strong> publication{filtered.length !== 1 ? "s" : ""} in{" "}
                <strong className="text-primary-700">{selectedPublicationTab?.label}</strong>
                {hasFilters && (
                  <button onClick={handleReset} className="ml-3 text-xs text-primary-600 hover:text-primary-700">
                    Reset filters
                  </button>
                )}
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-grey-100 bg-white p-16 text-center">
              <FileText size={48} className="mx-auto mb-4 text-grey-300" />
              <h3 className="mb-2 text-lg font-semibold text-grey-600">No publications found</h3>
              <p className="text-sm text-grey-400">Try adjusting your search or filter criteria.</p>
              <button onClick={handleReset} className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {paginated.map((publication) => {
                const Icon = publicationsIconMap[typeIcons[publication.type] as keyof typeof publicationsIconMap] || FileText;
                return (
                  <div key={publication.id} className="group rounded-2xl border border-grey-100 bg-white transition-all hover:shadow-lg">
                    <div className="flex flex-col items-start gap-4 p-5 sm:flex-row">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 transition-transform group-hover:scale-110">
                        <Icon size={24} className="text-primary-700" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${typeColors[publication.type] || "bg-grey-100 text-grey-700"}`}>
                            {publication.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-grey-400">
                            <Calendar size={12} />
                            {publication.year}
                          </span>
                          <span className="text-xs text-grey-400">&bull;</span>
                          <span className="flex items-center gap-1 text-xs text-grey-400">
                            <FileText size={12} />
                            {publication.pages} pages
                          </span>
                          <span className="text-xs text-grey-400">&bull;</span>
                          <span className="flex items-center gap-1 text-xs text-grey-400">
                            <Download size={12} />
                            {publication.downloads} downloads
                          </span>
                        </div>
                        <h3 className="mb-1 text-base font-bold text-grey-900 transition-colors group-hover:text-primary-700">{publication.title}</h3>
                        <p className="mb-3 text-sm leading-relaxed text-grey-600">{publication.desc}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-grey-400">
                            {publication.format} &bull; {publication.size}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`mailto:info@zabs.org.zm?subject=Download Request: ${publication.title}`}
                        className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-100"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-6">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                totalItems={filtered.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          )}

          <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-white/5" />
            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                  <Newspaper size={32} className="text-secondary-400" />
                </div>
                <div>
                  <h3 className="mb-1 text-2xl font-black">Stay Informed</h3>
                  <p className="text-sm text-primary-100">
                    Subscribe to the ZABS newsletter to receive updates on new standards, training opportunities, and industry news.
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@zabs.org.zm?subject=Newsletter Subscription"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-secondary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-600"
              >
                Subscribe to Newsletter <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-grey-500">
              Need assistance? Contact our publications team at{" "}
              <a href="mailto:info@zabs.org.zm" className="font-medium text-primary-700 hover:text-primary-800">
                info@zabs.org.zm
              </a>{" "}
              or call{" "}
              <a href="tel:+260211231987" className="font-medium text-primary-700 hover:text-primary-800">
                +260 211 231 987
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
