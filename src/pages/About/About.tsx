import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonLabel,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/images/logo/icon-64.png";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t("About")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol>
              <IonItem
                button
                target="_blank"
                href="https://github.com/ibrahimawadhamid/buddy"
              >
                <IonAvatar slot="start" className="user-thumbnail">
                  <img src={Logo} alt="logo" />
                </IonAvatar>
                <IonLabel>
                  <h1>Buddy</h1>
                  <p>Ionic and React starter app</p>
                  <p>version: 0.1.0</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
