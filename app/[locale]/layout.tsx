import type { Metadata } from "next";
import { locales, isLocale, defaultLocale, getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/lib/data/site";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SetHtmlLang } from "./components/set-html-lang";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}/`,
      languages: {
        en: `${site.url}/en/`,
        es: `${site.url}/es/`,
        "x-default": `${site.url}/en/`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${site.url}/${locale}/`,
      siteName: site.name,
      locale: locale === "en" ? "en_US" : "es_ES",
      alternateLocale: locale === "en" ? "es_ES" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/${locale}/`,
    image: `${site.url}/avatar.png`,
    jobTitle: site.role,
    description: dict.meta.description,
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
    worksFor: { "@type": "Organization", name: "Openbank" },
    sameAs: [site.githubUrl, site.linkedinUrl],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <SetHtmlLang locale={locale} />
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-[0.5]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(126,232,201,0.09),transparent)]" />
      <Header locale={locale} dict={dict} />
      <main>{children}</main>
      <Footer dict={dict} />
    </>
  );
}
