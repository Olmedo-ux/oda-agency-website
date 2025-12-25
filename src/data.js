import skincare from "./assets/skincare.jpg"; 
import Saveurs from "./assets/Saveurs.jpg"; 
import Flyer_ODA from "./assets/Flyer_ODA.jpg"; 
import jj from "./assets/jj.jpeg"; 
import REPLACE from "./assets/REPLACE.png"; 
import Patsserie from "./assets/Patsserie.png"; 

import black_friday from "./assets/black_friday.jpg"; 
import rando_Scout from "./assets/rando_Scout.jpg"; 
// --- VOS 8 PROJETS ---
export const projects = [
  {
    id: 1,
    cat: "Développement Web",
    title: "E-Commerce Mode",
    client: "Lomé Fashion",
    year: "2024",
    img: skincare, 
    desc: "Plateforme de vente en ligne avec paiement mobile intégré (T-Money/Flooz).",
  },
  {
    id: 2,
    cat: "Branding",
    title: "Eco-Food Togo",
    client: "Eco-Food SA",
    year: "2023",
    img: Saveurs,
    desc: "Refonte complète de l'identité visuelle et packaging éco-responsable.",
  },
  {
    id: 3,
    cat: "Marketing Digital",
    title: "Campagne Immo",
    client: "Immo Prestige",
    year: "2024",
    img: Flyer_ODA,
    desc: "Stratégie de génération de leads qualifiés sur les réseaux sociaux.",
  },
  {
    id: 4,
    cat: "UI/UX Design",
    title: "App Dashboard",
    client: "FinTech Corp",
    year: "2023",
    img: jj,
    desc: "Interface d'administration intuitive pour la gestion financière.",
  },
  {
    id: 5,
    cat: "Site Vitrine",
    title: "Architecture Moderne",
    client: "Archi-BTP",
    year: "2024",
    img: REPLACE,
    desc: "Site web minimaliste mettant en valeur les projets architecturaux.",
  },
  {
    id: 6,
    cat: "Social Media",
    title: "Community Management",
    client: "Restaurant Le Délice",
    year: "2024",
    img: Patsserie,
    desc: "Animation des réseaux et création de contenu culinaire.",
  },
  {
    id: 7,
    cat: "Design Graphique",
    title: "Affiches Festival",
    client: "Culture 228",
    year: "2023",
    img: black_friday,
    desc: "Série d'affiches et supports visuels pour un événement culturel.",
  },
  {
    id: 8,
    cat: "SEO & Rédaction",
    title: "Blog Voyage",
    client: "Visit Togo",
    year: "2024",
    img: rando_Scout,
    desc: "Optimisation du référencement et rédaction d'articles touristiques.",
  },
];

// --- VOS SERVICES (Ajout de Multimédia) ---
export const services = [
  {
    id: 1,
    title: "Branding & Identité Visuelle",
    desc: "Création de logos, chartes graphiques et identités visuelles uniques qui reflètent l'essence de votre marque.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Conception d'interfaces utilisateur intuitives et d'expériences digitales mémorables centrées sur l'humain.",
  },
  {
    id: 3,
    title: "Développement Web",
    desc: "Sites web et applications sur mesure, performants et optimisés pour tous les appareils.",
  },
  {
    id: 4,
    title: "Marketing Digital",
    desc: "Stratégies digitales complètes pour augmenter votre visibilité et atteindre vos objectifs business.",
  },
  {
    id: 5,
    title: "Community Management",
    desc: "Animation de vos réseaux sociaux, création de contenus engageants et gestion de votre e-réputation.",
  },
  {
    id: 6,
    title: "Multimédia & Motion Design",
    desc: "Création de contenus vidéo animés, montages dynamiques et animations pour captiver votre audience.",
  }
];

// --- TÉMOIGNAGES ---
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