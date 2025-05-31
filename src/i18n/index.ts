import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import ptbr from "./translations/ptbr.json";
import hi from "./translations/hi.json";     // 👈 Added
import te from "./translations/te.json";     // 👈 Added

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    ptBR: ptbr,
    hi: hi,         // 👈 Registered
    te: te,         // 👈 Registered
  },
});
