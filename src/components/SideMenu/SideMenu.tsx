import React, { useContext } from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
  IonButton,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import {
  home,
  homeSharp,
  informationCircle,
  informationCircleSharp,
  settings,
  settingsSharp,
  logOut,
} from "ionicons/icons";
import { useTranslation } from "react-i18next";

import GeneralContext from "../../context/GeneralContext";
import AuthenticationContext from "../../context/AuthenticationContext";
import "./SideMenu.css";
import AvatarImage from "../../assets/images/people/avatar.svg";

import { fireBaseAuth } from "../../firebase";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const corePages: AppPage[] = [
  {
    title: "Home",
    url: "/page/home",
    iosIcon: home,
    mdIcon: homeSharp,
  },
  {
    title: "About",
    url: "/page/about",
    iosIcon: informationCircle,
    mdIcon: informationCircleSharp,
  },
];

const extraPages: AppPage[] = [
  {
    title: "Settings",
    url: "/page/settings",
    iosIcon: settings,
    mdIcon: settingsSharp,
  },
];

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const { settings } = useContext(GeneralContext);
  const { user } = useContext(AuthenticationContext);
  const location = useLocation();

  const menuOpenSide = settings.languageDirection === "ltr" ? "start" : "end";

  return (
    <IonMenu contentId="main" type="overlay" side={menuOpenSide}>
      <IonContent>
        <IonItem button href="/page/profile" className="ion-margin-top">
          <IonAvatar slot="start" className="user-thumbnail">
            <img
              src={user ? user?.photoURL?.toString() : AvatarImage}
              alt="profile"
            />
          </IonAvatar>
          {user && (
            <IonLabel>
              <h1>{user?.displayName}</h1>
            </IonLabel>
          )}
          {!user && (
            <IonLabel color="primary">{t("Login / Register")}</IonLabel>
          )}
        </IonItem>
        <IonList id="core-pages-list">
          {corePages.map((appPage, index) => {
            return (
              <IonMenuToggle key={"core-page-" + index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{t(appPage.title)}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="extra-pages-list">
          {extraPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={"extra-page-" + index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{t(appPage.title)}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonButton
          fill="outline"
          expand="block"
          onClick={() => {
            fireBaseAuth.signOut();
          }}
        >
          <IonIcon slot="start" icon={logOut} />
          Log out
        </IonButton>
      </IonContent>
      <IonNote className="ion-margin-start">{t("version") + ": 0.1.0"}</IonNote>
    </IonMenu>
  );
};

export default Menu;
