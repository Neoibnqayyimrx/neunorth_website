"use client";

import CountUp from "react-countup";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Projects Engagements Globally." },
  { value: 100, suffix: "%", label: "On-time Project delivery rate" },
  { value: 70, suffix: "+", label: "Man years of working Experience" },
];

export default function StatsCountUp() {
  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* Top Row */}
      <div className="grid grid-cols-2 gap-6">
        {stats.slice(0, 2).map((stat) => (
          <StatCircle key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Bottom Circle */}
      <div className="flex justify-center mt-6">
        <div className="w-[70%] sm:w-[55%]">
          <StatCircle stat={stats[2]} large />
        </div>
      </div>

    </div>
  );
}

function StatCircle({ stat, large = false }: { stat: Stat; large?: boolean }) {
  return (
    <div
      className={`
        aspect-square rounded-full border-3 border-primary
        flex flex-col items-center justify-center text-center
        ${large ? "text-base" : "text-sm"}
      `}
    >
      <h2
        className={`
          font-bold text-white
          ${large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}
        `}
      >
        <CountUp end={stat.value} duration={2.5} />
        {stat.suffix}
      </h2>

      <p
        className={`
          text-white/70 mt-2 px-4
          ${large ? "max-w-[220px]" : "max-w-[160px]"}
        `}
      >
        {stat.label}
      </p>
    </div>
  );
}
