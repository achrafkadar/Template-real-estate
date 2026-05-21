"use client";

import { PropertyForm } from "@/components/PropertyForm";
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
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="form-section-title"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-14">
        <h2
          id="form-section-title"
          key={intent}
          className="font-pp mx-auto mb-8 max-w-5xl text-center text-2xl leading-snug text-dark sm:mb-10 sm:text-3xl lg:text-4xl"
        >
          {FORM_SECTION_TITLES[intent]}
        </h2>

        <PropertyForm />
      </div>
    </section>
  );
}
