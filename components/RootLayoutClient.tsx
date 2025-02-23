"use client";

import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import { getUserLocale } from "@/i18n/locale";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<string | null>(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const storedLocale = getUserLocale();
    setLocale(storedLocale);

    import(`../messages/${storedLocale}.json`)
      .then((module) => setMessages(module.default))
      .catch(() => setMessages({}));
  }, []);

  if (!locale || Object.keys(messages).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeRegistry>
        <Header />
        {children}
      </ThemeRegistry>
    </NextIntlClientProvider>
  );
}
