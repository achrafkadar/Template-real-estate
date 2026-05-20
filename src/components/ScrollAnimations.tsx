"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollAnimations({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const fadeUp = (selector: string, stagger = 0.1) => {
        gsap.from(selector, {
          opacity: 0,
          y: 24,
          duration: 0.65,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 88%",
          },
        });
      };

      fadeUp(".stat-item", 0.15);
      fadeUp(".why-card", 0.1);
      fadeUp(".team-card", 0.08);

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 88%",
        },
      });

      gsap.from(".step-item", {
        opacity: 0,
        x: -16,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".step-item",
          start: "top 92%",
        },
      });
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
