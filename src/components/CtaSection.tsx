"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollToForm } from "@/lib/scroll";

export function CtaSection() {
  const { cta } = useIntentContent();

  return (
    <section className="relative overflow-hidden bg-brand py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, white, transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          key={cta.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-pp text-2xl text-white sm:text-3xl lg:text-4xl">
            {cta.title}
          </h2>
          <Button
            variant="white"
            size="lg"
            className="mt-10"
            onClick={scrollToForm}
          >
            {cta.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
