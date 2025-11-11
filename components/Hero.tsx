// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:pb-24 md:pt-16">
        <div className="flex-1 space-y-6">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-neutral-500"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            AY-GLOBAL HOLDINGS
          </motion.p>

          <motion.h1
            className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A calm, modern home for future-defining ideas.
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm text-neutral-700 md:text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            AY-Global is a holding company by Athul Yesudas, built to host
            products like Emotionverse and future ventures that blend emotional
            intelligence, technology, and minimal design.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <Link
              href="/ventures"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
            >
              View ventures
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2 text-sm text-neutral-700 hover:border-neutral-400 transition"
            >
              Learn more
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative mx-auto max-w-sm rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>AY-Global Snapshot</span>
              <span>Est. 2025</span>
            </div>
            <div className="space-y-4 text-sm text-neutral-800">
              <div className="flex items-center justify-between">
                <span>Core brand</span>
                <span className="font-medium">AY-Global</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Flagship</span>
                <span className="font-medium">Emotionverse</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="font-medium">Emotion + Technology</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 p-3">
              <p className="text-[11px] text-neutral-600">
                “Build quietly. Let the work and the feeling of using it speak
                the loudest.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
