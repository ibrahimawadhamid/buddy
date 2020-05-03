import React from "react";

import "./PageHeader.css";
import {
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonBackButton,
} from "@ionic/react";

const PageHeader: React.FC<{
  title: string;
  backButtonEnabled: boolean;
  menuButtonEnabled: boolean;
}> = (props) => {
  return (
    <div className="page-header">
      <IonButtons slot="start">
        {props.menuButtonEnabled && <IonMenuButton color="light" />}
        {props.backButtonEnabled && (
          <IonBackButton color="light" defaultHref="/page/home" />
        )}
        <IonLabel className="main-title ion-margin-start">
          {props.title}
        </IonLabel>
      </IonButtons>
    </div>
  );
};

export default PageHeader;
