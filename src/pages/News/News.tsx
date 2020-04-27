import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

import SampleImage1 from "../../assets/images/samples/sample-1.jpg";
import SampleImage2 from "../../assets/images/samples/sample-2.jpg";
import SampleImage3 from "../../assets/images/samples/sample-3.jpg";

const News: React.FC = () => {
  const { t } = useTranslation();
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/home" />
          </IonButtons>
          <IonTitle>{t("News")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            {currentNews.map((singleNews) => {
              return (
                <IonCol key={singleNews.id} sizeXs="12" sizeMd="6">
                  <IonCard>
                    <IonCardContent>
                      <img src={singleNews.image} alt={singleNews.title} />
                      <IonCardHeader>
                        <IonCardSubtitle>{singleNews.subtitle}</IonCardSubtitle>
                        <IonCardTitle>{singleNews.title}</IonCardTitle>
                      </IonCardHeader>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default News;
