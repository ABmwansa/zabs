"use client";

import { useMemo, useState } from "react";
import { BookOpen, ChevronDown, Clock, Download, FileText, Filter, Layers, Phone, Search, ShoppingCart, Star, Tag, TrendingUp } from "lucide-react";

import type { BuyStandardsPageContent } from "@/lib/cms";
import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";

type BuyStandardsPageClientProps = {
  content: BuyStandardsPageContent;
};

const statsIconMap = {
  bookOpen: BookOpen,
  clock: Clock,
  layers: Layers,
  trendingUp: TrendingUp,
};

export default function BuyStandardsPageClient({ content }: BuyStandardsPageClientProps) {
  const {
    categories,
    categoryColors,
    itemsPerPage: itemsPerPage,
    standards,
    stats,
  } = content;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("code");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const filtered = useMemo(() => {
    const result = standards.filter((item) => {
      const matchSearch =
        item.code.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All Categories" || item.category === category;
      return matchSearch && matchCategory;
    });

    if (sortBy === "code") result.sort((a, b) => a.code.localeCompare(b.code));
    else if (sortBy === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "year") result.sort((a, b) => b.year.localeCompare(a.year));

    return result;
  }, [category, search, sortBy, standards]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const toggleCart = (id: number) => {
    setCart((previous) => (previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]));
  };

  const cartTotal = standards.filter((item) => cart.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const cartCount = cart.length;

  return (
    <>
      <PageHeader
        title="Buy Standards"
        subtitle="Purchase Zambia Standards (ZS) for your industry, business, or research needs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy Standards" }]}
        badge="Standards Catalogue"
      />

      <section className="section-padding min-h-screen bg-grey-50">
        <div className="container-custom">
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = statsIconMap[stat.icon as keyof typeof statsIconMap];
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

          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="lg:w-72 lg:flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-grey-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-grey-900">
                    <Filter size={16} className="text-primary-600" />
                    Filter By Category
                  </h3>
                  <ul className="space-y-1">
                    {categories.map((item) => {
                      const count =
                        item === "All Categories" ? standards.length : standards.filter((standard) => standard.category === item).length;
                      return (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setCategory(item);
                              setPage(1);
                            }}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
                              category === item ? "bg-primary-700 text-white" : "text-grey-700 hover:bg-grey-100"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item}</span>
                              <span className={`text-xs ${category === item ? "text-primary-100" : "text-grey-400"}`}>({count})</span>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {cartCount > 0 && (
                  <div className="animate-fade-in rounded-2xl border border-grey-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 flex items-center gap-2 font-bold text-grey-900">
                      <ShoppingCart size={16} className="text-secondary-600" />
                      Cart ({cartCount})
                    </h3>
                    <div className="mb-4 max-h-48 space-y-2 overflow-y-auto">
                      {standards
                        .filter((item) => cart.includes(item.id))
                        .map((item) => (
                          <div key={item.id} className="flex items-center justify-between text-sm">
                            <span className="max-w-[120px] truncate text-grey-700">{item.code}</span>
                            <span className="font-semibold text-primary-700">K{item.price}</span>
                          </div>
                        ))}
                    </div>
                    <div className="mb-4 border-t border-grey-100 pt-3">
                      <div className="flex items-center justify-between font-bold">
                        <span>Total:</span>
                        <span className="text-lg text-primary-700">K{cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <a
                      href="mailto:standards@zabs.org.zm?subject=Standards Purchase Request"
                      className="btn-primary w-full py-2.5 text-center text-sm"
                    >
                      Request Purchase
                    </a>
                    <button onClick={() => setCart([])} className="mt-2 w-full text-center text-xs text-grey-400 hover:text-grey-600">
                      Clear cart
                    </button>
                  </div>
                )}

                <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                      <Phone size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-800">Need help?</p>
                      <p className="mt-1 text-xs text-grey-600">Contact our standards department:</p>
                      <p className="mt-2 text-xs font-medium text-primary-700">+260 777 764 420</p>
                      <p className="text-xs text-grey-500">standards@zabs.org.zm</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="mb-6 rounded-2xl border border-grey-100 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400" />
                    <input
                      type="text"
                      placeholder="Search by code or title (e.g. ZS 117, Wheat Flour)..."
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                        setPage(1);
                      }}
                      className="w-full rounded-xl border border-grey-200 py-2.5 pl-10 pr-4 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      className="appearance-none rounded-xl border border-grey-200 bg-white py-2.5 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="code">Sort: Code (A-Z)</option>
                      <option value="title">Sort: Title (A-Z)</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="year">Sort: Year (Newest)</option>
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-grey-400" />
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setViewMode("list")}
                      className={`rounded-lg p-2 transition-colors ${
                        viewMode === "list" ? "bg-primary-100 text-primary-700" : "text-grey-400 hover:bg-grey-100"
                      }`}
                    >
                      <FileText size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`rounded-lg p-2 transition-colors ${
                        viewMode === "grid" ? "bg-primary-100 text-primary-700" : "text-grey-400 hover:bg-grey-100"
                      }`}
                    >
                      <Layers size={18} />
                    </button>
                  </div>
                </div>
                <div className="mt-3 border-t border-grey-100 pt-2">
                  <p className="text-sm text-grey-500">
                    Showing <strong className="text-grey-800">{paginated.length}</strong> of{" "}
                    <strong className="text-grey-800">{filtered.length}</strong> standards
                    {search && (
                      <>
                        {" "}
                        for &quot;<em className="text-primary-700">{search}</em>&quot;
                      </>
                    )}
                    {category !== "All Categories" && (
                      <>
                        {" "}
                        in <strong className="text-primary-700">{category}</strong>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-grey-100 bg-white p-16 text-center">
                  <BookOpen size={48} className="mx-auto mb-4 text-grey-300" />
                  <h3 className="mb-2 text-lg font-semibold text-grey-600">No standards found</h3>
                  <p className="text-sm text-grey-400">Try adjusting your search or filter criteria.</p>
                </div>
              ) : viewMode === "list" ? (
                <div className="overflow-hidden rounded-2xl border border-grey-100 bg-white shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="px-4 py-3 text-left text-sm font-semibold">Standard Code</th>
                        <th className="hidden px-4 py-3 text-left text-sm font-semibold md:table-cell">Title</th>
                        <th className="hidden px-4 py-3 text-left text-sm font-semibold lg:table-cell">Category</th>
                        <th className="hidden px-4 py-3 text-right text-sm font-semibold sm:table-cell">Price (ZMW)</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-grey-100">
                      {paginated.map((standard) => (
                        <tr key={standard.id} className="group transition-colors hover:bg-primary-50">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-bold text-primary-700">{standard.code}</span>
                              {standard.popular && <Star size={12} className="fill-secondary-500 text-secondary-500" />}
                            </div>
                            <p className="mt-0.5 text-xs text-grey-600 md:hidden">{standard.title}</p>
                          </td>
                          <td className="hidden px-4 py-3 md:table-cell">
                            <span className="text-sm font-medium text-grey-800">{standard.title}</span>
                            <div className="mt-0.5 text-xs text-grey-400">
                              {standard.pages} pages | {standard.year}
                            </div>
                          </td>
                          <td className="hidden px-4 py-3 lg:table-cell">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[standard.category] || "bg-grey-100 text-grey-700"}`}>
                              {standard.category}
                            </span>
                          </td>
                          <td className="hidden px-4 py-3 text-right sm:table-cell">
                            <span className="font-bold text-grey-900">K{standard.price.toLocaleString()}</span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => toggleCart(standard.id)}
                              className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                                cart.includes(standard.id)
                                  ? "bg-secondary-500 text-white"
                                  : "bg-primary-100 text-primary-700 hover:bg-primary-200"
                              }`}
                            >
                              <ShoppingCart size={12} />
                              {cart.includes(standard.id) ? "Added" : "Add"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {paginated.map((standard) => (
                    <div key={standard.id} className="group rounded-2xl border border-grey-100 bg-white p-5 transition-all hover:shadow-xl">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-primary-50 px-2 py-0.5 font-mono text-sm font-bold text-primary-700">
                            {standard.code}
                          </span>
                          {standard.popular && <Star size={12} className="fill-secondary-500 text-secondary-500" />}
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[standard.category] || "bg-grey-100 text-grey-700"}`}>
                          {standard.category}
                        </span>
                      </div>
                      <h3 className="mb-2 text-sm font-semibold leading-snug text-grey-800 transition-colors group-hover:text-primary-700">
                        {standard.title}
                      </h3>
                      <div className="mb-3 flex items-center gap-2 text-xs text-grey-400">
                        <span>{standard.pages} pages</span>
                        <span>&bull;</span>
                        <span>{standard.year}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-grey-100 pt-3">
                        <span className="text-xl font-black text-primary-700">K{standard.price.toLocaleString()}</span>
                        <button
                          onClick={() => toggleCart(standard.id)}
                          className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            cart.includes(standard.id)
                              ? "bg-secondary-500 text-white"
                              : "bg-primary-600 text-white hover:bg-primary-700"
                          }`}
                        >
                          <ShoppingCart size={12} />
                          {cart.includes(standard.id) ? "Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                  totalItems={filtered.length}
                  itemsPerPage={itemsPerPage}
                />
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <ShoppingCart size={20} className="text-primary-700" />
                  </div>
                  <h3 className="mb-2 font-bold text-grey-900">How to Purchase</h3>
                  <p className="text-sm leading-relaxed text-grey-600">
                    Add standards to your cart and send a purchase request via email or visit our offices at Lechwe House, Freedom Way, Lusaka.
                  </p>
                </div>
                <div className="rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <Download size={20} className="text-primary-700" />
                  </div>
                  <h3 className="mb-2 font-bold text-grey-900">Delivery Options</h3>
                  <p className="text-sm leading-relaxed text-grey-600">
                    Standards are available as PDF downloads (email delivery within 24 hours) or physical copies collected from our offices.
                  </p>
                </div>
                <div className="rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <Tag size={20} className="text-primary-700" />
                  </div>
                  <h3 className="mb-2 font-bold text-grey-900">Bulk Discounts</h3>
                  <p className="text-sm leading-relaxed text-grey-600">
                    Organizations purchasing 10 or more standards qualify for a 15% discount. Contact us for custom licensing arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
