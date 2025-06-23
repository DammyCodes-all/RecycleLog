import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import bins from "../bin-data"; // Import

// Fix for default markers
delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LagosBounds = [
  [6.2, 2.8], // Southwest
  [6.8, 4.0], // Northeast
];
const binIcon = new leaflet.Icon({
  iconUrl: "/trash.png", // path to your custom bin image
  iconSize: [40, 40], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -30], // where popup opens relative to the icon
});

export default function BinMap() {
  return (
    <div className="w-[900px] h-[550px]">
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        minZoom={9.5}
        maxZoom={15}
        maxBounds={LagosBounds}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
          tileSize={512}
          zoomOffset={-1}
        />

        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={bin.position}
            icon={binIcon}
            eventHandlers={{
              click: () => {
                console.log(bin);
              },
            }}
          >
            <Tooltip>
              <strong>{bin.name}</strong>
              <br />
              Fill Level: {bin.fill}%
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
