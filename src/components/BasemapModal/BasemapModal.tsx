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
import { checkbox } from "ionicons/icons";

import config from "../../config";
import "./BasemapModal.css";

const BasemapModal: React.FC<{
  show: boolean;
  setShow: (show: boolean) => void;
  selectedBasemapId: string;
  setSelectedBasemapId: (id: string) => void;
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
        {config.availableBasemaps.map((singleBasemap) => {
          return (
            <IonItem
              key={"basemap-option-" + singleBasemap.id}
              lines="inset"
              button
              onClick={() => {
                props.setSelectedBasemapId(singleBasemap.id);
                props.setShow(false);
              }}
            >
              <IonThumbnail slot="start">
                <img src={singleBasemap.image} alt={singleBasemap.id} />
              </IonThumbnail>
              <IonLabel>{singleBasemap.name}</IonLabel>
              {props.selectedBasemapId === singleBasemap.id ? (
                <IonIcon icon={checkbox} slot="end" color="primary" />
              ) : null}
            </IonItem>
          );
        })}
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
