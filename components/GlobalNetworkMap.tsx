"use client";

import dynamic from "next/dynamic";
import L from "leaflet";
import Image from "next/image";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

/* ------------------ Dynamic Leaflet Imports ------------------ */

const MapContainer = dynamic(
  () => import("react-leaflet").then(m => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then(m => m.TileLayer),
  { ssr: false }
);

const Polyline = dynamic(
  () => import("react-leaflet").then(m => m.Polyline),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then(m => m.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then(m => m.Popup),
  { ssr: false }
);

const useMapEvents = dynamic(
  () => import("react-leaflet").then(m => m.useMapEvents),
  { ssr: false }
);

/* ------------------ Constants ------------------ */

const NIGERIA_COORDS: [number, number] = [9.082, 8.6753];

const LOCATIONS = [
  {
    name: "Mauritius",
    coords: [-20.3, 57.55] as [number, number],
    logo: "/space.png",
    url: "https://space.consulting",
  },
  {
    name: "Germany",
    coords: [52.52, 13.405] as [number, number],
    logo: "/supBRT.svg",
    url: "#",
  },
  {
    name: "Estonia",
    coords: [58.6, 25.0] as [number, number],
    logo: "/leap.avif",
    url: "#",
  },
  {
    name: "Germany",
    coords: [48.1351, 11.582] as [number, number],
    logo: "/superlab.svg",
    url: "#",
  },
];

/* ------------------ Icons ------------------ */

const createNigeriaIcon = () =>
  L.divIcon({
    html: `
      <div class="flex items-center justify-center w-5 h-5">
        <div class="w-3.5 h-3.5 rounded-full bg-[#ff7a00] border-2 border-white shadow-lg"></div>
      </div>
    `,
    className: "bg-transparent border-none",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const createLocationIcon = (logo: string, name: string) =>
  L.divIcon({
    html: `
      <div class="location-marker">
        <img src="${logo}" alt="${name}" />
      </div>
    `,
    className: "bg-transparent border-none",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

/* ------------------ Handlers ------------------ */

function ScrollZoomHandler() {
  const map = (useMapEvents as any)({
    click: (map: any) => map.scrollWheelZoom.enable(),
    mouseout: (map: any) => map.scrollWheelZoom.disable(),
  });

  return null;
}

function MapResizeHandler() {
  const map = (useMapEvents as any)({
    load: (map: any) => {
      setTimeout(() => map.invalidateSize(), 100);
    },
  });

  useEffect(() => {
    const t1 = setTimeout(() => map.invalidateSize(), 200);
    const t2 = setTimeout(() => map.invalidateSize(), 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [map]);

  return null;
}

/* ------------------ Component ------------------ */

export default function NigeriaMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fix default Leaflet icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
      iconUrl: "/leaflet/images/marker-icon.png",
      shadowUrl: "/leaflet/images/marker-shadow.png",
    });
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[500px] w-full bg-gray-50">
        <div className="text-center">
          <div className="text-3xl mb-2">🗺️</div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] relative z-0 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[20, 20]}
        zoom={2}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <MapResizeHandler />
        <ScrollZoomHandler />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {LOCATIONS.map((loc, i) => (
          <Polyline
            key={i}
            pathOptions={{
              color: "#005F56",
              weight: 2,
              opacity: 0.6,
              dashArray: "5, 8",
            }}
            positions={[NIGERIA_COORDS, loc.coords]}
          />
        ))}

        <Marker position={NIGERIA_COORDS} icon={createNigeriaIcon()}>
          <Popup>
            <strong>Nigeria Hub</strong>
          </Popup>
        </Marker>

        {LOCATIONS.map((loc, i) => (
          <Marker
            key={i}
            position={loc.coords}
            icon={createLocationIcon(loc.logo, loc.name)}
          >
            <Popup>
              <a
                href={loc.url}
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src={loc.logo}
                  width={24}
                  height={24}
                  alt={loc.name}
                />
                <span>{loc.name}</span>
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
