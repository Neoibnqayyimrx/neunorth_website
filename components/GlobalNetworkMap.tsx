"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

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
    name: "Germany (Berlin)",
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
    name: "Germany (Munich)",
    coords: [48.1351, 11.582] as [number, number],
    logo: "/superlab.svg",
    url: "#",
  },
];

/* ------------------ Custom Icons ------------------ */

const nigeriaIcon = L.divIcon({
  html: `
    <div style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
      <div style="width:14px;height:14px;border-radius:50%;background:#ff7a00;border:2px solid white;box-shadow:0 0 6px rgba(0,0,0,0.4);"></div>
    </div>
  `,
  className: "",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const createLocationIcon = (logo: string, name: string) =>
  L.divIcon({
    html: `
      <div style="width:40px;height:40px;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.3);background:white;display:flex;align-items:center;justify-content:center;">
        <img src="${logo}" alt="${name}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
    `,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

/* ------------------ Map Handlers ------------------ */

function ScrollZoomHandler() {
  useMapEvents({
    click: (e) => {
      e.target.scrollWheelZoom.enable();
    },
    mouseout: (e) => {
      e.target.scrollWheelZoom.disable();
    },
  });

  return null;
}

function ResizeHandler() {
  const map = useMapEvents({
    load: () => {
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

/* ------------------ Main Component ------------------ */

export default function NigeriaMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fix default Leaflet icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
      iconUrl: "/leaflet/images/marker-icon.png",
      shadowUrl: "/leaflet/images/marker-shadow.png",
    });
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[500px] w-full bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-3xl mb-2">🗺️</div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[20, 20]}
        zoom={2}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <ResizeHandler />
        <ScrollZoomHandler />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Connection Lines */}
        {LOCATIONS.map((loc) => (
          <Polyline
            key={loc.name}
            positions={[NIGERIA_COORDS, loc.coords]}
            pathOptions={{
              color: "#005F56",
              weight: 2,
              opacity: 0.6,
              dashArray: "5,8",
            }}
          />
        ))}

        {/* Nigeria Marker */}
        <Marker position={NIGERIA_COORDS} icon={nigeriaIcon}>
          <Popup>
            <strong>Nigeria Hub</strong>
          </Popup>
        </Marker>

        {/* Location Markers */}
        {LOCATIONS.map((loc) => (
          <Marker
            key={loc.name}
            position={loc.coords}
            icon={createLocationIcon(loc.logo, loc.name)}
          >
            <Popup>
              <a
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
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