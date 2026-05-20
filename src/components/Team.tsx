"use client";

import Image from "next/image";
import { TEAM } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Team() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-dark/70">
          Notre équipe
        </p>
        <h2 className="mt-2 text-center text-2xl font-light text-dark sm:text-3xl lg:text-4xl">
          Une équipe engagée
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-dark/80">
          Depuis 1988, l&apos;Équipe Stéphane Bisson accompagne les
          propriétaires de Gatineau, Aylmer, Hull et de toute la région de
          l&apos;Outaouais dans la vente de leur propriété.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={() =>
              document.getElementById("evaluation")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Parler à l&apos;équipe
          </Button>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="team-card group text-center"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="220px"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-dark">
                {member.name}
              </h3>
              <p className="mt-1 text-xs text-dark/70">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
