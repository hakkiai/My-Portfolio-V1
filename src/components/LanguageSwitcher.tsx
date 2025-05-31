import React, { useRef, useState } from "react";
import india_flag from "../assets/flags/india-flag.png";
import hindi_flag from "../assets/flags/hindi.png";
import telugu_flag from "../assets/flags/telugu.png";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: india_flag },
  { code: "te", label: "Telugu", flag: telugu_flag },
  { code: "hi", label: "Hindi", flag: hindi_flag },
];

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const el = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const showLanguageOptions = () => {
    if (el.current?.classList.contains("hidden")) {
      el.current.classList.remove("hidden");
      el.current.classList.add("block");
    } else if (el.current) {
      el.current.classList.remove("block");
      el.current.classList.add("hidden");
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    i18n.changeLanguage(langCode);
    showLanguageOptions();
  };

  const currentFlag = languages.find((l) => l.code === currentLang)?.flag;

  return (
    <div className="flex flex-col items-center relative mx-4">
      <button
        className="bg-blue rounded-full overflow-hidden sm:block"
        onClick={showLanguageOptions}
      >
        <img
          className="w-6 h-6 2xl:w-7 2xl:h-7"
          src={currentFlag}
          alt="Current language"
        />
      </button>
      <div
        ref={el}
        className="hidden flex flex-col items-center -top-12 overflow-hidden absolute w-10 z-10 sm:top-7 bg-white rounded shadow"
      >
        {languages
          .filter((lang) => lang.code !== currentLang)
          .map((lang) => (
            <img
              key={lang.code}
              className="w-6 h-6 my-2 cursor-pointer hover:scale-95 hover:brightness-[75%] 2xl:w-7 2xl:h-7"
              src={lang.flag}
              alt={lang.label}
              onClick={() => handleLanguageChange(lang.code)}
            />
          ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
