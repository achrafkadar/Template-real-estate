"use client";

import { motion } from "motion/react";
import { useIntent } from "@/context/IntentContext";
import { getTestimonialsForIntent } from "@/lib/intent-content";
import { Stars } from "@/components/ui/Stars";

export function Testimonials() {
  const { intent } = useIntent();
  const testimonials = getTestimonialsForIntent(intent);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-normal uppercase tracking-[0.3em] text-dark/50">
          Témoignages
        </p>
        <h2 className="font-pp mt-3 text-center text-2xl text-dark sm:text-3xl lg:text-4xl">
          {intent === "buy"
            ? "Ce que disent nos acheteurs"
            : "Ce que disent nos vendeurs"}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="testimonial-card flex flex-col rounded-2xl border border-black/[0.05] bg-[#fafafa] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
            >
              <Stars />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-dark/80">
                {t.text}
              </p>
              <footer className="font-pp mt-6 text-sm text-brand">
                {t.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
