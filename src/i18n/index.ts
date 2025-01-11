import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: getLocales()[0].languageCode ?? "vi",
  resources: {
    en: en,
    vi: vi,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
