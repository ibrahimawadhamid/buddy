import React, { useContext, useState } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { moon, globe, map } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./Settings.css";
import GeneralContext from "../../context/GeneralContext";
import PageHeader from "../../components/PageHeader";
import BasemapModal from "../../components/BasemapModal";

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const {
    settings,
    setDarkMode,
    setLanguage,
    setDefaultBasemapId,
  } = useContext(GeneralContext);
  const [showBasemapModal, setShowBasemapModal] = useState<boolean>(false);

  const darkModeHandler = (event: CustomEvent) => {
    setDarkMode(event.detail.checked);
  };

  const toggleDarkModeHandler = () => {
    setDarkMode(!settings.darkMode);
  };

  const selectLanguageHandler = (event: CustomEvent) => {
    setLanguage(event.detail.value);
  };

  const selectDefaultBasemapIdHandler = (basemapId: string) => {
    setDefaultBasemapId(basemapId);
  };

  return (
    <React.Fragment>
      <BasemapModal
        show={showBasemapModal}
        setShow={setShowBasemapModal}
        selectedBasemapId={settings.defaultBasemapId}
        setSelectedBasemapId={selectDefaultBasemapIdHandler}
      />
      <IonPage>
        <IonContent>
          <PageHeader
            title={t("Settings")}
            backButtonEnabled={false}
            menuButtonEnabled={true}
          />
          <IonList className="ion-margin-top">
            <IonItem lines="inset" button onClick={toggleDarkModeHandler}>
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
            <IonItem lines="inset">
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
            <IonItem
              lines="inset"
              button
              onClick={() => setShowBasemapModal(true)}
            >
              <IonIcon
                slot="start"
                icon={map}
                className="component-icon component-icon-dark"
              />
              <IonLabel>{t("Default Basemap")}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Settings;
