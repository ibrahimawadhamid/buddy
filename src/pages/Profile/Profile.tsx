import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonLabel,
} from "@ionic/react";

import AvatarImage from "../../assets/images/people/person-1.jpg";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
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
