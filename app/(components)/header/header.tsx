"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import CartItem from "../productcard/cartitems";

type NavItem = {
  title: string;
  isActive?: boolean;
  items: { label: string; url: string; badge?: string }[];
};

type SearchItem = {
  id: string;
  title: string;
  url: string;
  image?: string;
  price?: number;
  badge?: string;
};

const nav: NavItem[] = [
  {
    title: "IQOS HEETS DUBAI, UAE",
    items: [
      { label: "HEETS Classic", url: "/heets-classic", badge: "popular" },
      { label: "IQOS ORIGINALS DUO", url: "/originals-duo" },
      { label: "IQOS ORIGINALS ONE", url: "/originals-one" },
      { label: "IQOS LIL SOLID EZ", url: "/lil-solid-ez" },
      { label: "IQOS LIL SOLID 2.0", url: "/lil-solid-2" },
      { label: "LAMDA CC", url: "/lamda-cc" },
    ],
  },
  {
    title: "IQOS TEREA DUBAI, UAE",
    items: [
      { label: "TEREA KAZAKHSTAN", url: "/iqostereakazakhstan" },
      { label: "TEREA INDONESIA", url: "/terea-indonesia", badge: "new" },
    ],
  },
  {
    title: "IQOS ILUMA DUBAI, UAE",
    isActive: true,
    items: [
      { label: "IQOS ILUMA Prime", url: "/iluma-prime" },
      { label: "IQOS ILUMA", url: "/iluma" },
      { label: "IQOS ILUMA One", url: "/iluma-one" },
      { label: "LAMBDA I8", url: "/lambda-i8" },
    ],
  },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // SEARCH STATE
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // lock scroll for mobile drawers
  useEffect(() => {
    const open = isMobileOpen || isSearchOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen, isSearchOpen]);

  const showHint = useMemo(
    () => !q.trim() && !loading && results.length === 0,
    [q, loading, results]
  );

  // Debounced search -> /api/search?q=
  useEffect(() => {
    if (!isSearchOpen) return;
    const term = q.trim();
    if (term.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`, {
          signal: ctrl.signal,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("search failed");
        const data: SearchItem[] = await res.json();
        setResults(data || []);
        setSel(0);
      } catch {
        /* ignore */
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [q, isSearchOpen]);

  // keyboard navigation inside search
  const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => (s + 1) % results.length);
      scrollSelIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => (s - 1 + results.length) % results.length);
      scrollSelIntoView();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[sel];
      if (item) {
        setIsSearchOpen(false);
        window.location.href = item.url;
      }
    }
  };

  const scrollSelIntoView = () => {
    const container = listRef.current;
    if (!container) return;
    const el = container.querySelector<HTMLElement>(`[data-idx="${sel}"]`);
    el?.scrollIntoView({ block: "nearest" });
  };

  return (
    <div className="w-full relative">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 md:h-20 items-center justify-between gap-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="relative inline-grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 shadow-sm">
                <span className="w-5 h-5 rounded-xl bg-white inline-grid place-items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-red-500" />
                </span>
              </span>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-gray-900">
                  IQOS HEETS DUBAI
                </span>
                <span className="text-xs text-gray-500 -mt-0.5 group-hover:text-gray-700">
                  Same-day Dubai • UAE-wide delivery
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {nav.map((section, i) => (
                <div key={i} className="relative group">
                  <button
                    className={`px-3 py-4 text-sm font-medium inline-flex items-center gap-1 rounded-md transition-colors ${
                      section.isActive
                        ? "text-red-600"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {section.title}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega dropdown */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-2">
                    <div className="w-[640px] rounded-2xl border bg-white shadow-xl">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {section.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="ml-3 text-[10px] uppercase tracking-wide rounded-full border px-2 py-0.5 text-gray-700">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setTimeout(() => inputRef.current?.focus(), 0);
                }}
                className="inline-flex items-center gap-2 rounded-xl border px-3 h-10 text-sm text-gray-700 hover:bg-gray-50"
                aria-label="Open search"
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">Search products</span>
              </button>

              <CartItem />

              <button
                onClick={() => setIsMobileOpen((v) => !v)}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border text-gray-800"
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity ${
            isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!isMobileOpen}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-[92%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
              isMobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <div className="px-2 py-3 overflow-y-auto h-[calc(100%-56px)]">
              {/* Quick search button */}
              <div className="px-2 pb-3">
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMobileOpen(false);
                    setTimeout(() => inputRef.current?.focus(), 0);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-3 h-11 text-[15px] text-gray-800"
                >
                  <Search className="w-5 h-5" />
                  Search products
                </button>
              </div>

              {/* Accordions */}
              {nav.map((section, i) => {
                const open = activeAccordion === i;
                return (
                  <div key={i} className="border-b">
                    <button
                      className={`w-full flex items-center justify-between py-4 px-2 text-left text-base ${
                        section.isActive
                          ? "text-red-600 font-semibold"
                          : "text-gray-900"
                      }`}
                      onClick={() =>
                        setActiveAccordion((prev) => (prev === i ? null : i))
                      }
                      aria-expanded={open}
                      aria-controls={`m-sec-${i}`}
                    >
                      <span>{section.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`m-sec-${i}`}
                      className={`grid transition-all duration-200 ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="pb-3">
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href={item.url}
                                className="block py-3 pl-5 pr-3 text-[15px] text-gray-700 active:bg-gray-100 hover:bg-gray-50 rounded"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {item.label}
                                {item.badge && (
                                  <span className="ml-2 text-[10px] uppercase tracking-wide rounded-full border px-1.5 py-0.5 text-gray-700">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEARCH OVERLAY — left drawer on mobile, centered card on desktop */}
        <div
          className={`fixed inset-0 z-[60] ${
            isSearchOpen ? "opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity`}
          aria-hidden={!isSearchOpen}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsSearchOpen(false)}
          />
          <div
            className={`
              absolute left-0 top-0 h-full w-[92%] max-w-sm bg-white shadow-2xl
              transition-transform duration-300 ease-out
              sm:left-1/2 sm:-translate-x-1/2 sm:top-10 sm:h-auto sm:max-w-lg sm:rounded-2xl sm:w-[92%]
              ${isSearchOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0 sm:opacity-0"}
            `}
            role="dialog"
            aria-modal="true"
          >
            {/* CLOSE bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-rose-500 to-pink-500 sm:rounded-t-2xl">
              <span className="text-white font-semibold tracking-wide">CLOSE</span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white"
                aria-label="Close search"
              >
                <X />
              </button>
            </div>

            {/* Header: Search keyword */}


            {/* Input */}
            <div className="px-4 pt-3">
              <div className="flex items-center gap-2 border rounded-xl px-3 h-12">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type to search products…"
                  className="flex-1 outline-none bg-transparent text-[15px]"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onSearchKeyDown}
                />
                {q && (
                  <button
                    onClick={() => setQ("")}
                    className="text-sm text-gray-500"
                    aria-label="Clear"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Default quick links */}
            {(!q || q.trim().length < 2) && (
              <div className="px-2 pt-3">
                <ul className="rounded-xl overflow-hidden border">
                  {[
                    { label: "IQOS HEETS DUBAI, UAE", url: "/heets-classic" },
                    { label: "IQOS TEREA DUBAI, UAE", url: "/terea-indonesia" },
                    { label: "IQOS ILUMA DUBAI, UAE", url: "/iluma-one" },
                  ].map((row, idx) => (
                    <li key={idx} className="border-b last:border-b-0 bg-white">
                      <Link
                        href={row.url}
                        className="flex items-center justify-between px-4 py-3 text-[15px] hover:bg-gray-50 active:bg-gray-100"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <span className="font-semibold text-gray-800">
                          {row.label}
                        </span>
                        <ChevronDown className="rotate-[-90deg] w-4 h-4 text-gray-500" />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* AED row */}
                <div className="px-4 py-3 text-[15px] text-gray-800">
                  <div className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5">
                    <span className="font-semibold">AED</span>
                    <button
                      type="button"
                      className="text-gray-500 text-sm"
                      onClick={() => {}}
                      aria-label="Close currency chip"
                    >
                      ×
                    </button>
                  </div>
                  <div className="text-xs text-rose-600 mt-2">
                    د.إ AED United Arab Emirates
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {q.trim().length >= 2 && (
              <div ref={listRef} className="max-h-[55vh] overflow-y-auto mt-2 border-t">
                {loading && (
                  <div className="p-4 space-y-2">
                    <div className="h-4 w-1/3 bg-gray-100 animate-pulse rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-gray-100 animate-pulse rounded" />
                  </div>
                )}

                {!loading && results.length === 0 && (
                  <div className="p-4 text-sm text-gray-500">No products found.</div>
                )}

                {!loading && results.length > 0 && (
                  <div className="py-1">
                    {results.map((item, i) => (
                      <Link
                        key={item.id}
                        href={item.url}
                        data-idx={i}
                        className={`flex items-center gap-3 px-4 py-3 text-[15px] ${
                          sel === i ? "bg-gray-50" : "bg-white"
                        } active:bg-gray-100`}
                        onMouseEnter={() => setSel(i)}
                        onClick={() => setIsSearchOpen(false)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image || "/placeholder.png"}
                          alt=""
                          className="w-10 h-10 rounded-md object-cover border"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="truncate font-medium text-gray-900">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {item.price != null ? `AED ${item.price}` : ""}
                          </div>
                        </div>
                        <ChevronDown className="rotate-[-90deg] w-4 h-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="h-4 sm:h-0" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
