// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleScrollTop = (e: React.MouseEvent, targetHref: string) => {
    if (pathname === targetHref) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-[1px]" onClick={(e) => handleScrollTop(e, "/")}>
          <div className="relative h-[21px] w-[21px]">
            <Image
              src="/timeground-icon.svg"
              alt="Timeground Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[20px] font-semibold tracking-[0.20em] uppercase leading-none">
            IMEGROUND
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTop(e, item.href)}
                className="relative px-1 py-0.5"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-neutral-600">
                  {item.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-px bg-neutral-900"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-neutral-900 transition-all duration-300 ${isOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-neutral-900 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full bg-neutral-900 transition-all duration-300 ${isOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTop(e, item.href);
                  }}
                  className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
