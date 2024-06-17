import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNs from "./locales/en/ns.json";
import uaNs from "./locales/ua/ns.json";

export const defaultNS = "ns";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        ns: enNs,
      },
      ua: {
        ns: uaNs,
      },
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
  });

export default i18next;
