export interface Project {
  id: string;
  repo: string;
  github: string;
  demo?: string;
  year: string;
  stack: string[];
  category: { en: string; es: string };
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  highlights: { en: string[]; es: string[] };
}

export const projects: Project[] = [
  {
    id: "one-million-pixels",
    repo: "pixels-capsule",
    github: "https://github.com/carloslens88/pixels-capsule",
    demo: "https://onemillionpixels.site",
    year: "2026",
    stack: ["Cloudflare Workers", "D1", "R2", "Cron Triggers", "Stripe"],
    category: { en: "Full-stack · Edge · Real-time", es: "Full-stack · Edge · Tiempo real" },
    title: { en: "One Million Pixels", es: "One Million Pixels" },
    tagline: {
      en: "A Million Dollar Homepage, rebuilt for the edge — two products, one backend, zero fixed cost.",
      es: "El Million Dollar Homepage, reconstruido en el edge — dos productos, un backend, coste fijo cero.",
    },
    description: {
      en: "Two linked experiences on a shared Cloudflare backend: a pixel canvas where visitors buy and decorate space on a 1,000,000-pixel wall, and an orbital canvas where visitors seal messages into capsules — optionally time-locked — and launch them into real orbital motion. Same API, same D1 database, independent buyer-numbering per product.",
      es: "Dos experiencias enlazadas sobre un mismo backend en Cloudflare: un lienzo de píxeles donde los visitantes compran y decoran espacio en un muro de 1.000.000 de píxeles, y un lienzo orbital donde sellan mensajes en cápsulas — opcionalmente con fecha de apertura — y las lanzan en movimiento orbital real. Misma API, misma base D1, numeración de compradores independiente por producto.",
    },
    highlights: {
      en: [
        "Live viewer presence, activity ticker and a public embeddable stats dashboard",
        "Per-purchase Open Graph share pages generated on the fly",
        "Cron-triggered email delivery for time-locked capsules",
        "Built end-to-end — frontend, API, database, moderation, payments scaffolding — on Cloudflare's free tier",
      ],
      es: [
        "Presencia de visitantes en vivo, ticker de actividad y panel de estadísticas público embebible",
        "Páginas de compartir con Open Graph generadas al vuelo por cada compra",
        "Envío de email programado con Cron Triggers para cápsulas con fecha de apertura",
        "Construido de punta a punta — frontend, API, base de datos, moderación, cobros — sobre el free tier de Cloudflare",
      ],
    },
  },
  {
    id: "trashure",
    repo: "trashure",
    github: "https://github.com/carloslens88/trashure",
    demo: "https://trashure.online",
    year: "2026",
    stack: ["React", "Vite", "Leaflet", "Supabase", "Cloudflare Workers"],
    category: { en: "Full-stack · Game · Geospatial", es: "Full-stack · Juego · Geoespacial" },
    title: { en: "Trashure", es: "Trashure" },
    tagline: {
      en: "A location-based scavenger game where today's trash might be tomorrow's treasure.",
      es: "Un juego de exploración geolocalizada donde la basura de unos es el tesoro de otros.",
    },
    description: {
      en: "A Pokémon-GO-style game built on real-world maps: players walk their actual surroundings to find procedurally spawned finds, in a post-apocalyptic setting with daily events, weather effects and a fog-of-war that only clears by walking. Item spawns are deterministic and re-validated server-side, so a client can't fake a discovery.",
      es: "Un juego estilo Pokémon GO sobre mapas reales: los jugadores recorren su entorno para encontrar objetos generados proceduralmente, en un mundo postapocalíptico con eventos diarios, clima real y una niebla de guerra que solo se despeja caminando. La aparición de objetos es determinista y se revalida en el servidor, así que el cliente no puede falsear un hallazgo.",
    },
    highlights: {
      en: [
        "Server-validated procedural spawning shared between client and Supabase Edge Functions — the anti-cheat is architectural, not bolted on",
        "Real-time weather, daily zone events and a cooperative weekly boss",
        "Packaged as native iOS/Android apps via Capacitor from the same codebase",
        "Full game design document driving every system",
      ],
      es: [
        "Spawning procedural validado en servidor, compartido entre el cliente y Edge Functions de Supabase — el anti-trampas es arquitectónico, no un parche",
        "Clima en tiempo real, eventos de zona diarios y un jefe cooperativo semanal",
        "Empaquetado como apps nativas iOS/Android con Capacitor desde el mismo código",
        "Documento de diseño de juego completo guiando cada sistema",
      ],
    },
  },
  {
    id: "solara",
    repo: "solara",
    github: "https://github.com/carloslens88/solara",
    demo: "https://solara-solara16.vercel.app",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres (Neon)"],
    category: { en: "Product · Startup MVP", es: "Producto · MVP de startup" },
    title: { en: "Solara", es: "Solara" },
    tagline: {
      en: "A launch-ready MVP for a home-care startup on the Costa del Sol — priced, bilingual, live.",
      es: "Un MVP listo para lanzar de una startup de home-care en la Costa del Sol — con precios, bilingüe, en producción.",
    },
    description: {
      en: "A bilingual marketing and lead-generation site for a premium cleaning and home-care company, built around a live pricing calculator: every price, zone and service lives in one data file, so the calculator, services page and membership tiers stay in sync automatically. Leads persist to Postgres via Neon's serverless driver.",
      es: "Un sitio bilingüe de marketing y captación de leads para una empresa premium de limpieza y home-care, construido alrededor de una calculadora de precios en vivo: cada precio, zona y servicio vive en un único archivo de datos, así que la calculadora, la página de servicios y las membresías se mantienen sincronizadas automáticamente. Los leads se guardan en Postgres vía el driver serverless de Neon.",
    },
    highlights: {
      en: [
        "Single source of truth for pricing — change a number once, every page updates",
        "Bilingual App Router structure with locale-aware routing",
        "Lead capture wired to a serverless Postgres database with zero server to manage",
      ],
      es: [
        "Fuente única de verdad para los precios — cambiar un número actualiza todas las páginas",
        "Estructura bilingüe con App Router y rutas conscientes del idioma",
        "Captación de leads conectada a Postgres serverless sin servidor que mantener",
      ],
    },
  },
  {
    id: "kids-events",
    repo: "kids-events-app",
    github: "https://github.com/carloslens88/kids-events-app",
    demo: "https://kids-events-app.expo.app",
    year: "2026",
    stack: ["React Native (Expo)", "TypeScript", "Supabase", "GitHub Actions"],
    category: { en: "Full-stack · Mobile · Automation", es: "Full-stack · Móvil · Automatización" },
    title: { en: "Peque-Eventos", es: "Peque-Eventos" },
    tagline: {
      en: "A mobile catalog of kids' events that fills itself in — an automated nightly pipeline pulls new listings from three cities' open data.",
      es: "Un catálogo móvil de eventos infantiles que se rellena solo — un pipeline automático nocturno importa eventos de los datos abiertos de tres ciudades.",
    },
    description: {
      en: "A React Native (Expo) app for Android, iOS and web that lists children's events by city — filterable by category, age range and price, with maps, calendar integration, rain warnings for outdoor events, and on-device favorites that need no account. A GitHub Actions job runs every night pulling events from Madrid, Barcelona and Málaga's open-data portals (plus optional Eventbrite) into a review queue, so the catalog grows without manual data entry.",
      es: "Una app en React Native (Expo) para Android, iOS y web que cataloga eventos infantiles por ciudad — filtrable por categoría, edad y precio, con mapas, integración con calendario, aviso de lluvia para eventos al aire libre y favoritos en el dispositivo sin necesidad de cuenta. Un job de GitHub Actions corre cada noche importando eventos desde los portales de datos abiertos de Madrid, Barcelona y Málaga (más Eventbrite opcional) a una cola de revisión, para que el catálogo crezca sin entrada manual de datos.",
    },
    highlights: {
      en: [
        "Automated nightly import from three municipal open-data sources into a draft queue for review — the catalog grows itself",
        "Admin panel with real authentication (Supabase RLS) and duplicate-event detection",
        "Offline-friendly: on-device favorites, weekly local reminders and rain warnings — no account required",
        "One codebase ships to iOS, Android and a public web app",
      ],
      es: [
        "Importación automática nocturna desde tres fuentes municipales de datos abiertos a una cola de revisión — el catálogo crece solo",
        "Panel de administración con autenticación real (RLS de Supabase) y aviso de eventos duplicados",
        "Pensado para funcionar sin cuenta: favoritos en el dispositivo, recordatorios semanales locales y aviso de lluvia",
        "Un mismo código publica en iOS, Android y una web pública",
      ],
    },
  },
];
