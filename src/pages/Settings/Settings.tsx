import React, { useContext } from "react";
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
  IonToggle,
  IonIcon,
} from "@ionic/react";
import { moon } from "ionicons/icons";

import "./Settings.css";
import GeneralContext from "../../context/GeneralContext";

const Settings: React.FC = () => {
  const { settings, saveSettings, setDarkMode } = useContext(GeneralContext);

  const toggleDarkMode = (event: CustomEvent) => {
    saveSettings({ darkMode: event.detail.checked });
    setDarkMode(event.detail.checked);
  };

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
            <IonIcon
              slot="start"
              icon={moon}
              className="component-icon component-icon-dark"
            />
            <IonLabel>Dark mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              checked={settings.darkMode}
              onIonChange={toggleDarkMode}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
