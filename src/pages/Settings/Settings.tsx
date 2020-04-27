import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonRange,
  IonIcon,
} from "@ionic/react";
import { sadOutline, happyOutline } from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className="ion-margin-top">
          <IonItem>
            <IonLabel>This app is awesome</IonLabel>
            <IonCheckbox checked slot="start" />
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>How good is this?</IonListHeader>
          <IonRadioGroup value="good" className="ion-margin-top">
            <IonItem>
              <IonLabel>Good</IonLabel>
              <IonRadio slot="start" value="good" color="warning" />
            </IonItem>
            <IonItem>
              <IonLabel>Awesome</IonLabel>
              <IonRadio slot="start" value="awesome" color="primary" />
            </IonItem>
            <IonItem>
              <IonLabel>Amazing</IonLabel>
              <IonRadio slot="start" value="amazing" color="success" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonListHeader>Adjust happiness</IonListHeader>
          <IonItem>
            <IonRange value={50} color="danger">
              <IonIcon slot="start" icon={sadOutline} />
              <IonIcon slot="end" icon={happyOutline} />
            </IonRange>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
