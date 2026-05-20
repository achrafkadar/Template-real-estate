"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useIntentContent } from "@/hooks/useIntentContent";
import { scrollToForm } from "@/lib/scroll";

export function Header() {
  const { header } = useIntentContent();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Image
            src={ASSETS.logoSmall}
            alt="Équipe Stéphane Bisson"
            width={180}
            height={60}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>
        <Button type="button" size="sm" onClick={scrollToForm}>
          {header.cta}
        </Button>
      </div>
    </header>
  );
}
