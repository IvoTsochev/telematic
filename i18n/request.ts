import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "../i18n/config";

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import(`../messages/${defaultLocale}.json`)).default,
  };
});
