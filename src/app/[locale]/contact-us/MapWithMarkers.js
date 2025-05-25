"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype)._getIconUrl;

const orangeIcon = L.icon({
iconUrl: "https://www.clker.com/cliparts/r/q/F/O/Z/d/map-pin-red-hi.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapHalab = () => {
  return (
    <MapContainer
      center={[36.2021, 37.1343]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <Marker position={[36.2021, 37.1343]} icon={orangeIcon}>
        <Popup>المارتيني - مركز المدينة</Popup>
      </Marker>

      
    </MapContainer>
  );
};

export default MapHalab;
