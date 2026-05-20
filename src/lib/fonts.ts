import localFont from "next/font/local";

/** Texte courant — Telegraf */
export const telegraf = localFont({
  src: "../fonts/Telegraf-Regular.otf",
  variable: "--font-telegraf",
  weight: "400",
  display: "swap",
});

/** Titres et boutons — PPTelegraf (UltraBold du site source) */
export const ppTelegraf = localFont({
  src: "../fonts/PPTelegraf-UltraBold.otf",
  variable: "--font-pp-telegraf",
  weight: "800",
  display: "swap",
});
