import React, { useState, useRef, useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonDatetime,
  IonTextarea,
  IonAlert,
} from "@ionic/react";
import { camera, cloudUpload } from "ionicons/icons";
import { useTranslation } from "react-i18next";

import "./Profile.css";
import AvatarImage from "../../assets/images/people/avatar.svg";
import AuthenticationContext from "../../context/AuthenticationContext";

const profileInformation = {
  firstname: "Ibrahim",
  lastname: "Awad",
  email: "ibrahim.a.hamid@gmail.com",
  dateOfBirth: "1991-11-16",
  jobTitle: "Sr. Software Engineer",
  telephone: "+20123456789",
  address_1: "Egypt, Cairo, Pyramids",
  address_2: "Egypt, New Valley",
  bio: "A small bio about the person",
};

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthenticationContext);
  const [isProfileModified, setIsProfileModified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/home" />
          </IonButtons>
          <IonTitle>{t("Profile")}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              disabled={!isProfileModified}
              onClick={saveProfileInfoHandler}
            >
              {t("Save")}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol className="ion-text-center">
              <img
                className="profile-picture"
                src={user ? user?.photoURL?.toString() : AvatarImage}
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
                  value={user?.displayName}
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
                <IonInput disabled type="text" value={user?.email} />
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
                  value={profileInformation.dateOfBirth}
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
                  value={profileInformation.jobTitle}
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
                  value={profileInformation.telephone}
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
                  value={profileInformation.address_1}
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
                  value={profileInformation.address_2}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeXs="12" className="ion-padding-start ion-padding-end">
              <IonItem>
                <IonLabel position="floating">{t("Bio")}</IonLabel>
                <IonTextarea
                  ref={bioRef}
                  value={profileInformation.bio}
                  onIonChange={inputFieldChangedHandler}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
