import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeHIN from "@/locales/hin/home.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        home: homeEN,
      },
      hin: {
        home: homeHIN,
      },
    },
    fallbackLng: "en",
  });
