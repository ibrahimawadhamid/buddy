import React from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonLabel,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import packageJson from "../../../package.json";
import Logo from "../../assets/images/logo/icon-512.png";
import PageHeader from "../../components/PageHeader/PageHeader";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonContent>
        <PageHeader title={t("About")} />
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
                  <p>{t("version") + ": " + packageJson.version}</p>
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
