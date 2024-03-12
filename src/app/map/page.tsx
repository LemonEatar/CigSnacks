import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(
  () => import("@/components/Map"), // Pfad zur Map-Komponente anpassen
  { ssr: false }, // Deaktiviert das server-seitige Rendering für diese Komponente
);

export default function Page() {
  return (
    <div>
      <MapWithNoSSR
        positions={[
          { lat: 48.1375, lng: 11.3625, label: "Cigarettes" },
          { lat: 48.135, lng: 11.365, label: "Snacks" },
          { lat: 48.139, lng: 11.36, label: "Farmer Market" },
        ]}
      />
    </div>
  );
}
