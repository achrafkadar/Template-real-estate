"use client";

import { useIntent } from "@/context/IntentContext";
import { SITE_CONTENT } from "@/lib/intent-content";

export function useIntentContent() {
  const { intent } = useIntent();
  return {
    intent,
    header: SITE_CONTENT.header[intent],
    estimate: SITE_CONTENT.estimate[intent],
    whyUs: SITE_CONTENT.whyUs[intent],
    breaker: SITE_CONTENT.breaker[intent],
    steps: SITE_CONTENT.steps[intent],
    cta: SITE_CONTENT.cta[intent],
    stats: SITE_CONTENT.stats,
  };
}
