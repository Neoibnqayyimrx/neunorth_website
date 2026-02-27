"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface NavLinkProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative text-lg font-medium
        text-(--text-muted)
        transition-colors duration-300
        bg-transparent border-none cursor-pointer p-0

        focus:outline-none
        focus-visible:outline-none
      "
    >
      {title}
      <span
        className={`absolute left-0 -bottom-px h-1 w-full bg-primary rounded-sm transition-transform duration-300 origin-left
        ${isActive ? "scale-x-100" : "scale-x-0"}`}
      />
    </button>
  );
};

export interface Tabs {
  label: string;
  image: string;
  imageAlt: string;
  content: string;
  ctaText?: string;
  ctaHref?: string; // ✅ navigation-driven CTA
  ctaAction?: string; // ✅ optional logic-driven CTA
}

interface TabbedContentProps {
  heading?: string;
  tabs: Tabs[];
  defaultTab?: string;
}

const TabbedContent: React.FC<TabbedContentProps> = ({
  heading = "What We Do",
  tabs,
  defaultTab,
}) => {
  const initialTab =
    tabs.find((t) => t.label === defaultTab)?.label ?? tabs[0]?.label;

  const [activeTab, setActiveTab] = useState(initialTab);

  const current = tabs.find((t) => t.label === activeTab) ?? tabs[0];

  const handleAction = () => {
    if (!current?.ctaAction) return;

    switch (current.ctaAction) {
      case "startProject":
        console.log("Start project clicked");
        break;

      case "learnMore":
        console.log("Learn more clicked");
        break;

      case "contact":
        console.log("Contact clicked");
        break;

      default:
        console.log("Unknown action:", current.ctaAction);
    }
  };

  return (
    <section>
      <div className="max-w-300 w-full mx-auto px-5">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="mb-5">{heading}</h1>

          <div className="flex items-center gap-8 max-[768px]:gap-5">
            {tabs.map((tab) => (
              <NavLink
                key={tab.label}
                title={tab.label}
                isActive={activeTab === tab.label}
                onClick={() => setActiveTab(tab.label)}
              />
            ))}
          </div>

          <div className="w-full h-px mt-2" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="group relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-(--bg-accent)">
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <p className="text-[15px] sm:text-[17px] lg:text-lg leading-[1.6] text-(--text-color) mb-8">
              {current.content}
            </p>

            {/* CTA LOGIC */}
            {current.ctaText && current.ctaHref && (
              <Link href={current.ctaHref}>
                <Button>{current.ctaText}</Button>
              </Link>
            )}

            {current.ctaText && !current.ctaHref && (
              <Button onClick={handleAction}>{current.ctaText}</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedContent;
