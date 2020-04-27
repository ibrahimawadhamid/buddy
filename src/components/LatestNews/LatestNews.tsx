import React from "react";
import {
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonItem,
} from "@ionic/react";

import "./LatestNews.css";

import SampleImage1 from "../../assets/images/samples/sample-1.jpg";
import SampleImage2 from "../../assets/images/samples/sample-2.jpg";
import SampleImage3 from "../../assets/images/samples/sample-3.jpg";

const slideOpts = {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: "auto",
  zoom: false,
};

const LatestNews: React.FC = () => {
  const currentNews = [
    {
      id: "news-1",
      title: "Awesome News 1",
      subtitle: "01/01/2020",
      image: SampleImage1,
    },
    {
      id: "news-2",
      title: "Awesome News 2",
      subtitle: "01/01/2020",
      image: SampleImage2,
    },
    {
      id: "news-3",
      title: "Awesome News 3",
      subtitle: "01/01/2020",
      image: SampleImage3,
    },
  ];
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel slot="start">Latest News</IonLabel>
            <IonButton slot="end" fill="outline" size="small" href="/page/news">
              More
            </IonButton>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-padding-start">
          <IonSlides options={slideOpts}>
            {currentNews.map((singleNews) => (
              <IonSlide className="news-slide" key={singleNews.id}>
                <img
                  className="news-image"
                  src={singleNews.image}
                  alt={singleNews.title}
                />
                <IonLabel className="news-text news-title">
                  {singleNews.title}
                </IonLabel>
                <IonLabel className="news-text news-subtitle">
                  {singleNews.subtitle}
                </IonLabel>
              </IonSlide>
            ))}
          </IonSlides>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LatestNews;
