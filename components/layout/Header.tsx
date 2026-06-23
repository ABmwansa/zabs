"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Award, BookOpen, Briefcase, FileText, HelpCircle, Users, History, Calendar, Megaphone, Newspaper, Trophy, ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { NavItem } from "@/lib/content/types";

const navChildIcons = {
  award: Award,
  bookOpen: BookOpen,
  briefcase: Briefcase,
  calendar: Calendar,
  fileText: FileText,
  helpCircle: HelpCircle,
  history: History,
  megaphone: Megaphone,
  newspaper: Newspaper,
  trophy: Trophy,
  users: Users,
};

interface HeaderProps {
  navigation: NavItem[];
}

function hasChildren(item: NavItem): item is Extract<NavItem, { children: NonNullable<NavItem["children"]> }> {
  return "children" in item && Array.isArray(item.children);
}

export default function Header({ navigation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [desktopPinnedDropdown, setDesktopPinnedDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  const isCurrentPath = (href: string) => pathname === href;
  const hasActiveChild = (item: NavItem) => hasChildren(item) && item.children.some((child) => isCurrentPath(child.href));
  const isItemActive = (item: NavItem) => (hasChildren(item) ? hasActiveChild(item) : isCurrentPath(item.href));

  useEffect(() => {
    let frameId = 0;

    const updateScrolled = () => {
      frameId = 0;
      const nextScrolled = window.scrollY > 10;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropdown(null);
    setDesktopPinnedDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopDropdown(null);
        setDesktopPinnedDropdown(null);
        setMobileDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setDesktopDropdown(null);
        setDesktopPinnedDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/70 bg-white/[0.88] shadow-[0_18px_44px_-30px_rgba(16,34,53,0.28)] backdrop-blur-xl"
            : "border-b border-grey-100/90 bg-white/[0.92] backdrop-blur-md"
        )}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary-400/80 to-transparent" />
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-6 lg:h-[5.3rem] lg:gap-12">
            <Link href="/" className="group flex shrink-0 items-center">
              <div className="relative flex items-center gap-3">
                <Image
                  src="/images/zabs-logo.svg"
                  alt="ZABS Logo"
                  width={140}
                  height={58}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:pl-8 xl:gap-1.5 xl:pl-14 2xl:pl-20 lg:flex">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasChildren(item) && !desktopPinnedDropdown) {
                      setDesktopDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    setDesktopDropdown(null);
                    if (desktopPinnedDropdown === item.label) {
                      setDesktopPinnedDropdown(null);
                    }
                  }}
                >
                  {hasChildren(item) ? (
                    <>
                      {(() => {
                        const isAboutMenu = item.label === "About Us";

                        return (
                          <>
                      <button
                        type="button"
                        aria-expanded={desktopDropdown === item.label}
                        aria-controls={`desktop-dropdown-${item.label}`}
                        onClick={() => {
                          if (desktopPinnedDropdown === item.label) {
                            setDesktopDropdown(null);
                            setDesktopPinnedDropdown(null);
                            return;
                          }

                          setDesktopDropdown(item.label);
                          setDesktopPinnedDropdown(item.label);
                        }}
                        onFocus={() => {
                          if (!desktopPinnedDropdown) {
                            setDesktopDropdown(item.label);
                          }
                        }}
                        className={clsx(
                          "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.94rem] font-semibold whitespace-nowrap transition-all",
                          "text-grey-700 hover:bg-primary-50 hover:text-primary-700",
                          (desktopDropdown === item.label || isItemActive(item)) &&
                            "bg-primary-50 text-primary-700 shadow-[0_12px_28px_-24px_rgba(12,136,209,0.8)]"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={clsx(
                            "transition-transform duration-200",
                            desktopDropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>

                      <div
                        id={`desktop-dropdown-${item.label}`}
                          className={clsx(
                          "absolute right-0 top-full z-50 mt-3 origin-top-right overflow-hidden rounded-[1.4rem] border border-grey-100/70 bg-white/[0.96] shadow-[0_30px_70px_-34px_rgba(16,34,53,0.34)] backdrop-blur-xl transition-all duration-200",
                          isAboutMenu ? "w-[17.5rem]" : "w-[22rem]",
                          desktopDropdown === item.label
                            ? "visible scale-100 opacity-100"
                            : "invisible pointer-events-none scale-95 opacity-0"
                        )}
                      >
                        {isAboutMenu ? (
                          <div className="p-4">
                            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-700">
                              About Us
                            </div>
                            <ul className="space-y-1.5">
                              {item.children.map((child) => {
                                const childActive = isCurrentPath(child.href);

                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className={clsx(
                                        "group flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors",
                                        childActive
                                          ? "bg-primary-50 font-semibold text-primary-700"
                                          : "text-grey-700 hover:bg-primary-50 hover:text-primary-700"
                                      )}
                                    >
                                      <ChevronRight
                                        size={12}
                                        className={clsx(
                                          "transition-colors",
                                          childActive
                                            ? "text-secondary-500"
                                            : "text-grey-300 group-hover:text-secondary-500"
                                        )}
                                      />
                                      <span>{child.label}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : (
                          <>
                            <div className="border-b border-grey-100/70 bg-gradient-to-r from-grey-50 to-white px-4 py-4">
                              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-grey-500">{item.label}</div>
                              <div className="mt-1 text-sm text-grey-600">
                                {item.label === "Resources"
                                  ? "Publications, standards access, careers, and practical guidance."
                                  : "Highlighted programmes, opportunities, and public information."}
                              </div>
                            </div>

                            <div className="py-2">
                              {item.children.map((child) => {
                                const Icon = navChildIcons[child.icon as keyof typeof navChildIcons];
                                const childActive = isCurrentPath(child.href);

                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={clsx(
                                      "group flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                                      childActive
                                        ? "bg-primary-50 text-primary-700"
                                        : child.highlight
                                          ? "font-semibold text-primary-700 hover:bg-primary-50"
                                          : "text-grey-700 hover:bg-primary-50 hover:text-primary-700"
                                    )}
                                  >
                                    <div
                                      className={clsx(
                                        "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                                        childActive || child.highlight ? "bg-primary-100" : "bg-grey-100 group-hover:bg-primary-100"
                                      )}
                                    >
                                      <Icon size={14} className={childActive || child.highlight ? "text-primary-700" : "text-grey-500 group-hover:text-primary-700"} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className={clsx("text-sm", (childActive || child.highlight) && "font-semibold text-primary-700")}>
                                        {child.label}
                                      </div>
                                      {child.highlight && (
                                        <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-secondary-600">
                                          Featured
                                        </div>
                                      )}
                                    </div>
                                    <ArrowRight
                                      size={14}
                                      className={clsx(
                                        "transition-all",
                                        childActive ? "translate-x-0 text-primary-700" : "translate-x-0 text-grey-300 group-hover:translate-x-0.5 group-hover:text-primary-700"
                                      )}
                                    />
                                  </Link>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                          </>
                        );
                      })()}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={clsx(
                        "rounded-full px-3.5 py-2 text-[0.94rem] font-semibold whitespace-nowrap transition-all",
                        isItemActive(item)
                          ? "bg-primary-50 text-primary-700 shadow-[0_12px_28px_-24px_rgba(12,136,209,0.8)]"
                          : "text-grey-700 hover:bg-primary-50 hover:text-primary-700"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 rounded-full border border-grey-200 bg-white px-3 py-2 text-grey-700 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 lg:hidden"
              aria-label="Open menu"
            >
              <span className="text-sm font-medium">Menu</span>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-black transition-opacity duration-300",
            mobileOpen ? "opacity-50" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="border-b border-grey-100 bg-gradient-to-br from-grey-50 to-white p-4">
            <div className="mb-4 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="relative">
                <Image
                  src="/images/zabs-logo.svg"
                  alt="ZABS Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-full p-2 text-grey-500 transition hover:bg-primary-50"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
            </div>
            <div className="rounded-2xl border border-primary-100 bg-primary-50/70 px-4 py-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">ZABS Navigation</div>
              <div className="mt-1 text-sm text-grey-600">Explore services, standards, publications, and contact information.</div>
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100%-73px)] py-4">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-grey-100">
                {hasChildren(item) ? (
                  <>
                    <button
                      onClick={() => {
                        setMobileDropdown(mobileDropdown === item.label ? null : item.label);
                      }}
                      className={clsx(
                        "flex w-full items-center justify-between px-4 py-3 font-medium text-grey-700 transition hover:bg-primary-50",
                        (mobileDropdown === item.label || isItemActive(item)) && "bg-primary-50 text-primary-700"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={clsx(
                          "transition-transform duration-200",
                          mobileDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="bg-primary-50/50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={clsx(
                              "flex items-center gap-3 px-6 py-3 text-sm transition-colors",
                              isCurrentPath(child.href)
                                ? "bg-white text-primary-700"
                                : child.highlight
                                  ? "font-semibold text-primary-700"
                                  : "text-grey-600 hover:text-primary-700"
                            )}
                          >
                            <div className={clsx(
                              "flex h-9 w-9 items-center justify-center rounded-xl",
                              isCurrentPath(child.href) || child.highlight ? "bg-primary-100" : "bg-white"
                            )}>
                              {(() => {
                                const Icon = navChildIcons[child.icon as keyof typeof navChildIcons];
                                return <Icon size={14} className={isCurrentPath(child.href) || child.highlight ? "text-primary-700" : "text-grey-500"} />;
                              })()}
                            </div>
                            <div className="flex-1">
                              <div className={clsx((isCurrentPath(child.href) || child.highlight) && "font-semibold text-primary-700")}>
                                {child.label}
                              </div>
                              {child.highlight && (
                                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-secondary-600">
                                  Featured
                                </div>
                              )}
                            </div>
                            <ArrowRight size={14} className={clsx(isCurrentPath(child.href) ? "text-primary-700" : "text-grey-300")} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "block px-4 py-3 font-medium text-grey-700 transition hover:bg-primary-50",
                      isItemActive(item) && "bg-primary-50 text-primary-700"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
