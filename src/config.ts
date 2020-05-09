import WorldImagery from "./assets/images/map-controls/WorldImagery.png";
import WorldGrayCanvas from "./assets/images/map-controls/WorldGrayCanvas.png";
import WorldStreetMap from "./assets/images/map-controls/WorldStreetMap.png";

const config = {
  availableBasemaps: [
    {
      id: "EsriWorldGrayCanvas",
      name: "Gray Canvas",
      url:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      image: WorldGrayCanvas,
    },
    {
      id: "WorldStreetMap",
      name: "Street Map",
      url:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      image: WorldStreetMap,
    },
    {
      id: "EsriWorldImagery",
      name: "Imagery",
      url:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      image: WorldImagery,
    },
  ],
  defaultBasemapId: "EsriWorldGrayCanvas",
  defaultDarkMode: false,
};

export default config;
