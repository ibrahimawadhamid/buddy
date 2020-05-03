import React from "react";
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useTranslation } from "react-i18next";
import LatestNews from "../../components/LatestNews";
import "./Home.css";
import PageHeader from "../../components/PageHeader";
import TopEmployees from "../../components/TopEmployees";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonContent>
        <PageHeader
          title={t("Home")}
          backButtonEnabled={false}
          menuButtonEnabled={true}
        />
        <IonGrid>
          <IonRow>
            <IonCol>
              <LatestNews />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <TopEmployees />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
