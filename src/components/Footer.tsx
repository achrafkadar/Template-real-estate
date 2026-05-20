import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Image
              src={ASSETS.logo}
              alt="Équipe Stéphane Bisson"
              width={200}
              height={70}
              className="h-14 w-auto brightness-0 invert"
            />
            <h2 className="font-pp mt-8 text-2xl">Parlons !</h2>
            <p className="mt-3 text-sm text-white/80">
              Vous avez une question ou un commentaire ? Faites-le nous
              savoir.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-medium uppercase tracking-wider text-white/90">
              Parlez à un expert :
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-2 block cursor-pointer text-xl font-light transition-colors hover:text-brand-light"
            >
              {CONTACT.phone}
            </a>
            <p className="mt-6 font-medium uppercase tracking-wider text-white/90">
              Vous pouvez également nous trouver ici :
            </p>
            <hr className="my-4 border-white/20" />
            <Link
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-white/80 transition-colors hover:text-white"
            >
              {CONTACT.address}
              <br />
              {CONTACT.city}
            </Link>
          </div>
        </div>

        <hr className="my-10 border-white/15" />
        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} Tous droits réservés | Équipe Stéphane
          Bisson
        </p>
      </div>
    </footer>
  );
}
