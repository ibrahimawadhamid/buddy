import L from "leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

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
    iconUrl: MarkerIcon,
    shadowUrl: MarkerShadow,
  });
  return L.marker(getRandomLatLng(leafletMap), {
    icon: defaultIcon,
  });
};
