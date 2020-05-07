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
  useIonViewDidEnter,
  IonModal,
  IonButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonBadge,
  IonIcon,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

import "./MapPage.css";
import { people, checkbox, information, warning } from "ionicons/icons";

const MapPage: React.FC = () => {
  const { t } = useTranslation();
  const [leafletMap, setLeafletMap] = useState<L.Map>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useIonViewDidEnter(function () {
    if (leafletMap) {
      leafletMap?.invalidateSize();
    }
  });

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
    var defaultIcon = L.icon({
      iconUrl: MarkerIcon,
      shadowUrl: MarkerShadow,
    });
    if (leafletMap) {
      const marker = L.marker([34, 30], { icon: defaultIcon }).addTo(
        leafletMap
      );
      marker.on("click", () => setShowModal(true));
    }
  }, [leafletMap]);

  return (
    <React.Fragment>
      <IonModal
        isOpen={showModal}
        cssClass="marker-modal"
        showBackdrop={false}
        onDidDismiss={() => setShowModal(false)}
      >
        <IonList className="ion-text-center">
          <IonListHeader lines="full">
            <IonTitle className="marker-modal-header">Awesome Marker</IonTitle>
          </IonListHeader>
          <IonItem lines="full">
            <IonIcon slot="start" color="primary" icon={people} />
            <IonLabel>Followers</IonLabel>
            <IonBadge color="primary" slot="end">
              22K
            </IonBadge>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="success" icon={checkbox} />
            <IonLabel>Completed</IonLabel>
            <IonBadge color="success" slot="end">
              800
            </IonBadge>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="warning" icon={information} />
            <IonLabel>Warnings</IonLabel>
            <IonBadge color="warning" slot="end">
              150
            </IonBadge>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" color="danger" icon={warning} />
            <IonLabel>Notifications</IonLabel>
            <IonBadge color="danger" slot="end">
              500
            </IonBadge>
          </IonItem>
          <IonButton
            className="ion-margin-top ion-margin-bottom"
            onClick={() => setShowModal(false)}
          >
            Close
          </IonButton>
        </IonList>
      </IonModal>
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
