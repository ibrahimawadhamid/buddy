import React from "react";

export type availableLanguages = "en" | "ar";

export interface Settings {
  darkMode: boolean;
  language: availableLanguages;
  languageDirection: string;
}

interface Context {
  settings: Settings;
  initializeContext: () => void;
  setDarkMode: (darkMode: boolean) => void;
  setLanguage: (language: availableLanguages) => void;
}

export const defaultSettings: Settings = {
  darkMode: false,
  language: "en",
  languageDirection: "ltr",
};

const GeneralContext = React.createContext<Context>({
  settings: defaultSettings,
  initializeContext: () => {},
  setDarkMode: () => {},
  setLanguage: () => {},
});

export default GeneralContext;
