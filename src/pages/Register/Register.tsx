import React, { useRef, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
  IonLoading,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { personAdd, logoGoogle } from "ionicons/icons";

import { singInWithGoogle } from "../../firebase";

const Register: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const firstNameRef = useRef<HTMLIonInputElement>(null);
  const lastNameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const signUpWithEmailAndPasswordHandler = () => {
    const enteredFirstName = firstNameRef.current!.value;
    const enteredLastName = lastNameRef.current!.value;
    const enteredEmail = emailRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    if (
      !enteredFirstName ||
      !enteredLastName ||
      !enteredEmail ||
      !enteredPassword ||
      enteredFirstName.toString().trim().length === 0 ||
      enteredLastName.toString().trim().length === 0 ||
      enteredEmail.toString().trim().length === 0 ||
      enteredPassword.toString().trim().length === 0
    ) {
      setErrorMessage(t("Please enter valid data"));
      return;
    }
    setErrorMessage("");
  };

  const signUpWithGoogleHandler = async () => {
    setShowLoading(true);
    try {
      const result = await singInWithGoogle();
      if (result) {
        history.push("/page/profile");
      }
    } catch (e) {
      setShowLoading(false);
    }
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={!!errorMessage}
        onDidDismiss={() => setErrorMessage("")}
        header={t("Error")}
        message={errorMessage}
        buttons={[t("Ok")]}
      />
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Please wait..."}
      />
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/home" />
            <IonTitle>{t("Register")}</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("First name")}</IonLabel>
                <IonInput ref={firstNameRef} type="text" />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("Last name")}</IonLabel>
                <IonInput ref={lastNameRef} type="text" />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("ُE-mail")}</IonLabel>
                <IonInput ref={emailRef} type="text" />
              </IonItem>
            </IonCol>
            <IonCol
              sizeXs="12"
              sizeMd="6"
              className="ion-padding-start ion-padding-end"
            >
              <IonItem>
                <IonLabel position="floating">{t("ُPassword")}</IonLabel>
                <IonInput ref={passwordRef} type="password" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol className="ion-text-center">
              <IonButton
                disabled
                color="danger"
                onClick={signUpWithEmailAndPasswordHandler}
              >
                <IonIcon slot="start" icon={personAdd} />
                {t("Sign Up")}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonLabel>{t("Or")}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={signUpWithGoogleHandler}>
                <IonIcon slot="start" icon={logoGoogle} />
                {t("Sign In with Google")}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
