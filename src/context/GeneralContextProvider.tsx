import React, { useState, useEffect, useCallback } from "react";
import { Plugins, FilesystemDirectory } from "@capacitor/core";

import GeneralContext, { Settings } from "./GeneralContext";

const { Storage, Filesystem } = Plugins;

const GeneralContextProvider: React.FC = (props) => {
  const [settings, setSettings] = useState<Settings>({ useDarkMode: false });

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
      : { useDarkMode: false };
    setSettings(storedSettings);
  }, []);

  return (
    <GeneralContext.Provider value={{ settings, initializeContext }}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
