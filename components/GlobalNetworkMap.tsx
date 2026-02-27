"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, X, ExternalLink, Globe } from "lucide-react";

/* ─────────────────────────────────────────────
   MERCATOR PROJECTION (matches Leaflet's Web Mercator)
───────────────────────────────────────────── */
function mercatorY(lat: number): number {
  const rad = (lat * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + rad / 2));
}

const BOUNDS = {
  minLng: -52,   // left edge (mid-Atlantic, just past west Africa coast)
  maxLng: 92,    // right edge (past India)
  minLat: -46,   // bottom edge (well below South Africa)
  maxLat: 68,    // top edge (northern Norway)
};

const MERC_TOP = mercatorY(BOUNDS.maxLat);
const MERC_BOTTOM = mercatorY(BOUNDS.minLat);

function project(lat: number, lng: number) {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 100;
  const y = ((MERC_TOP - mercatorY(lat)) / (MERC_TOP - MERC_BOTTOM)) * 100;
  return { x, y };
}

const MAP_IMAGE = "/map-bg.jpeg";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NIGERIA = { lat: 9.082, lng: 8.6753 };

const LOCATIONS = [
  {
    id: 0,
    name: "Mauritius",
    lat: -20.3,
    lng: 57.55,
    logo: "/space.png",
    url: "https://space.consulting",
    label: "Space Consulting",
  },
  {
    id: 1,
    name: "Berlin, Germany",
    lat: 52.52,
    lng: 13.405,
    logo: "/supBRT.svg",
    url: "#",
    label: "SupBRT Berlin",
  },
  {
    id: 2,
    name: "Estonia",
    lat: 58.6,
    lng: 25.0,
    logo: "/leap.avif",
    url: "#",
    label: "Leap Estonia",
  },
  {
    id: 3,
    name: "Munich, Germany",
    lat: 48.1351,
    lng: 11.582,
    logo: "/superlab.svg",
    url: "#",
    label: "Superlab Munich",
  },
];

type Location = (typeof LOCATIONS)[number];

/* ─────────────────────────────────────────────
   CONNECTION LINE
───────────────────────────────────────────── */
function ConnectionLine({
  from,
  to,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${from.x}%`,
        top: `${from.y}%`,
        width: `${length}%`,
        height: "1.5px",
        background:
          "repeating-linear-gradient(to right, #10b981 0px, #10b981 5px, transparent 5px, transparent 11px)",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
        opacity: 0.85,
      }}
    />
  );
}

 
function PopupCard({
  loc,
  onClose,
  flipDown,
}: {
  loc: Location;
  onClose: () => void;
  flipDown: boolean;
}) {
  return (
    <div
      className={`absolute z-30 left-1/2 -translate-x-1/2 w-48 ${
        flipDown ? "top-full mt-3" : "bottom-full mb-3"
      }`}
    >
      <div className="relative rounded-xl border border-emerald-600/40 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-slate-400 hover:text-white"
        >
          <X size={14} />
        </button>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <Image src={loc.logo} width={32} height={32} alt={loc.name} className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">{loc.label}</p>
            <p className="text-xs text-emerald-300 mt-0.5">{loc.name}</p>
          </div>
        </div>
        {loc.url !== "#" && (
          <a
            href={loc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
          >
            <ExternalLink size={12} /> Visit website
          </a>
        )}
        {/* Arrow: points up when popup opens downward, points down when upward */}
        {flipDown ? (
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rotate-45 bg-slate-950 border-l border-t border-emerald-600/40" />
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 rotate-45 bg-slate-950 border-r border-b border-emerald-600/40" />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function GlobalNetworkMap() {
  const [openId, setOpenId] = useState<number | null>(null);
  const ngPos = project(NIGERIA.lat, NIGERIA.lng);

  return (
    <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl border border-slate-800/50">


      {/* Map area */}
      <div
        className="relative w-full overflow-hidden bg-slate-900"
        style={{ aspectRatio: "670 / 590" }}
        onClick={() => setOpenId(null)}
      >
        {/* Background map — brightness(1.4) makes it noticeably brighter, removed dark overlay */}
        <Image
          src={MAP_IMAGE}
          alt="World map"
          fill
          className="object-fill"
          priority
          quality={95}
          style={{ filter: "brightness(1.1) saturate(0.95)" }}
        />

        {/* Connection lines */}
        {LOCATIONS.map((loc) => {
          const pos = project(loc.lat, loc.lng);
          return <ConnectionLine key={loc.id} from={ngPos} to={pos} />;
        })}

        {/* Nigeria hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
          style={{ left: `${ngPos.x}%`, top: `${ngPos.y}%` }}
          onClick={(e) => {
            e.stopPropagation();
            setOpenId(openId === -1 ? null : -1);
          }}
        >
          <div className="relative">
            <div className="h-5 w-5 rounded-full bg-orange-500 border-2 border-orange-200 shadow-[0_0_16px_#f97316cc]" />
            <div className="absolute inset-0 rounded-full bg-orange-400/50 animate-ping" />
          </div>
          {openId === -1 && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg bg-slate-900/90 border border-orange-500/40 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
              Neunorth Hub
            </div>
          )}
        </div>

        {/* Location markers */}
        {LOCATIONS.map((loc) => {
          const pos = project(loc.lat, loc.lng);
          const isOpen = openId === loc.id;
          // If marker is in the top 45% of the map, flip popup downward to avoid clipping
          const flipDown = pos.y < 45;

          return (
            <div
              key={loc.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenId(isOpen ? null : loc.id);
              }}
            >
              {isOpen && <PopupCard loc={loc} onClose={() => setOpenId(null)} flipDown={flipDown} />}
              <div className={`transition-transform duration-150 ${isOpen ? "scale-110" : "hover:scale-110"}`}>
                <div
                  className={`h-11 w-11 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-150 ${
                    isOpen
                      ? "border-emerald-400 bg-white/95 shadow-emerald-500/50"
                      : "border-slate-500 bg-white/85 hover:border-slate-300"
                  }`}
                >
                  <Image src={loc.logo} width={28} height={28} alt={loc.label} className="object-contain p-1" />
                </div>
                <MapPin size={12} className={`-mt-1 mx-auto ${isOpen ? "text-emerald-400" : "text-slate-400"}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer legend */}
      <div className="px-4 py-2.5 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
          Neunorth Hub
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-px"
            style={{
              background:
                "repeating-linear-gradient(to right, #10b981 0px, #10b981 4px, transparent 4px, transparent 8px)",
            }}
          />
          Active connection
        </div>
        <div className="ml-auto flex gap-3 flex-wrap justify-end">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setOpenId(openId === loc.id ? null : loc.id)}
              className={`transition-colors ${
                openId === loc.id ? "text-emerald-400 font-medium" : "hover:text-slate-200"
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}