import React from "react";

import "./PageHeader.css";
import { IonButtons, IonMenuButton, IonLabel } from "@ionic/react";

const PageHeader: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className="page-header">
      <IonButtons slot="start">
        <IonMenuButton color="light" />
        <IonLabel className="main-title ion-margin-start">
          {props.title}
        </IonLabel>
      </IonButtons>
    </div>
  );
};

export default PageHeader;
