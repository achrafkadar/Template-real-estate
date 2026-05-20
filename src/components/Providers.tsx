"use client";

import { IntentProvider } from "@/context/IntentContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <IntentProvider>{children}</IntentProvider>;
}
