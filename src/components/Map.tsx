"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const Map = ({
  positions,
}: {
  positions: {
    lat: number;
    lng: number;
    label: string;
  }[];
}) => {
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([
    48.1364, 11.3974,
  ]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
        },
        (error) => {
          console.error("womp wopmp, error:", error);
        },
      );
    } else {
      console.error("bruv dein browser hat keine geolocation");
    }
  }, []);

  return (
    <div style={{ height: "93.1vh", width: "100%" }}>
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
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
};

export default Map;
