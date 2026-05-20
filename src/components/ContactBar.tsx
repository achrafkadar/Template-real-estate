import { Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function ContactBar() {
  return (
    <div className="bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-3 text-sm sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
          Nous contacter
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={CONTACT.phoneHref}
            className="flex cursor-pointer items-center gap-2 transition-colors hover:text-brand-light"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 transition-colors hover:text-brand-light"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            <span>
              {CONTACT.address}
              <span className="hidden sm:inline"> — </span>
              <span className="block sm:inline">{CONTACT.city}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
