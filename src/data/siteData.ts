export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "Qui sommes-nous ?" },
  { href: "/combats", label: "Nos combats" },
  { href: "/actions", label: "Nos actions" },
  { href: "/news", label: "Actualités" },
  { href: "/volunteer", label: "Bénévolat" },
  { href: "/partners", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  { value: 12500, suffix: "+", label: "Élèves sensibilisés" },
  { value: 72, suffix: "+", label: "Établissements visités" },
  { value: 38, suffix: "+", label: "Campagnes organisées" },
  { value: 160, suffix: "+", label: "Bénévoles engagés" },
];

export const values = [
  { title: "Protection", description: "Accompagner les jeunes, les rassurer et leur offrir un environnement sûr.", icon: "Shield" },
  { title: "Éducation", description: "Sensibiliser par des messages clairs, accessibles et bienveillants.", icon: "BookOpen" },
  { title: "Prévention", description: "Mieux prévenir les addictions et les maladies bucco-dentaires avant qu'elles ne s'installent.", icon: "HeartPulse" },
  { title: "Solidarité", description: "Créer un réseau de personnes, d'écoles et de partenaires autour des enfants.", icon: "Users" },
  { title: "Santé", description: "Favoriser une meilleure santé physique, mentale et bucco-dentaire.", icon: "Stethoscope" },
  { title: "Engagement", description: "Agir concrètement sur le terrain avec énergie, courage et écoute.", icon: "HandHeart" },
];

export const actions = [
  {
    title: "Sensibilisation dans les écoles",
    category: "Activités scolaires",
    date: "2025-05-18",
    location: "Bamako",
    description: "Ateliers de prévention et de sensibilisation sur les dangers des stupéfiants et l'importance de l'hygiène bucco-dentaire.",
    objective: "Informer les élèves et renforcer les comportements responsables.",
    results: "Plus de 500 élèves sensibilisés lors de la dernière campagne scolaire.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conférences éducatives",
    category: "Campagnes communautaires",
    date: "2025-04-07",
    location: "Sikasso",
    description: "Des sessions interactives destinées aux parents, enseignants et adolescents pour mieux comprendre les enjeux de prévention.",
    objective: "Créer un espace de dialogue et de confiance.",
    results: "Le public a partagé plus de 180 questions et préoccupations pendant les échanges.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Campagne contre les stupéfiants",
    category: "Lutte contre les stupéfiants",
    date: "2025-03-23",
    location: "Mopti",
    description: "Une série de messages, d'expositions et de témoignages pour aider les jeunes à refuser les drogués et les substances illicites.",
    objective: "Renforcer l'auto-résilience et la prévention au sein des collèges.",
    results: "Des centaines de jeunes ont exprimé leur volonté de faire des choix éclairés.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sensibilisation à l'hygiène dentaire",
    category: "Santé bucco-dentaire",
    date: "2025-02-15",
    location: "Koutiala",
    description: "Des démonstrations simples sur le brossage, le choix du dentifrice et l'importance des visites dentaires.",
    objective: "Prévenir les caries et favoriser un sourire sain durable.",
    results: "Près de 700 enfants ont bénéficié d'ateliers pratiques de brossage.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Démonstrations pratiques de brossage",
    category: "Santé bucco-dentaire",
    date: "2025-01-30",
    location: "Segou",
    description: "Des séances ludiques et pédagogiques pour aider les enfants à adopter de bonnes habitudes dès le plus jeune âge.",
    objective: "Former les enfants à une hygiène quotidienne efficace et durable.",
    results: "Taux de participation élevé et amélioration constatée des routines de brossage.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Journée communautaire de prévention",
    category: "Campagnes communautaires",
    date: "2024-12-10",
    location: "Kayes",
    description: "Animation avec les familles, les enseignants et les acteurs de la santé pour une meilleure prévention collective.",
    objective: "Renforcer le lien intergénérationnel dans la protection des jeunes.",
    results: "Plus de 250 familles ont participé aux échanges et aux démonstrations.",
    image: "https://images.unsplash.com/photo-1517486800579-5db1d7d7e7d5?auto=format&fit=crop&w=900&q=80",
  },
];

export const newsCategories = [
  "Toutes",
  "Prévention des addictions",
  "Santé bucco-dentaire",
  "Éducation des jeunes",
  "Actualités de l'association",
  "Conseils aux parents",
];

export const newsArticles = [
  {
    title: "Comment parler ouvertement de la drogue avec un adolescent ?",
    category: "Prévention des addictions",
    date: "2025-05-11",
    summary: "Quelques repères pour favoriser le dialogue, réduire l'insécurité et renforcer la confiance entre parents et jeunes.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    content: "Le dialogue ouvre la voie à la prévention. Les parents peuvent encourager un climat de confiance, écouter sans juger et parler des risques liés aux substances illicites avec des mots simples et authentiques.",
  },
  {
    title: "Les gestes essentiels pour une bonne santé bucco-dentaire",
    category: "Santé bucco-dentaire",
    date: "2025-05-03",
    summary: "Deux brossages par jour, des habitudes saines et des consultations régulières : les bases pour un sourire durable.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    content: "Une bonne hygiène bucco-dentaire commence dès le plus jeune âge. Le brossage régulier, le fil dentaire et les visites de contrôle permettent d'éviter les douleurs et de protéger la santé générale.",
  },
  {
    title: "Comment donner confiance à nos jeunes dans leur avenir ?",
    category: "Éducation des jeunes",
    date: "2025-04-19",
    summary: "L'éducation, la prévention et la valorisation des talents sont des leviers puissants pour construire un avenir serein.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    content: "Les jeunes ont besoin d'un cadre clair, d'un accompagnement bienveillant et d'une vision positive de leur avenir. L'association travaille à renforcer leur confiance à travers des actions concrètes.",
  },
  {
    title: "Notre dernière campagne de sensibilisation dans les établissements scolaires",
    category: "Actualités de l'association",
    date: "2025-04-03",
    summary: "Une journée riche en échanges, données, jeux et ateliers pour informer et protéger les adolescents.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    content: "La campagne a réuni élèves, enseignants et parents autour du thème de la prévention. Les ateliers interactifs ont permis d'approcher les sujets avec douceur et clarté.",
  },
  {
    title: "5 conseils pour aider votre enfant à adopter de bonnes habitudes",
    category: "Conseils aux parents",
    date: "2025-03-22",
    summary: "Des habitudes simples, répétées et quotidiennes peuvent faire une grande différence pour la santé et le bien-être.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    content: "En établissant des routines claires, les parents créent un cadre stable. La régularité, la présence et le modèle positif sont essentiels pour guider les enfants vers des choix plus sûrs.",
  },
];

export const testimonials = [
  {
    quote: "Cette sensibilisation a donné à mon fils le courage de refuser et de poser des questions. Nous avons plus de confiance dans son avenir.",
    author: "Mariam D., mère d'élève",
  },
  {
    quote: "Les ateliers sont clairs, chaleureux et très pédagogiques. Les enfants comprennent les risques et prennent conscience des enjeux.",
    author: "Koffi T., enseignant",
  },
  {
    quote: "Grâce à ces actions, nos élèves parlent davantage de leur santé, de leur sourire et de leurs habitudes quotidiennes.",
    author: "Awa S., directrice d'école",
  },
  {
    quote: "Une initiative concrète et humaine qui touche les jeunes à l'endroit où ils ont besoin d'être encouragés.",
    author: "Seydou B., partenaire institutionnel",
  },
];

export const partners = [
  "Établissements scolaires",
  "Centres de santé",
  "Associations locales",
  "Organisations communautaires",
  "Professionnels de santé",
  "Entreprises solidaires",
];

export const donationOptions = [
  { title: "Don ponctuel", description: "Soutenez directement une action ou un programme précis." },
  { title: "Don régulier", description: "Fournissez un appui stable pour les sensibilisations et les campagnes." },
  { title: "Montant libre", description: "Choisissez un montant qui correspond à votre capacité de soutien." },
];

export const team = [
  { name: "Aminata Dieng", role: "Présidente", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" },
  { name: "Modibo Coulibaly", role: "Coordinateur de terrain", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
  { name: "Fatoumata Traoré", role: "Chargée de programmes", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
  { name: "Issa Sissoko", role: "Responsable bénévoles", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80" },
];

export const campaignMessages = [
  "Ton avenir vaut plus que la drogue.",
  "Fais le choix de la vie.",
  "Sois maître de tes décisions.",
  "Dis NON aux stupéfiants.",
  "Prends soin de ton corps et de ton esprit.",
  "Le bonheur commence par des choix sains.",
];

export const volunteeringRoles = [
  "Bénévole de terrain",
  "Éducateur et sensibilisateur",
  "Professionnel de santé partenaire",
  "Soutien technique",
  "Ambassadeur de l'association",
];

export const contactDetails = {
  address: "Cité de la Paix, Bamako, Mali",
  phone: "+223 00 00 00 00",
  email: "contact@unenfantunsourire.org",
  facebook: "@UnEnfantUnSourire",
  instagram: "@unenfantunsourire",
};
