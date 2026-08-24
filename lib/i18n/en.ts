import type { Dictionary } from "./dictionary";

const en: Dictionary = {
  meta: {
    title: "Carlos Lens — Full-Stack Software Engineer",
    description:
      "Carlos Lens is a full-stack software engineer and engineering manager based in Madrid — 15 years shipping software across four countries, a dozen stacks, and, lately, AI-assisted solo products.",
  },
  nav: {
    overview: "Overview",
    dna: "Technical DNA",
    ai: "AI Engineering",
    projects: "Projects",
    experience: "Experience",
    philosophy: "Philosophy",
    contact: "Contact",
    resume: "Résumé",
  },
  hero: {
    eyebrow: "Carlos Lens · Software Engineer · Madrid",
    headline: "I learn the stack, then I ship the system.",
    subhead:
      "Fifteen years building software across four countries and a dozen stacks — from Java microservices at John Deere and a BMW automation suite at Grant Thornton, to leading engineering at Openbank, and shipping full-stack products solo, end to end.",
    ctaPrimary: "See the work",
    ctaSecondary: "Get in touch",
    stats: [
      { value: "15", label: "years in software" },
      { value: "8", label: "roles, 4 countries" },
      { value: "4", label: "solo products shipped in 2026" },
    ],
  },
  overview: {
    kicker: "Overview",
    heading: "A systems engineer who keeps changing systems",
    paragraphs: [
      "Carlos started as a developer in Venezuela in 2011, building internal tools for a hosting company — a Balanced Scorecard app, an ITIL help desk, an Active Directory admin console. Within two years he was leading web projects; within three, he was teaching web frameworks at his own university while running a corporate intranet build on the side.",
      "The move to Europe in 2014 traded one stack for another — .NET became a QA and test-automation lead role at UST Global on Experian's GDPR compliance push, then a full-stack seat at John Deere in Germany building the microservices behind tractor and implement fleet operations, then three years at Grant Thornton moving between C#/.NET and Java/Spring Boot on BMW's automation suite, with React and Angular on the front end.",
      "Since 2023 he's been at Openbank, first as a backend engineer on Java and Spring Boot, promoted in 2025 into engineering management. In parallel, he ships independent full-stack products — real-time apps on the Cloudflare edge, Supabase-backed games, Next.js startups — solo, end to end, for the sake of staying sharp on whatever's current.",
    ],
  },
  dna: {
    kicker: "Technical DNA",
    heading: "Depth in several directions at once",
    intro:
      "Every category below has shipped in production, under his name, for a client or an employer — not a tutorial project.",
    categories: {
      languages: "Languages",
      backend: "Backend & Frameworks",
      frontend: "Frontend",
      data: "Data & Storage",
      cloud: "Cloud & Infrastructure",
      devops: "DevOps & CI/CD",
      testing: "Testing & Quality",
      leadership: "Leadership",
    },
  },
  ai: {
    kicker: "AI Engineering",
    heading: "AI as a multiplier, not a headline",
    intro:
      "Carlos isn't selling himself as an AI-agent specialist — the honest version is more useful: he treats AI-assisted, agentic coding tools as part of how a systems engineer works now, the same way Git or CI became part of the job a decade ago.",
    flow: ["Idea", "Agent + Tools", "Working System", "Shipped"],
    points: [
      {
        title: "Solo, full-stack, at speed",
        body: "The four products in the Projects section — each on a different stack, each shipped end to end alone — were built leaning on AI-assisted, agentic workflows to move at a pace that used to need a small team: architecture and judgment stay human, the mechanical parts move faster.",
      },
      {
        title: "Bringing it into the day job",
        body: "At Openbank, Carlos is part of the bank's push to bring AI-assisted engineering into everyday delivery — evaluating where it genuinely speeds up a backend team versus where it's just noise.",
      },
      {
        title: "Built with AI, not just using it",
        body: "Earlier hands-on AI work includes a browser speech-recognition prototype for natural, conversational interaction — small, but proof the interest predates the current hype cycle.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    heading: "A curated look at what's shipped",
    intro:
      "Four products, four different stacks, all live. Quality over quantity — the rest of the public repos are one click away below.",
    viewCode: "View code",
    viewDemo: "Live demo",
    moreKicker: "More on GitHub",
    moreHeading: "Everything else, pulled live",
    moreIntro:
      "This list is fetched from the GitHub API at page load — new public repositories show up here automatically, no redeploy needed.",
    loading: "Loading repositories…",
    error: "Couldn't reach the GitHub API right now — browse the profile directly instead.",
    viewAllOnGithub: "View full profile on GitHub",
  },
  experience: {
    kicker: "Experience",
    heading: "Fifteen years, four countries, one pattern",
    intro:
      "New domain, new stack, shipped system — from a first job building internal tools in Venezuela to leading engineering at a Spanish bank.",
  },
  adaptability: {
    kicker: "Adaptability",
    heading: "I don't belong to a single stack. I solve problems.",
    statement: "New technology. Understand it. Integrate it. Ship something useful.",
    body: "The pattern holds across fifteen years: .NET intranets, Java microservices, React and Angular front ends, Cloudflare's edge, Supabase, Next.js. Different employer, different decade, same instinct — figure out the unfamiliar stack fast enough to ship something real in it.",
    path: [".NET & WCF", "Java & Spring Boot", "React & Angular", "Next.js & TypeScript", "Cloudflare Edge & Supabase"],
    footnote: "Each shift above happened on the job, on a deadline — not in a course.",
  },
  philosophy: {
    kicker: "Engineering Philosophy",
    heading: "How Carlos builds",
    principles: [
      {
        title: "Ship the whole system",
        body: "Frontend, backend, infrastructure, payments, moderation, email — the solo projects exist because understanding the seams between layers matters more than mastering any one of them.",
      },
      {
        title: "Zero-cost architecture is a constraint worth designing for",
        body: "Every recent side project runs on a free tier by design, not by accident — it forces cleaner architecture, not a worse one.",
      },
      {
        title: "Learn the framework, not just the syntax",
        body: ".NET, Java/Spring, React, Angular, Next.js, vanilla JS — the constant isn't the language, it's the ability to read a new one's idioms quickly.",
      },
      {
        title: "Test strategy is part of the design",
        body: "From leading QA and automation at UST Global to TDD/DDD on Java microservices — tests are a design tool, not a chore added at the end.",
      },
      {
        title: "AI is a multiplier, not a shortcut",
        body: "It moves the mechanical work faster; the architecture, the judgment calls, and the taste stay human.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    heading: "Have a difficult technical problem? Let's talk.",
    body: "Open to conversations about engineering leadership, full-stack builds, or where AI-assisted development actually earns its place in a team.",
    ctaEmail: "Send an email",
    ctaLinkedin: "Connect on LinkedIn",
    ctaGithub: "See the code on GitHub",
  },
  footer: {
    tagline: "Full-stack engineer. Recovering .NET developer. Currently shipping on the edge.",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, deployed for €0.",
  },
};

export default en;
