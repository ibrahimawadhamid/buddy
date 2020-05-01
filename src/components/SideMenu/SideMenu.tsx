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
  IonCol,
  IonGrid,
  IonRow,
  IonRouterLink,
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
  logIn,
} from "ionicons/icons";
import { useTranslation } from "react-i18next";

import packageJson from "../../../package.json";

import GeneralContext from "../../context/GeneralContext";
import AuthenticationContext from "../../context/AuthenticationContext";
import "./SideMenu.css";
import AvatarImage from "../../assets/images/people/ninja.png";
import BackgroundCover from "../../assets/images/samples/cover.png";

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
  const { currentUser, logoutHandler } = useContext(AuthenticationContext);
  const location = useLocation();

  const menuOpenSide = settings.languageDirection === "ltr" ? "start" : "end";

  return (
    <IonMenu contentId="main" type="overlay" side={menuOpenSide}>
      <IonContent>
        <IonGrid
          className="border-bottom ion-padding-start"
          style={{ backgroundImage: `url(${BackgroundCover})` }}
        >
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonRouterLink href="/page/profile">
                <IonAvatar className="user-thumbnail">
                  <img
                    src={
                      currentUser
                        ? currentUser?.picture?.toString()
                        : AvatarImage
                    }
                    alt="profile"
                    className="border-rectangle"
                  />
                </IonAvatar>
              </IonRouterLink>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              {currentUser && (
                <IonLabel className="font-size-20">
                  {currentUser?.displayName}
                </IonLabel>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList id="core-pages-list">
          {!currentUser && (
            <IonMenuToggle>
              <IonItem
                className="ion-margin-bottom"
                lines="none"
                detail={false}
                href="/page/login"
              >
                <IonIcon slot="start" icon={logIn} />
                <IonLabel>Login</IonLabel>
              </IonItem>
            </IonMenuToggle>
          )}
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
          {currentUser && (
            <IonMenuToggle>
              <IonItem
                className="ion-margin-top"
                lines="none"
                detail={false}
                onClick={logoutHandler}
              >
                <IonIcon slot="start" icon={logOut} />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle>
          )}
        </IonList>
      </IonContent>
      <IonNote className="ion-margin-start">
        {t("version") + ": " + packageJson.version}
      </IonNote>
    </IonMenu>
  );
};

export default Menu;
