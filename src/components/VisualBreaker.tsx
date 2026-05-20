"use client";

import { motion } from "motion/react";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollRevealViewport } from "@/lib/motion-viewport";

export function VisualBreaker() {
  const { breaker } = useIntentContent();

  return (
    <section
      className="relative w-full overflow-hidden bg-brand py-20 sm:py-28"
      aria-hidden={false}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <motion.p
          key={breaker.eyebrow}
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          transition={{ duration: 0.5 }}
          className="text-xs font-normal uppercase tracking-[0.35em] text-white/75"
        >
          {breaker.eyebrow}
        </motion.p>
        <motion.h2
          key={breaker.headline}
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-pp mt-6 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          {breaker.headline}
        </motion.h2>
        <motion.p
          key={breaker.subline}
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {breaker.subline}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={scrollRevealViewport}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 h-px w-24 origin-center bg-white/40"
        />
      </div>
    </section>
  );
}
