"use client";

import Image from "next/image";
import { PropertyForm } from "@/components/PropertyForm";
import { ASSETS } from "@/lib/constants";
import { useIntent } from "@/context/IntentContext";

const FORM_SECTION_TITLES = {
  buy: "Démarrez votre projet d'achat à Gatineau en toute confiance !",
  sell: "Obtenez gratuitement l'évaluation marchande de votre propriété à Gatineau !",
} as const;

export function FormSection() {
  const { intent } = useIntent();

  return (
    <section
      id="evaluation"
      className="relative w-full overflow-hidden"
      aria-labelledby="form-section-title"
    >
      <Image
        src={ASSETS.formBackground}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative z-10 w-full px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <h2
          id="form-section-title"
          key={intent}
          className="font-pp mx-auto mb-8 max-w-5xl text-center text-2xl leading-snug text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:mb-10 sm:text-3xl lg:text-4xl"
        >
          {FORM_SECTION_TITLES[intent]}
        </h2>

        <PropertyForm />
      </div>
    </section>
  );
}
