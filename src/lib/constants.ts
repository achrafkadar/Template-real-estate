export const ASSETS = {
  logo: "https://irp.cdn-website.com/69b9912a/dms3rep/multi/Logo+-+Stephane+Bisson.png",
  logoSmall:
    "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/Logo+-+Stephane+Bisson-221w.png",
  /**
   * Photo du hero — remplacer le fichier :
   * public/images/hero.jpg
   * (même nom, ou mettre à jour ce chemin)
   */
  heroImage: "/images/hero.jpg",
  /**
   * Photo derrière le formulaire (section 2) — remplacer :
   * public/images/form-background.jpg
   */
  formBackground: "/images/form-background.jpg",
  /** Ancienne vidéo du site source (non utilisée) */
  heroVideo:
    "https://vid.cdn-website.com/69b9912a/videos/xHa1Bc1BTl6Bepto3XFR_Vendre-propriete-gatineau-v.mp4",
  stepsImage:
    "https://irp.cdn-website.com/69b9912a/dms3rep/multi/pexels-photo-19175625.jpeg",
  favicon:
    "https://irp.cdn-website.com/69b9912a/dms3rep/multi/Favicon+-+Stephane+Bisson.png",
} as const;

export const CONTACT = {
  phone: "+1 819 743-2922",
  phoneHref: "tel:+18197432922",
  address: "259, boul. St-Joseph, suite 104",
  city: "Gatineau, J8Y 1T6",
  mapsUrl: "https://maps.app.goo.gl/kVKitGPFHZYUaRwDA",
} as const;

export const PROPERTY_TYPES = [
  "Résidentiel",
  "Commercial",
  "Ferme",
  "Industriel",
  "Multi-familiale (2 à 5 logements)",
  "Propriété à revenus",
  "Terre/Terrain",
] as const;

export const STATS = [
  { title: "#1 Québec", subtitle: "Keller Williams Distinction" },
  { title: "Top 1% mondial", subtitle: "de la vente immobilière" },
  { title: "Plus de 40 ans", subtitle: "d'expérience cumulée en immobilier" },
] as const;

export const WHY_US = [
  {
    title: "Expertise locale approfondie",
    description:
      "Connaissance pointue des marchés de Gatineau, Aylmer, Hull et de l'Outaouais. Nous maîtrisons les tendances, les prix et les spécificités de chaque quartier pour positionner votre propriété de façon stratégique.",
  },
  {
    title: "Stratégie marketing personnalisée",
    description:
      "Chaque propriété est unique. Nous élaborons un plan de mise en marché adapté à votre bien, à votre quartier et à vos objectifs : photographie professionnelle, diffusion ciblée, réseautage avec notre réseau Keller Williams.",
  },
  {
    title: "Résultats prouvés et accompagnement",
    description:
      "Notre priorité est de maximiser votre prix de vente dans les meilleurs délais, avec une approche optimale, transparente et à l'écoute. Vous restez informé à chaque étape, sans jargon, sans pression.",
  },
  {
    title: "Réseau et visibilité maximale",
    description:
      "Profitez du réseau international Keller Williams. Votre propriété est exposée à un vaste réseau d'agents et d'acheteurs qualifiés, augmentant ainsi les chances d'une vente rapide au prix souhaité.",
  },
] as const;

export const TEAM = [
  {
    name: "Stéphane Bisson",
    role: "MBA, FRI, Courtier immobilier agréé DA",
    image:
      "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/stephane_bisson-cf4db8f8-640w.png",
  },
  {
    name: "Katia Khoury",
    role: "Courtier immobilier agréé DA",
    image:
      "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/kathia_khoury-640w.jpg",
  },
  {
    name: "Mathis Sabourin",
    role: "Courtier immobilier résidentiel",
    image:
      "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/mathis_sabourin-640w.jpg",
  },
  {
    name: "Alexandre Bisson",
    role: "Courtier immobilier",
    image:
      "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/alexandre_bisson-640w.jpg",
  },
  {
    name: "Merouane Benlafkih",
    role: "Courtier immobilier",
    image:
      "https://lirp.cdn-website.com/69b9912a/dms3rep/multi/opt/merouane_benlafkih-640w.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "Notre expérience avec Stéphane était super. Il est très connaissant et très responsif avec de bons conseils. Toujours disponible pour répondre à nos questions et très facile à faire équipe avec. La maison a été vendu à l'intérieur de 3 semaines et aurait été vendu à l'entérieur de 2 semaines si ce n'est que quelques petits délais occasionnés par les acheteurs. Nous recommendons les services de Stéphane Bisson comme courtier à 100%.",
    author: "Joan Bernier, Gatineau",
  },
  {
    text: "Un immense merci Stéphane. Grâce à ton professionnalisme et ton écoute, nous avons réussi l'exploit de trouver une maison avec de l'âme, qui est à notre image, dans un quartier calme et inspirant. Bref, encore une fois mille mercis de ton appui. Nous ressortons avec la conviction qu'il existe encore dans le monde de l'immobilier et dans la société des personnes qui multiplient dans l'ombre les petits gestes pour aider les jeunes à se défricher une grande place au soleil.",
    author: "Camille Michaud., Gatineau",
  },
  {
    text: "Service impeccable du début à la fin. L'équipe a bien ciblé nos critères d'achat et nous a présenté des propriétés correspondant exactement à ce que nous cherchions à Hull. Transaction rapide, transparente et sans stress. Je recommande fortement pour un achat en Outaouais.",
    author: "Marc-André Lavoie, Hull",
  },
  {
    text: "Nous avions une propriété à vendre dans un marché compétitif. Grâce à leur stratégie de mise en marché et leurs conseils de prix, nous avons reçu plusieurs offres en moins d'une semaine. Professionnalisme, disponibilité et résultats — exactement ce qu'on espérait.",
    author: "Sophie Tremblay, Aylmer",
  },
] as const;

export const STEPS = [
  {
    title: "Premier contact et rencontre personnalisée",
    description:
      "Évaluation de vos besoins, de vos attentes et de votre calendrier.",
  },
  {
    title: "Estimation précise de la valeur de votre maison",
    description:
      "Analyse comparative de marché et recommandation de prix stratégique.",
  },
  {
    title: "Présentation détaillée des atouts de votre propriété",
    description:
      "Mise en valeur des points forts et des opportunités d'amélioration.",
  },
  {
    title: "Mise en marché efficace et ciblée",
    description:
      "Diffusion multicanal : MLS®, réseaux sociaux, base de données acheteurs, réseau Keller Williams.",
  },
  {
    title: "Gestion des visites et rétroactions",
    description:
      "Planification coordonnée et retours systématiques après chaque visite.",
  },
  {
    title: "Négociations expertes",
    description:
      "Défense de vos intérêts pour obtenir les meilleures conditions de vente.",
  },
  {
    title: "Finalisation sécurisée",
    description:
      "Accompagnement jusqu'à la signature chez le notaire, en toute conformité.",
  },
] as const;
