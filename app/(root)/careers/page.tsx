import CareerForm from '@/components/CareerForm'
import FlipCards, { FlipCardItem } from "@/components/Flipcards";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const myCards: FlipCardItem[] = [
   {
    id: 1,
    frontImage: "/blog1.jpg",
    altText: "Team collaboration and innovation",
    title: "Find out what it's like to work with us",
    description: [
      "Discover our collaborative environment where innovation meets purpose.",
      "Join teams that value creativity, diversity, and meaningful impact.",
    ],
  },
  {
    id: 2,
    frontImage: "/blog1.jpg",
    altText: "Professional growth and development",
    title: "Do your best work with us",
    description: [
      "To get ahead of IT together, continuous growth and development are vital.",
      "At Neunorth you'll expand your skills and build valuable connections, enabling you to do your best work.",
    ],
  },
  {
    id: 3,
    frontImage: "/blog1.jpg",
    altText: "Inclusive workplace culture",
    title: "Inclusive & Supportive Culture",
    description: [
      "We've built an inclusive and supportive culture, so that you can pursue your passions while making a difference.",
      "Our environment fosters both personal and professional growth.",
    ],
  },
  // ...
];

const Careers = () => {
  return (
    <>
    <section id="hero" className='container'>
        {/* Left Content */}
        <div className="content">
          <h1>Careers</h1>

          <p>
            We help organisations plan, build, and deliver projects through
            structured management, technical skills, and digital support.
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

      <section id="flipcards" className='container'>
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border border-primary text-primary text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest px-5 py-2 rounded-full">
            Careers
          </span>
          {/* h1 → text-gradient from globals */}
          <h1 className="text-3xl sm:text-5xl">Why Join Our Team</h1>
          <p className="text-light-100 text-base sm:text-lg max-w-xl leading-relaxed">
            Discover the opportunities and culture that make us unique
          </p>
          <div className="w-16 h-[3px] rounded-full bg-primary mt-1 opacity-70 animate-pulse" />
        </div>

        <FlipCards cards={myCards}  />
      </section>

      <section id='form' className='container'>
        <h1 className='container'>
              Apply for Career Opportunity
            </h1>
        <CareerForm />
      </section>
      </>
  )
}

export default Careers