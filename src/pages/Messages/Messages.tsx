import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonAvatar,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonSearchbar,
  IonLabel,
  IonBadge,
  IonButton,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonToast,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./Messages.css";
import ProfilePicture1 from "../../assets/images/people/person-1.jpg";
import ProfilePicture2 from "../../assets/images/people/person-5.jpg";
import ProfilePicture3 from "../../assets/images/people/person-6.jpg";
import ProfilePicture4 from "../../assets/images/people/person-7.jpg";
import ProfilePicture5 from "../../assets/images/people/person-8.jpg";
import { ellipsisVertical, ellipsisHorizontal } from "ionicons/icons";

const availableMessages = [
  {
    image: ProfilePicture1,
    name: "Ibrahim Awad",
    date: "Dec 25",
    messages: 2,
  },
  {
    image: ProfilePicture2,
    name: "Mohamed Hasan",
    date: "Jun 12",
  },
  {
    image: ProfilePicture3,
    name: "Ahmed Ali",
    date: "Apr 11",
    messages: 4,
  },
  {
    image: ProfilePicture4,
    name: "Mai Ali",
    date: "Mar 15",
    messages: 1,
  },
  {
    image: ProfilePicture5,
    name: "Omar Atta",
    date: "Jan 27",
    messages: 6,
  },
  {
    image: ProfilePicture2,
    name: "Mohamed Hasan",
    date: "Jun 12",
  },
  {
    image: ProfilePicture3,
    name: "Ahmed Ali",
    date: "Apr 11",
    messages: 8,
  },
  {
    image: ProfilePicture4,
    name: "Mai Ali",
    date: "Mar 15",
  },
];

const Messages: React.FC = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const doRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      setShowToast(true);
      event.detail.complete();
    }, 2000);
  };

  return (
    <React.Fragment>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Everything is up to date!"
        position="top"
        duration={2000}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon
                  ios={ellipsisHorizontal}
                  md={ellipsisVertical}
                  slot="icon-only"
                />
              </IonButton>
            </IonButtons>
            <IonTitle>{t("Messages")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonSearchbar
            className="locations-search-bar"
            mode="md"
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonList>
                  {availableMessages.map((singleMessage) => {
                    return (
                      <IonItem
                        lines="full"
                        className=""
                        key={singleMessage.name}
                        button
                        href="/page/chat-thread"
                      >
                        <IonAvatar
                          slot="start"
                          className="messages-image ion-margin-top ion-margin-bottom"
                        >
                          <img src={singleMessage.image} alt="profile" />
                        </IonAvatar>
                        <IonLabel>
                          <h1>{singleMessage.name}</h1>
                          <p>{singleMessage.date}</p>
                        </IonLabel>
                        {singleMessage && (
                          <IonBadge color="danger">
                            {singleMessage.messages}
                          </IonBadge>
                        )}
                      </IonItem>
                    );
                  })}
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Messages;
