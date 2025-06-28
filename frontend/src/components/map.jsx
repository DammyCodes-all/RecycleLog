import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

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

export default function BinMap({ bins }) {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg border border-green-100">
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        minZoom={9.5}
        maxZoom={15}
        maxBounds={LagosBounds}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
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
            key={bin.bin_id}
            position={bin.location}
            icon={binIcon}
            eventHandlers={{
              click: () => {},
            }}
          >
            <Tooltip>
              <div className="font-outfit flex  flex-col justify-center">
                <strong className="text-forest">{bin.ward}</strong>
                <strong className="text-forest">{bin.name}</strong>
                <span className="text-primary">
                  Fill Level: {bin.bin_fill_percent}%
                </span>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
