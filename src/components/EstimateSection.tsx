"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollToForm } from "@/lib/scroll";
import { scrollRevealViewport } from "@/lib/motion-viewport";

export function EstimateSection() {
  const { estimate } = useIntentContent();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          key={estimate.title}
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-pp text-2xl text-dark sm:text-3xl lg:text-4xl">
            {estimate.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-dark/75 sm:text-lg">
            {estimate.body}
          </p>
          <Button className="mt-10" size="lg" onClick={scrollToForm}>
            {estimate.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
