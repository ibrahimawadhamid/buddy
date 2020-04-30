import React from "react";
import {
  IonPage,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import LatestNews from "../../components/LatestNews";
import "./Home.css";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonContent>
        <div className="fake-header">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
            <IonLabel className="main-title ion-margin-start">
              {t("Home")}
            </IonLabel>
          </IonButtons>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <LatestNews />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
