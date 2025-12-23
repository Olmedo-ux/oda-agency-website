import img1 from "./assets/hero-placeholder.jpg"; 
// Note : Idéalement, importez d'autres images (img2, img3...) quand vous en aurez.

export const projects = [
  {
    id: 1,
    cat: "Développement Web",
    title: "E-Commerce Mode",
    client: "Lomé Fashion",
    year: "2024",
    img: img1,
    desc: "Plateforme de vente en ligne avec paiement mobile intégré (T-Money/Flooz).",
  },
  {
    id: 2,
    cat: "Branding",
    title: "Eco-Food Togo",
    client: "Eco-Food SA",
    year: "2023",
    img: img1,
    desc: "Refonte complète de l'identité visuelle et packaging éco-responsable.",
  },
  {
    id: 3,
    cat: "Marketing Digital",
    title: "Campagne Immo",
    client: "Immo Prestige",
    year: "2024",
    img: img1,
    desc: "Stratégie de génération de leads qualifiés sur les réseaux sociaux.",
  },
  {
    id: 4,
    cat: "UI/UX Design",
    title: "App Dashboard",
    client: "FinTech Corp",
    year: "2023",
    img: img1,
    desc: "Interface d'administration intuitive pour la gestion financière.",
  },
  {
    id: 5,
    cat: "Site Vitrine",
    title: "Architecture Moderne",
    client: "Archi-BTP",
    year: "2024",
    img: img1,
    desc: "Site web minimaliste mettant en valeur les projets architecturaux.",
  },
  {
    id: 6,
    cat: "Social Media",
    title: "Community Management",
    client: "Restaurant Le Délice",
    year: "2024",
    img: img1,
    desc: "Animation des réseaux et création de contenu culinaire.",
  },
  {
    id: 7,
    cat: "Design Graphique",
    title: "Affiches Festival",
    client: "Culture 228",
    year: "2023",
    img: img1,
    desc: "Série d'affiches et supports visuels pour un événement culturel.",
  },
  {
    id: 8,
    cat: "SEO & Rédaction",
    title: "Blog Voyage",
    client: "Visit Togo",
    year: "2024",
    img: img1,
    desc: "Optimisation du référencement et rédaction d'articles touristiques.",
  },
];

export const services = [
  {
    id: 1,
    title: "Design Graphique",
    desc: "Identité visuelle forte pour marquer les esprits.",
  },
  {
    id: 2,
    title: "Développement Web",
    desc: "Sites performants et sur-mesure.",
  },
  {
    id: 3,
    title: "Marketing Digital",
    desc: "Stratégies pour booster votre visibilité.",
  }
];// Ajoutez ceci à la fin de votre fichier src/data.js
export const initialTestimonials = [
  {
    id: 1,
    name: "Jean D.",
    role: "CEO, TechStart",
    text: "Une équipe incroyablement talentueuse. ODA a su capturer l'essence de notre marque dès le premier essai.",
    date: "Il y a 2 mois"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Directrice Marketing",
    text: "Le refactoring de notre site a boosté nos conversions de 150%. Un investissement rentabilisé en 3 semaines.",
    date: "Il y a 1 mois"
  },
  {
    id: 3,
    name: "Marc L.",
    role: "Architecte",
    text: "Design épuré, code propre et respect des délais. Je recommande ODA les yeux fermés.",
    date: "Il y a 2 semaines"
  }
];
