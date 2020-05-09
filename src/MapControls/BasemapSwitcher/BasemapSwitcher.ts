import L from "leaflet";

import "./BasemapSwitcher.css";
import BasemapImage from "../../assets/images/map-controls/BasemapSwitcher.png";

class BasemapSwitcher extends L.Control {
  showControlOptions: (show: boolean) => void;

  constructor(
    showBasemapSwitcherOptions: (show: boolean) => void,
    options?: L.ControlOptions
  ) {
    super(options);
    this.showControlOptions = showBasemapSwitcherOptions;
  }

  onAdd(map: L.Map) {
    let img = L.DomUtil.create(
      "img",
      "basemap-switcher-control"
    ) as HTMLImageElement;
    img.src = BasemapImage;
    L.DomEvent.on(img, "click", L.DomEvent.stopPropagation);
    L.DomEvent.on(img, "click", () => this.showControlOptions(true));
    return img;
  }

  onRemove(map: L.Map) {}
}

export default BasemapSwitcher;
