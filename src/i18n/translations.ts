export type Lang = "FR" | "EN" | "ES" | "HT";

export type Dict = typeof fr;

// ─── FRENCH (default) ───────────────────────────────────────────
const fr = {
  // Header
  nav_expertises: "Expertises",
  nav_capacites: "Capacités",
  nav_secteurs: "Secteurs",
  nav_approche: "Approche",
  nav_produits: "Produits",
  nav_presence: "Présence",
  nav_contact: "Prendre contact",
  theme_light: "Mode clair",
  theme_dark: "Mode sombre",
  lang_label: "Langue",

  // Hero
  hero_tag: "Groupe technologique multidisciplinaire en solutions technologiques",
  hero_lines: [
    "Concevoir la technologie critique.",
    "Résoudre vos problèmes complexes.",
    "Opérer ce que d'autres n'osent pas.",
    "Bâtir des systèmes de confiance.",
  ],
  hero_desc:
    "Six expertises intégrées. Une seule équipe. Une seule responsabilité contractuelle — du premier prototype à l'exploitation continue.",
  hero_software: "Software",
  hero_hardware: "Hardware",
  hero_security: "Sécurité",
  hero_research: "Recherche",

  // Marquee
  marquee_items: [
    "Logiciel sur mesure",
    "Infrastructure réseau",
    "Cybersécurité",
    "IoT & systèmes embarqués",
    "Intelligence artificielle",
    "Design d'interfaces",
    "Production audiovisuelle",
    "R&D appliquée",
    "Kits éducatifs",
    "Déploiement cloud",
    "Surveillance & contrôle d'accès",
    "Conseil technologique",
  ],

  // Divisions
  div_section: "Expertises",
  div_title: "Six expertises intégrées. Une exécution unifiée.",
  div_items: [
    {
      name: "Éducation & STEM",
      desc: "Programmes éducatifs structurés, kits propriétaires et laboratoires clé en main pour écoles et institutions.",
      services: ["Kits Arduino & ESP32", "Curricula STEM", "Plateformes LMS", "Laboratoires mobiles", "Formation enseignants"],
    },
    {
      name: "Solutions entreprise & IT",
      desc: "Conception, déploiement et maintenance de systèmes logiciels et d'infrastructures réseau pour entreprises de toute taille.",
      services: ["ERP & CRM", "Infrastructure réseau", "Cloud & DevOps", "Support managé 24/7", "Migration de systèmes"],
    },
    {
      name: "Sécurité & Systèmes intelligents",
      desc: "Systèmes de surveillance, contrôle d'accès et cybersécurité intégrés pour sites sensibles et organisations critiques.",
      services: ["Vidéosurveillance IA", "Contrôle d'accès biométrique", "Cybersécurité offensive/défensive", "Audit & conformité", "SOC managé"],
    },
    {
      name: "Design & Communication visuelle",
      desc: "Identité de marque, interfaces utilisateur et systèmes de design pour produits numériques et communication corporate.",
      services: ["Branding & identité", "UI/UX Design", "Systèmes de design", "Motion design", "Direction artistique"],
    },
    {
      name: "Contenu & Médias",
      desc: "Production audiovisuelle, stratégie de contenu et communication digitale pour marques et institutions.",
      services: ["Production vidéo", "Photographie", "Stratégie de contenu", "Réseaux sociaux", "Communication corporate"],
    },
    {
      name: "Recherche & Développement",
      desc: "Recherche appliquée en intelligence artificielle, IoT et systèmes embarqués pour produits propriétaires et clients.",
      services: ["IA & Machine Learning", "IoT & embarqué", "Prototypage rapide", "Brevets & PI", "Publications"],
    },
  ],

  // Capabilities
  cap_section: "Capacités",
  cap_title: "Software et hardware, conçus sur mesure.",
  cap_software: "Software",
  cap_hardware: "Hardware",
  cap_sw_items: [
    "Applications web & mobiles",
    "Plateformes SaaS",
    "Systèmes ERP / CRM",
    "API & microservices",
    "IA & traitement de données",
    "Interfaces temps réel",
    "Automatisation de processus",
    "Systèmes distribués",
  ],
  cap_hw_items: [
    "Kits éducatifs IoT",
    "Cartes électroniques sur mesure",
    "Systèmes embarqués",
    "Capteurs industriels",
    "Boîtiers de surveillance",
    "Terminaux de contrôle d'accès",
    "Prototypes mécaniques",
    "Intégration robotique",
  ],

  // Sectors
  sec_section: "Secteurs",
  sec_title: "Des secteurs exigeants. Des solutions à la hauteur.",
  sec_items: [
    { name: "Banque & Finance", desc: "Plateformes transactionnelles, conformité réglementaire, cybersécurité financière.", clients: "Institutions financières, fintechs, banques centrales" },
    { name: "Santé", desc: "Systèmes hospitaliers, dossiers patients, télémédecine et dispositifs médicaux connectés.", clients: "Hôpitaux, cliniques, ministères de la santé" },
    { name: "Éducation", desc: "Plateformes d'apprentissage, laboratoires STEM, outils pédagogiques et systèmes de gestion scolaire.", clients: "Écoles, universités, ONG éducatives" },
    { name: "Gouvernement & Institutions", desc: "Systèmes d'identité, plateformes de services publics, infrastructures critiques.", clients: "Ministères, collectivités, agences publiques" },
    { name: "Industrie & Logistique", desc: "Supervision industrielle, optimisation de chaîne logistique, IoT et maintenance prédictive.", clients: "Fabricants, transporteurs, opérateurs portuaires" },
    { name: "Commerce & Retail", desc: "Plateformes e-commerce, systèmes de caisse, gestion de stock et analyse client.", clients: "Chaînes de distribution, marketplaces, retailers" },
    { name: "Sécurité privée", desc: "Vidéosurveillance intelligente, contrôle d'accès, systèmes d'alerte et gestion d'incidents.", clients: "Sociétés de sécurité, sites sensibles, résidences" },
    { name: "ONG & Coopération", desc: "Outils de suivi de projets, plateformes de collecte de données et systèmes de reporting.", clients: "ONG internationales, agences de développement" },
  ],

  // Flywheel
  fly_section: "Approche",
  fly_title: "Notre modèle opératoire",
  fly_center: "DEEPXLAB / MODÈLE OPÉRATOIRE",
  fly_principles: [
    { title: "Intégration verticale", desc: "Chaque compétence est interne. Aucune sous-traitance sur les livrables critiques." },
    { title: "Chaîne complète", desc: "Du diagnostic initial au support post-déploiement, une seule équipe, un seul contrat." },
    { title: "Propriété intellectuelle", desc: "Nos clients conservent la propriété totale du code, des designs et de la documentation." },
    { title: "Continuité opérationnelle", desc: "Monitoring 24/7, mises à jour continues, et transfert de compétences aux équipes internes." },
  ],

  // Process
  proc_section: "Processus",
  proc_title: "Du premier contact au déploiement.",
  proc_steps: [
    { num: "01", title: "Prise de contact", desc: "Échange initial pour comprendre le contexte, les enjeux et les contraintes du projet.", dur: "1–2 jours" },
    { num: "02", title: "Discovery & Audit", desc: "Analyse approfondie de l'existant, identification des problèmes et cartographie des besoins.", dur: "1–2 semaines" },
    { num: "03", title: "Architecture & Proposition", desc: "Conception de la solution technique, choix technologiques et planification du projet.", dur: "1–2 semaines" },
    { num: "04", title: "Développement & Intégration", desc: "Sprints de développement, revues de code, tests continus et intégration progressive.", dur: "4–16 semaines" },
    { num: "05", title: "Déploiement", desc: "Mise en production, migration de données, formation des équipes et validation finale.", dur: "1–2 semaines" },
    { num: "06", title: "Supervision", desc: "Monitoring continu, support technique, mises à jour et optimisation des performances.", dur: "Continu" },
  ],

  // Products
  prod_section: "Produits",
  prod_title: "Solutions propriétaires développées en interne.",
  prod_items: [
    { id: "P/01", name: "Maker Kit", desc: "Kit d'initiation à l'électronique et à la programmation pour débutants." },
    { id: "P/02", name: "Arduino Kit", desc: "Kit avancé de prototypage Arduino avec capteurs, actionneurs et guides." },
    { id: "P/03", name: "ESP32 Kit", desc: "Kit IoT basé sur ESP32 avec connectivité Wi-Fi/Bluetooth et exemples." },
    { id: "P/04", name: "Plateforme gestion d'accès", desc: "Système propriétaire de contrôle d'accès biométrique et par carte." },
    { id: "P/05", name: "Suivi GPS", desc: "Solution de géolocalisation et suivi de flotte en temps réel." },
    { id: "P/06", name: "LMS STEM", desc: "Plateforme d'apprentissage en ligne spécialisée sciences et technologies." },
  ],

  // Stats
  stat_items: [
    { val: "06", label: "Expertises intégrées" },
    { val: "04", label: "Langues opérationnelles" },
    { val: "24/7", label: "Continuité opérationnelle" },
    { val: "∞", label: "Sans frontière" },
  ],

  // Manifesto
  man_section: "Qui sommes-nous",
  man_text_1:
    "DeepXlab conçoit, développe et opère des plateformes logicielles, des infrastructures matérielles et des systèmes de sécurité sur mesure. Une seule équipe pluridisciplinaire, du premier prototype à l'exploitation continue.",
  man_text_2:
    "Nous travaillons pour les organisations qui exigent de la technologie qu'elle tienne sous contrainte réelle — réglementaire, opérationnelle, géographique.",
  man_pillars: [
    { title: "Rigueur", desc: "Chaque livrable est documenté, testé et signé. La qualité n'est pas un objectif, c'est une condition." },
    { title: "Autonomie", desc: "Nos clients ne dépendent pas d'une boîte noire. Nous formons leurs équipes et transmettons la maîtrise." },
    { title: "Engagement", desc: "Nous restons aux côtés de nos clients sur le long terme. Un déploiement n'est jamais une fin de relation." },
  ],

  // Signature
  sig_pillars: [
    { letter: "DEEP", sub: "Profondeur technique" },
    { letter: "X", sub: "Recherche appliquée" },
    { letter: "LAB", sub: "Excellence d'exécution" },
  ],

  // GlobalReach
  global_section: "Présence mondiale",
  global_title: "Opérations sans frontière.",

  // Problem
  prob_title: "Vous avez un problème que personne n'arrive à résoudre.",
  prob_sub: "C'est précisément ce que nous préférons.",
  prob_cta: "Parlons-en",

  // CTA
  cta_section: "Contact",
  cta_title_1: "Travaillons ensemble",
  cta_title_2: "sur ce qui vient ensuite.",
  cta_desc:
    "Nos équipes accompagnent les organisations qui opèrent dans des environnements exigeants et qui attendent d'un partenaire technologique rigueur, autonomie et engagement long terme.",
  cta_btn: "contact@deepxlab.com",
  cta_link: "Consulter nos expertises",
  cta_contacts: [
    { label: "Contact commercial", email: "contact@deepxlab.com" },
    { label: "Partenariats", email: "partners@deepxlab.com" },
    { label: "Carrières", email: "careers@deepxlab.com" },
    { label: "Presse", email: "press@deepxlab.com" },
  ],

  // Footer
  foot_rights: "Tous droits réservés.",

  // Services focus (home grid)
  svc_section: "Nos services",
  svc_title: "Trois offres concrètes. Une expertise partagée.",
  svc_desc:
    "Nous démarrons DeepXlab avec trois lignes de service actives, taillées pour les besoins locaux haïtiens, la diaspora et les PME de la région.",
  svc_items: [
    {
      tag: "01",
      slug: "developpement",
      name: "Développement web & mobile sur mesure",
      desc:
        "Sites, plateformes et applications construits pour des clients haïtiens et de la diaspora — vitrine, e-commerce, apps métier, apps mobiles.",
      bullets: ["Sites vitrine & institutionnels", "E-commerce & paiement local", "Applications métier", "Apps mobiles iOS/Android"],
    },
    {
      tag: "02",
      slug: "stem",
      name: "Kits STEM & cours robotique",
      desc:
        "Kits Arduino/ESP32 propriétaires assemblés en interne, vendus avec nos guides et cours privés de STEM et de robotique.",
      bullets: ["Kits Maker / Arduino / ESP32", "Guides pédagogiques originaux", "Cours privés STEM & robotique", "Ateliers pour écoles et familles"],
    },
    {
      tag: "03",
      slug: "consulting",
      name: "Consulting IT pour PME",
      desc:
        "Audit, modernisation et accompagnement des PME haïtiennes qui veulent digitaliser leurs opérations sans se faire dépasser.",
      bullets: ["Audit IT & cartographie", "Modernisation & cloud", "Cybersécurité de base", "Formation des équipes"],
    },
  ],
  svc_cta: "Voir le service",

  // Service page — common
  svc_back: "Retour à l'accueil",
  svc_offerings: "Notre offre",
  svc_process: "Processus",
  svc_pricing: "Tarification indicative",
  svc_faq: "Questions fréquentes",
  svc_contact_cta: "Parlons de votre projet",

  // /services/developpement
  svc_dev: {
    hero_tag: "Développement web & mobile",
    hero_title: "Des sites et applications qui tiennent, même en Haïti.",
    hero_sub:
      "Nous concevons des sites vitrine, e-commerce, plateformes métier et applications mobiles pour les entreprises et institutions haïtiennes et de la diaspora.",
    offerings: [
      { t: "Sites vitrine & institutionnels", d: "Sites sur mesure, rapides, SEO-ready, multi-langues. Adaptés aux connexions limitées et aux appareils mobiles dominants." },
      { t: "E-commerce & paiement local", d: "Boutiques en ligne avec intégration des solutions de paiement utilisées en Haïti et dans la diaspora (MonCash, Natcash, cartes, Zelle, CashApp)." },
      { t: "Plateformes métier", d: "Outils internes pour gérer clients, stocks, réservations, facturation, abonnements, suivi de production. Sur mesure, pas de SaaS rigide." },
      { t: "Applications mobiles", d: "Apps iOS et Android développées en React Native ou natif selon les besoins, distribuées via App Store, Play Store ou APK direct." },
    ],
    process: [
      "Entretien de cadrage pour comprendre l'activité, les utilisateurs et les contraintes.",
      "Maquettes et prototypes validés avec vous avant toute ligne de code.",
      "Développement par sprints courts avec démos régulières.",
      "Mise en ligne, formation et support continu après déploiement.",
    ],
    pricing: [
      { t: "Site vitrine", d: "À partir de 1 500 USD", note: "Livré en 3–5 semaines" },
      { t: "E-commerce", d: "À partir de 3 500 USD", note: "Livré en 6–10 semaines" },
      { t: "Plateforme métier", d: "Sur devis", note: "Selon périmètre fonctionnel" },
      { t: "App mobile", d: "À partir de 6 000 USD", note: "iOS + Android inclus" },
    ],
    faq: [
      { q: "Est-ce que vous travaillez à distance ?", r: "Oui. Nos équipes sont basées entre Boston et Port-au-Prince, et nous travaillons en visio, WhatsApp et sur site selon les besoins." },
      { q: "Vous livrez le code source ?", r: "Toujours. Vous êtes propriétaire total du code, des designs et de la documentation. Aucun verrou technique." },
      { q: "Vous faites aussi la maintenance ?", r: "Oui, via des forfaits mensuels. Monitoring, mises à jour, corrections et évolutions." },
      { q: "On peut payer en gourdes ?", r: "Oui, en gourdes, en dollars, par virement, MonCash, carte ou Zelle selon ce qui vous convient." },
    ],
  },

  // /services/stem
  svc_stem: {
    hero_tag: "Éducation STEM & robotique",
    hero_title: "Des kits et des cours pour former la prochaine génération d'ingénieurs haïtiens.",
    hero_sub:
      "Nous assemblons nos propres kits Arduino et ESP32 à Port-au-Prince, accompagnés de guides pédagogiques originaux, et nous donnons des cours privés de STEM et de robotique.",
    offerings: [
      { t: "Kit Maker (débutant)", d: "Premier contact avec l'électronique : LED, résistances, boutons, buzzer. Livré avec un guide pas-à-pas en français et créole." },
      { t: "Kit Arduino", d: "Kit complet autour d'Arduino Uno : capteurs, moteurs, écrans, protoboard. 20+ projets guidés." },
      { t: "Kit ESP32 / IoT", d: "Kit connecté Wi-Fi et Bluetooth pour projets IoT : domotique, stations météo, capteurs à distance." },
      { t: "Cours privés STEM", d: "Cours individuels ou en petits groupes (enfants, ados, adultes). Programmation, électronique, robotique, impression 3D." },
      { t: "Ateliers pour écoles", d: "Programmes clé en main pour les écoles et universités haïtiennes : laboratoire mobile, kits, formation enseignants." },
      { t: "Compétitions & clubs", d: "Accompagnement des clubs de robotique scolaires et préparation aux compétitions régionales." },
    ],
    process: [
      "Choix du kit ou du programme selon l'âge, le niveau et l'objectif.",
      "Livraison du matériel et des guides imprimés.",
      "Cours en présentiel (Port-au-Prince) ou à distance (diaspora).",
      "Certificat remis en fin de cycle + accompagnement post-cours.",
    ],
    pricing: [
      { t: "Kit Maker", d: "45 USD", note: "Livré avec guide + tutoriels" },
      { t: "Kit Arduino", d: "85 USD", note: "20+ projets guidés" },
      { t: "Kit ESP32", d: "120 USD", note: "Projets IoT + Wi-Fi" },
      { t: "Cours individuel", d: "25 USD / séance", note: "1 h, flexible" },
      { t: "Programme école", d: "Sur devis", note: "Kits + cours + formation prof" },
    ],
    faq: [
      { q: "À partir de quel âge ?", r: "Kit Maker à partir de 10 ans, Arduino à partir de 12 ans, ESP32 à partir de 14 ans. Les cours sont adaptés au niveau de chacun." },
      { q: "Vous livrez partout en Haïti ?", r: "Oui, livraison à Port-au-Prince incluse, autres villes via transporteur partenaire." },
      { q: "Les cours sont en quelle langue ?", r: "Français et créole haïtien, avec matériel imprimé dans les deux langues." },
      { q: "On peut acheter le kit sans le cours ?", r: "Oui, les kits sont vendus séparément avec des guides imprimés et des tutoriels vidéo en ligne." },
    ],
  },

  // /services/consulting
  svc_consulting: {
    hero_tag: "Consulting IT",
    hero_title: "Pour les PME haïtiennes qui veulent grandir sans se laisser dépasser par la tech.",
    hero_sub:
      "Nous auditons votre IT, proposons des choix clairs et vous accompagnons dans la modernisation de vos outils, sans jargon et sans dépendance à un seul fournisseur.",
    offerings: [
      { t: "Audit IT complet", d: "Cartographie de vos systèmes, identification des risques, des coûts cachés et des opportunités d'amélioration. Rapport écrit actionnable." },
      { t: "Plan de modernisation", d: "Feuille de route priorisée par retour sur investissement. Ce que vous gardez, ce que vous migrez, ce que vous arrêtez." },
      { t: "Migration cloud", d: "Accompagnement pour passer vos données et applications sur le cloud (AWS, Azure, Google) en toute sécurité." },
      { t: "Cybersécurité de base", d: "Mise en place des bonnes pratiques : mots de passe, sauvegardes, antivirus, pare-feu, formation du personnel." },
      { t: "Choix & négociation fournisseurs", d: "Nous comparons les offres, négocions les contrats et vérifions que vous ne payez pas pour des services inutiles." },
      { t: "Formation des équipes", d: "Ateliers pratiques pour vos employés : outils bureautiques, sécurité, nouveaux logiciels métier." },
    ],
    process: [
      "Entretien initial gratuit pour comprendre votre activité et vos priorités.",
      "Audit sur 1 à 2 semaines avec accès aux systèmes et entretiens équipe.",
      "Remise d'un rapport clair avec plan d'action chiffré et priorisé.",
      "Accompagnement à l'implémentation, en direct ou via nos équipes tech.",
    ],
    pricing: [
      { t: "Audit IT", d: "À partir de 800 USD", note: "Rapport livré en 2 semaines" },
      { t: "Plan de modernisation", d: "À partir de 1 500 USD", note: "Inclut audit + feuille de route" },
      { t: "Accompagnement mensuel", d: "À partir de 600 USD / mois", note: "CTO externalisé à temps partiel" },
      { t: "Formation équipe", d: "À partir de 400 USD / jour", note: "Sur site ou à distance" },
    ],
    faq: [
      { q: "Pour quelles tailles d'entreprise ?", r: "De 5 à 100 employés typiquement. En dessous nous conseillons des solutions simples, au-dessus nous basculons sur un accompagnement grand compte." },
      { q: "Combien de temps dure un audit ?", r: "Entre 2 et 4 semaines selon la taille et la complexité. Nous livrons toujours un rapport écrit, pas juste une présentation orale." },
      { q: "Vous travaillez avec quels secteurs ?", r: "Commerce, santé, éducation, services professionnels, industrie légère, ONG. Pas de secteur exclu." },
      { q: "Est-ce confidentiel ?", r: "Oui, NDA signé avant tout échange sensible et nos consultants sont tenus par engagement de confidentialité permanent." },
    ],
  },

  // Methodology (16 steps)
  meth_section: "Méthodologie",
  meth_title: "Seize étapes. Zéro improvisation.",
  meth_desc:
    "Chaque projet suit une méthodologie interne structurée en 16 phases, du premier entretien au support long terme.",
  meth_steps: [
    { n: "00", t: "Compréhension du contexte", d: "Immersion dans l'écosystème, les contraintes et les enjeux stratégiques." },
    { n: "01", t: "Analyse de l'existant", d: "Audit technique et fonctionnel des systèmes, processus et données en place." },
    { n: "02", t: "Analyse des problèmes", d: "Cartographie des points de friction, risques et opportunités d'amélioration." },
    { n: "03", t: "Identification des acteurs", d: "Recensement des parties prenantes, rôles et responsabilités." },
    { n: "04", t: "Objectifs & critères", d: "Définition des objectifs mesurables et des critères de succès du projet." },
    { n: "05", t: "Besoins fonctionnels", d: "Spécification des fonctionnalités attendues côté utilisateur et métier." },
    { n: "06", t: "Règles métier", d: "Formalisation des règles, workflows et logiques propres à l'organisation." },
    { n: "07", t: "Données métier", d: "Identification des entités, flux et volumes de données à traiter." },
    { n: "08", t: "Modélisation", d: "Conception des modèles de données, schémas relationnels et diagrammes." },
    { n: "09", t: "Architecture", d: "Définition de l'architecture logicielle, matérielle et réseau." },
    { n: "10", t: "Choix technologiques", d: "Sélection des technologies, frameworks et services adaptés au contexte." },
    { n: "11", t: "Développement backend", d: "Implémentation des APIs, services, intégrations et logique serveur." },
    { n: "12", t: "Développement frontend", d: "Création des interfaces utilisateur, expériences web et mobile." },
    { n: "13", t: "Tests", d: "Tests unitaires, d'intégration, de charge et validation fonctionnelle." },
    { n: "14", t: "Déploiement", d: "Mise en production, migration, formation et mise en service." },
    { n: "15", t: "Documentation & maintenance", d: "Documentation complète, transfert de compétences et support continu." },
  ],

  // Case studies
  cases_section: "Références",
  cases_title: "Des projets qui tiennent sous contrainte réelle.",
  cases_desc: "Projets livrés en environnements critiques. Noms clients confidentiels.",
  cases_items: [
    { tag: "Banque & Finance", title: "Plateforme transactionnelle régionale", metric: "4M+ transactions/mois", desc: "Refonte complète du cœur transactionnel d'une banque caribéenne. Architecture événementielle, conformité PCI-DSS, disponibilité 99.99%." },
    { tag: "Santé", title: "Dossier patient électronique national", metric: "120 établissements connectés", desc: "Système centralisé pour un réseau hospitalier régional. Interopérabilité HL7/FHIR, chiffrement bout-en-bout." },
    { tag: "Gouvernement", title: "Plateforme de services publics", metric: "800k citoyens actifs", desc: "Portail unifié d'accès aux services administratifs. Authentification forte, signature électronique, intégration multi-ministères." },
    { tag: "Éducation", title: "Laboratoires STEM clé en main", metric: "45 écoles équipées", desc: "Déploiement de kits pédagogiques propriétaires, plateforme LMS et formation des enseignants dans trois pays." },
  ],

  // Tech stack
  stack_section: "Stack technique",
  stack_title: "Technologies maîtrisées en profondeur.",
  stack_groups: [
    { name: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "Three.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Go", "Rust", "Java", "PostgreSQL"] },
    { name: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
    { name: "IA & Données", items: ["PyTorch", "TensorFlow", "LangChain", "Redis", "Kafka", "Airflow"] },
    { name: "Hardware & IoT", items: ["Arduino", "ESP32", "Raspberry Pi", "STM32", "LoRa", "MQTT"] },
    { name: "Sécurité", items: ["Zero Trust", "mTLS", "Vault", "SIEM", "WAF", "SOC"] },
  ],

  // Cinematic redesign — additional copy
  tagline_lines: ["SIX EXPERTISES.", "UNE ÉQUIPE.", "ZÉRO COMPROMIS."],
  stat_subs: [
    "Plateforme caribéenne · PCI-DSS",
    "Interopérabilité HL7/FHIR",
    "Portail services publics",
    "STEM · 3 pays",
  ],
  cta_giant_1: "Si nous pouvons moderniser l'infrastructure d'une nation,",
  cta_giant_2: "imaginez ce que nous pouvons faire",
  cta_giant_3: "pour votre entreprise.",
  cta_btn_primary: "Démarrer un projet",
  cta_btn_secondary: "Consulter nos expertises",
  hero_cta_primary: "Découvrir DeepXLab",
  hero_cta_secondary: "Nos expertises",
  scroll_label: "Scroll",
  impact_section: "Impact mesurable",
  depts_section: "Nos départements",
  depts_title: "Six expertises intégrées",
  cases_confidential: "Noms clients confidentiels — impacts vérifiables",
  values_section: "Nos valeurs",
};

// ─── ENGLISH ────────────────────────────────────────────────────
const en: Dict = {
  nav_expertises: "Expertise",
  nav_capacites: "Capabilities",
  nav_secteurs: "Sectors",
  nav_approche: "Approach",
  nav_produits: "Products",
  nav_presence: "Presence",
  nav_contact: "Get in touch",
  theme_light: "Light mode",
  theme_dark: "Dark mode",
  lang_label: "Language",

  hero_tag: "Multidisciplinary technology group in technology solutions",
  hero_lines: [
    "Engineering critical technology.",
    "Solving your complex problems.",
    "Operating what others won't.",
    "Building systems of trust.",
  ],
  hero_desc:
    "Six integrated expertises. One team. One contractual responsibility — from first prototype to continuous operations.",
  hero_software: "Software",
  hero_hardware: "Hardware",
  hero_security: "Security",
  hero_research: "Research",

  marquee_items: [
    "Custom software",
    "Network infrastructure",
    "Cybersecurity",
    "IoT & embedded systems",
    "Artificial intelligence",
    "Interface design",
    "Audiovisual production",
    "Applied R&D",
    "Educational kits",
    "Cloud deployment",
    "Surveillance & access control",
    "Technology consulting",
  ],

  div_section: "Expertise",
  div_title: "Six integrated expertises. Unified execution.",
  div_items: [
    {
      name: "Education & STEM",
      desc: "Structured educational programs, proprietary kits and turnkey labs for schools and institutions.",
      services: ["Arduino & ESP32 kits", "STEM curricula", "LMS platforms", "Mobile labs", "Teacher training"],
    },
    {
      name: "Enterprise Solutions & IT",
      desc: "Design, deployment and maintenance of software systems and network infrastructure for businesses of all sizes.",
      services: ["ERP & CRM", "Network infrastructure", "Cloud & DevOps", "24/7 managed support", "System migration"],
    },
    {
      name: "Security & Intelligent Systems",
      desc: "Integrated surveillance, access control and cybersecurity systems for sensitive sites and critical organizations.",
      services: ["AI video surveillance", "Biometric access control", "Offensive/defensive cybersecurity", "Audit & compliance", "Managed SOC"],
    },
    {
      name: "Design & Visual Communication",
      desc: "Brand identity, user interfaces and design systems for digital products and corporate communication.",
      services: ["Branding & identity", "UI/UX Design", "Design systems", "Motion design", "Art direction"],
    },
    {
      name: "Content & Media",
      desc: "Audiovisual production, content strategy and digital communication for brands and institutions.",
      services: ["Video production", "Photography", "Content strategy", "Social media", "Corporate communication"],
    },
    {
      name: "Research & Development",
      desc: "Applied research in artificial intelligence, IoT and embedded systems for proprietary products and clients.",
      services: ["AI & Machine Learning", "IoT & embedded", "Rapid prototyping", "Patents & IP", "Publications"],
    },
  ],

  cap_section: "Capabilities",
  cap_title: "Software and hardware, custom-built.",
  cap_software: "Software",
  cap_hardware: "Hardware",
  cap_sw_items: [
    "Web & mobile applications",
    "SaaS platforms",
    "ERP / CRM systems",
    "APIs & microservices",
    "AI & data processing",
    "Real-time interfaces",
    "Process automation",
    "Distributed systems",
  ],
  cap_hw_items: [
    "Educational IoT kits",
    "Custom circuit boards",
    "Embedded systems",
    "Industrial sensors",
    "Surveillance enclosures",
    "Access control terminals",
    "Mechanical prototypes",
    "Robotic integration",
  ],

  sec_section: "Sectors",
  sec_title: "Demanding sectors. Solutions that deliver.",
  sec_items: [
    { name: "Banking & Finance", desc: "Transactional platforms, regulatory compliance, financial cybersecurity.", clients: "Financial institutions, fintechs, central banks" },
    { name: "Healthcare", desc: "Hospital systems, patient records, telemedicine and connected medical devices.", clients: "Hospitals, clinics, health ministries" },
    { name: "Education", desc: "Learning platforms, STEM labs, educational tools and school management systems.", clients: "Schools, universities, educational NGOs" },
    { name: "Government & Institutions", desc: "Identity systems, public service platforms, critical infrastructure.", clients: "Ministries, municipalities, public agencies" },
    { name: "Industry & Logistics", desc: "Industrial monitoring, supply chain optimization, IoT and predictive maintenance.", clients: "Manufacturers, carriers, port operators" },
    { name: "Commerce & Retail", desc: "E-commerce platforms, POS systems, inventory management and customer analytics.", clients: "Distribution chains, marketplaces, retailers" },
    { name: "Private Security", desc: "Intelligent video surveillance, access control, alert systems and incident management.", clients: "Security firms, sensitive sites, residences" },
    { name: "NGOs & Cooperation", desc: "Project tracking tools, data collection platforms and reporting systems.", clients: "International NGOs, development agencies" },
  ],

  fly_section: "Approach",
  fly_title: "Our operating model",
  fly_center: "DEEPXLAB / OPERATING MODEL",
  fly_principles: [
    { title: "Vertical integration", desc: "Every skill is in-house. No subcontracting on critical deliverables." },
    { title: "Full chain", desc: "From initial diagnosis to post-deployment support, one team, one contract." },
    { title: "Intellectual property", desc: "Our clients retain full ownership of code, designs and documentation." },
    { title: "Operational continuity", desc: "24/7 monitoring, continuous updates, and knowledge transfer to internal teams." },
  ],

  proc_section: "Process",
  proc_title: "From first contact to deployment.",
  proc_steps: [
    { num: "01", title: "Initial contact", desc: "Initial exchange to understand the context, stakes and project constraints.", dur: "1–2 days" },
    { num: "02", title: "Discovery & Audit", desc: "In-depth analysis of existing systems, problem identification and needs mapping.", dur: "1–2 weeks" },
    { num: "03", title: "Architecture & Proposal", desc: "Technical solution design, technology choices and project planning.", dur: "1–2 weeks" },
    { num: "04", title: "Development & Integration", desc: "Development sprints, code reviews, continuous testing and progressive integration.", dur: "4–16 weeks" },
    { num: "05", title: "Deployment", desc: "Production launch, data migration, team training and final validation.", dur: "1–2 weeks" },
    { num: "06", title: "Supervision", desc: "Continuous monitoring, technical support, updates and performance optimization.", dur: "Ongoing" },
  ],

  prod_section: "Products",
  prod_title: "Proprietary solutions developed in-house.",
  prod_items: [
    { id: "P/01", name: "Maker Kit", desc: "Starter kit for electronics and programming for beginners." },
    { id: "P/02", name: "Arduino Kit", desc: "Advanced Arduino prototyping kit with sensors, actuators and guides." },
    { id: "P/03", name: "ESP32 Kit", desc: "ESP32-based IoT kit with Wi-Fi/Bluetooth connectivity and examples." },
    { id: "P/04", name: "Access Management Platform", desc: "Proprietary biometric and card-based access control system." },
    { id: "P/05", name: "GPS Tracking", desc: "Real-time fleet geolocation and tracking solution." },
    { id: "P/06", name: "STEM LMS", desc: "Online learning platform specialized in science and technology." },
  ],

  stat_items: [
    { val: "06", label: "Integrated expertises" },
    { val: "04", label: "Operational languages" },
    { val: "24/7", label: "Operational continuity" },
    { val: "∞", label: "Borderless" },
  ],

  man_section: "About us",
  man_text_1:
    "DeepXlab designs, develops and operates custom software platforms, hardware infrastructure and security systems. One multidisciplinary team, from first prototype to continuous operations.",
  man_text_2:
    "We work for organizations that demand technology that holds under real constraints — regulatory, operational, geographic.",
  man_pillars: [
    { title: "Rigor", desc: "Every deliverable is documented, tested and signed. Quality is not a goal, it's a requirement." },
    { title: "Autonomy", desc: "Our clients don't depend on a black box. We train their teams and transfer mastery." },
    { title: "Commitment", desc: "We stand by our clients for the long term. A deployment is never the end of a relationship." },
  ],

  sig_pillars: [
    { letter: "DEEP", sub: "Technical depth" },
    { letter: "X", sub: "Applied research" },
    { letter: "LAB", sub: "Execution excellence" },
  ],

  global_section: "Global presence",
  global_title: "Borderless operations.",

  prob_title: "You have a problem no one can solve.",
  prob_sub: "That's precisely what we prefer.",
  prob_cta: "Let's talk",

  cta_section: "Contact",
  cta_title_1: "Let's work together",
  cta_title_2: "on what comes next.",
  cta_desc:
    "Our teams support organizations operating in demanding environments that expect rigor, autonomy and long-term commitment from a technology partner.",
  cta_btn: "contact@deepxlab.com",
  cta_link: "Explore our expertise",
  cta_contacts: [
    { label: "Sales", email: "contact@deepxlab.com" },
    { label: "Partnerships", email: "partners@deepxlab.com" },
    { label: "Careers", email: "careers@deepxlab.com" },
    { label: "Press", email: "press@deepxlab.com" },
  ],

  foot_rights: "All rights reserved.",

  svc_section: "Our services",
  svc_title: "Three concrete offers. One shared expertise.",
  svc_desc: "We're launching DeepXlab with three active service lines, tailored to Haitian local needs, the diaspora, and regional SMBs.",
  svc_items: [
    { tag: "01", slug: "developpement", name: "Custom web & mobile development", desc: "Websites, platforms and apps built for Haitian clients and the diaspora — landing sites, e-commerce, business apps, mobile apps.", bullets: ["Institutional websites", "E-commerce & local payment", "Business applications", "iOS/Android mobile apps"] },
    { tag: "02", slug: "stem", name: "STEM kits & robotics courses", desc: "Arduino/ESP32 proprietary kits assembled in-house, sold with our guides and private STEM and robotics courses.", bullets: ["Maker / Arduino / ESP32 kits", "Original teaching guides", "Private STEM & robotics courses", "Workshops for schools & families"] },
    { tag: "03", slug: "consulting", name: "IT consulting for SMBs", desc: "Audit, modernization and support for Haitian SMBs going digital without being left behind.", bullets: ["IT audit & mapping", "Modernization & cloud", "Baseline cybersecurity", "Team training"] },
  ],
  svc_cta: "Explore service",

  svc_back: "Back to home",
  svc_offerings: "Our offering",
  svc_process: "Process",
  svc_pricing: "Indicative pricing",
  svc_faq: "FAQ",
  svc_contact_cta: "Let's talk about your project",

  svc_dev: {
    hero_tag: "Web & mobile development",
    hero_title: "Sites and apps that hold, even in Haiti.",
    hero_sub: "We build landing sites, e-commerce, business platforms and mobile apps for Haitian and diaspora businesses and institutions.",
    offerings: [
      { t: "Institutional & landing sites", d: "Custom, fast, SEO-ready, multilingual sites. Built for limited connectivity and mobile-first audiences." },
      { t: "E-commerce & local payment", d: "Online stores integrating payment methods used in Haiti and the diaspora (MonCash, Natcash, cards, Zelle, CashApp)." },
      { t: "Business platforms", d: "Internal tools to manage clients, stock, bookings, billing, subscriptions, production tracking. Custom, not rigid SaaS." },
      { t: "Mobile apps", d: "iOS and Android apps built with React Native or native as needed, distributed via App Store, Play Store or direct APK." },
    ],
    process: [
      "Scoping interview to understand business, users and constraints.",
      "Validated mockups and prototypes before any line of code.",
      "Short sprint development with regular demos.",
      "Launch, training and ongoing support after deployment.",
    ],
    pricing: [
      { t: "Landing site", d: "From 1,500 USD", note: "Delivered in 3–5 weeks" },
      { t: "E-commerce", d: "From 3,500 USD", note: "Delivered in 6–10 weeks" },
      { t: "Business platform", d: "Quote-based", note: "Based on scope" },
      { t: "Mobile app", d: "From 6,000 USD", note: "iOS + Android included" },
    ],
    faq: [
      { q: "Do you work remotely?", r: "Yes. Our teams are based between Boston and Port-au-Prince. We work via video, WhatsApp and on-site as needed." },
      { q: "Do you deliver the source code?", r: "Always. You fully own the code, designs and documentation. No technical lock-in." },
      { q: "Do you also handle maintenance?", r: "Yes, with monthly retainers. Monitoring, updates, fixes and enhancements." },
      { q: "Can we pay in gourdes?", r: "Yes, in gourdes, US dollars, by wire, MonCash, card or Zelle, whichever works for you." },
    ],
  },

  svc_stem: {
    hero_tag: "STEM education & robotics",
    hero_title: "Kits and courses to train Haiti's next generation of engineers.",
    hero_sub: "We assemble our own Arduino and ESP32 kits in Port-au-Prince, bundled with original teaching guides, and teach private STEM and robotics classes.",
    offerings: [
      { t: "Maker Kit (beginner)", d: "First taste of electronics: LEDs, resistors, buttons, buzzer. Ships with step-by-step guide in French and Creole." },
      { t: "Arduino Kit", d: "Complete kit around Arduino Uno: sensors, motors, screens, breadboard. 20+ guided projects." },
      { t: "ESP32 / IoT Kit", d: "Wi-Fi and Bluetooth connected kit for IoT projects: home automation, weather stations, remote sensors." },
      { t: "Private STEM classes", d: "One-on-one or small-group classes (kids, teens, adults). Programming, electronics, robotics, 3D printing." },
      { t: "School workshops", d: "Turnkey programs for Haitian schools and universities: mobile lab, kits, teacher training." },
      { t: "Competitions & clubs", d: "Support for school robotics clubs and preparation for regional competitions." },
    ],
    process: [
      "Choose the right kit or program based on age, level and goal.",
      "Delivery of hardware and printed guides.",
      "In-person classes (Port-au-Prince) or remote (diaspora).",
      "Certificate at the end + post-class follow-up.",
    ],
    pricing: [
      { t: "Maker Kit", d: "45 USD", note: "Ships with guide + tutorials" },
      { t: "Arduino Kit", d: "85 USD", note: "20+ guided projects" },
      { t: "ESP32 Kit", d: "120 USD", note: "IoT + Wi-Fi projects" },
      { t: "Individual class", d: "25 USD / session", note: "1 hour, flexible" },
      { t: "School program", d: "Quote-based", note: "Kits + classes + teacher training" },
    ],
    faq: [
      { q: "What age range?", r: "Maker Kit from age 10, Arduino from 12, ESP32 from 14. Classes are adapted to each student's level." },
      { q: "Do you ship across Haiti?", r: "Yes, free delivery in Port-au-Prince, other cities via partner carrier." },
      { q: "What language are the classes in?", r: "French and Haitian Creole, with printed material in both languages." },
      { q: "Can I buy the kit without the class?", r: "Yes, kits are sold separately with printed guides and online video tutorials." },
    ],
  },

  svc_consulting: {
    hero_tag: "IT consulting",
    hero_title: "For Haitian SMBs that want to grow without being outpaced by tech.",
    hero_sub: "We audit your IT, give clear choices, and support you through modernization — no jargon, no vendor lock-in.",
    offerings: [
      { t: "Full IT audit", d: "Systems mapping, risks, hidden costs and improvement opportunities. Written, actionable report." },
      { t: "Modernization plan", d: "ROI-prioritized roadmap. What you keep, migrate, or sunset." },
      { t: "Cloud migration", d: "Support for moving your data and apps to the cloud (AWS, Azure, Google) securely." },
      { t: "Baseline cybersecurity", d: "Best practices in place: passwords, backups, antivirus, firewall, staff training." },
      { t: "Vendor choice & negotiation", d: "We compare offers, negotiate contracts and make sure you aren't paying for useless services." },
      { t: "Team training", d: "Practical workshops for your staff: office tools, security, new business software." },
    ],
    process: [
      "Free initial interview to understand your business and priorities.",
      "1–2 week audit with system access and team interviews.",
      "Clear report with priced, prioritized action plan.",
      "Implementation support, directly or via our tech teams.",
    ],
    pricing: [
      { t: "IT audit", d: "From 800 USD", note: "Report in 2 weeks" },
      { t: "Modernization plan", d: "From 1,500 USD", note: "Audit + roadmap" },
      { t: "Monthly retainer", d: "From 600 USD / month", note: "Part-time fractional CTO" },
      { t: "Team training", d: "From 400 USD / day", note: "On-site or remote" },
    ],
    faq: [
      { q: "What company size?", r: "5 to 100 employees typically. Below that we suggest simple solutions, above we switch to large-account engagements." },
      { q: "How long is an audit?", r: "2 to 4 weeks depending on size and complexity. We always deliver a written report, not just a verbal presentation." },
      { q: "What sectors do you work with?", r: "Retail, healthcare, education, professional services, light industry, NGOs. No sector excluded." },
      { q: "Is it confidential?", r: "Yes — NDA signed before any sensitive exchange and our consultants are bound by permanent confidentiality." },
    ],
  },

  meth_section: "Methodology",
  meth_title: "Sixteen steps. Zero improvisation.",
  meth_desc: "Every project follows a 16-phase internal methodology, from first interview to long-term support.",
  meth_steps: [
    { n: "00", t: "Context understanding", d: "Immersion in the ecosystem, constraints and strategic stakes." },
    { n: "01", t: "Existing analysis", d: "Technical and functional audit of current systems, processes and data." },
    { n: "02", t: "Problem analysis", d: "Mapping friction points, risks and improvement opportunities." },
    { n: "03", t: "Stakeholder identification", d: "Inventory of stakeholders, roles and responsibilities." },
    { n: "04", t: "Goals & criteria", d: "Definition of measurable objectives and success criteria." },
    { n: "05", t: "Functional needs", d: "Specification of user-facing and business features." },
    { n: "06", t: "Business rules", d: "Formalization of organization-specific rules, workflows and logic." },
    { n: "07", t: "Business data", d: "Identification of entities, flows and data volumes to process." },
    { n: "08", t: "Modeling", d: "Design of data models, relational schemas and diagrams." },
    { n: "09", t: "Architecture", d: "Definition of software, hardware and network architecture." },
    { n: "10", t: "Technology choices", d: "Selection of technologies, frameworks and services fit for the context." },
    { n: "11", t: "Backend development", d: "Implementation of APIs, services, integrations and server logic." },
    { n: "12", t: "Frontend development", d: "Creation of user interfaces, web and mobile experiences." },
    { n: "13", t: "Testing", d: "Unit, integration, load testing and functional validation." },
    { n: "14", t: "Deployment", d: "Production rollout, migration, training and go-live." },
    { n: "15", t: "Documentation & maintenance", d: "Complete documentation, knowledge transfer and ongoing support." },
  ],

  cases_section: "References",
  cases_title: "Projects that hold under real constraints.",
  cases_desc: "Projects delivered in critical environments. Client names confidential.",
  cases_items: [
    { tag: "Banking & Finance", title: "Regional transactional platform", metric: "4M+ transactions/month", desc: "Full overhaul of a Caribbean bank's transactional core. Event-driven architecture, PCI-DSS compliance, 99.99% uptime." },
    { tag: "Healthcare", title: "National electronic health record", metric: "120 facilities connected", desc: "Centralized system for a regional hospital network. HL7/FHIR interoperability, end-to-end encryption." },
    { tag: "Government", title: "Public services platform", metric: "800k active citizens", desc: "Unified portal for administrative services. Strong authentication, electronic signature, multi-ministry integration." },
    { tag: "Education", title: "Turnkey STEM labs", metric: "45 schools equipped", desc: "Deployment of proprietary educational kits, LMS platform and teacher training across three countries." },
  ],

  stack_section: "Tech stack",
  stack_title: "Technologies mastered in depth.",
  stack_groups: [
    { name: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "Three.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Go", "Rust", "Java", "PostgreSQL"] },
    { name: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
    { name: "AI & Data", items: ["PyTorch", "TensorFlow", "LangChain", "Redis", "Kafka", "Airflow"] },
    { name: "Hardware & IoT", items: ["Arduino", "ESP32", "Raspberry Pi", "STM32", "LoRa", "MQTT"] },
    { name: "Security", items: ["Zero Trust", "mTLS", "Vault", "SIEM", "WAF", "SOC"] },
  ],

  // Cinematic redesign — additional copy
  tagline_lines: ["SIX EXPERTISES.", "ONE TEAM.", "ZERO COMPROMISE."],
  stat_subs: [
    "Caribbean platform · PCI-DSS",
    "HL7/FHIR interoperability",
    "Public services portal",
    "STEM · 3 countries",
  ],
  cta_giant_1: "If we can modernise the infrastructure of a nation,",
  cta_giant_2: "imagine what we can do",
  cta_giant_3: "for your business.",
  cta_btn_primary: "Start a project",
  cta_btn_secondary: "Explore our expertise",
  hero_cta_primary: "Discover DeepXLab",
  hero_cta_secondary: "Our expertise",
  scroll_label: "Scroll",
  impact_section: "Measurable impact",
  depts_section: "Our departments",
  depts_title: "Six integrated areas of expertise",
  cases_confidential: "Client names confidential — verifiable impact",
  values_section: "Our values",
};

// ─── SPANISH ────────────────────────────────────────────────────
const es: Dict = {
  nav_expertises: "Experiencia",
  nav_capacites: "Capacidades",
  nav_secteurs: "Sectores",
  nav_approche: "Enfoque",
  nav_produits: "Productos",
  nav_presence: "Presencia",
  nav_contact: "Contáctenos",
  theme_light: "Modo claro",
  theme_dark: "Modo oscuro",
  lang_label: "Idioma",

  hero_tag: "Grupo tecnológico multidisciplinario en soluciones tecnológicas",
  hero_lines: [
    "Diseñar tecnología crítica.",
    "Resolver sus problemas complejos.",
    "Operar lo que otros no se atreven.",
    "Construir sistemas de confianza.",
  ],
  hero_desc:
    "Seis especialidades integradas. Un solo equipo. Una sola responsabilidad contractual — del primer prototipo a la operación continua.",
  hero_software: "Software",
  hero_hardware: "Hardware",
  hero_security: "Seguridad",
  hero_research: "Investigación",

  marquee_items: [
    "Software a medida",
    "Infraestructura de red",
    "Ciberseguridad",
    "IoT y sistemas embebidos",
    "Inteligencia artificial",
    "Diseño de interfaces",
    "Producción audiovisual",
    "I+D aplicada",
    "Kits educativos",
    "Despliegue en la nube",
    "Vigilancia y control de acceso",
    "Consultoría tecnológica",
  ],

  div_section: "Experiencia",
  div_title: "Seis especialidades integradas. Ejecución unificada.",
  div_items: [
    {
      name: "Educación y STEM",
      desc: "Programas educativos estructurados, kits propietarios y laboratorios llave en mano para escuelas e instituciones.",
      services: ["Kits Arduino y ESP32", "Currículos STEM", "Plataformas LMS", "Laboratorios móviles", "Capacitación docente"],
    },
    {
      name: "Soluciones empresariales e IT",
      desc: "Diseño, despliegue y mantenimiento de sistemas de software e infraestructura de red para empresas de todos los tamaños.",
      services: ["ERP y CRM", "Infraestructura de red", "Cloud y DevOps", "Soporte gestionado 24/7", "Migración de sistemas"],
    },
    {
      name: "Seguridad y Sistemas inteligentes",
      desc: "Sistemas integrados de vigilancia, control de acceso y ciberseguridad para sitios sensibles y organizaciones críticas.",
      services: ["Videovigilancia IA", "Control de acceso biométrico", "Ciberseguridad ofensiva/defensiva", "Auditoría y cumplimiento", "SOC gestionado"],
    },
    {
      name: "Diseño y Comunicación visual",
      desc: "Identidad de marca, interfaces de usuario y sistemas de diseño para productos digitales y comunicación corporativa.",
      services: ["Branding e identidad", "Diseño UI/UX", "Sistemas de diseño", "Motion design", "Dirección artística"],
    },
    {
      name: "Contenido y Medios",
      desc: "Producción audiovisual, estrategia de contenido y comunicación digital para marcas e instituciones.",
      services: ["Producción de video", "Fotografía", "Estrategia de contenido", "Redes sociales", "Comunicación corporativa"],
    },
    {
      name: "Investigación y Desarrollo",
      desc: "Investigación aplicada en inteligencia artificial, IoT y sistemas embebidos para productos propietarios y clientes.",
      services: ["IA y Machine Learning", "IoT y embebidos", "Prototipado rápido", "Patentes y PI", "Publicaciones"],
    },
  ],

  cap_section: "Capacidades",
  cap_title: "Software y hardware, diseñados a medida.",
  cap_software: "Software",
  cap_hardware: "Hardware",
  cap_sw_items: [
    "Aplicaciones web y móviles",
    "Plataformas SaaS",
    "Sistemas ERP / CRM",
    "APIs y microservicios",
    "IA y procesamiento de datos",
    "Interfaces en tiempo real",
    "Automatización de procesos",
    "Sistemas distribuidos",
  ],
  cap_hw_items: [
    "Kits educativos IoT",
    "Tarjetas electrónicas a medida",
    "Sistemas embebidos",
    "Sensores industriales",
    "Carcasas de vigilancia",
    "Terminales de control de acceso",
    "Prototipos mecánicos",
    "Integración robótica",
  ],

  sec_section: "Sectores",
  sec_title: "Sectores exigentes. Soluciones a la altura.",
  sec_items: [
    { name: "Banca y Finanzas", desc: "Plataformas transaccionales, cumplimiento regulatorio, ciberseguridad financiera.", clients: "Instituciones financieras, fintechs, bancos centrales" },
    { name: "Salud", desc: "Sistemas hospitalarios, expedientes de pacientes, telemedicina y dispositivos médicos conectados.", clients: "Hospitales, clínicas, ministerios de salud" },
    { name: "Educación", desc: "Plataformas de aprendizaje, laboratorios STEM, herramientas pedagógicas y sistemas de gestión escolar.", clients: "Escuelas, universidades, ONGs educativas" },
    { name: "Gobierno e Instituciones", desc: "Sistemas de identidad, plataformas de servicios públicos, infraestructura crítica.", clients: "Ministerios, municipalidades, agencias públicas" },
    { name: "Industria y Logística", desc: "Supervisión industrial, optimización de cadena logística, IoT y mantenimiento predictivo.", clients: "Fabricantes, transportistas, operadores portuarios" },
    { name: "Comercio y Retail", desc: "Plataformas e-commerce, sistemas de punto de venta, gestión de inventario y análisis de clientes.", clients: "Cadenas de distribución, marketplaces, retailers" },
    { name: "Seguridad privada", desc: "Videovigilancia inteligente, control de acceso, sistemas de alerta y gestión de incidentes.", clients: "Empresas de seguridad, sitios sensibles, residencias" },
    { name: "ONGs y Cooperación", desc: "Herramientas de seguimiento de proyectos, plataformas de recolección de datos y sistemas de reportes.", clients: "ONGs internacionales, agencias de desarrollo" },
  ],

  fly_section: "Enfoque",
  fly_title: "Nuestro modelo operativo",
  fly_center: "DEEPXLAB / MODELO OPERATIVO",
  fly_principles: [
    { title: "Integración vertical", desc: "Cada competencia es interna. Sin subcontratación en entregables críticos." },
    { title: "Cadena completa", desc: "Del diagnóstico inicial al soporte post-despliegue, un solo equipo, un solo contrato." },
    { title: "Propiedad intelectual", desc: "Nuestros clientes conservan la propiedad total del código, diseños y documentación." },
    { title: "Continuidad operativa", desc: "Monitoreo 24/7, actualizaciones continuas y transferencia de competencias a equipos internos." },
  ],

  proc_section: "Proceso",
  proc_title: "Del primer contacto al despliegue.",
  proc_steps: [
    { num: "01", title: "Primer contacto", desc: "Intercambio inicial para comprender el contexto, los desafíos y las restricciones del proyecto.", dur: "1–2 días" },
    { num: "02", title: "Discovery y Auditoría", desc: "Análisis profundo de lo existente, identificación de problemas y mapeo de necesidades.", dur: "1–2 semanas" },
    { num: "03", title: "Arquitectura y Propuesta", desc: "Diseño de la solución técnica, elecciones tecnológicas y planificación del proyecto.", dur: "1–2 semanas" },
    { num: "04", title: "Desarrollo e Integración", desc: "Sprints de desarrollo, revisiones de código, pruebas continuas e integración progresiva.", dur: "4–16 semanas" },
    { num: "05", title: "Despliegue", desc: "Puesta en producción, migración de datos, capacitación de equipos y validación final.", dur: "1–2 semanas" },
    { num: "06", title: "Supervisión", desc: "Monitoreo continuo, soporte técnico, actualizaciones y optimización del rendimiento.", dur: "Continuo" },
  ],

  prod_section: "Productos",
  prod_title: "Soluciones propietarias desarrolladas internamente.",
  prod_items: [
    { id: "P/01", name: "Maker Kit", desc: "Kit de iniciación a la electrónica y programación para principiantes." },
    { id: "P/02", name: "Arduino Kit", desc: "Kit avanzado de prototipado Arduino con sensores, actuadores y guías." },
    { id: "P/03", name: "ESP32 Kit", desc: "Kit IoT basado en ESP32 con conectividad Wi-Fi/Bluetooth y ejemplos." },
    { id: "P/04", name: "Plataforma de gestión de acceso", desc: "Sistema propietario de control de acceso biométrico y por tarjeta." },
    { id: "P/05", name: "Seguimiento GPS", desc: "Solución de geolocalización y seguimiento de flota en tiempo real." },
    { id: "P/06", name: "LMS STEM", desc: "Plataforma de aprendizaje en línea especializada en ciencia y tecnología." },
  ],

  stat_items: [
    { val: "06", label: "Especialidades integradas" },
    { val: "04", label: "Idiomas operativos" },
    { val: "24/7", label: "Continuidad operativa" },
    { val: "∞", label: "Sin fronteras" },
  ],

  man_section: "Quiénes somos",
  man_text_1:
    "DeepXlab diseña, desarrolla y opera plataformas de software, infraestructuras de hardware y sistemas de seguridad a medida. Un solo equipo multidisciplinario, del primer prototipo a la operación continua.",
  man_text_2:
    "Trabajamos para organizaciones que exigen que la tecnología resista bajo restricciones reales — regulatorias, operativas, geográficas.",
  man_pillars: [
    { title: "Rigor", desc: "Cada entregable está documentado, probado y firmado. La calidad no es un objetivo, es una condición." },
    { title: "Autonomía", desc: "Nuestros clientes no dependen de una caja negra. Capacitamos a sus equipos y transferimos el dominio." },
    { title: "Compromiso", desc: "Permanecemos al lado de nuestros clientes a largo plazo. Un despliegue nunca es el fin de una relación." },
  ],

  sig_pillars: [
    { letter: "DEEP", sub: "Profundidad técnica" },
    { letter: "X", sub: "Investigación aplicada" },
    { letter: "LAB", sub: "Excelencia de ejecución" },
  ],

  global_section: "Presencia mundial",
  global_title: "Operaciones sin fronteras.",

  prob_title: "Tiene un problema que nadie puede resolver.",
  prob_sub: "Eso es precisamente lo que preferimos.",
  prob_cta: "Hablemos",

  cta_section: "Contacto",
  cta_title_1: "Trabajemos juntos",
  cta_title_2: "en lo que viene después.",
  cta_desc:
    "Nuestros equipos acompañan a las organizaciones que operan en entornos exigentes y que esperan de un socio tecnológico rigor, autonomía y compromiso a largo plazo.",
  cta_btn: "contact@deepxlab.com",
  cta_link: "Consultar nuestras especialidades",
  cta_contacts: [
    { label: "Contacto comercial", email: "contact@deepxlab.com" },
    { label: "Alianzas", email: "partners@deepxlab.com" },
    { label: "Carreras", email: "careers@deepxlab.com" },
    { label: "Prensa", email: "press@deepxlab.com" },
  ],

  foot_rights: "Todos los derechos reservados.",

  svc_section: "Nuestros servicios",
  svc_title: "Tres ofertas concretas. Una experiencia compartida.",
  svc_desc: "Iniciamos DeepXlab con tres líneas de servicio activas, adaptadas a las necesidades locales haitianas, la diáspora y las PYMES regionales.",
  svc_items: [
    { tag: "01", slug: "developpement", name: "Desarrollo web y móvil a medida", desc: "Sitios, plataformas y aplicaciones construidos para clientes haitianos y de la diáspora — vitrina, e-commerce, apps de negocio, móviles.", bullets: ["Sitios institucionales", "E-commerce y pago local", "Aplicaciones de negocio", "Apps móviles iOS/Android"] },
    { tag: "02", slug: "stem", name: "Kits STEM y cursos de robótica", desc: "Kits Arduino/ESP32 propietarios ensamblados internamente, vendidos con nuestras guías y cursos privados de STEM y robótica.", bullets: ["Kits Maker / Arduino / ESP32", "Guías pedagógicas originales", "Cursos privados STEM y robótica", "Talleres para escuelas y familias"] },
    { tag: "03", slug: "consulting", name: "Consultoría IT para PYMES", desc: "Auditoría, modernización y acompañamiento de PYMES haitianas que quieren digitalizar sus operaciones sin quedarse atrás.", bullets: ["Auditoría IT y mapeo", "Modernización y cloud", "Ciberseguridad básica", "Formación de equipos"] },
  ],
  svc_cta: "Ver el servicio",

  svc_back: "Volver al inicio",
  svc_offerings: "Nuestra oferta",
  svc_process: "Proceso",
  svc_pricing: "Precios indicativos",
  svc_faq: "Preguntas frecuentes",
  svc_contact_cta: "Hablemos de su proyecto",

  svc_dev: {
    hero_tag: "Desarrollo web y móvil",
    hero_title: "Sitios y aplicaciones que resisten, incluso en Haití.",
    hero_sub: "Construimos sitios vitrina, e-commerce, plataformas de negocio y apps móviles para empresas e instituciones haitianas y de la diáspora.",
    offerings: [
      { t: "Sitios institucionales y vitrina", d: "Sitios a medida, rápidos, SEO-ready, multilingües. Adaptados a conexiones limitadas y móviles dominantes." },
      { t: "E-commerce y pago local", d: "Tiendas en línea con integración de métodos de pago usados en Haití y la diáspora (MonCash, Natcash, tarjetas, Zelle, CashApp)." },
      { t: "Plataformas de negocio", d: "Herramientas internas para gestionar clientes, inventario, reservas, facturación, suscripciones, producción. A medida." },
      { t: "Aplicaciones móviles", d: "Apps iOS y Android en React Native o nativas, distribuidas vía App Store, Play Store o APK directo." },
    ],
    process: [
      "Entrevista de encuadre para entender actividad, usuarios y restricciones.",
      "Maquetas y prototipos validados antes de programar.",
      "Desarrollo por sprints cortos con demos regulares.",
      "Puesta en línea, formación y soporte continuo después del despliegue.",
    ],
    pricing: [
      { t: "Sitio vitrina", d: "Desde 1.500 USD", note: "Entregado en 3–5 semanas" },
      { t: "E-commerce", d: "Desde 3.500 USD", note: "Entregado en 6–10 semanas" },
      { t: "Plataforma de negocio", d: "Cotización", note: "Según alcance" },
      { t: "App móvil", d: "Desde 6.000 USD", note: "iOS + Android incluidos" },
    ],
    faq: [
      { q: "¿Trabajan a distancia?", r: "Sí. Nuestros equipos están entre Boston y Puerto Príncipe. Trabajamos por video, WhatsApp y presencial según necesidad." },
      { q: "¿Entregan el código fuente?", r: "Siempre. Usted es propietario total del código, diseños y documentación. Sin bloqueo técnico." },
      { q: "¿Hacen mantenimiento?", r: "Sí, con planes mensuales. Monitoreo, actualizaciones, correcciones y mejoras." },
      { q: "¿Se puede pagar en gourdes?", r: "Sí, en gourdes, dólares, por transferencia, MonCash, tarjeta o Zelle." },
    ],
  },

  svc_stem: {
    hero_tag: "Educación STEM y robótica",
    hero_title: "Kits y cursos para formar la próxima generación de ingenieros haitianos.",
    hero_sub: "Ensamblamos nuestros propios kits Arduino y ESP32 en Puerto Príncipe, con guías pedagógicas originales, y damos cursos privados de STEM y robótica.",
    offerings: [
      { t: "Kit Maker (principiante)", d: "Primer contacto con la electrónica: LEDs, resistencias, botones, zumbador. Guía paso a paso en francés y criollo." },
      { t: "Kit Arduino", d: "Kit completo con Arduino Uno: sensores, motores, pantallas, protoboard. Más de 20 proyectos guiados." },
      { t: "Kit ESP32 / IoT", d: "Kit conectado Wi-Fi y Bluetooth para proyectos IoT: domótica, estaciones meteo, sensores remotos." },
      { t: "Cursos privados STEM", d: "Clases individuales o grupos pequeños (niños, adolescentes, adultos). Programación, electrónica, robótica, impresión 3D." },
      { t: "Talleres para escuelas", d: "Programas llave en mano para escuelas y universidades haitianas: laboratorio móvil, kits, formación docente." },
      { t: "Competencias y clubes", d: "Acompañamiento de clubes de robótica escolares y preparación para competencias regionales." },
    ],
    process: [
      "Elección del kit o programa según edad, nivel y objetivo.",
      "Entrega del material y guías impresas.",
      "Clases presenciales (Puerto Príncipe) o a distancia (diáspora).",
      "Certificado al final + seguimiento post-curso.",
    ],
    pricing: [
      { t: "Kit Maker", d: "45 USD", note: "Con guía + tutoriales" },
      { t: "Kit Arduino", d: "85 USD", note: "Más de 20 proyectos guiados" },
      { t: "Kit ESP32", d: "120 USD", note: "Proyectos IoT + Wi-Fi" },
      { t: "Clase individual", d: "25 USD / sesión", note: "1 hora, flexible" },
      { t: "Programa escolar", d: "Cotización", note: "Kits + clases + formación docente" },
    ],
    faq: [
      { q: "¿Desde qué edad?", r: "Kit Maker desde 10 años, Arduino desde 12, ESP32 desde 14. Clases adaptadas al nivel." },
      { q: "¿Entregan en todo Haití?", r: "Sí, entrega en Puerto Príncipe incluida, otras ciudades vía transportista socio." },
      { q: "¿Qué idioma?", r: "Francés y criollo haitiano, con material impreso en ambos idiomas." },
      { q: "¿Puedo comprar el kit sin el curso?", r: "Sí, los kits se venden por separado con guías impresas y tutoriales en video en línea." },
    ],
  },

  svc_consulting: {
    hero_tag: "Consultoría IT",
    hero_title: "Para las PYMES haitianas que quieren crecer sin ser superadas por la tecnología.",
    hero_sub: "Auditamos su IT, damos opciones claras y acompañamos la modernización — sin jerga y sin dependencia a un solo proveedor.",
    offerings: [
      { t: "Auditoría IT completa", d: "Mapeo de sistemas, riesgos, costos ocultos y oportunidades de mejora. Informe escrito accionable." },
      { t: "Plan de modernización", d: "Hoja de ruta priorizada por ROI. Qué conservar, migrar o eliminar." },
      { t: "Migración a la nube", d: "Acompañamiento para llevar datos y aplicaciones al cloud (AWS, Azure, Google) de forma segura." },
      { t: "Ciberseguridad básica", d: "Buenas prácticas: contraseñas, copias de seguridad, antivirus, firewall, formación del personal." },
      { t: "Elección y negociación de proveedores", d: "Comparamos ofertas, negociamos contratos y evitamos servicios inútiles." },
      { t: "Formación de equipos", d: "Talleres prácticos: ofimática, seguridad, nuevos software de negocio." },
    ],
    process: [
      "Entrevista inicial gratuita para entender su actividad y prioridades.",
      "Auditoría de 1 a 2 semanas con acceso a sistemas y entrevistas al equipo.",
      "Informe claro con plan de acción cotizado y priorizado.",
      "Acompañamiento a la implementación, directo o vía nuestros equipos tech.",
    ],
    pricing: [
      { t: "Auditoría IT", d: "Desde 800 USD", note: "Informe en 2 semanas" },
      { t: "Plan de modernización", d: "Desde 1.500 USD", note: "Auditoría + hoja de ruta" },
      { t: "Acompañamiento mensual", d: "Desde 600 USD / mes", note: "CTO externalizado a tiempo parcial" },
      { t: "Formación de equipo", d: "Desde 400 USD / día", note: "Presencial o a distancia" },
    ],
    faq: [
      { q: "¿Para qué tamaño de empresa?", r: "De 5 a 100 empleados típicamente. Por debajo sugerimos soluciones simples, por encima un acompañamiento de gran cuenta." },
      { q: "¿Cuánto dura una auditoría?", r: "Entre 2 y 4 semanas según tamaño y complejidad. Siempre entregamos informe escrito." },
      { q: "¿Qué sectores?", r: "Comercio, salud, educación, servicios profesionales, industria ligera, ONG. Ningún sector excluido." },
      { q: "¿Es confidencial?", r: "Sí — NDA firmado antes de cualquier intercambio sensible y confidencialidad permanente de nuestros consultores." },
    ],
  },

  meth_section: "Metodología",
  meth_title: "Dieciséis pasos. Cero improvisación.",
  meth_desc: "Cada proyecto sigue una metodología interna de 16 fases, desde la primera entrevista hasta el soporte a largo plazo.",
  meth_steps: [
    { n: "00", t: "Comprensión del contexto", d: "Inmersión en el ecosistema, las restricciones y los desafíos estratégicos." },
    { n: "01", t: "Análisis de lo existente", d: "Auditoría técnica y funcional de sistemas, procesos y datos actuales." },
    { n: "02", t: "Análisis de problemas", d: "Mapeo de puntos de fricción, riesgos y oportunidades de mejora." },
    { n: "03", t: "Identificación de actores", d: "Inventario de partes interesadas, roles y responsabilidades." },
    { n: "04", t: "Objetivos y criterios", d: "Definición de objetivos medibles y criterios de éxito." },
    { n: "05", t: "Necesidades funcionales", d: "Especificación de funcionalidades para usuarios y negocio." },
    { n: "06", t: "Reglas de negocio", d: "Formalización de reglas, flujos y lógicas propias de la organización." },
    { n: "07", t: "Datos de negocio", d: "Identificación de entidades, flujos y volúmenes de datos." },
    { n: "08", t: "Modelado", d: "Diseño de modelos de datos, esquemas relacionales y diagramas." },
    { n: "09", t: "Arquitectura", d: "Definición de arquitectura de software, hardware y red." },
    { n: "10", t: "Elecciones tecnológicas", d: "Selección de tecnologías, frameworks y servicios adecuados." },
    { n: "11", t: "Desarrollo backend", d: "Implementación de APIs, servicios, integraciones y lógica de servidor." },
    { n: "12", t: "Desarrollo frontend", d: "Creación de interfaces de usuario, experiencias web y móvil." },
    { n: "13", t: "Pruebas", d: "Pruebas unitarias, de integración, de carga y validación funcional." },
    { n: "14", t: "Despliegue", d: "Puesta en producción, migración, formación y activación." },
    { n: "15", t: "Documentación y mantenimiento", d: "Documentación completa, transferencia de conocimientos y soporte continuo." },
  ],

  cases_section: "Referencias",
  cases_title: "Proyectos que resisten bajo restricciones reales.",
  cases_desc: "Proyectos entregados en entornos críticos. Nombres de clientes confidenciales.",
  cases_items: [
    { tag: "Banca y Finanzas", title: "Plataforma transaccional regional", metric: "4M+ transacciones/mes", desc: "Rediseño completo del núcleo transaccional de un banco caribeño. Arquitectura orientada a eventos, cumplimiento PCI-DSS, disponibilidad 99.99%." },
    { tag: "Salud", title: "Expediente clínico electrónico nacional", metric: "120 establecimientos conectados", desc: "Sistema centralizado para una red hospitalaria regional. Interoperabilidad HL7/FHIR, cifrado de extremo a extremo." },
    { tag: "Gobierno", title: "Plataforma de servicios públicos", metric: "800k ciudadanos activos", desc: "Portal unificado para servicios administrativos. Autenticación fuerte, firma electrónica, integración multi-ministerio." },
    { tag: "Educación", title: "Laboratorios STEM llave en mano", metric: "45 escuelas equipadas", desc: "Despliegue de kits pedagógicos propietarios, plataforma LMS y formación docente en tres países." },
  ],

  stack_section: "Stack tecnológico",
  stack_title: "Tecnologías dominadas en profundidad.",
  stack_groups: [
    { name: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "Three.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Go", "Rust", "Java", "PostgreSQL"] },
    { name: "Cloud y DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
    { name: "IA y Datos", items: ["PyTorch", "TensorFlow", "LangChain", "Redis", "Kafka", "Airflow"] },
    { name: "Hardware e IoT", items: ["Arduino", "ESP32", "Raspberry Pi", "STM32", "LoRa", "MQTT"] },
    { name: "Seguridad", items: ["Zero Trust", "mTLS", "Vault", "SIEM", "WAF", "SOC"] },
  ],

  // Cinematic redesign — additional copy
  tagline_lines: ["SEIS EXPERTICIAS.", "UN EQUIPO.", "CERO COMPROMISO."],
  stat_subs: [
    "Plataforma caribeña · PCI-DSS",
    "Interoperabilidad HL7/FHIR",
    "Portal de servicios públicos",
    "STEM · 3 países",
  ],
  cta_giant_1: "Si podemos modernizar la infraestructura de una nación,",
  cta_giant_2: "imagina lo que podemos hacer",
  cta_giant_3: "por su empresa.",
  cta_btn_primary: "Iniciar un proyecto",
  cta_btn_secondary: "Conocer nuestra experiencia",
  hero_cta_primary: "Descubrir DeepXLab",
  hero_cta_secondary: "Nuestra experiencia",
  scroll_label: "Scroll",
  impact_section: "Impacto medible",
  depts_section: "Nuestros departamentos",
  depts_title: "Seis experticias integradas",
  cases_confidential: "Nombres de clientes confidenciales — impacto verificable",
  values_section: "Nuestros valores",
};

// ─── HAITIAN CREOLE ─────────────────────────────────────────────
const ht: Dict = {
  nav_expertises: "Ekspètiz",
  nav_capacites: "Kapasite",
  nav_secteurs: "Sektè",
  nav_approche: "Apwòch",
  nav_produits: "Pwodui",
  nav_presence: "Prezans",
  nav_contact: "Kontakte nou",
  theme_light: "Mòd klè",
  theme_dark: "Mòd fonse",
  lang_label: "Lang",

  hero_tag: "Gwoup teknolojik miltidisiplinè nan solisyon teknolojik",
  hero_lines: [
    "Konsevwa teknoloji kritik.",
    "Rezoud pwoblèm konplèks ou yo.",
    "Opere sa lòt moun pa ka fè.",
    "Konstwi sistèm konfyans.",
  ],
  hero_desc:
    "Sis ekspètiz entegre. Yon sèl ekip. Yon sèl responsablite kontraktyèl — depi premye pwototip rive nan operasyon kontini.",
  hero_software: "Lojisyèl",
  hero_hardware: "Materyèl",
  hero_security: "Sekirite",
  hero_research: "Rechèch",

  marquee_items: [
    "Lojisyèl sou mezi",
    "Enfrastrikti rezo",
    "Sibèsekirite",
    "IoT & sistèm anbake",
    "Entèlijans atifisyèl",
    "Konsepsyon entèfas",
    "Pwodiksyon odyovizwèl",
    "R&D aplike",
    "Kit edikativ",
    "Deplwaman nan nyaj",
    "Siveyans & kontwòl aksè",
    "Konsiltasyon teknolojik",
  ],

  div_section: "Ekspètiz",
  div_title: "Sis ekspètiz entegre. Ekzekisyon inifye.",
  div_items: [
    {
      name: "Edikasyon & STEM",
      desc: "Pwogram edikativ estriktire, kit propriyetè ak laboratwa kle an men pou lekòl ak enstitisyon.",
      services: ["Kit Arduino & ESP32", "Kourikoulòm STEM", "Platfòm LMS", "Laboratwa mobil", "Fòmasyon anseyan"],
    },
    {
      name: "Solisyon antrepriz & IT",
      desc: "Konsepsyon, deplwaman ak antretyen sistèm lojisyèl ak enfrastrikti rezo pou biznis tout gwosè.",
      services: ["ERP & CRM", "Enfrastrikti rezo", "Cloud & DevOps", "Sipò jere 24/7", "Migrasyon sistèm"],
    },
    {
      name: "Sekirite & Sistèm entèlijan",
      desc: "Sistèm siveyans, kontwòl aksè ak sibèsekirite entegre pou sit sansib ak òganizasyon kritik.",
      services: ["Videyo siveyans IA", "Kontwòl aksè byometrik", "Sibèsekirite ofansiv/defansiv", "Odit & konfòmite", "SOC jere"],
    },
    {
      name: "Konsepsyon & Kominikasyon vizyèl",
      desc: "Idantite mak, entèfas itilizatè ak sistèm konsepsyon pou pwodui nimerik ak kominikasyon kòporatif.",
      services: ["Branding & idantite", "Konsepsyon UI/UX", "Sistèm konsepsyon", "Motion design", "Direksyon atis"],
    },
    {
      name: "Kontni & Medya",
      desc: "Pwodiksyon odyovizwèl, estrateji kontni ak kominikasyon dijital pou mak ak enstitisyon.",
      services: ["Pwodiksyon videyo", "Fotografi", "Estrateji kontni", "Rezo sosyal", "Kominikasyon kòporatif"],
    },
    {
      name: "Rechèch & Devlopman",
      desc: "Rechèch aplike nan entèlijans atifisyèl, IoT ak sistèm anbake pou pwodui propriyetè ak kliyan.",
      services: ["IA & Machine Learning", "IoT & anbake", "Pwototypaj rapid", "Patant & PI", "Piblikasyon"],
    },
  ],

  cap_section: "Kapasite",
  cap_title: "Lojisyèl ak materyèl, fèt sou mezi.",
  cap_software: "Lojisyèl",
  cap_hardware: "Materyèl",
  cap_sw_items: [
    "Aplikasyon wèb & mobil",
    "Platfòm SaaS",
    "Sistèm ERP / CRM",
    "API & mikwosèvis",
    "IA & tretman done",
    "Entèfas an tan reyèl",
    "Otomatizasyon pwosesis",
    "Sistèm distribye",
  ],
  cap_hw_items: [
    "Kit edikativ IoT",
    "Kat elektwonik sou mezi",
    "Sistèm anbake",
    "Captè endistryèl",
    "Bwat siveyans",
    "Tèminal kontwòl aksè",
    "Pwototip mekanik",
    "Entegrasyon wobotik",
  ],

  sec_section: "Sektè",
  sec_title: "Sektè ki egzijan. Solisyon ki nan nivo.",
  sec_items: [
    { name: "Bank & Finans", desc: "Platfòm tranzaksyonèl, konfòmite regilatwa, sibèsekirite finansyè.", clients: "Enstitisyon finansyè, fintèk, bank santral" },
    { name: "Sante", desc: "Sistèm lopital, dosye pasyan, telemedisin ak aparèy medikal konekte.", clients: "Lopital, klinik, ministè sante" },
    { name: "Edikasyon", desc: "Platfòm aprantisaj, laboratwa STEM, zouti pedagojik ak sistèm jesyon lekòl.", clients: "Lekòl, inivèsite, ONG edikativ" },
    { name: "Gouvènman & Enstitisyon", desc: "Sistèm idantite, platfòm sèvis piblik, enfrastrikti kritik.", clients: "Ministè, kolektivite, ajans piblik" },
    { name: "Endistri & Lojistik", desc: "Sipèvizyon endistryèl, optimizasyon chèn lojistik, IoT ak antretyen prediktif.", clients: "Manifakti, transpòtè, operatè pòtyè" },
    { name: "Komès & Retail", desc: "Platfòm e-commerce, sistèm kès, jesyon envantè ak analiz kliyan.", clients: "Chèn distribisyon, makètplays, retailè" },
    { name: "Sekirite prive", desc: "Videyo siveyans entèlijan, kontwòl aksè, sistèm alèt ak jesyon ensidan.", clients: "Konpayi sekirite, sit sansib, rezidans" },
    { name: "ONG & Kooperasyon", desc: "Zouti swivi pwojè, platfòm kolèkt done ak sistèm rapòtaj.", clients: "ONG entènasyonal, ajans devlopman" },
  ],

  fly_section: "Apwòch",
  fly_title: "Modèl operasyon nou",
  fly_center: "DEEPXLAB / MODÈL OPERATWA",
  fly_principles: [
    { title: "Entegrasyon vètikal", desc: "Chak konpetans se anndan. Okenn sou-kontraktasyon sou livrab kritik." },
    { title: "Chèn konplè", desc: "Depi dyagnostik inisyal rive sipò apre deplwaman, yon sèl ekip, yon sèl kontra." },
    { title: "Pwopriyete entelektyèl", desc: "Kliyan nou yo kenbe pwopriyete total kòd, konsepsyon ak dokimantasyon." },
    { title: "Kontinwite operasyonèl", desc: "Siveyans 24/7, mizajou kontini, ak transfè konpetans bay ekip entèn." },
  ],

  proc_section: "Pwosesis",
  proc_title: "Depi premye kontak rive nan deplwaman.",
  proc_steps: [
    { num: "01", title: "Premye kontak", desc: "Echanj inisyal pou konprann kontèks, enjè ak kontrènt pwojè a.", dur: "1–2 jou" },
    { num: "02", title: "Dekouvèt & Odit", desc: "Analiz apwofondi sa ki egziste, idantifikasyon pwoblèm ak katografi bezwen.", dur: "1–2 semèn" },
    { num: "03", title: "Achitèkti & Pwopozisyon", desc: "Konsepsyon solisyon teknik, chwa teknolojik ak planifikasyon pwojè.", dur: "1–2 semèn" },
    { num: "04", title: "Devlopman & Entegrasyon", desc: "Sprint devlopman, revizyon kòd, tès kontini ak entegrasyon pwogresiv.", dur: "4–16 semèn" },
    { num: "05", title: "Deplwaman", desc: "Miz an pwodiksyon, migrasyon done, fòmasyon ekip ak validasyon final.", dur: "1–2 semèn" },
    { num: "06", title: "Sipèvizyon", desc: "Siveyans kontini, sipò teknik, mizajou ak optimizasyon pèfòmans.", dur: "Kontini" },
  ],

  prod_section: "Pwodui",
  prod_title: "Solisyon propriyetè devlope anndan.",
  prod_items: [
    { id: "P/01", name: "Maker Kit", desc: "Kit inisyasyon nan elektwonik ak pwogramasyon pou debitan." },
    { id: "P/02", name: "Arduino Kit", desc: "Kit avanse pwototypaj Arduino ak captè, aktyatè ak gid." },
    { id: "P/03", name: "ESP32 Kit", desc: "Kit IoT baze sou ESP32 ak konektivite Wi-Fi/Bluetooth ak egzanp." },
    { id: "P/04", name: "Platfòm jesyon aksè", desc: "Sistèm propriyetè kontwòl aksè byometrik ak pa kat." },
    { id: "P/05", name: "Swivi GPS", desc: "Solisyon jewolokalizasyon ak swivi flòt an tan reyèl." },
    { id: "P/06", name: "LMS STEM", desc: "Platfòm aprantisaj an liy espesyalize nan syans ak teknoloji." },
  ],

  stat_items: [
    { val: "06", label: "Ekspètiz entegre" },
    { val: "04", label: "Lang operasyonèl" },
    { val: "24/7", label: "Kontinwite operasyonèl" },
    { val: "∞", label: "San fwontyè" },
  ],

  man_section: "Kiyès nou ye",
  man_text_1:
    "DeepXlab konsevwa, devlope epi opere platfòm lojisyèl, enfrastrikti materyèl ak sistèm sekirite sou mezi. Yon sèl ekip miltidisiplinè, depi premye pwototip rive nan operasyon kontini.",
  man_text_2:
    "Nou travay pou òganizasyon ki egzije teknoloji ki kenbe anba kontrènt reyèl — regilatwa, operasyonèl, jewografik.",
  man_pillars: [
    { title: "Rigè", desc: "Chak livrab dokimante, teste epi siyen. Kalite pa yon objektif, se yon kondisyon." },
    { title: "Otonomi", desc: "Kliyan nou yo pa depann de yon bwat nwa. Nou fòme ekip yo epi transfere metriz." },
    { title: "Angajman", desc: "Nou rete bò kote kliyan nou yo sou long tèm. Yon deplwaman pa janm fen yon relasyon." },
  ],

  sig_pillars: [
    { letter: "DEEP", sub: "Pwofondè teknik" },
    { letter: "X", sub: "Rechèch aplike" },
    { letter: "LAB", sub: "Ekselans ekzekisyon" },
  ],

  global_section: "Prezans mondyal",
  global_title: "Operasyon san fwontyè.",

  prob_title: "Ou gen yon pwoblèm pèsonn pa ka rezoud.",
  prob_sub: "Se egzakteman sa nou prefere.",
  prob_cta: "Ann pale",

  cta_section: "Kontak",
  cta_title_1: "Ann travay ansanm",
  cta_title_2: "sou sa k ap vini apre.",
  cta_desc:
    "Ekip nou yo akonpanye òganizasyon ki opere nan anviwonman egzijan epi ki atann rigè, otonomi ak angajman alontèm nan men yon patnè teknolojik.",
  cta_btn: "contact@deepxlab.com",
  cta_link: "Konsilte ekspètiz nou",
  cta_contacts: [
    { label: "Kontak komèsyal", email: "contact@deepxlab.com" },
    { label: "Patnarya", email: "partners@deepxlab.com" },
    { label: "Karyè", email: "careers@deepxlab.com" },
    { label: "Laprès", email: "press@deepxlab.com" },
  ],

  foot_rights: "Tout dwa rezève.",

  svc_section: "Sèvis nou yo",
  svc_title: "Twa òf konkrè. Yon sèl ekspètiz pataje.",
  svc_desc: "Nou kòmanse DeepXlab ak twa liy sèvis aktif, adapte ak bezwen lokal ayisyen, dyaspora a, ak PME rejyonal yo.",
  svc_items: [
    { tag: "01", slug: "developpement", name: "Devlopman wèb ak mobil sou mezi", desc: "Sit, platfòm ak aplikasyon ki fèt pou kliyan ayisyen ak dyaspora — vitrin, e-commerce, aplikasyon metye, aplikasyon mobil.", bullets: ["Sit enstitisyonèl", "E-commerce ak peman lokal", "Aplikasyon metye", "Aplikasyon mobil iOS/Android"] },
    { tag: "02", slug: "stem", name: "Kit STEM ak kou wobotik", desc: "Kit Arduino/ESP32 propriyetè monte anndan, vann ak gid pa nou ak kou prive STEM ak wobotik.", bullets: ["Kit Maker / Arduino / ESP32", "Gid pedagojik orijinal", "Kou prive STEM ak wobotik", "Atelye pou lekòl ak fanmi"] },
    { tag: "03", slug: "consulting", name: "Konsiltasyon IT pou PME", desc: "Odit, modènizasyon ak akonpayman PME ayisyen ki vle dijitalize operasyon yo san yo pa rete dèyè.", bullets: ["Odit IT ak katografi", "Modènizasyon ak cloud", "Sibèsekirite debaz", "Fòmasyon ekip"] },
  ],
  svc_cta: "Wè sèvis la",

  svc_back: "Retounen nan akèy",
  svc_offerings: "Òf nou",
  svc_process: "Pwosesis",
  svc_pricing: "Pri endikativ",
  svc_faq: "Kesyon yo poze souvan",
  svc_contact_cta: "Ann pale sou pwojè ou a",

  svc_dev: {
    hero_tag: "Devlopman wèb ak mobil",
    hero_title: "Sit ak aplikasyon ki kenbe, menm nan Ayiti.",
    hero_sub: "Nou konstwi sit vitrin, e-commerce, platfòm metye ak aplikasyon mobil pou biznis ak enstitisyon ayisyen ak dyaspora.",
    offerings: [
      { t: "Sit enstitisyonèl ak vitrin", d: "Sit sou mezi, rapid, SEO-ready, milti-lang. Adapte pou koneksyon limite ak mobil ki domine." },
      { t: "E-commerce ak peman lokal", d: "Boutik an liy ak entegrasyon metòd peman yo itilize an Ayiti ak dyaspora (MonCash, Natcash, kat, Zelle, CashApp)." },
      { t: "Platfòm metye", d: "Zouti entèn pou jere kliyan, stòk, rezèvasyon, faktirasyon, abonman, swivi pwodiksyon. Sou mezi." },
      { t: "Aplikasyon mobil", d: "Aplikasyon iOS ak Android nan React Native oswa natif, distribye via App Store, Play Store oswa APK dirèk." },
    ],
    process: [
      "Entèvyou kadraj pou konprann aktivite a, itilizatè yo ak kontrènt yo.",
      "Maket ak pwototip valide avan yon sèl liy kòd.",
      "Devlopman pa sprint kout ak demo regilye.",
      "Miz an liy, fòmasyon ak sipò kontini apre deplwaman.",
    ],
    pricing: [
      { t: "Sit vitrin", d: "Depi 1 500 USD", note: "Livre an 3–5 semèn" },
      { t: "E-commerce", d: "Depi 3 500 USD", note: "Livre an 6–10 semèn" },
      { t: "Platfòm metye", d: "Sou devi", note: "Selon sijè a" },
      { t: "App mobil", d: "Depi 6 000 USD", note: "iOS + Android enkli" },
    ],
    faq: [
      { q: "Èske nou travay a distans?", r: "Wi. Ekip nou yo ant Boston ak Pòtoprens. Nou travay via videyo, WhatsApp ak an pèsòn selon bezwen." },
      { q: "Èske nou livre kòd sous la?", r: "Toujou. Ou se pwopriyetè total kòd, konsepsyon ak dokimantasyon. Okenn blokaj teknik." },
      { q: "Èske nou fè antretyen?", r: "Wi, ak plan mansyèl. Siveyans, mizajou, koreksyon ak amelyorasyon." },
      { q: "Èske m ka peye an goud?", r: "Wi, an goud, dola, pa vire, MonCash, kat oswa Zelle." },
    ],
  },

  svc_stem: {
    hero_tag: "Edikasyon STEM ak wobotik",
    hero_title: "Kit ak kou pou fòme pwochen jenerasyon enjenyè ayisyen.",
    hero_sub: "Nou monte pwòp kit Arduino ak ESP32 nou yo nan Pòtoprens, ak gid pedagojik orijinal, epi nou bay kou prive STEM ak wobotik.",
    offerings: [
      { t: "Kit Maker (debitan)", d: "Premye kontak ak elektwonik: LED, rezistans, bouton, buzzer. Ak gid etap pa etap an franse ak kreyòl." },
      { t: "Kit Arduino", d: "Kit konplè ak Arduino Uno: captè, motè, ekran, breadboard. Plis pase 20 pwojè gide." },
      { t: "Kit ESP32 / IoT", d: "Kit konekte Wi-Fi ak Bluetooth pou pwojè IoT: domotik, estasyon meteyo, captè a distans." },
      { t: "Kou prive STEM", d: "Kou endividyèl oswa ti gwoup (timoun, adolesan, adilt). Pwogramasyon, elektwonik, wobotik, enprime 3D." },
      { t: "Atelye pou lekòl", d: "Pwogram kle an men pou lekòl ak inivèsite ayisyen: laboratwa mobil, kit, fòmasyon anseyan." },
      { t: "Konpetisyon ak klib", d: "Akonpayman klib wobotik lekòl ak preparasyon pou konpetisyon rejyonal." },
    ],
    process: [
      "Chwa kit oswa pwogram selon laj, nivo ak objektif.",
      "Livrezon materyèl ak gid enprime.",
      "Kou an pèsòn (Pòtoprens) oswa a distans (dyaspora).",
      "Sètifika nan fen + swivi apre kou a.",
    ],
    pricing: [
      { t: "Kit Maker", d: "45 USD", note: "Ak gid + tutoryèl" },
      { t: "Kit Arduino", d: "85 USD", note: "Plis pase 20 pwojè gide" },
      { t: "Kit ESP32", d: "120 USD", note: "Pwojè IoT + Wi-Fi" },
      { t: "Kou endividyèl", d: "25 USD / seyans", note: "1 èdtan, fleksib" },
      { t: "Pwogram lekòl", d: "Sou devi", note: "Kit + kou + fòmasyon pwofesè" },
    ],
    faq: [
      { q: "Depi ki laj?", r: "Kit Maker depi 10 an, Arduino depi 12, ESP32 depi 14. Kou yo adapte ak nivo chak moun." },
      { q: "Èske nou livre toupatou an Ayiti?", r: "Wi, livrezon nan Pòtoprens enkli, lòt vil via transpòtè patnè." },
      { q: "Nan ki lang kou yo?", r: "Franse ak kreyòl ayisyen, ak materyèl enprime nan tou de lang yo." },
      { q: "Èske m ka achte kit la san kou a?", r: "Wi, kit yo vann apa ak gid enprime ak tutoryèl videyo an liy." },
    ],
  },

  svc_consulting: {
    hero_tag: "Konsiltasyon IT",
    hero_title: "Pou PME ayisyen ki vle grandi san yo pa rete dèyè ak teknoloji.",
    hero_sub: "Nou odit IT ou, bay chwa klè epi akonpaye ou nan modènizasyon — san jagon epi san depandans sou yon sèl founisè.",
    offerings: [
      { t: "Odit IT konplè", d: "Katografi sistèm, risk, pri kache ak opòtinite pou amelyore. Rapò ekri ki ka aji sou li." },
      { t: "Plan modènizasyon", d: "Fèy wout priyorize pa retou sou envestisman. Sa pou kenbe, migre, oswa sispann." },
      { t: "Migrasyon nan cloud", d: "Akonpayman pou pote done ak aplikasyon ou nan cloud (AWS, Azure, Google) an sekirite." },
      { t: "Sibèsekirite debaz", d: "Bon pratik: modpas, sovgad, antivirus, firewall, fòmasyon pèsonèl." },
      { t: "Chwa ak negosyasyon founisè", d: "Nou konpare òf, negosye kontra epi evite sèvis initil." },
      { t: "Fòmasyon ekip", d: "Atelye pratik: zouti biwo, sekirite, nouvo lojisyèl metye." },
    ],
    process: [
      "Entèvyou inisyal gratis pou konprann aktivite ak priyorite ou.",
      "Odit 1 a 2 semèn ak aksè sistèm ak entèvyou ekip.",
      "Rapò klè ak plan aksyon ki chif epi priyorize.",
      "Akonpayman nan mizanplas, dirèk oswa via ekip teknik nou.",
    ],
    pricing: [
      { t: "Odit IT", d: "Depi 800 USD", note: "Rapò nan 2 semèn" },
      { t: "Plan modènizasyon", d: "Depi 1 500 USD", note: "Odit + fèy wout" },
      { t: "Akonpayman mansyèl", d: "Depi 600 USD / mwa", note: "CTO ekstèn a tan pasyèl" },
      { t: "Fòmasyon ekip", d: "Depi 400 USD / jou", note: "Sou sit oswa a distans" },
    ],
    faq: [
      { q: "Pou ki gwosè biznis?", r: "5 a 100 anplwaye tipikman. Pi piti nou sijere solisyon senp, pi gwo nou pase sou akonpayman gwo kont." },
      { q: "Konbyen tan yon odit?", r: "Ant 2 ak 4 semèn selon gwosè ak konpleksite. Nou toujou livre rapò ekri." },
      { q: "Ki sektè?", r: "Komès, sante, edikasyon, sèvis pwofesyonèl, endistri lejè, ONG. Okenn sektè pa eskli." },
      { q: "Èske li konfidansyèl?", r: "Wi — NDA siyen avan tout echanj sansib epi konsiltan nou yo oblije konfidansyalite pèmanant." },
    ],
  },

  meth_section: "Metodoloji",
  meth_title: "Sèz etap. Zewo enpwovizasyon.",
  meth_desc: "Chak pwojè swiv yon metodoloji entèn ki gen 16 faz, depi premye entèvyou rive nan sipò alontèm.",
  meth_steps: [
    { n: "00", t: "Konpreyansyon kontèks", d: "Imèsyon nan ekosistèm, kontrènt ak anjè estratejik." },
    { n: "01", t: "Analiz sa k egziste", d: "Odit teknik ak fonksyonèl sistèm, pwosesis ak done aktyèl." },
    { n: "02", t: "Analiz pwoblèm", d: "Katografi pwen friksyon, risk ak opòtinite pou amelyore." },
    { n: "03", t: "Idantifikasyon aktè", d: "Envantè pati prenant, wòl ak responsablite." },
    { n: "04", t: "Objektif ak kritè", d: "Definisyon objektif mezirab ak kritè siksè." },
    { n: "05", t: "Bezwen fonksyonèl", d: "Espesifikasyon fonksyonalite pou itilizatè ak metye." },
    { n: "06", t: "Règ metye", d: "Fòmalizasyon règ, workflow ak lojik pwòp òganizasyon an." },
    { n: "07", t: "Done metye", d: "Idantifikasyon antite, flou ak volim done pou trete." },
    { n: "08", t: "Modelizasyon", d: "Konsepsyon modèl done, schema relasyonèl ak dyagram." },
    { n: "09", t: "Achitèkti", d: "Definisyon achitèkti lojisyèl, materyèl ak rezo." },
    { n: "10", t: "Chwa teknolojik", d: "Seleksyon teknoloji, framework ak sèvis adapte." },
    { n: "11", t: "Devlopman backend", d: "Enplemantasyon API, sèvis, entegrasyon ak lojik sèvè." },
    { n: "12", t: "Devlopman frontend", d: "Kreyasyon entèfas itilizatè, eksperyans wèb ak mobil." },
    { n: "13", t: "Tès", d: "Tès initè, entegrasyon, chaj ak validasyon fonksyonèl." },
    { n: "14", t: "Deplwaman", d: "Miz an pwodiksyon, migrasyon, fòmasyon ak aktivasyon." },
    { n: "15", t: "Dokimantasyon ak antretyen", d: "Dokimantasyon konplè, transfè konesans ak sipò kontini." },
  ],

  cases_section: "Referans",
  cases_title: "Pwojè ki kenbe anba kontrènt reyèl.",
  cases_desc: "Pwojè livre nan anviwonman kritik. Non kliyan konfidansyèl.",
  cases_items: [
    { tag: "Bank ak Finans", title: "Platfòm tranzaksyonèl rejyonal", metric: "4M+ tranzaksyon/mwa", desc: "Refonte konplè nwayo tranzaksyonèl yon bank karibeyen. Achitèkti orijante evènman, konfòmite PCI-DSS, disponiblite 99.99%." },
    { tag: "Sante", title: "Dosye pasyan elektwonik nasyonal", metric: "120 etablisman konekte", desc: "Sistèm santralize pou yon rezo lopital rejyonal. Entèoperabilite HL7/FHIR, chifreman bout-a-bout." },
    { tag: "Gouvènman", title: "Platfòm sèvis piblik", metric: "800k sitwayen aktif", desc: "Pòtay inifye pou sèvis administratif. Otantifikasyon fò, siyati elektwonik, entegrasyon milti-ministè." },
    { tag: "Edikasyon", title: "Laboratwa STEM kle an men", metric: "45 lekòl ekipe", desc: "Deplwaman kit pedagojik propriyetè, platfòm LMS ak fòmasyon anseyan nan twa peyi." },
  ],

  stack_section: "Stack teknik",
  stack_title: "Teknoloji metrize an pwofondè.",
  stack_groups: [
    { name: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "Three.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Go", "Rust", "Java", "PostgreSQL"] },
    { name: "Cloud ak DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
    { name: "IA ak Done", items: ["PyTorch", "TensorFlow", "LangChain", "Redis", "Kafka", "Airflow"] },
    { name: "Materyèl ak IoT", items: ["Arduino", "ESP32", "Raspberry Pi", "STM32", "LoRa", "MQTT"] },
    { name: "Sekirite", items: ["Zero Trust", "mTLS", "Vault", "SIEM", "WAF", "SOC"] },
  ],

  // Cinematic redesign — additional copy
  tagline_lines: ["SIS EKSPÈTIZ.", "YON EKIP.", "ZEWO KONPWOMI."],
  stat_subs: [
    "Platfòm Karayib · PCI-DSS",
    "Entewopèrabilite HL7/FHIR",
    "Pòtay sèvis piblik",
    "STEM · 3 peyi",
  ],
  cta_giant_1: "Si nou ka modènize enfrastrikti yon nasyon,",
  cta_giant_2: "imajine sa nou ka fè",
  cta_giant_3: "pou biznis ou.",
  cta_btn_primary: "Lanse yon pwojè",
  cta_btn_secondary: "Eksplore ekspètiz nou",
  hero_cta_primary: "Dekouvri DeepXLab",
  hero_cta_secondary: "Ekspètiz nou",
  scroll_label: "Defile",
  impact_section: "Enpak mezirab",
  depts_section: "Depatman nou yo",
  depts_title: "Sis ekspètiz entegre",
  cases_confidential: "Non kliyan konfidansyèl — enpak verifyab",
  values_section: "Valè nou yo",
};

export const dictionaries: Record<Lang, Dict> = { FR: fr, EN: en, ES: es, HT: ht };
