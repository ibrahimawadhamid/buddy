import SideMenu from "./components/SideMenu";
import React, { useContext, useEffect, Suspense } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonSpinner,
} from "@ionic/react";
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

import GeneralContext from "./context/GeneralContext";
import AuthenticationContext from "./context/AuthenticationContext";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Messages from "./pages/Messages";
import ChatThread from "./pages/ChatThread";
import News from "./pages/News";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App: React.FC = () => {
  const { initializeContext, settings } = useContext(GeneralContext);
  const { currentUser } = useContext(AuthenticationContext);

  useEffect(() => {
    initializeContext();
  }, [initializeContext]);

  return (
    <IonApp dir={settings.languageDirection}>
      <IonReactRouter>
        <Suspense fallback={<IonSpinner />}>
          <IonSplitPane contentId="main">
            <SideMenu />
            <IonRouterOutlet id="main">
              <Route path="/page/home" component={Home} exact />
              <Route path="/page/locations" component={Locations} exact />
              <Route path="/page/about" component={About} exact />
              <Route path="/page/messages" component={Messages} exact />
              <Route path="/page/chat-thread" component={ChatThread} exact />
              <Route path="/page/news" component={News} exact />
              <Route path="/page/settings" component={Settings} exact />
              <Route path="/page/register" component={Register} exact />
              <Route path="/page/login" component={Login} exact />
              <PrivateRoute
                path="/page/profile"
                component={Profile}
                exact
                condition={!!currentUser}
              />
              <Redirect from="/" to="/page/home" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
