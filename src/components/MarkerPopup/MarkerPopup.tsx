import React from "react";
import {
  IonModal,
  IonList,
  IonListHeader,
  IonTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonBadge,
  IonButton,
} from "@ionic/react";
import { people, checkbox, information, warning } from "ionicons/icons";

import "./MarkerPopup.css";

const MarkerPopup: React.FC<{
  show: boolean;
  setShow: (show: boolean) => void;
}> = (props) => {
  return (
    <IonModal
      isOpen={props.show}
      cssClass="marker-modal"
      showBackdrop={false}
      onDidDismiss={() => props.setShow(false)}
    >
      <IonList className="ion-text-center">
        <IonListHeader lines="full">
          <IonTitle className="marker-modal-header">Awesome Marker</IonTitle>
        </IonListHeader>
        <IonItem lines="full" button>
          <IonIcon slot="start" color="primary" icon={people} />
          <IonLabel>Followers</IonLabel>
          <IonBadge color="primary" slot="end">
            22K
          </IonBadge>
        </IonItem>
        <IonItem lines="full" button>
          <IonIcon slot="start" color="success" icon={checkbox} />
          <IonLabel>Completed</IonLabel>
          <IonBadge color="success" slot="end">
            800
          </IonBadge>
        </IonItem>
        <IonItem lines="full" button>
          <IonIcon slot="start" color="warning" icon={information} />
          <IonLabel>Warnings</IonLabel>
          <IonBadge color="warning" slot="end">
            150
          </IonBadge>
        </IonItem>
        <IonItem lines="full" button>
          <IonIcon slot="start" color="danger" icon={warning} />
          <IonLabel>Notifications</IonLabel>
          <IonBadge color="danger" slot="end">
            500
          </IonBadge>
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

export default MarkerPopup;
