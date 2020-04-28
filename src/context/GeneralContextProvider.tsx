import React, { useState, useEffect, useCallback } from "react";
import { Plugins } from "@capacitor/core";

import GeneralContext, {
  Settings,
  defaultSettings,
  availableLanguages,
} from "./GeneralContext";

import i18n from "../i18n";

const { Storage } = Plugins;

const GeneralContextProvider: React.FC = (props) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  // Save to disk whenever there is a change
  useEffect(() => {
    Storage.set({
      key: "settings",
      value: JSON.stringify(settings),
    });
  }, [settings]);

  // Called at application startup, loads the saved data
  const initializeContext = useCallback(async () => {
    const settingsData = await Storage.get({ key: "settings" });
    const storedSettings = settingsData.value
      ? JSON.parse(settingsData.value)
      : defaultSettings;
    setSettings(storedSettings);
    setDarkMode(storedSettings.darkMode);
    setLanguage(storedSettings.language);
  }, []);

  const setDarkMode = (darkMode: boolean = false) => {
    document.body.classList.toggle("dark", darkMode);
    const updatedSettings = { darkMode: darkMode };
    setSettings((currentSettings) => {
      return { ...currentSettings, ...updatedSettings };
    });
  };

  const setLanguage = (language: availableLanguages = "en") => {
    i18n.changeLanguage(language);
    const languageDirection = i18n.dir(language);
    const updatedSettings = { language: language, languageDirection };
    setSettings((currentSettings) => {
      return { ...currentSettings, ...updatedSettings };
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        settings,
        initializeContext,
        setDarkMode,
        setLanguage,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
