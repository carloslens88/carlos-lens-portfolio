import type { Dictionary } from "./dictionary";

const es: Dictionary = {
  meta: {
    title: "Carlos Lens — Ingeniero de Software Full-Stack",
    description:
      "Carlos Lens es ingeniero de software full-stack y engineering manager en Madrid — 15 años desarrollando software en cuatro países, una docena de stacks y, últimamente, productos en solitario con ayuda de IA.",
  },
  nav: {
    overview: "Perfil",
    dna: "ADN Técnico",
    ai: "Ingeniería con IA",
    projects: "Proyectos",
    experience: "Experiencia",
    philosophy: "Filosofía",
    contact: "Contacto",
    resume: "CV",
  },
  hero: {
    eyebrow: "Carlos Lens · Ingeniero de Software · Madrid",
    headline: "Aprendo el stack y luego entrego el sistema.",
    subhead:
      "Quince años desarrollando software en cuatro países y una docena de stacks — desde microservicios en Java en John Deere y la suite de automatización de BMW en Grant Thornton, hasta liderar ingeniería en Openbank y lanzar productos full-stack en solitario, de principio a fin.",
    ctaPrimary: "Ver el trabajo",
    ctaSecondary: "Hablemos",
    stats: [
      { value: "15", label: "años en software" },
      { value: "8", label: "puestos, 4 países" },
      { value: "4", label: "productos en solitario en 2026" },
    ],
  },
  overview: {
    kicker: "Perfil",
    heading: "Un ingeniero de sistemas que no deja de cambiar de sistema",
    paragraphs: [
      "Carlos empezó como desarrollador en Venezuela en 2011, construyendo herramientas internas para una empresa de hosting — un Balanced Scorecard, un help desk basado en ITIL, una consola de administración de Active Directory. En dos años ya lideraba proyectos web; en tres, daba clases de frameworks web en su propia universidad mientras llevaba en paralelo el desarrollo de una intranet corporativa.",
      "El salto a Europa en 2014 cambió un stack por otro — .NET se convirtió en un rol de liderazgo de QA y automatización de tests en UST Global, en el proyecto de cumplimiento GDPR de Experian; después, un puesto full-stack en John Deere en Alemania construyendo los microservicios detrás de las operaciones de flotas de tractores e implementos; y luego tres años en Grant Thornton alternando entre C#/.NET y Java/Spring Boot en la suite de automatización de BMW, con React y Angular en el frontend.",
      "Desde 2023 está en Openbank, primero como backend engineer en Java y Spring Boot, y desde 2025 en gestión de ingeniería tras su promoción. En paralelo, lanza productos full-stack propios — apps en tiempo real sobre el edge de Cloudflare, juegos con Supabase, startups en Next.js — en solitario y de punta a punta, para mantenerse afilado en lo que sea que esté vigente.",
    ],
  },
  dna: {
    kicker: "ADN Técnico",
    heading: "Profundidad en varias direcciones a la vez",
    intro:
      "Cada categoría de abajo ha estado en producción, con su nombre detrás, para un cliente o un empleador — no en un tutorial.",
    categories: {
      languages: "Lenguajes",
      backend: "Backend y Frameworks",
      frontend: "Frontend",
      data: "Datos y Almacenamiento",
      cloud: "Cloud e Infraestructura",
      devops: "DevOps y CI/CD",
      testing: "Testing y Calidad",
      leadership: "Liderazgo",
    },
  },
  ai: {
    kicker: "Ingeniería con IA",
    heading: "La IA como multiplicador, no como titular",
    intro:
      "Carlos no se vende como especialista en agentes de IA — la versión honesta es más útil: trata las herramientas de codificación asistida y agéntica como parte de cómo trabaja hoy un ingeniero de sistemas, igual que Git o el CI se volvieron parte del trabajo hace una década.",
    flow: ["Idea", "Agente + Herramientas", "Sistema funcionando", "En producción"],
    points: [
      {
        title: "En solitario, full-stack, a velocidad",
        body: "Los cuatro productos de la sección Proyectos — cada uno en un stack distinto, cada uno lanzado de punta a punta en solitario — se apoyaron en flujos de trabajo asistidos por IA y agénticos para moverse a un ritmo que antes exigía un equipo pequeño: la arquitectura y el criterio siguen siendo humanos, lo mecánico va más rápido.",
      },
      {
        title: "Llevándolo al día a día laboral",
        body: "En Openbank, Carlos forma parte de la iniciativa del banco para incorporar la ingeniería asistida por IA a la entrega diaria — evaluando dónde realmente acelera a un equipo de backend y dónde es solo ruido.",
      },
      {
        title: "Construido con IA, no solo usándola",
        body: "Su trabajo previo con IA incluye un prototipo de reconocimiento de voz en navegador para interacción conversacional natural — pequeño, pero prueba de que el interés es anterior al hype actual.",
      },
    ],
  },
  projects: {
    kicker: "Proyectos",
    heading: "Una selección de lo que está en producción",
    intro:
      "Cuatro productos, cuatro stacks distintos, todos en vivo. Calidad antes que cantidad — el resto de los repos públicos está a un clic, abajo.",
    viewCode: "Ver código",
    viewDemo: "Ver demo",
    moreKicker: "Más en GitHub",
    moreHeading: "Todo lo demás, en vivo",
    moreIntro:
      "Este listado se obtiene de la API de GitHub al cargar la página — los nuevos repos públicos aparecen aquí automáticamente, sin necesidad de volver a desplegar el sitio.",
    loading: "Cargando repositorios…",
    error: "No se pudo contactar con la API de GitHub ahora mismo — puedes ver el perfil directamente.",
    viewAllOnGithub: "Ver perfil completo en GitHub",
  },
  experience: {
    kicker: "Experiencia",
    heading: "Quince años, cuatro países, un mismo patrón",
    intro:
      "Nuevo dominio, nuevo stack, sistema entregado — desde un primer trabajo construyendo herramientas internas en Venezuela hasta liderar ingeniería en un banco español.",
  },
  adaptability: {
    kicker: "Adaptabilidad",
    heading: "No pertenezco a un único stack. Resuelvo problemas.",
    statement: "Tecnología nueva. Entenderla. Integrarla. Entregar algo útil.",
    body: "El patrón se repite durante quince años: intranets en .NET, microservicios en Java, frontends en React y Angular, el edge de Cloudflare, Supabase. Distinto empleador, distinta década, el mismo instinto — entender un stack desconocido lo bastante rápido como para entregar algo real en él.",
    path: [".NET y WCF", "Java y Spring Boot", "React y Angular", "Next.js y TypeScript", "Cloudflare Edge y Supabase"],
    footnote: "Cada cambio de la lista ocurrió en el trabajo, con una fecha de entrega encima — no en un curso.",
  },
  philosophy: {
    kicker: "Filosofía de Ingeniería",
    heading: "Cómo construye Carlos",
    principles: [
      {
        title: "Entregar el sistema completo",
        body: "Frontend, backend, infraestructura, pagos, moderación, email — los proyectos en solitario existen porque entender las costuras entre capas importa más que dominar una sola.",
      },
      {
        title: "La arquitectura de coste cero es una restricción que vale la pena diseñar",
        body: "Cada proyecto reciente corre en un plan gratuito por diseño, no por accidente — obliga a una arquitectura más limpia, no peor.",
      },
      {
        title: "Aprender el framework, no solo la sintaxis",
        body: ".NET, Java/Spring, React, Angular, Next.js, JS puro — la constante no es el lenguaje, es la capacidad de leer rápido los patrones de uno nuevo.",
      },
      {
        title: "La estrategia de testing es parte del diseño",
        body: "Desde liderar QA y automatización en UST Global hasta TDD/DDD en microservicios Java — los tests son una herramienta de diseño, no un trámite de última hora.",
      },
      {
        title: "La IA es un multiplicador, no un atajo",
        body: "Acelera el trabajo mecánico; la arquitectura, las decisiones de criterio y el buen gusto siguen siendo humanos.",
      },
    ],
  },
  contact: {
    kicker: "Contacto",
    heading: "¿Tienes un problema técnico difícil? Hablemos.",
    body: "Abierto a conversaciones sobre liderazgo de ingeniería, desarrollo full-stack, o dónde el desarrollo asistido por IA realmente aporta valor a un equipo.",
    ctaEmail: "Enviar un email",
    ctaLinkedin: "Conectar en LinkedIn",
    ctaGithub: "Ver el código en GitHub",
  },
  footer: {
    tagline: "Ingeniero full-stack. Ex desarrollador .NET en recuperación. Ahora mismo, en el edge.",
    rights: "Todos los derechos reservados.",
    builtWith: "Construido con Next.js, desplegado por 0 €.",
  },
};

export default es;
