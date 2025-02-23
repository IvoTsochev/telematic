"use client";

import { Locale, defaultLocale } from "../i18n/config";

const STORAGE_KEY = "NEXT_LOCALE";

export function getUserLocale(): Locale {
  if (typeof window !== "undefined") {
    return (localStorage.getItem(STORAGE_KEY) as Locale) || defaultLocale;
  }
  return defaultLocale;
}

export function setUserLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}
