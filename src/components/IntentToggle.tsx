"use client";

import { motion } from "motion/react";
import { useIntent, type UserIntent } from "@/context/IntentContext";

const options: { id: UserIntent; label: string; description: string }[] = [
  {
    id: "buy",
    label: "Je veux acheter",
    description: "Trouver une propriété à Gatineau",
  },
  {
    id: "sell",
    label: "Je veux vendre",
    description: "Obtenir une évaluation gratuite",
  },
];

export function IntentToggle({ className = "" }: { className?: string }) {
  const { intent, setIntent } = useIntent();

  return (
    <div
      className={`inline-flex w-full max-w-md flex-col gap-2 rounded-2xl bg-white/10 p-1.5 backdrop-blur-md sm:max-w-lg sm:flex-row ${className}`}
      role="tablist"
      aria-label="Acheter ou vendre une propriété"
    >
      {options.map((opt) => {
        const active = intent === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setIntent(opt.id)}
            className={`relative flex-1 cursor-pointer rounded-xl px-4 py-3.5 text-center transition-colors duration-300 sm:px-5 ${
              active ? "text-brand" : "text-white hover:bg-white/10"
            }`}
          >
            {active && (
              <motion.span
                layoutId="intent-pill"
                className="absolute inset-0 rounded-xl bg-white shadow-lg"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="font-pp relative block text-sm sm:text-base">
              {opt.label}
            </span>
            <span
              className={`relative mt-0.5 block text-xs font-normal ${
                active ? "text-dark/65" : "text-white/80"
              }`}
            >
              {opt.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
