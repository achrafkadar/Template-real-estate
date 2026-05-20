"use client";

import Image from "next/image";
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
      "Obtenez gratuitement l'évaluation marchande de votre propriété à Gatineau !",
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
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[600px] sm:px-6 lg:min-h-[660px] lg:px-8">
        <IntentToggle className="mb-10 w-full max-w-xl" />

        <div key={intent} className="relative z-10 text-white">
          <h1 className="font-pp text-3xl leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-relaxed text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-lg">
            {copy.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
