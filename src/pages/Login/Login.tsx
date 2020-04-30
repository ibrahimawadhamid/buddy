import React, { useRef, useState, useContext } from "react";
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
import { logoGoogle, person, logoFacebook, logoGithub } from "ionicons/icons";
import { useHistory } from "react-router-dom";

import AuthenticationContext from "../../context/AuthenticationContext";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const { loginHandler } = useContext(AuthenticationContext);

  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const signUpWithEmailAndPasswordHandler = () => {
    const enteredEmail = emailRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    if (
      !enteredEmail ||
      !enteredPassword ||
      enteredEmail.toString().trim().length === 0 ||
      enteredPassword.toString().trim().length === 0
    ) {
      setErrorMessage(t("Please enter valid data"));
      return;
    }
    setErrorMessage("");
    loginHandler();
    setShowLoading(true);
  };

  const finishedLoginLoading = () => {
    setShowLoading(false);
    history.replace("/page/profile");
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
        onDidDismiss={finishedLoginLoading}
        message={"Please wait..."}
        duration={2000}
      />
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/home" />
            <IonTitle>{t("Login")}</IonTitle>
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
              <IonButton onClick={signUpWithEmailAndPasswordHandler}>
                <IonIcon slot="start" icon={person} />
                {t("Login")}
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
              <IonButton
                color="danger"
                onClick={signUpWithEmailAndPasswordHandler}
              >
                <IonIcon slot="icon-only" icon={logoGoogle} />
              </IonButton>
              <IonButton onClick={signUpWithEmailAndPasswordHandler}>
                <IonIcon slot="icon-only" icon={logoFacebook} />
              </IonButton>
              <IonButton
                color="dark"
                onClick={signUpWithEmailAndPasswordHandler}
              >
                <IonIcon slot="icon-only" icon={logoGithub} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeXs="12" className="ion-text-center ion-margin-top">
              <IonLabel>{t("If you don't have an account yet")}</IonLabel>
            </IonCol>
            <IonCol sizeXs="12" className="ion-text-center">
              <IonButton href="/page/register" fill="clear">
                {t("Register Now")}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
