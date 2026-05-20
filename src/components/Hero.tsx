"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ASSETS } from "@/lib/constants";
import { useIntent } from "@/context/IntentContext";
import { IntentToggle } from "@/components/IntentToggle";

const HERO_COPY = {
  buy: {
    title: "Trouvez la propriété qu'il vous faut à Gatineau !",
    subtitle:
      "Vous êtes au bon endroit pour acheter. Notre équipe vous accompagne pour dénicher la maison ou le condo qui correspond à votre budget, votre quartier et votre mode de vie.",
  },
  sell: {
    title:
      "Obtenez gratuitement l'évaluation marchande de votre proprieté à Gatineau !",
    subtitle:
      "Confiez la vente de votre propriété à notre courtier à Gatineau. Commencez par une estimation précise et une stratégie de vente gagnante pour maximiser vos gains.",
  },
} as const;

export function Hero() {
  const { intent } = useIntent();
  const copy = HERO_COPY[intent];

  return (
    <section className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[660px]">
      <Image
        src={ASSETS.heroImage}
        alt="Propriété à Gatineau"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" aria-hidden />

      <div className="relative mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[600px] sm:px-6 lg:min-h-[660px] lg:px-8">
        <IntentToggle className="mb-10 w-full max-w-xl" />

        <motion.div
          key={intent}
          className="text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1 className="font-pp text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-relaxed text-white/90 sm:text-lg">
            {copy.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
