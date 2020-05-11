import React, { useState, useRef, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonFooter,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import "./ChatThread.css";
import ProfilePicture from "../../assets/images/people/person-5.jpg";
import {
  ellipsisVertical,
  send,
  camera,
  grid,
  ellipsisHorizontal,
} from "ionicons/icons";

const ChatThread: React.FC = () => {
  const { t } = useTranslation();
  const [dummyMessage, setDummyMessage] = useState<string>("");
  const inputTextRef = useRef<HTMLIonInputElement>(null);
  const contentRef = useRef<HTMLIonContentElement>(null);

  const sendHandler = () => {
    const inputMessage = inputTextRef.current!.value;
    if (!inputMessage || inputMessage.toString().trim().length === 0) {
      return;
    }
    setDummyMessage(inputMessage.toString());
  };

  useEffect(() => {
    contentRef.current?.scrollToBottom(500);
  }, [dummyMessage]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/messages" />
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
          <IonTitle>{t("Ibrahim Awad")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef}>
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              <IonAvatar className="chat-thread-image">
                <img src={ProfilePicture} alt="profile" />
              </IonAvatar>
            </IonCol>
            <IonCol size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>Hello There!</p>
                <p className="chat-time-stamp">09:50 PM</p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offset="3" size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>It's been a while since we've seen you.</p>
                <p className="chat-time-stamp">09:50 PM</p>
              </div>
            </IonCol>
            <IonCol offset="3" size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>I wanted to check and make sure you're ok.</p>
                <p className="chat-time-stamp">09:51 PM</p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonItem lines="none" className="ion-float-right">
                <div className="speach-bubble speach-bubble-self">
                  <p>Oh Hi!</p>
                  <p className="chat-time-stamp">10:01 PM</p>
                </div>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem lines="none" className="ion-float-right">
                <div className="speach-bubble speach-bubble-self">
                  <p>That's very thoughtful of you.</p>
                  <p className="chat-time-stamp">10:01 PM</p>
                </div>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem lines="none" className="ion-float-right">
                <div className="speach-bubble speach-bubble-self">
                  <p>I'm doing great, just had some stuff to take care of.</p>
                  <p className="chat-time-stamp">10:02 PM</p>
                </div>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonAvatar className="chat-thread-image">
                <img src={ProfilePicture} alt="profile" />
              </IonAvatar>
            </IonCol>
            <IonCol size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>Are you coming on Monday?</p>
                <p className="chat-time-stamp">10:05 PM</p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonItem lines="none" className="ion-float-right">
                <div className="speach-bubble speach-bubble-self">
                  <p>Yes I am.</p>
                  <p className="chat-time-stamp">10:06 PM</p>
                </div>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonAvatar className="chat-thread-image">
                <img src={ProfilePicture} alt="profile" />
              </IonAvatar>
            </IonCol>
            <IonCol size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>Ok, see you then.</p>
                <p className="chat-time-stamp">10:07 PM</p>
              </div>
            </IonCol>
            <IonCol offset="3" size="9">
              <div className="speach-bubble speach-bubble-other ion-float-left">
                <p>Bye!</p>
                <p className="chat-time-stamp">10:07 PM</p>
              </div>
            </IonCol>
          </IonRow>
          {dummyMessage && (
            <IonRow>
              <IonCol size="12">
                <IonItem lines="none" className="ion-float-right">
                  <div className="speach-bubble speach-bubble-self">
                    <p>{dummyMessage}</p>
                    <p className="chat-time-stamp">
                      {new Date().toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </IonItem>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
      <IonFooter className="chat-box">
        <IonItem className="chat-item">
          <IonButton slot="start" fill="clear" className="ion-no-padding">
            <IonIcon color="primary" icon={grid} slot="icon-only" />
          </IonButton>
          <IonButton slot="start" fill="clear" className="ion-no-padding">
            <IonIcon color="primary" icon={camera} slot="icon-only" />
          </IonButton>
          <IonInput
            // value={dummyMessage}
            ref={inputTextRef}
            type="text"
            placeholder="Aa"
            className="chat-input"
          ></IonInput>
          <IonButton
            slot="end"
            fill="clear"
            className="ion-no-padding"
            onClick={sendHandler}
          >
            <IonIcon color="primary" icon={send} slot="icon-only" />
          </IonButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default ChatThread;
