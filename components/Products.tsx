"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper core styles
import "swiper/css";
import { Button } from "./ui/button";

interface SlideData {
  id: string;
  tabKey: string;
  tabLabel: string;
  image: string;
  content: {
    heading: string;
    description: string;
    buttonText: string;
  };
}

const slides: SlideData[] = [
  {
    id: "project-management",
    tabKey: "project-management",
    tabLabel: "Project Management",
    image: "/blog1.jpg",
    content: {
      heading: "Project Management",
      description:
        "We are making our products affordable and available to more people around the world through responsible pricing, strategic access programmes and partnerships.",
      buttonText: "Project Management",
    },
  },
  {
    id: "software-development",
    tabKey: "software-development",
    tabLabel: "Software Development",
    image: "/blog1.jpg",
    content: {
      heading: "Software Development",
      description:
        "We build simple and practical digital tools. Websites, dashboards, automations, and custom systems built to your needs.",
      buttonText: "Software Development",
    },
  },
  {
    id: "data-management",
    tabKey: "data-management",
    tabLabel: "Data Management",
    image: "/blog1.jpg",
    content: {
      heading: "Data Management",
      description:
        "We clean, organize, and interpret your data. You get clear insights that support your decisions.",
      buttonText: "Data Management",
    },
  },
  {
    id: "inclusion",
    tabKey: "inclusion",
    tabLabel: "Inclusion",
    image: "/blog1.jpg",
    content: {
      heading: "Inclusion",
      description:
        "We are building an inclusive tech workplace where talent grows, skills evolve, and careers are shaped for long-term success.",
      buttonText: "Inclusion",
    },
  },
  {
    id: "cloud-computing",
    tabKey: "cloud-computing",
    tabLabel: "Cloud Computing",
    image: "/blog1.jpg",
    content: {
      heading: "Cloud Computing",
      description:
        "We maintain the highest ethical standards in all our operations, ensuring transparency, accountability, and responsible governance.",
      buttonText: "Cloud Computing",
    },
  },
];

const AUTOPLAY_DELAY = 5000;

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0–1 driven by Swiper

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
    if (!isPlaying) {
      swiperRef.current?.autoplay.start();
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  const handlePlayPause = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
      setProgress(0);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--bg-secondary)] mb-5">
        <div className="relative min-h-screen flex flex-col">
          <div className="relative z-10 flex-1 flex flex-col">

            {/* Tab navigation — synced to Swiper's realIndex */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 px-4">
                {slides.map((slide, index) => (
                  <React.Fragment key={slide.tabKey}>
                    <button
                      onClick={() => handleTabClick(index)}
                      className={`text-base md:text-lg lg:text-md font-medium italic bg-transparent border-none cursor-pointer transition-colors duration-300
                        ${activeIndex === index
                          ? "text-[var(--primary)]"
                          : "text-[var(--text-color)] hover:text-[var(--primary)]"
                        }`}
                      aria-label={`View ${slide.tabLabel} section`}
                      aria-current={activeIndex === index ? "true" : "false"}
                    >
                      {slide.tabLabel}
                    </button>
                    {index < slides.length - 1 && (
                      <span className="hidden md:inline text-[var(--primary)]" aria-hidden="true">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center mb-8">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>

                <button
                  onClick={handlePrevious}
                  className="p-2 text-[var(--primary)] bg-transparent border-none cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handlePlayPause}
                  className="p-2 text-[var(--primary)] bg-transparent border-none cursor-pointer"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 text-[var(--primary)] bg-transparent border-none cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress bar — driven by onAutoplayTimeLeft */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--primary)]"
                  style={{ width: `${progress * 100}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Swiper slideshow */}
            <div className="flex-1 flex items-center justify-center mb-16">
              <div className="w-full max-w-[72rem] mx-auto px-8">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  loop
                  speed={600}
                  autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  onAutoplayTimeLeft={(_swiper, _timeLeft, percentage) => {
                    // percentage: 1 at start → 0 at end; invert so bar fills left to right
                    setProgress(1 - percentage);
                  }}
                  className="rounded-lg shadow-xl overflow-hidden"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="flex flex-col md:flex-row h-[500px] bg-[var(--bg-secondary)]">

                        {/* Image half */}
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                          <Image
                            src={slide.image}
                            alt={slide.content.heading}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority
                          />
                        </div>

                        {/* Text half */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex flex-col gap-6">
                            <h2 className="slide-heading text-3xl md:text-4xl lg:text-5xl font-light text-[var(--text-color)]">
                              {slide.content.heading}
                            </h2>
                            <p className="slide-description text-base md:text-lg leading-relaxed text-[var(--text-color)]">
                              {slide.content.description}
                            </p>
                            <Button
                              onClick={() => console.log(`Clicked: ${slide.content.buttonText}`)}
                            >
                              {slide.content.buttonText}
                            </Button>
                          </div>
                        </div>

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Products;