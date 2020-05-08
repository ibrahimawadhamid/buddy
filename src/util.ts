import L from "leaflet";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

import airIcon from "./assets/images/markers/air.png";
import factoryIcon from "./assets/images/markers/factory.png";
import jeepIcon from "./assets/images/markers/jeep.png";
import radioIcon from "./assets/images/markers/radio.png";
import shipwreckIcon from "./assets/images/markers/shipwreck.png";

const markerIcons = [airIcon, factoryIcon, jeepIcon, radioIcon, shipwreckIcon];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomLatLng = (leafletMap: any) => {
  var bounds = leafletMap.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;

  return new L.LatLng(
    southWest.lat + latSpan * Math.random(),
    southWest.lng + lngSpan * Math.random()
  );
};

export const getDefaultMarker = (leafletMap: any) => {
  const defaultIcon = L.icon({
    iconUrl: markerIcons[getRandomInt(5)],
    shadowUrl: MarkerShadow,
    shadowAnchor: [-4, 4],
  });
  return L.marker(getRandomLatLng(leafletMap), {
    icon: defaultIcon,
  });
};
