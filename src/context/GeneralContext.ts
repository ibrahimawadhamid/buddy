import React from "react";

export interface Settings {
  darkMode: boolean;
}

interface Context {
  settings: Settings;
  initializeContext: () => void;
  saveSettings: (updatedSettings: Settings) => void;
  setDarkMode: (darkMode: boolean) => void;
}

export const defaultSettings: Settings = {
  darkMode: false,
};

const GeneralContext = React.createContext<Context>({
  settings: defaultSettings,
  initializeContext: () => {},
  saveSettings: () => {},
  setDarkMode: () => {},
});

export default GeneralContext;
