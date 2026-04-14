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
};

export const dictionaries: Record<Lang, Dict> = { FR: fr, EN: en, ES: es, HT: ht };
