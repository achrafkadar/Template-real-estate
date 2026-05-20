"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ASSETS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollToForm } from "@/lib/scroll";

export function Steps() {
  const { steps, intent } = useIntentContent();

  return (
    <section className="bg-[#f8f8f8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={ASSETS.stepsImage}
              alt="Propriété en Outaouais"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <h2 className="font-pp text-2xl text-dark sm:text-3xl">
              {steps.title}
            </h2>
            <ol className="mt-10 space-y-5">
              {steps.items.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="step-item flex gap-4"
                >
                  <span className="font-pp flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm text-white shadow-[0_4px_12px_rgba(193,53,73,0.35)]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-dark">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-dark/70">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
            <Button className="mt-10" onClick={scrollToForm}>
              {intent === "buy" ? "Commencer mon achat" : "Vendre avec nous"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
