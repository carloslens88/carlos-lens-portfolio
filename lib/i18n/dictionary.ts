export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    overview: string;
    dna: string;
    ai: string;
    projects: string;
    experience: string;
    philosophy: string;
    contact: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  overview: {
    kicker: string;
    heading: string;
    paragraphs: string[];
  };
  dna: {
    kicker: string;
    heading: string;
    intro: string;
    categories: Record<string, string>;
    timeline: {
      heading: string;
      intro: string;
      years: string;
      totalLabel: string;
      stackLabels: Record<"java" | "dotnet" | "mixed" | "other", string>;
    };
  };
  ai: {
    kicker: string;
    heading: string;
    intro: string;
    flow: string[];
    points: { title: string; body: string }[];
  };
  projects: {
    kicker: string;
    heading: string;
    intro: string;
    viewCode: string;
    viewDemo: string;
    moreKicker: string;
    moreHeading: string;
    moreIntro: string;
    loading: string;
    error: string;
    viewAllOnGithub: string;
  };
  experience: {
    kicker: string;
    heading: string;
    intro: string;
  };
  adaptability: {
    kicker: string;
    heading: string;
    statement: string;
    body: string;
    path: string[];
    footnote: string;
  };
  philosophy: {
    kicker: string;
    heading: string;
    principles: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    heading: string;
    body: string;
    ctaEmail: string;
    ctaLinkedin: string;
    ctaGithub: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
  };
}
