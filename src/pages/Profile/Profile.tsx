import React from "react";
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
  IonAvatar,
  IonLabel,
  IonBackButton,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import AvatarImage from "../../assets/images/people/person-1.jpg";

const Profile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/home" />
          </IonButtons>
          <IonTitle>{t("Profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol>
              <IonItem button>
                <IonAvatar slot="start" className="user-thumbnail">
                  <img src={AvatarImage} alt="profile" />
                </IonAvatar>
                <IonLabel>
                  <h1>Ibrahim Awad</h1>
                  <p>Sr. Software Engineer</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
