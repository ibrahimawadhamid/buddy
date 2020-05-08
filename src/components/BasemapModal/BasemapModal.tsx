import React from "react";
import {
  IonModal,
  IonList,
  IonListHeader,
  IonTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonThumbnail,
} from "@ionic/react";
import OSM from "../../assets/images/map-controls/osm.jpg";
import Toner from "../../assets/images/map-controls/tnr.png";
import Satellite from "../../assets/images/map-controls/satellite.png";

import "./BasemapModal.css";
import { checkbox } from "ionicons/icons";

const BasemapModal: React.FC<{
  show: boolean;
  setShow: (show: boolean) => void;
}> = (props) => {
  return (
    <IonModal
      isOpen={props.show}
      cssClass="basemap-modal"
      onDidDismiss={() => props.setShow(false)}
    >
      <IonList className="ion-text-center">
        <IonListHeader lines="full">
          <IonTitle className="basemap-modal-header">Basemap</IonTitle>
        </IonListHeader>
        <IonItem lines="full" button>
          <IonThumbnail slot="start">
            <img src={OSM} alt="OSM" />
          </IonThumbnail>
          <IonLabel>Open Street Map</IonLabel>
        </IonItem>
        <IonItem lines="full" button>
          <IonThumbnail slot="start">
            <img src={Toner} alt="Toner" />
          </IonThumbnail>
          <IonLabel>Toner Lite</IonLabel>
          <IonIcon icon={checkbox} slot="end" color="primary" />
        </IonItem>
        <IonItem lines="full" button>
          <IonThumbnail slot="start">
            <img src={Satellite} alt="Satellite" />
          </IonThumbnail>
          <IonLabel>Satellite</IonLabel>
        </IonItem>
        <IonButton
          className="ion-margin-top ion-margin-bottom"
          onClick={() => props.setShow(false)}
        >
          Close
        </IonButton>
      </IonList>
    </IonModal>
  );
};

export default BasemapModal;
