import React from "react";
import {
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import ReactStars from "react-stars";

import "./TopEmployees.css";

import SampleImage2 from "../../assets/images/people/person-2.jpg";
import SampleImage3 from "../../assets/images/people/person-3.jpg";
import SampleImage4 from "../../assets/images/people/person-4.jpg";

const slideOpts = {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: "auto",
  zoom: false,
};

const TopEmployees: React.FC = () => {
  const { t } = useTranslation();
  const currentTopEmployees = [
    {
      id: "employee-2",
      displayName: "Mai ali",
      rating: 4.5, //out of 5
      image: SampleImage2,
    },
    {
      id: "employee-3",
      displayName: "Hasan Omar",
      rating: 4.5, //out of 5
      image: SampleImage3,
    },
    {
      id: "employee-4",
      displayName: "Hesham Hamdy",
      rating: 4, //out of 5
      image: SampleImage4,
    },
  ];
  return (
    <IonGrid>
      <IonRow>
        <IonCol className="ion-text-left">
          <IonTitle color="tertiary" className="ion-no-padding">
            {t("Top Employees")}
          </IonTitle>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton
            fill="outline"
            size="small"
            color="tertiary"
            className="ion-no-margin"
          >
            {t("More")}
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-padding-start">
          <IonSlides options={slideOpts}>
            {currentTopEmployees.map((singleTopEmployee) => (
              <IonSlide
                className="employee-slide ion-text-center"
                key={singleTopEmployee.id}
              >
                <IonCard>
                  <IonCardHeader className="employee-card">
                    <img
                      src={singleTopEmployee.image}
                      alt="employee"
                      className="employee-image"
                    />
                    <ReactStars
                      className="employee-rating"
                      value={singleTopEmployee.rating}
                      count={5}
                      edit={false}
                      size={24}
                      color2={"#ffd700"}
                      half={true}
                    />
                  </IonCardHeader>
                  <IonCardContent>
                    <h2 className="employee-title">
                      {singleTopEmployee.displayName}
                    </h2>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            ))}
          </IonSlides>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TopEmployees;
