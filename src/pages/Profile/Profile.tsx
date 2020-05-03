import React, { useState, useRef, useContext } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonInput,
  IonDatetime,
  IonTextarea,
  IonAlert,
  IonLoading,
} from "@ionic/react";
import { camera, cloudUpload, trash } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Profile.css";
import AvatarImage from "../../assets/images/people/avatar.svg";
import AuthenticationContext from "../../context/AuthenticationContext";
import PageHeader from "../../components/PageHeader";

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { currentUser } = useContext(AuthenticationContext);
  const [isProfileModified, setIsProfileModified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const displayNameRef = useRef<HTMLIonInputElement>(null);
  const dateOfBirthRef = useRef<HTMLIonDatetimeElement>(null);
  const jobTitleRef = useRef<HTMLIonInputElement>(null);
  const telephoneRef = useRef<HTMLIonInputElement>(null);
  const address_1Ref = useRef<HTMLIonInputElement>(null);
  const address_2Ref = useRef<HTMLIonInputElement>(null);
  const bioRef = useRef<HTMLIonTextareaElement>(null);

  const inputFieldChangedHandler = (event: CustomEvent) => {
    setIsProfileModified(true);
  };

  const saveProfileInfoHandler = () => {
    const displayName = displayNameRef.current!.value;
    const enteredDateOfBirth = dateOfBirthRef.current!.value;

    if (
      !displayName ||
      !enteredDateOfBirth ||
      displayName.toString().trim().length === 0 ||
      enteredDateOfBirth.trim().length === 0
    ) {
      setErrorMessage(t("Display name, and Date of Birth Cannot be empty"));
      return;
    }
    setErrorMessage("");
    finishSaveProfile();
  };

  const finishSaveProfile = () => {
    setShowLoading(false);
    history.replace("/");
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={!!errorMessage}
        onDidDismiss={() => setErrorMessage("")}
        header={t("Error")}
        message={errorMessage}
        buttons={[]}
      />
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={finishSaveProfile}
        message={"Please wait..."}
        duration={2000}
      />
      <IonContent>
        <PageHeader
          title={t("Profile")}
          backButtonEnabled={true}
          menuButtonEnabled={false}
        />
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol className="ion-text-center">
              <img
                className="profile-picture"
                src={
                  currentUser ? currentUser.picture?.toString() : AvatarImage
                }
                alt="profile"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton fill="outline">
                <IonIcon icon={cloudUpload} slot="start" />
                {t("Upload")}
              </IonButton>
              <IonButton fill="outline">
                <IonIcon icon={camera} slot="start" />
                {t("Camera")}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-start ion-margin-end">
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Display name")}</IonLabel>
                <IonInput
                  ref={displayNameRef}
                  type="text"
                  value={currentUser?.displayName}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("ُE-mail")}</IonLabel>
                <IonInput disabled type="text" value={currentUser?.email} />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Date of Birth")}</IonLabel>
                <IonDatetime
                  ref={dateOfBirthRef}
                  cancelText={t("Cancel")}
                  doneText={t("Ok")}
                  value={currentUser?.dateOfBirth?.toString()}
                  displayFormat="DD-MMM-YYYY"
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Job Title")}</IonLabel>
                <IonInput
                  ref={jobTitleRef}
                  type="text"
                  value={currentUser?.jobTitle}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Telephone")}</IonLabel>
                <IonInput
                  ref={telephoneRef}
                  type="tel"
                  inputMode="tel"
                  value={currentUser?.telephone}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Address (1)")}</IonLabel>
                <IonInput
                  ref={address_1Ref}
                  type="text"
                  inputMode="text"
                  value={currentUser?.address_1}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Address (2)")}</IonLabel>
                <IonInput
                  ref={address_2Ref}
                  type="text"
                  inputMode="text"
                  value={currentUser?.address_2}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeXs="12" className="ion-padding-start ion-padding-end">
              <IonItem>
                <IonLabel position="floating">{t("Bio")}</IonLabel>
                <IonTextarea
                  ref={bioRef}
                  value={currentUser?.bio}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                disabled={!isProfileModified}
                onClick={saveProfileInfoHandler}
              >
                {t("Save")}
              </IonButton>
              <IonButton
                color="danger"
                fill="outline"
                className="ion-margin-start"
                disabled={!isProfileModified}
                onClick={() => history.goBack()}
              >
                <IonIcon icon={trash} slot="start" />
                {t("Discard")}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
