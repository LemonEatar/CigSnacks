"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define custom icon for markers
const customIcon = new L.Icon({
  iconUrl: "marker-icon.png",
  iconRetinaUrl: "marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function App() {
  const positions = [
    { lat: 48.1375, lng: 11.3625, label: "Cigarets" }, // Central Germering
    { lat: 48.135, lng: 11.365, label: "Snacks" }, // East Germering
    { lat: 48.139, lng: 11.36, label: "Farmer Market" }, // West Germering
  ];
  const [mapCenter, setMapCenter] = useState([48.1364, 11.3974]);

  useEffect(() => {
    // Get user's current location
    if ("geolocation" in navigator) {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
        });
      } catch (error) {
        console.error("Error getting geolocation:", error);
      }
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);
  return (
    <div className="App">
      <MapContainer
        center={mapCenter}
        zoom={15}
        style={{ height: "1800px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((position, index) => (
          <Marker
            key={index}
            position={[position.lat, position.lng]}
            icon={customIcon}
          >
            <Popup>{position.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
