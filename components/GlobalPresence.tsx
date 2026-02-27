"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


type Card = {
  title: string;
  subtitle: string;
  image: string;
  logo: string;
};

const cards: Card[] = [
  {
    title: "supBRT",
    subtitle: "IT Strategy & Architecture",
    image: "/supBrt-bg.png",
    logo: "/supBRT.svg",
  },
  {
    title: "Neunorth",
    subtitle: "IT Project Management & Digital Development",
    image: "/neunorth_hero.jpeg",
    logo: "/Logo.png",
  },
  {
    title: "superLab",
    subtitle: "Technology and AI Development",
    image: "/superlabhero.png",
    logo: "/superlab.svg",
  },
  {
    title: "Space",
    subtitle: "Project Management & IT Services",
    image: "/space-bg.png",
    logo: "/space.png",
  },
  {
    title: "Leap",
    subtitle: "Project Management & IT Services",
    image: "/leap-bg.png",
    logo: "/leap.avif",
  },
];

export default function GlobalPresence() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h1>Our Global Presence</h1>
        <p className="text-light-100 mt-3">
          Explore our international network and discover how we serve clients
          worldwide
        </p>
      </div>

     <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1.1}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 1.5 },
    1024: { slidesPerView: 3 },
  }}
>

        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <div className="glass-card glass-card-hover">
              <div className="relative w-full h-[50%]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="glass-card-image"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-lg font-semibold tracking-wide mt-4">
                  {card.title}
                </h3>

                <div className="relative w-16 h-16 border-2 border-primary rounded-2xl my-3 glass-card-logo">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
