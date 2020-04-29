import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./i18n";
import GeneralContextProvider from "./context/GeneralContextProvider";
import AuthenticationContextProvider from "./context/AuthenticationContextProvider";

ReactDOM.render(
  <GeneralContextProvider>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </GeneralContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
