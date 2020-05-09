import React from "react";

import config from "../config";

export type availableLanguages = "en" | "ar";

export interface Settings {
  darkMode: boolean;
  language: availableLanguages;
  languageDirection: string;
  defaultBasemapId: string;
}

interface Context {
  settings: Settings;
  initializeContext: () => void;
  setDarkMode: (darkMode: boolean) => void;
  setLanguage: (language: availableLanguages) => void;
  setDefaultBasemapId: (basemapId: string) => void;
}

export const defaultSettings: Settings = {
  darkMode: config.defaultDarkMode,
  language: "en",
  languageDirection: "ltr",
  defaultBasemapId: config.defaultBasemapId,
};

const GeneralContext = React.createContext<Context>({
  settings: defaultSettings,
  initializeContext: () => {},
  setDarkMode: () => {},
  setLanguage: () => {},
  setDefaultBasemapId: () => {},
});

export default GeneralContext;
