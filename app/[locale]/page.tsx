import { getDictionary, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { Hero } from "./components/hero";
import { Overview } from "./components/overview";
import { TechnicalDna } from "./components/technical-dna";
import { AiSection } from "./components/ai-section";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Adaptability } from "./components/adaptability";
import { Philosophy } from "./components/philosophy";
import { Contact } from "./components/contact";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Overview dict={dict} />
      <TechnicalDna dict={dict} />
      <AiSection dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Adaptability dict={dict} />
      <Philosophy dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
