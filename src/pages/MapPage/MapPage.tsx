import React, { useEffect, useState } from "react";
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
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { getDefaultMarker } from "../../util";

import "./MapPage.css";
import MarkerPopup from "../../components/MarkerPopup";

const MapPage: React.FC = () => {
  const { t } = useTranslation();
  const [leafletMap, setLeafletMap] = useState<L.Map>();
  const [showModal, setShowModal] = useState<boolean>(false);

  /**
   * Run only the first time this component loads
   */
  useEffect(() => {
    const currentMap = L.map("mapDiv", {
      center: [25, 30],
      zoom: 4,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a target="_blank" href="https://buddy-ionic.web.app">Buddy</a>',
        }),
      ],
    });
    setLeafletMap(currentMap);
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  }, []);

  useEffect(() => {
    if (leafletMap) {
      const markers = L.markerClusterGroup({ animateAddingMarkers: true });
      leafletMap.addLayer(markers);
      setTimeout(function () {
        for (let i = 0; i < 500; i++) {
          const marker = getDefaultMarker(leafletMap);
          marker.on("click", () => setShowModal(true));
          markers.addLayer(marker);
        }
      }, 1000);
    }
  }, [leafletMap]);

  return (
    <React.Fragment>
      <MarkerPopup show={showModal} setShow={setShowModal} />
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
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol>
                <div id="mapDiv"></div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default MapPage;
