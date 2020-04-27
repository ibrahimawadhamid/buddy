import React from "react";

export interface Settings {
  useDarkMode: boolean;
}

interface Context {
  settings: Settings;
  initializeContext: () => void;
}

const GeneralContext = React.createContext<Context>({
  settings: { useDarkMode: false },
  initializeContext: () => {},
});

export default GeneralContext;
