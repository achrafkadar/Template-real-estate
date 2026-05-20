"use client";

import { motion } from "motion/react";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollRevealViewport } from "@/lib/motion-viewport";

export function WhyUs() {
  const { whyUs } = useIntentContent();

  return (
    <section className="bg-[#f8f8f8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          key={whyUs.title}
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          className="font-pp text-center text-2xl text-dark sm:text-3xl lg:text-4xl"
        >
          {whyUs.title}
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {whyUs.items.map((item, i) => (
            <motion.article
              key={`${whyUs.title}-${item.title}`}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollRevealViewport}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="why-card group rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(193,53,73,0.08)]"
            >
              <h3 className="font-pp text-lg text-brand transition-colors group-hover:text-brand-dark">
                {item.title}
              </h3>
              <div className="my-5 h-px w-12 bg-brand/30 transition-all duration-300 group-hover:w-20 group-hover:bg-brand" />
              <p className="text-sm leading-relaxed text-dark/75">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
