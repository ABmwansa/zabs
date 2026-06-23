"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Award, BadgeCheck, Building2, CheckCircle, Download, FileCheck, Filter, Globe, Leaf, Mail, Phone, Search, ShieldCheck, TrendingUp, Trophy, Users, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import type { CertificationPageContent } from "@/lib/cms";
import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";

type CertificationPageClientProps = {
  content: CertificationPageContent;
};

type CertRow = {
  company: string;
  scope?: string;
  location?: string;
  standard?: string;
  status?: string;
  product?: string;
  category?: string;
};

const certificationIconMap = {
  award: Award,
  badgeCheck: BadgeCheck,
  building2: Building2,
  fileCheck: FileCheck,
  globe: Globe,
  leaf: Leaf,
  shieldCheck: ShieldCheck,
  trendingUp: TrendingUp,
  trophy: Trophy,
};

export default function CertificationPageClient({ content }: CertificationPageClientProps) {
  const {
    benefits,
    certificationSchemes,
    itemsPerPage: itemsPerPage,
    managementSystemsData,
    productCategories,
    productsData,
    stats,
    tabs,
  } = content;

  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const currentData: CertRow[] = activeTab <= 1 ? managementSystemsData : productsData;
  const isManagement = activeTab <= 1;

  const locations = useMemo(
    () => [...new Set(currentData.map((row) => row.location).filter(Boolean))].sort() as string[],
    [currentData],
  );

  const filtered = useMemo(() => {
    return currentData.filter((row) => {
      const query = search.toLowerCase();
      const matchSearch =
        !query ||
        row.company.toLowerCase().includes(query) ||
        (row.scope || "").toLowerCase().includes(query) ||
        (row.product || "").toLowerCase().includes(query) ||
        (row.standard || "").toLowerCase().includes(query);
      const matchLocation = !locationFilter || row.location === locationFilter;
      const matchStatus = !statusFilter || row.status === statusFilter;
      return matchSearch && matchLocation && matchStatus;
    });
  }, [currentData, locationFilter, search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => {
    setSearch("");
    setLocationFilter("");
    setStatusFilter("");
    setCurrentPage(1);
  };

  const handleTabChange = (id: number) => {
    setActiveTab(id);
    setCurrentPage(1);
    setSearch("");
    setLocationFilter("");
    setStatusFilter("");
  };

  return (
    <>
      <PageHeader
        title="Certification"
        description="ZABS is the sole certification service provider in Zambia, certifying products, management systems, and issuing the ZABS Quality Mark."
        breadcrumbs={[{ label: "Certification" }]}
        badge="Quality Assurance"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = certificationIconMap[stat.icon as keyof typeof certificationIconMap];
              return (
                <div key={stat.label} className="group rounded-2xl border border-grey-100 bg-grey-50 p-5 text-center transition-all hover:border-primary-200 hover:shadow-lg">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 transition-transform group-hover:scale-110">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="font-heading text-3xl font-black text-primary-700">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold text-grey-800">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-grey-500">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="section-badge mx-auto mb-4 w-fit">
              <ShieldCheck size={12} /> Certification Services
            </div>
            <h2 className="section-title mb-4">Our Certification Schemes</h2>
            <p className="section-subtitle">
              ZABS has certified over 150 different products and numerous management systems across Zambia&apos;s industry sectors.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certificationSchemes.map((scheme) => {
              const Icon = certificationIconMap[scheme.icon as keyof typeof certificationIconMap];
              const isPrimary = scheme.color === "primary";
              return (
                <div key={scheme.title} className="group rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                        isPrimary ? "bg-primary-50" : "bg-secondary-50"
                      }`}
                    >
                      <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                        isPrimary ? "bg-primary-100 text-primary-800" : "bg-secondary-100 text-secondary-800"
                      }`}
                    >
                      {scheme.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-black text-grey-900 transition-colors group-hover:text-primary-700">{scheme.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-grey-600">{scheme.desc}</p>
                  <div className="space-y-1.5">
                    {scheme.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-grey-500">
                        <CheckCircle size={12} className={isPrimary ? "text-primary-600" : "text-secondary-600"} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-black text-grey-900">Certified Product Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {productCategories.map((category) => (
                  <div key={category} className="group flex items-center gap-3 rounded-xl border border-grey-100 bg-grey-50 p-3 transition-all hover:border-primary-200 hover:shadow-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 transition-transform group-hover:scale-110">
                      <CheckCircle size={14} className="text-primary-700" />
                    </div>
                    <span className="text-sm font-medium text-grey-700">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                  <Award size={28} className="text-secondary-400" />
                </div>
                <h3 className="mb-3 text-2xl font-black">Apply for Certification</h3>
                <p className="mb-6 text-sm leading-relaxed text-primary-100">
                  Submit a request for quotation to start your certification journey with ZABS.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary-600"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/publications"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                  >
                    <Download size={14} /> Download Forms
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-grey-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Phone size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-black text-grey-900">Contact Certification Department</h4>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary-600" />
                        <a href="tel:+260777764421" className="text-grey-700 hover:text-primary-700">
                          +260 777 764 421
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary-600" />
                        <a href="mailto:certification@zabs.org.zm" className="text-grey-700 hover:text-primary-700">
                          certification@zabs.org.zm
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="section-badge mx-auto mb-4 w-fit">
              <Users size={12} /> Certified Register
            </div>
            <h2 className="section-title mb-4">Certified Entities Register</h2>
            <p className="section-subtitle">
              View our comprehensive list of certified companies, products, and management systems
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map(({ icon, id, label, sublabel }) => {
              const Icon = certificationIconMap[icon as keyof typeof certificationIconMap];

              return (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={clsx(
                  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all",
                  activeTab === id
                    ? "border-primary-700 bg-primary-700 text-white shadow-md"
                    : "border-grey-200 bg-white text-grey-600 hover:border-primary-300 hover:text-primary-700",
                )}
              >
                <Icon size={16} />
                <div className="text-left">
                  <div>{label}</div>
                  <div className={clsx("text-xs", activeTab === id ? "text-primary-100" : "text-grey-400")}>{sublabel}</div>
                </div>
              </button>
            );
            })}
          </div>

          <div className="mb-5 rounded-2xl border border-grey-100 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap gap-3">
              <div className="relative min-w-48 flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search by company, product, or standard..."
                  className="w-full rounded-xl border border-grey-200 py-2.5 pl-9 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>
              <div className="relative">
                <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400" />
                <select
                  value={locationFilter}
                  onChange={(event) => {
                    setLocationFilter(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="min-w-36 appearance-none rounded-xl border border-grey-200 bg-white py-2.5 pl-8 pr-8 text-sm focus:border-primary-500 focus:outline-none"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value);
                  setCurrentPage(1);
                }}
                className="min-w-32 rounded-xl border border-grey-200 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none"
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
              </select>
              {(search || locationFilter || statusFilter) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                >
                  <X size={14} /> Clear
                </button>
              )}
              <div className="ml-auto self-center text-sm text-grey-500">
                <span className="font-semibold text-grey-900">{filtered.length}</span> records found
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-grey-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-700 text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Company / Organisation</th>
                    {isManagement ? (
                      <>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Standard</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Scope</th>
                      </>
                    ) : (
                      <>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Product</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                      </>
                    )}
                    <th className="px-4 py-3 text-left text-sm font-semibold">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-grey-100">
                  {paginated.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-grey-400">
                        No records match your search criteria.
                      </td>
                    </tr>
                  ) : (
                    paginated.map((row, index) => (
                      <tr key={`${row.company}-${index}`} className="transition-colors hover:bg-primary-50">
                        <td className="px-4 py-3 font-mono text-xs text-grey-400">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-4 py-3 font-semibold text-grey-900">{row.company}</td>
                        {isManagement ? (
                          <>
                            <td className="px-4 py-3">
                              <span className="inline-flex rounded-full bg-primary-100 px-2.5 py-1 text-xs font-bold text-primary-800">
                                {row.standard}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-grey-600">{row.scope}</td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3 text-sm font-medium text-grey-800">{row.product}</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex rounded-full bg-secondary-100 px-2.5 py-1 text-xs font-bold text-secondary-800">
                                {row.category}
                              </span>
                            </td>
                          </>
                        )}
                        <td className="px-4 py-3 text-sm text-grey-500">{row.location}</td>
                        <td className="px-4 py-3">
                          <span
                            className={clsx(
                              "inline-flex rounded-full px-2.5 py-1 text-xs font-bold",
                              row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
                            )}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-6 pb-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filtered.length}
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-grey-400">
            This register is updated periodically. For the most current certification status, please contact ZABS directly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="section-badge mx-auto mb-4 w-fit">
              <Trophy size={12} /> Why Get Certified
            </div>
            <h2 className="section-title mb-4">Benefits of ZABS Certification</h2>
            <p className="section-subtitle">
              Achieving certification demonstrates your commitment to quality and opens doors to new opportunities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = certificationIconMap[benefit.icon as keyof typeof certificationIconMap];
              const isPrimary = benefit.color === "primary";
              return (
                <div
                  key={benefit.title}
                  className={`rounded-2xl border p-6 transition-all hover:shadow-lg ${
                    isPrimary ? "border-primary-100 bg-primary-50" : "border-secondary-100 bg-secondary-50"
                  }`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                      isPrimary ? "bg-primary-100" : "bg-secondary-100"
                    }`}
                  >
                    <Icon size={20} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                  </div>
                  <h3 className="mb-2 text-lg font-black text-grey-900">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-grey-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
        </div>

        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <BadgeCheck size={14} className="text-secondary-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">Start Your Journey</span>
            </div>
            <h2 className="mb-5 font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">Ready to Get Certified?</h2>
            <p className="mx-auto mb-8 max-w-lg text-base text-primary-100 md:text-lg">
              Take the first step towards quality recognition with ZABS certification.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-secondary group">
                Start Certification Process <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
              >
                <Download size={16} /> Download Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
