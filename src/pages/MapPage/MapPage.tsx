import React from "react";
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { Map, TileLayer } from "react-leaflet";

import "./MapPage.css";
import PageHeader from "../../components/PageHeader/PageHeader";

const MapPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonContent>
        <PageHeader
          title={t("Map")}
          backButtonEnabled={false}
          menuButtonEnabled={true}
        />
        <IonGrid>
          <IonRow>
            <IonCol>
              <Map id="mapDiv" center={[25, 45]} zoom={4}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
              </Map>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MapPage;
