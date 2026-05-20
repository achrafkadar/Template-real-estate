"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type UserIntent = "buy" | "sell";

type IntentContextValue = {
  intent: UserIntent;
  setIntent: (intent: UserIntent) => void;
};

const IntentContext = createContext<IntentContextValue | null>(null);

export function IntentProvider({ children }: { children: ReactNode }) {
  const [intent, setIntent] = useState<UserIntent>("sell");

  return (
    <IntentContext.Provider value={{ intent, setIntent }}>
      {children}
    </IntentContext.Provider>
  );
}

export function useIntent() {
  const ctx = useContext(IntentContext);
  if (!ctx) {
    throw new Error("useIntent must be used within IntentProvider");
  }
  return ctx;
}
