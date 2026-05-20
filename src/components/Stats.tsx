"use client";

import { motion } from "motion/react";
import { useIntentContent } from "@/hooks/useIntentContent";

export function Stats() {
  const { stats } = useIntentContent();

  return (
    <section className="bg-dark py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="stat-item border-white/10 text-center sm:border-l sm:px-6 sm:first:border-l-0"
          >
            <h3 className="font-pp text-2xl sm:text-3xl">{stat.title}</h3>
            <p className="mt-2 text-sm text-white/75">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
