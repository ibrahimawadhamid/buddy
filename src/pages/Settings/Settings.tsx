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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { moon, globe } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./Settings.css";
import GeneralContext from "../../context/GeneralContext";

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { settings, setDarkMode, setLanguage } = useContext(GeneralContext);

  const darkModeHandler = (event: CustomEvent) => {
    setDarkMode(event.detail.checked);
  };

  const selectLanguageHandler = (event: CustomEvent) => {
    setLanguage(event.detail.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t("Settings")}</IonTitle>
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
            <IonLabel>{t("Dark Mode")}</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              checked={settings.darkMode}
              onIonChange={darkModeHandler}
            />
          </IonItem>
          <IonItem>
            <IonIcon
              slot="start"
              icon={globe}
              className="component-icon component-icon-dark"
            />
            <IonLabel>{t("Language")}</IonLabel>
            <IonSelect
              value={settings.language}
              okText={t("Ok")}
              cancelText={t("Cancel")}
              onIonChange={selectLanguageHandler}
            >
              <IonSelectOption value="en">{t("English")}</IonSelectOption>
              <IonSelectOption value="ar">{t("Arabic")}</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
