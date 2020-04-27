import React, { useState, useEffect, useCallback } from "react";
import { Plugins } from "@capacitor/core";

import GeneralContext, { Settings, defaultSettings } from "./GeneralContext";

const { Storage } = Plugins;

const GeneralContextProvider: React.FC = (props) => {
  const [settings, setSettings] = useState<Settings>({ darkMode: false });

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
  }, []);

  // Save new settings from settings page
  const saveSettings = (updatedSettings: Settings | {}) => {
    setSettings((currentSettings) => {
      return { ...currentSettings, ...updatedSettings };
    });
  };

  const setDarkMode = (darkMode: boolean) => {
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <GeneralContext.Provider
      value={{ settings, initializeContext, saveSettings, setDarkMode }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
