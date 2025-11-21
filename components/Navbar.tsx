// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl border border-neutral-300 flex items-center justify-center text-xs">
            TG
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">
              Timeground
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-[0.25em]">
              Holdings
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
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
      </div>
    </header>
  );
}
