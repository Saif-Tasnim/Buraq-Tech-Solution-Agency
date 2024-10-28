"use client";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <main className="w-[300px] lg:w-[550px] h-[400px] z-10">  
      <MapContainer center={[23.7977, 90.4514]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[23.7977, 90.4514]}
          radius={10}
          color="transparent"
          fillColor="#c27729"
          fillOpacity={0.75}
        >
          <Popup>
            <p className="text-lg">United City, Madani Avenue, Dhaka, Bangladesh</p>
          </Popup>
        </CircleMarker>
      </MapContainer>
    </main>
  );
};

export default Map;
