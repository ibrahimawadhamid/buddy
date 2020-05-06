import React, { useEffect, useRef } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./MapPage.css";

const MapPage: React.FC = () => {
  const { t } = useTranslation();
  const mapRef = useRef(null);

  /**
   * Run only the first time this component loads
   */
  useEffect(() => {
    L.map("mapDiv", {
      center: [25, 30],
      zoom: 4,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a target="_blank" href="https://buddy-ionic.web.app">Buddy</a>',
        }),
      ],
    });
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success" className="map-page-header">
          <IonButtons>
            <IonMenuButton slot="start" />
            <IonTitle>{t("Map")}</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div ref={mapRef} id="mapDiv"></div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MapPage;
