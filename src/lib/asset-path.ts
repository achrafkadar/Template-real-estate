/**
 * Préfixe les fichiers de public/ pour GitHub Pages (sous-dossier /Alexbisson).
 * En local, NEXT_PUBLIC_BASE_PATH est vide → /images/hero.jpg
 */
export function publicAsset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
