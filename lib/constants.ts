export const WHATSAPP_NUMBER = "33749333108";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Swan! I'd love to book a free trial lesson. 😊"
);
export const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

export const EMAIL = "swan.gani@hotmail.fr";

export const PRICING = [
  {
    duration: "60 min",
    price: "40€",
    description: "Full lesson",
  },
  {
    duration: "40 min",
    price: "28€",
    description: "Focused session",
  },
];

export const CREDENTIALS = [
  {
    icon: "🎓",
    title: { en: "Teaching Degree", fr: "Diplôme d'enseignement", es: "Título de enseñanza" },
    desc: {
      en: "Master’s degree in Teaching, Education and Training (MEEF) – Teaching experience with children, teenagers, and adults in France and internationally",
      fr: "Master MEEF - Expérience de l'enseignement auprès d'enfants, d'adolescents et d'adultes, en France et à l'international",
      es: "Maestra certificada de escuela primaria en Francia, formada en pedagogía",
    },
  },
  {
    icon: "📜",
    title: { en: "FLE Certification", fr: "Diplôme de Français Langue Étrangère (FLE)", es: "Certificación FLE" },
    desc: {
      en: "Specialized certification in French as a Foreign Language (Français Langue Étrangère)",
      fr: "Formation spécialisée dans l'enseignement du français aux apprenants non francophones.",
      es: "Certificación especializada en Francés como Lengua Extranjera",
    },
  },
  {
    icon: "🏫",
    title: { en: "Classroom Experience", fr: "Expérience en classe", es: "Experiencia en aula" },
    desc: {
      en: "Several years of teaching experience in France and internationally, working with children, teenagers, and adults.",
      fr: "Plusieurs années d'expérience dans l'enseignement, en France et à l'international, auprès d'enfants, d'adolescents et d'adultes.",
      es: "Años de experiencia enseñando en escuelas primarias y secundarias francesas",
    },
  },
];

export const TESTIMONIALS = [
  {
    name: "Emily R.",
    country: "🇬🇧 United Kingdom",
    avatar: "E",
    color: "bg-rose-100 text-rose-600",
    text: {
      en: "Swan is an incredible teacher! After just 2 months, I can hold conversations in French. Her patience and positivity make every lesson a joy.",
      fr: "Swan est une professeure incroyable ! En 2 mois, je peux tenir des conversations en français. Sa patience rend chaque cours un plaisir.",
      es: "¡Swan es una profesora increíble! Después de 2 meses puedo mantener conversaciones en francés. Su paciencia hace cada clase un placer.",
    },
  },
  {
    name: "Carlos M.",
    country: "🇪🇸 Spain",
    avatar: "C",
    color: "bg-amber-100 text-amber-700",
    text: {
      en: "Her English lessons helped me land my dream job. Swan tailored every session to my needs and made grammar actually fun.",
      fr: "Ses cours d'anglais m'ont aidé à décrocher mon emploi de rêve. Swan a adapté chaque session à mes besoins.",
      es: "Sus clases de inglés me ayudaron a conseguir mi trabajo soñado. Swan adaptó cada sesión a mis necesidades y hizo la gramática divertida.",
    },
  },
  {
    name: "Yuki T.",
    country: "🇯🇵 Japan",
    avatar: "Y",
    color: "bg-purple-100 text-purple-600",
    text: {
      en: "I tried many tutors before finding Swan. She's the first one who made me feel confident speaking French out loud!",
      fr: "J'ai essayé beaucoup de tuteurs avant de trouver Swan. Elle est la première qui m'a donné confiance pour parler français !",
      es: "Probé muchos tutores antes de encontrar a Swan. ¡Es la primera que me hizo sentir segura hablando francés!",
    },
  },
  {
    name: "James O.",
    country: "🇦🇺 Australia",
    avatar: "J",
    color: "bg-emerald-100 text-emerald-600",
    text: {
      en: "The free trial was all I needed to know Swan was the right teacher for me. Professional, warm, and truly passionate about languages.",
      fr: "L'essai gratuit m'a suffi pour savoir que Swan était la bonne professeure. Professionnelle, chaleureuse et passionnée.",
      es: "La clase de prueba gratuita fue todo lo que necesité para saber que Swan era la profesora correcta para mí.",
    },
  },
];

export const TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      lessons: "Lessons",
      pricing: "Pricing",
      testimonials: "Reviews",
      contact: "Contact",
      cta: "Free Trial",
    },
    hero: {
      badge: "French & English Teacher",
      headline: "Your new favourite way to learn French or English — online!",
      subheadline: "Fun, laid-back and super effective lessons. Whether you're starting from zero or levelling up — you're in exactly the right place.",
      cta1: "Grab your free trial 🎉",
      cta2: "Say hi on WhatsApp",
      trust: "30-min free trial • Total beginners welcome • All levels",
    },
    about: {
      title: "Hey, I'm Swan! 👋",
      subtitle: "Your French & English teacher",
      p1: "I'm a certified teacher from France who genuinely loves what she does. After years in French primary schools and high schools, I decided to bring that same energy online — helping people all over the world fall in love with French (and English!).",
      p2: "Never studied a language before? Perfect. Already have some basics? Let's take it further. Whatever your starting point, I'll build a fun, personalised path just for you. No boring textbooks, I promise.",
    },
    credentials: {
      title: "My Qualifications",
      subtitle: "Trained, certified & passionate",
    },
    lessons: {
      title: "What We'll Work On",
      subtitle: "Pick your language — or both!",
      french: {
        tag: "🌟 Starting from zero? Perfect!",
        title: "French Lessons",
        for: "For English & Spanish speakers",
        points: [
          "Complete beginner? You are in the right place 🙌",
          "Conversation and pronunciation from the very first lessons",
          "Grammar, vocabulary, and comprehension explained in a clear and accessible way",
          "Lessons adapted for children, teenagers, and adults",
          "Everyday French for travel, studies, or work",
          "Support from beginner level up to advanced levels",
          "A method based on my expertise in French as a Foreign Language (FLE)",
          "Personalized, progressive, and motivating lessons",
        ],
      },
      english: {
        title: "English Lessons",
        for: "For French speakers",
        tag: "🌟 Never studied English? Perfect!",
        points: [
          "Total beginner? You are welcome here 🙌",
          "Conversation and pronunciation from the very first lessons",
          "Progressive learning of vocabulary and grammar",
          "Everyday English, for travel, school, or work",
          "Lessons adapted for children, teenagers, and adults",
          "Support from beginner level up to intermediate level (B1)",
          "Progress at your own pace, in a supportive and stress-free environment",
        ],
      },
      footer: [
        "📹 100% online via Zoom — learn from your sofa",
        "👤 1-on-1, just you and me",
        "🎯 Fully personalised — no cookie-cutter lessons",
      ],
    },
    trial: {
      tag: "Start for free — seriously!",
      title: "Your first lesson is completely free",
      subtitle: "30 minutes, zero pressure, zero commitment",
      includes: [
        { icon: "💬", text: "We chat, get to know each other & talk about your goals" },
        { icon: "📊", text: "Figure out your level together (no scary tests!)" },
        { icon: "🗺️", text: "Map out your personalised learning journey" },
      ],
      cta: "👋 Book my free trial on WhatsApp",
    },
    pricing: {
      title: "Simple, Fair Pricing",
      subtitle: "Pick what works for you",
      microcopy: "Basic rates • No commitment • Free cancellation up to 24 hours before the lesson",
      notes: [
        "✓ 5% discount for a 3-month commitment",
        "✓ 10% discount for a 6-month commitment",
        "✓ Group pricing by quote, contact me for personalized support",
      ],
      cta: "Let's get started on WhatsApp",
    },
    testimonials: {
      title: "Don't Just Take My Word For It",
      subtitle: "Real students, real progress",
    },
    personal: {
      title: "A little bit about me",
      subtitle: "The human behind the lessons",
      p1: "When I'm not teaching, you'll find me buried in a good book, plotting my next trip somewhere new, or bravely attempting a recipe I found online (sometimes it works out 😄).",
      p2: "I truly believe learning a language should feel like an adventure, not a chore. That's why I keep things warm, fun, and always human. No judgement, no pressure — just progress.",
      p3: "Languages changed my life. I'd love for them to change yours too.",
      hobbies: ["📚 Reading", "✈️ Travelling", "🎨 Art", "🎵 Music", "🍳 Cooking", "🌿 Nature"],
    },
    contact: {
      title: "Ready to start? Let's go! 🚀",
      subtitle: "Drop me a message and let's figure out your first lesson",
      whatsappCta: "Chat with me on WhatsApp",
      emailCta: "Or send me an email",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        submit: "Send message",
        success: "Woohoo! Message sent — I'll be in touch very soon 😊",
      },
    },
    footer: {
      tagline: "Making French and English joyful, accessible, and genuinely fun — for everyone.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      lessons: "Cours",
      pricing: "Tarifs",
      testimonials: "Avis",
      contact: "Contact",
      cta: "Essai gratuit",
    },
    hero: {
      badge: "Professeure de Français & Anglais",
      headline: "Apprenez le français ou l'anglais en ligne — avec le sourire !",
      subheadline: "Des cours fun, bienveillants et vraiment efficaces. Que vous partiez de zéro ou que vous souhaitiez progresser — vous êtes exactement au bon endroit.",
      cta1: "Réserver mon essai gratuit 🎉",
      cta2: "Dire bonjour sur WhatsApp",
      trust: "Essai gratuit 30 min • Grands débutants bienvenus • Tous niveaux",
    },
    about: {
      title: "Bonjour, moi c'est Swan ! 👋",
      subtitle: "Votre professeure de français et d'anglais",
      p1: "Je suis professeure certifiée et j'adore ce que je fais. Après des années dans les écoles primaires et lycées français, j'ai décidé d'apporter cette même énergie en ligne — pour aider des gens du monde entier à tomber amoureux du français (et de l'anglais !).",
      p2: "Vous n'avez jamais étudié une langue étrangère ? Parfait, on part de zéro ensemble. Vous avez déjà quelques bases ? On va aller plus loin. Quel que soit votre point de départ, je construis un parcours fun et personnalisé rien que pour vous. Promis, pas de manuel ennuyeux.",
    },
    credentials: {
      title: "Mes qualifications",
      subtitle: "Formée, certifiée & passionnée",
    },
    lessons: {
      title: "On va travailler sur quoi ?",
      subtitle: "Choisissez votre langue — ou les deux !",
      french: {
        tag: "🌟 Débutant complet ? Parfait !",
        title: "Cours de français",
        for: "Pour anglophones et hispanophones",
        points: [
          "Débutant complet ? Vous êtes au bon endroit 🙌",
          "Conversation et prononciation dès les premières leçons",
          "Grammaire, vocabulaire et compréhension expliqués de façon claire et accessible",
          "Cours adaptés aux enfants, adolescents et adultes",
          "Français du quotidien, des voyages, des études ou du travail",
          "Accompagnement du niveau débutant jusqu'aux niveaux avancés",
          "Méthode basée sur mon expertise en Français Langue Étrangère (FLE)",
          "Des cours personnalisés, progressifs et motivants",

        ],
      },
      english: {
        title: "Cours d'anglais",
        for: "Pour les francophones",
        tag: "🌟 Jamais étudié l'anglais ? Parfait !",
        points: [
          "Grand débutant ? Vous êtes le/la bienvenu(e) ici 🙌",
          "Conversation et prononciation dès les premières leçons",
          "Apprentissage progressif du vocabulaire et de la grammaire",
          "Anglais du quotidien, des voyages, de l'école ou du travail",
          "Cours adaptés aux enfants, adolescents et adultes",
          "Accompagnement du niveau débutant jusqu'au niveau intermédiaire (B1)",
          "Une progression à votre rythme, dans une ambiance bienveillante et sans stress",

        ],
      },
      footer: [
        "📹 100% en ligne via Zoom — depuis votre canapé",
        "👤 Cours particuliers, juste vous et moi",
        "🎯 100% personnalisé — pas de cours génériques",
      ],
    },
    trial: {
      tag: "Commencez gratuitement — vraiment !",
      title: "Votre premier cours est offert",
      subtitle: "30 minutes, zéro pression, zéro engagement",
      includes: [
        { icon: "💬", text: "On fait connaissance et on parle de vos objectifs" },
        { icon: "📊", text: "On évalue votre niveau ensemble (pas de test stressant !)" },
        { icon: "🗺️", text: "On dessine votre parcours d'apprentissage sur mesure" },
      ],
      cta: "👋 Réserver mon essai gratuit sur WhatsApp",
    },
    pricing: {
      title: "Des cours personnalisés, avec des tarifs clairs et sans surprise.",
      subtitle: "Choisissez ce qui vous convient",
      microcopy: "Sans abonnement • Sans engagement • Annulation libre • Que de bons cours",
      notes: [
        "✓ Réduction de 5 % pour un engagement de 3 mois",
        "✓ Réduction de 10 % pour un engagement de 6 mois",
        "✓ Tarifs de groupe sur devis, contactez-moi pour un accompagnement personnalisé",
      ],
      cta: "On commence sur WhatsApp ?",
    },
    testimonials: {
      title: "Ne me croyez pas sur parole",
      subtitle: "De vrais élèves, de vrais progrès",
    },
    personal: {
      title: "Un peu sur moi",
      subtitle: "L'humaine derrière les cours",
      p1: "Quand je n'enseigne pas, vous me trouverez le nez dans un bon livre, à comploter mon prochain voyage, ou à tester courageusement une recette trouvée sur internet (ça marche parfois 😄).",
      p2: "Je crois vraiment qu'apprendre une langue doit ressembler à une aventure, pas à une corvée. C'est pour ça que je garde une ambiance chaleureuse, fun et toujours humaine. Pas de jugement, pas de pression — juste des progrès.",
      p3: "Les langues ont changé ma vie. J'adorerais qu'elles changent la vôtre aussi.",
      hobbies: ["📚 Lecture", "✈️ Voyages", "🎨 Art", "🎵 Musique", "🍳 Cuisine", "🌿 Nature"],
    },
    contact: {
      title: "Prêt(e) à se lancer ? C'est parti ! 🚀",
      subtitle: "Envoyez-moi un message et on organise votre premier cours",
      whatsappCta: "Me contacter sur WhatsApp",
      emailCta: "Ou envoyer un email",
      form: {
        name: "Votre prénom",
        email: "Votre email",
        message: "Votre message",
        submit: "Envoyer",
        success: "Super ! Message reçu — je vous réponds très vite 😊",
      },
    },
    footer: {
      tagline: "Rendre le français et l'anglais joyeux, accessibles et vraiment fun — pour tout le monde.",
      rights: "Tous droits réservés.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      lessons: "Clases",
      pricing: "Precios",
      testimonials: "Reseñas",
      contact: "Contacto",
      cta: "Clase gratis",
    },
    hero: {
      badge: "Profesora de Francés e Inglés",
      headline: "¡Aprende francés o inglés online — y disfrútalo de verdad!",
      subheadline: "Clases divertidas, cercanas y muy efectivas. Tanto si empiezas desde cero como si quieres mejorar — estás exactamente donde debes estar.",
      cta1: "¡Quiero mi clase gratis! 🎉",
      cta2: "Saludarme en WhatsApp",
      trust: "Prueba gratis 30 min • Principiantes absolutos bienvenidos • Todos los niveles",
    },
    about: {
      title: "¡Hola! Soy Swan 👋",
      subtitle: "Tu profesora de francés e inglés",
      p1: "Soy maestra certificada de Francia y me encanta lo que hago. Tras años enseñando en escuelas primarias y secundarias francesas, decidí llevar esa misma energía a internet — para ayudar a personas de todo el mundo a enamorarse del francés (¡y del inglés!).",
      p2: "¿Nunca has estudiado un idioma extranjero? Perfecto, empezamos juntos desde cero. ¿Ya tienes algunas bases? Las aprovechamos y vamos más lejos. Sea cual sea tu punto de partida, creo un camino divertido y personalizado solo para ti. Sin manuales aburridos, lo prometo.",
    },
    credentials: {
      title: "Mis calificaciones",
      subtitle: "Formada, certificada y apasionada",
    },
    lessons: {
      title: "¿En qué vamos a trabajar?",
      subtitle: "Elige tu idioma — ¡o los dos!",
      french: {
        tag: "🌟 ¿Empiezas desde cero? ¡Genial!",
        title: "Clases de francés",
        for: "Para angloparlantes e hispanohablantes",
        points: [
          "¿Sin experiencia previa? ¡No hay problema — empezamos desde el principio!",
          "Gana confianza hablando desde el primer día",
          "Gramática fácil y (de verdad) divertida",
          "Avanza a tu ritmo, sin presión",
          "Metodología certificada FLE",
        ],
      },
      english: {
        title: "Clases de inglés",
        for: "Para francófonos",
        tag: "🌟 ¿Nunca estudiaste inglés? ¡Genial!",
        points: [
          "¿Principiante total? Eres muy bienvenido/a aquí 🙌",
          "Conversación y pronunciación desde el primer día",
          "Inglés profesional o cotidiano — tú decides",
          "Preparación para exámenes (IELTS, TOEFL) o simplemente ganar confianza",
          "Flexible, progresivo y sin estrés",
        ],
      },
      footer: [
        "📹 100% online por Zoom — aprende desde tu sofá",
        "👤 Clases individuales, solo tú y yo",
        "🎯 100% personalizado — sin clases genéricas",
      ],
    },
    trial: {
      tag: "¡Empieza gratis — en serio!",
      title: "Tu primera clase es completamente gratis",
      subtitle: "30 minutos, cero presión, cero compromiso",
      includes: [
        { icon: "💬", text: "Nos conocemos y hablamos de tus objetivos" },
        { icon: "📊", text: "Evaluamos tu nivel juntos (¡sin exámenes de miedo!)" },
        { icon: "🗺️", text: "Diseñamos tu camino de aprendizaje personalizado" },
      ],
      cta: "👋 Reservar mi clase gratis por WhatsApp",
    },
    pricing: {
      title: "Precios simples y justos",
      subtitle: "Elige lo que te va mejor",
      microcopy: "Sin suscripción • Sin compromiso • Cancela cuando quieras • Solo buenas clases",
      notes: [
        "✓ 5% de descuento por compromiso de 3 meses",
        "✓ 10% de descuento por compromiso de 6 meses",
        "✓ Tarifas de grupo bajo presupuesto, contáctame para un acompañamiento personalizado",
      ],
      cta: "¿Empezamos en WhatsApp?",
    },
    testimonials: {
      title: "No te fíes solo de mi palabra",
      subtitle: "Estudiantes reales, progresos reales",
    },
    personal: {
      title: "Un poco sobre mí",
      subtitle: "La persona detrás de las clases",
      p1: "Cuando no estoy enseñando, me encontrarás leyendo un buen libro, planeando mi próxima aventura, o probando valientemente una receta nueva (a veces sale bien 😄).",
      p2: "Creo de verdad que aprender un idioma debería sentirse como una aventura, no como una obligación. Por eso mis clases son cálidas, divertidas y siempre muy humanas. Sin juicios, sin presión — solo progreso.",
      p3: "Los idiomas cambiaron mi vida. Me encantaría que cambiaran la tuya también.",
      hobbies: ["📚 Lectura", "✈️ Viajes", "🎨 Arte", "🎵 Música", "🍳 Cocina", "🌿 Naturaleza"],
    },
    contact: {
      title: "¿Lista/o para empezar? ¡Vamos! 🚀",
      subtitle: "Escríbeme y organizamos tu primera clase",
      whatsappCta: "Chatear conmigo en WhatsApp",
      emailCta: "O enviarme un correo",
      form: {
        name: "Tu nombre",
        email: "Tu correo",
        message: "Tu mensaje",
        submit: "Enviar mensaje",
        success: "¡Genial! Mensaje recibido — te respondo muy pronto 😊",
      },
    },
    footer: {
      tagline: "Haciendo el francés y el inglés algo alegre, accesible y genuinamente divertido — para todos.",
      rights: "Todos los derechos reservados.",
    },
  },
};

export type Language = "en" | "fr" | "es";
export type Translations = typeof TRANSLATIONS.en;
