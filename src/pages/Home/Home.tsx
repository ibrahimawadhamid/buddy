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
  IonLabel,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import LatestNews from "../../components/LatestNews";
import "./Home.css";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t("Home")}</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent>
        <div className="fake-header">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
            <IonLabel className="main-title ion-margin-start">Home</IonLabel>
          </IonButtons>

          {/* <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{t("Home")}</IonTitle>
          </IonToolbar> */}
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
