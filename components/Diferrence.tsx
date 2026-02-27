"use client";
import { FC } from "react";
import { FaCheckCircle, FaUsers, FaGlobe, FaAward } from "react-icons/fa";

// ── Inline data ───────────────────────────────────────────────────────────────
const differencePoints = [
  {
    icon: FaCheckCircle,
    text: "We combine project skills with technical delivery.",
  },
  {
    icon: FaGlobe,
    text: "We understand both global standards and African realities.",
  },
  {
    icon: FaUsers,
    text: "We work with mixed teams across borders and time zones.",
  },
  {
    icon: FaAward,
    text: "We build capacity and support local talent on every project.",
  },
];

const approachPrinciples = [
  "We work as partners, not just vendors.",
  "We take time to understand your goals.",
  "We create simple, clear plans.",
  "We work with your teams and stakeholders.",
  "We deliver steady progress and measurable results.",
];
// ─────────────────────────────────────────────────────────────────────────────

const Difference: FC = () => {
  return (
    <section className="relative overflow-hidden bg-background">

      {/* ── What Makes Us Different ──────────────────────────────────────────── */}
      <div className="py-20 sm:py-24">
        <div className="container">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="border border-primary text-primary text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest px-5 py-2 rounded-full">
              Our Edge
            </span>
            {/* h1 → text-gradient from globals */}
            <h1 className="text-3xl sm:text-5xl">What Makes Us Different</h1>
            <div className="w-16 h-[3px] rounded-full bg-primary mt-1 opacity-70 animate-pulse" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differencePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="glass group flex items-start gap-5 p-7 rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2 card-shadow
                             max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-4"
                >
                  {/* Icon box */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-primary text-dark-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/40">
                    <Icon size={26} />
                  </div>

                  {/* Text — global p: text-light-100 text-lg */}
                  <p className="text-light-100 text-base sm:text-lg leading-relaxed pt-1 max-sm:pt-0">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      {/* ── Our Approach ─────────────────────────────────────────────────────── */}
      <div className="py-20 sm:py-24">
        <div className="container">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="border border-primary text-primary text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest px-5 py-2 rounded-full">
              How We Work
            </span>
            <h1 className="text-3xl sm:text-5xl">Our Approach</h1>
            <div className="w-16 h-[3px] rounded-full bg-primary mt-1 opacity-70 animate-pulse" />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            {/* Intro paragraph */}
            <p className="text-light-100 text-base sm:text-xl leading-relaxed text-center">
              We work as{" "}
              <span className="text-primary font-bold relative after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:opacity-30">
                partners
              </span>
              , not just{" "}
              <span className="text-primary font-bold relative after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:opacity-30">
                vendors
              </span>
              . We take time to understand your goals, create simple clear plans,
              and deliver steady progress with measurable results.
            </p>

            {/* Principles list */}
            <div className="flex flex-col gap-4">
              {approachPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 glass px-6 py-5 rounded-xl border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 hover:translate-x-2 max-sm:hover:translate-x-1"
                >
                  {/* Dot */}
                  <span className="flex-shrink-0 w-3 h-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_0_6px_rgba(89,222,202,0.15)]" />
                  <p className="text-light-100 text-base sm:text-lg leading-relaxed">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer callout — mirrors your .approach-footer border style */}
            <div className="border border-primary rounded-[30px] px-8 py-8 text-center card-shadow">
              <p className="text-foreground text-base sm:text-lg leading-relaxed">
                Every engagement is guided by the same principles:{" "}
                <strong className="text-primary font-bold uppercase tracking-wide">clarity</strong>,{" "}
                <strong className="text-primary font-bold uppercase tracking-wide">structure</strong>, and{" "}
                <strong className="text-primary font-bold uppercase tracking-wide">consistent delivery</strong>.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Difference;