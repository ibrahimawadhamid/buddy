import React, { useEffect, useState, useContext } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonBadge,
  IonSearchbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { getDefaultMarker } from "../../util";
import config from "../../config";
import "./Locations.css";
import MarkerPopup from "../../components/MarkerPopup";
import BasemapModal from "../../components/BasemapModal";
import BasemapSwitcher from "../../MapControls/BasemapSwitcher";
import GeneralContext from "../../context/GeneralContext";

const Locations: React.FC = () => {
  const { t } = useTranslation();
  const { settings } = useContext(GeneralContext);
  const [leafletMap, setLeafletMap] = useState<L.Map>();
  const [leafletBasemap, setLeafletBasemap] = useState<any>();
  const [showMarkerModal, setShowMarkerModal] = useState<boolean>(false);
  const [showBasemapSwitcherModal, setShowBasemapSwitcherModal] = useState<
    boolean
  >(false);
  const [searchText, setSearchText] = useState("");
  const [selectedBasemapId, setSelectedBasemapId] = useState<string>(
    settings.defaultBasemapId
  );

  /**
   * Run only the first time this component loads
   */
  useEffect(() => {
    const defaultBasemap = config.availableBasemaps.filter((singleBasemp) => {
      return singleBasemp.id === config.defaultBasemapId;
    })[0];
    const basemap = L.tileLayer(defaultBasemap.url, {
      attribution:
        '<a target="_blank" href="https://www.esri.com/">ESRI</a> | <a target="_blank" href="https://buddy-ionic.web.app">Buddy</a>',
      maxZoom: 16,
    });
    setLeafletBasemap(basemap);

    const currentMap = L.map("locationsDiv", {
      center: [25, 30],
      zoom: 4,
      layers: [basemap],
    });
    currentMap.addControl(
      new BasemapSwitcher(setShowBasemapSwitcherModal, {
        position: "bottomleft",
      })
    );
    setLeafletMap(currentMap);
    setSelectedBasemapId(config.defaultBasemapId);
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  }, []);

  useEffect(() => {
    if (leafletMap) {
      const markers = L.markerClusterGroup({ animateAddingMarkers: true });
      leafletMap.addLayer(markers);
      setTimeout(function () {
        for (let i = 0; i < 500; i++) {
          const marker = getDefaultMarker(leafletMap);
          marker.on("click", () => setShowMarkerModal(true));
          markers.addLayer(marker);
        }
      }, 1000);
    }
  }, [leafletMap]);

  const changeBasemap = (basemapId: string) => {
    if (leafletBasemap) {
      if (leafletBasemap) {
        leafletMap?.removeLayer(leafletBasemap);
      }
      const currentBasemap = config.availableBasemaps.filter((singleBasemp) => {
        return singleBasemp.id === basemapId;
      })[0];
      const basemap = L.tileLayer(currentBasemap.url, {
        attribution:
          '<a target="_blank" href="https://www.esri.com/">ESRI</a> | <a target="_blank" href="https://buddy-ionic.web.app">Buddy</a>',
        maxZoom: 16,
      });
      leafletMap?.addLayer(basemap);
      setLeafletBasemap(basemap);
      setSelectedBasemapId(basemapId);
    }
  };

  return (
    <React.Fragment>
      <MarkerPopup show={showMarkerModal} setShow={setShowMarkerModal} />
      <BasemapModal
        show={showBasemapSwitcherModal}
        setShow={setShowBasemapSwitcherModal}
        selectedBasemapId={selectedBasemapId}
        setSelectedBasemapId={changeBasemap}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color="success" className="locations-header">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{t("Locations")}</IonTitle>
            <IonButtons slot="primary">
              <IonBadge color="danger" className="ion-margin-end">
                500
              </IonBadge>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="locations-search-area">
            <IonSearchbar
              className="locations-search-bar"
              mode="md"
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
          </div>
          <div id="locationsDiv"></div>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Locations;
