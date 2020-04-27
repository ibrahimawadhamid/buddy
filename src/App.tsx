import SideMenu from "./components/SideMenu";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import News from "./pages/News";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <SideMenu />
          <IonRouterOutlet id="main">
            <Route path="/page/home" component={Home} exact />
            <Route path="/page/profile" component={Profile} exact />
            <Route path="/page/about" component={About} exact />
            <Route path="/page/news" component={News} exact />
            <Route path="/page/settings" component={Settings} exact />
            <Redirect from="/" to="/page/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
