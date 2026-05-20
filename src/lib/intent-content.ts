import type { UserIntent } from "@/context/IntentContext";

export type WhyItem = { title: string; description: string };
export type StepItem = { title: string; description: string };
export type Testimonial = { text: string; author: string; intent: UserIntent | "both" };

export const SITE_CONTENT = {
  header: {
    buy: { cta: "Trouver une propriété" },
    sell: { cta: "Vendre avec nous" },
  },
  stats: [
    { title: "#1 Québec", subtitle: "Keller Williams Distinction" },
    { title: "Top 1% mondial", subtitle: "Transactions immobilières" },
    { title: "Plus de 40 ans", subtitle: "D'expérience en Outaouais" },
  ],
  estimate: {
    buy: {
      title:
        "Prêt à trouver votre prochaine propriété en Outaouais ?",
      body: "Que ce soit votre première maison ou un changement de vie, nous vous guidons vers les bonnes adresses, au bon prix, avec une stratégie d'achat claire.",
      cta: "Démarrer ma recherche",
    },
    sell: {
      title:
        "Faites estimer votre maison gratuitement par notre courtier immobilier à Gatineau",
      body: "Vous pensez vendre votre propriété à Gatineau ou dans la région ? Profitez d'un accompagnement fiable et de conseils fondés sur des milliers de transactions réussies.",
      cta: "Estimer ma propriété",
    },
  },
  whyUs: {
    buy: {
      title: "Pourquoi acheter avec l'Équipe Stéphane Bisson ?",
      items: [
        {
          title: "Accès privilégié au marché",
          description:
            "Soyez informé en primeur des nouvelles inscriptions à Gatineau, Aylmer, Hull et en Outaouais grâce à notre réseau Keller Williams et notre veille active.",
        },
        {
          title: "Recherche ciblée et efficace",
          description:
            "Nous filtrons les propriétés selon vos critères réels — quartier, budget, style de vie — pour vous faire gagner du temps et éviter les visites inutiles.",
        },
        {
          title: "Négociation à votre avantage",
          description:
            "Nous défendons votre prix d'achat et vos conditions avec une approche stratégique, transparente et sans pression inutile.",
        },
        {
          title: "Accompagnement de A à Z",
          description:
            "De la première visite à la signature chez le notaire, vous êtes conseillé à chaque étape par une équipe locale expérimentée.",
        },
      ] as WhyItem[],
    },
    sell: {
      title: "Pourquoi vendre avec l'Équipe Stéphane Bisson ?",
      items: [
        {
          title: "Expertise locale approfondie",
          description:
            "Connaissance pointue des marchés de Gatineau, Aylmer, Hull et de l'Outaouais pour positionner votre propriété de façon stratégique.",
        },
        {
          title: "Stratégie marketing personnalisée",
          description:
            "Plan de mise en marché adapté : photographie professionnelle, diffusion ciblée et réseau Keller Williams international.",
        },
        {
          title: "Résultats prouvés et accompagnement",
          description:
            "Maximiser votre prix de vente dans les meilleurs délais, avec transparence et suivi à chaque étape.",
        },
        {
          title: "Réseau et visibilité maximale",
          description:
            "Votre propriété exposée à un vaste réseau d'agents et d'acheteurs qualifiés pour une vente rapide au prix souhaité.",
        },
      ] as WhyItem[],
    },
  },
  breaker: {
    buy: {
      eyebrow: "Votre projet d'achat",
      headline: "La bonne propriété, au bon moment.",
      subline:
        "Plus de 40 ans d'expertise au service des acheteurs en Outaouais.",
    },
    sell: {
      eyebrow: "Votre mise en marché",
      headline: "Vendez plus vite. Vendez mieux.",
      subline:
        "Une stratégie sur mesure pour maximiser la valeur de votre propriété.",
    },
  },
  testimonials: [
    {
      text: "Notre expérience avec Stéphane était super. Il est très connaissant et très responsif avec de bons conseils. La maison a été vendue en 3 semaines. Nous recommendons les services de Stéphane Bisson à 100%.",
      author: "Joan Bernier, Gatineau",
      intent: "sell",
    },
    {
      text: "Un immense merci Stéphane. Grâce à ton professionnalisme, nous avons trouvé une maison avec de l'âme, dans un quartier calme et inspirant. Mille mercis de ton appui.",
      author: "Camille Michaud, Gatineau",
      intent: "buy",
    },
    {
      text: "Service impeccable du début à la fin. L'équipe a bien ciblé nos critères d'achat et nous a présenté des propriétés correspondant exactement à ce que nous cherchions à Hull.",
      author: "Marc-André Lavoie, Hull",
      intent: "buy",
    },
    {
      text: "Grâce à leur stratégie de mise en marché, nous avons reçu plusieurs offres en moins d'une semaine. Professionnalisme, disponibilité et résultats.",
      author: "Sophie Tremblay, Aylmer",
      intent: "sell",
    },
    {
      text: "En tant qu'acheteurs, nous avons adoré la transparence et les conseils sur les quartiers. Nous avons signé notre condo en confiance, sans mauvaises surprises.",
      author: "Isabelle Gagnon, Gatineau",
      intent: "buy",
    },
    {
      text: "Premier achat immobilier pour nous : l'équipe a tout expliqué clairement, sans pression. Nous avons trouvé notre maison à Aylmer en quelques semaines. Expérience exceptionnelle.",
      author: "Nadia Chartrand, Aylmer",
      intent: "buy",
    },
    {
      text: "Vente de notre duplex réalisée au-dessus de nos attentes. L'équipe a su mettre en valeur chaque atout du bien. Je recommande sans hésiter.",
      author: "Pierre Desjardins, Hull",
      intent: "sell",
    },
    {
      text: "Courtier à l'écoute et très structuré. Notre bungalow à Gatineau s'est vendu rapidement, au prix demandé. Communication constante du début à la fin.",
      author: "Jean-François Morin, Gatineau",
      intent: "sell",
    },
  ] as Testimonial[],
  steps: {
    buy: {
      title: "Votre achat, simplifié en 7 étapes claires",
      items: [
        {
          title: "Premier contact et définition de vos critères",
          description:
            "Budget, quartiers, type de propriété et échéancier pour cadrer la recherche.",
        },
        {
          title: "Mise en place d'une stratégie d'achat",
          description:
            "Préapprobation, priorités et calendrier des visites adapté à votre situation.",
        },
        {
          title: "Recherche active et alertes ciblées",
          description:
            "Accès aux nouvelles inscriptions et propriétés hors marché via notre réseau.",
        },
        {
          title: "Visites organisées et analyses comparatives",
          description:
            "Retours structurés après chaque visite pour affiner votre choix.",
        },
        {
          title: "Offre d'achat et négociation",
          description:
            "Défense de vos intérêts pour obtenir les meilleures conditions.",
        },
        {
          title: "Inspection et vérifications",
          description:
            "Accompagnement pour les délais, conditions et documents essentiels.",
        },
        {
          title: "Signature chez le notaire",
          description:
            "Suivi jusqu'à la remise des clés, en toute conformité.",
        },
      ] as StepItem[],
    },
    sell: {
      title: "Votre vente, simplifiée en 7 étapes claires",
      items: [
        {
          title: "Premier contact et rencontre personnalisée",
          description:
            "Évaluation de vos besoins, attentes et calendrier de vente.",
        },
        {
          title: "Estimation précise de la valeur",
          description:
            "Analyse comparative de marché et recommandation de prix stratégique.",
        },
        {
          title: "Présentation des atouts de votre propriété",
          description:
            "Mise en valeur des points forts et opportunités d'amélioration.",
        },
        {
          title: "Mise en marché efficace et ciblée",
          description:
            "MLS®, réseaux sociaux, base acheteurs et réseau Keller Williams.",
        },
        {
          title: "Gestion des visites et rétroactions",
          description:
            "Planification coordonnée et retours après chaque visite.",
        },
        {
          title: "Négociations expertes",
          description:
            "Défense de vos intérêts pour les meilleures conditions de vente.",
        },
        {
          title: "Finalisation sécurisée",
          description:
            "Accompagnement jusqu'à la signature chez le notaire.",
        },
      ] as StepItem[],
    },
  },
  cta: {
    buy: {
      title:
        "Prêt à concrétiser votre projet d'achat en Outaouais ? Notre équipe vous attend.",
      button: "Parler à un conseiller achat",
    },
    sell: {
      title:
        "Confiez votre projet immobilier à notre équipe d'expérience en Outaouais pour transformer vos ambitions en succès.",
      button: "Nous contacter",
    },
  },
} as const;

export function getTestimonialsForIntent(intent: UserIntent) {
  return SITE_CONTENT.testimonials.filter(
    (t) => t.intent === intent || t.intent === "both",
  );
}
