import FlipCards, { FlipCardItem } from "@/components/Flipcards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myCards: FlipCardItem[] = [
   {
    id: 1,
    frontImage: "/blog1.jpg",
    altText: "Data Science Fundamentals",
    title: "Data Science Fundamentals",
    description: [
      "Learn data analysis, visualization, and machine learning basics.",
    ],
     action: (
      <Link href="/academy/data-science">
        <Button size="sm" className="ml-[-10] mt-2 cursor-pointer">Enroll Now</Button>
      </Link>
    ),
  },
  {
    id: 2,
    frontImage: "/blog1.jpg",
    altText: "Fullstack Web Development",
    title: "Fullstack Web Development",
    description: [
      "Master full-stack web development with modern frameworks and tools.",
    ],
     action: (
      <Link href="/academy/web-development">
        <Button size="sm" className="ml-[-10] mt-2 cursor-pointer">Enroll Now</Button>
      </Link>
    ),
  },
  {
    id: 3,
    frontImage: "/blog1.jpg",
    altText: "Mobile App Development",
    title: "Mobile App Development",
    description: [
      "Build native and cross-platform mobile applications.",
    ],
     action: (
      <Link href="/academy/app-development">
        <Button size="sm" className="ml-[-10] mt-2 cursor-pointer">Enroll Now</Button>
      </Link>
    ),
  },
  // ...
];

const Academy = () => {
  return (
    <>
      <section id="hero" className="container mb-10 lg:mb-15">
        {/* Left Content */}
        <div className="content">
          <h1>Neunorth Academy</h1>

          <p>
            Training the next generation of digital and project talent.
          </p>

          <div className="actions">
            <Link href="/services">
              <Button size="lg">Schedule a Call</Button>
            </Link>
          </div>
        </div>

        {/* Right Visual — triangle-clipped image */}
        <div className="visual">
          <div className="image-card">
            <Image
              src="/neunorth_hero.jpeg"
              alt="Hero Visual"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      {/* COMMITMENT to Excellence */}
      <section id="commitment" className="container mb-10 lg:mb-20">
        <div className="mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="lg:mb-5">Our Commitment to Excellence</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 mt-5">
                {/* ITEM 01 */}
                <div className="flex items-start gap-5 p-6 bg-[var(--bg-secondary)] rounded-2xl border-l-4 border-primary transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary opacity-30">
                    01
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[var(--text-color)] mb-2">
                      Gain Skills
                    </h4>

                    <p className="text-sm md:text-base text-[var(--text-muted)]">
                      Equip young people with market-relevant digital skills.
                    </p>
                  </div>
                </div>

                {/* ITEM 02 */}
                <div className="flex items-start gap-5 p-6 bg-[var(--bg-secondary)] rounded-2xl border-l-4 border-primary transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary opacity-30">
                    02
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[var(--text-color)] mb-2">
                      Gain Confidence
                    </h4>

                    <p className="text-sm md:text-base text-[var(--text-muted)]">
                      Help youth grow in confidence and self-belief.
                    </p>
                  </div>
                </div>

                {/* ITEM 02 */}
                <div className="flex items-start gap-5 p-6 bg-[var(--bg-secondary)] rounded-2xl border-l-4 border-primary transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary opacity-30">
                    02
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[var(--text-color)] mb-2">
                      Join Digital Workforce
                    </h4>

                    <p className="text-sm md:text-base text-[var(--text-muted)]">
                      Prepare to become part of the global digital workforce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[500px]">
              <div className="group relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/blog1.jpg"
                  alt="Our Commitment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative gradient — anchored to the relative parent above */}
              <div className="absolute -bottom-5 -right-5 w-44 h-44 bg-gradient-to-br from-primary to-[#4a9fa0] rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
          {/* end grid */}
        </div>
        {/* end container */}
      </section>

       <section id="flipcards" className='container'>
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          {/* h1 → text-gradient from globals */}
          <h1 className="text-3xl sm:text-5xl">Learn in-demand skills</h1>
          <p className="text-light-100 text-base sm:text-lg max-w-xl leading-relaxed">
            Browse our comprehensive catalog of courses designed to help you succeed in the digital age.
          </p>
          <div className="w-16 h-[3px] rounded-full bg-primary mt-1 opacity-70 animate-pulse" />
        </div>

        <FlipCards cards={myCards} />
      </section>

    </>
  );
};

export default Academy;
