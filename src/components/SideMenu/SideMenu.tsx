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
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  home,
  homeSharp,
  informationCircle,
  informationCircleSharp,
  settings,
  settingsSharp,
} from "ionicons/icons";
import "./SideMenu.css";

import AvatarImage from "../../assets/images/people/person-1.jpg";

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
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonItem button href="/page/profile">
          <IonAvatar slot="start" className="user-thumbnail">
            <img src={AvatarImage} alt="profile" />
          </IonAvatar>
          <IonLabel>
            <h2>Ibrahim Awad</h2>
            <p>Sr. Software Engineer</p>
          </IonLabel>
        </IonItem>
        <IonList id="core-pages-list">
          {/* <IonListHeader>Buddy</IonListHeader>
          <IonNote>hello, I'm your buddy</IonNote> */}
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
                  <IonLabel>{appPage.title}</IonLabel>
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
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonNote>version: 0.1.0</IonNote>
    </IonMenu>
  );
};

export default Menu;