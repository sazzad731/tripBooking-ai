"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tours", href: "#tours" },
    { label: "Hotels", href: "#hotels" },
    { label: "Blog", href: "#destinations" },
    { label: "About", href: "#app" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="bg-brand-primary px-4 py-2 text-center text-base font-normal text-white sm:text-xs">
        Autodesigner 2.0 is here. The most popular UI generator just got even
        better!
      </div>

      <div className="relative border-b border-white/10 bg-slate-950/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-427.5 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/nav-logo.png"
              alt="Tripbooking.ai"
              width={221}
              height={49}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
            <button
              type="button"
              className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#e2a41f]"
            >
              Sign In
            </button>
          </div>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? "max-h-screen" : "pointer-events-none max-h-0 opacity-0"} overflow-hidden transition-all duration-300`}
        >
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 p-4 shadow-2xl shadow-black/30">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-black/5 px-4 py-3 text-sm font-medium text-black/90 transition hover:bg-white/10 text-center"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-black/90 transition hover:bg-white/15"
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>
                <button
                  type="button"
                  className="rounded-2xl bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e2a41f]"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
