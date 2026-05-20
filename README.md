# Template Real Estate — Landing Page

Modèle Next.js pour landing pages **courtier immobilier** (achat / vente, formulaire, témoignages, GSAP, Motion).

Exemple actuel : **Équipe Stéphane Bisson** (Gatineau). Même code que le projet client [Alexbisson](https://github.com/achrafkadar/Alexbisson).

## Stack

- Next.js 15 (export statique)
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Motion (boutons, toggle achat/vente)
- Polices Telegraf + PPTelegraf (`src/fonts/`)

## Démarrage

```bash
npm install
npm run dev
```

## Personnaliser pour un nouveau client

| Fichier / dossier | Quoi changer |
|-------------------|--------------|
| `src/lib/constants.ts` | Logos, téléphone, adresse, URLs images CDN |
| `src/lib/intent-content.ts` | Textes achat/vente (hero, sections, témoignages) |
| `public/images/hero.jpg` | Photo hero |
| `public/images/form-background.jpg` | Fond section formulaire |
| `src/app/layout.tsx` | Titre SEO, description |
| `.env.example` → `.env.local` | `BASE_PATH`, `NEXT_PUBLIC_SITE_URL` |
| `.github/workflows/deploy-github-pages.yml` | `BASE_PATH` = `/nom-du-repo` |

## Photos locales

- `public/images/hero.jpg` — bannière
- `public/images/form-background.jpg` — derrière le formulaire

## Déploiement GitHub Pages

Dépôt : **[github.com/achrafkadar/Template-real-estate](https://github.com/achrafkadar/Template-real-estate)**

```bash
./scripts/push-template.sh
```

1. **Settings → Pages → Source : GitHub Actions**
2. URL : **https://achrafkadar.github.io/Template-real-estate/**

Pour un **nouveau** dépôt client : dupliquer ce repo sur GitHub, mettre à jour `BASE_PATH` et le workflow, puis remplacer textes/images.

## Palette

| Token | Hex |
|-------|-----|
| Brand | `#C13549` |
| Brand dark | `#A52644` |
| Dark | `#2D2E32` |

## Formulaire

Mode **démo** (simulation ~1,2 s). Brancher plus tard : API Route, Formspree, Resend, etc.
