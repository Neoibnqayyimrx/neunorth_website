// app/page.tsx (or wherever your homepage is)
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlobalPresence from "@/components/GlobalPresence";
import GlobalNetworkMap from "@/components/GlobalNetworkMap";
import StatsCountUp from "@/components/StatsCountUp";
import CaseStudies from "@/components/CaseStudies";

export default function HomePage() {
  return (
    <>
      <section id="hero">
        {/* Left Content */}
        <div className="content">
          <h1>Project leadership and digital delivery for global clients.</h1>

          <p>
            We help organisations plan, build, and deliver projects through
            structured management, technical skills, and digital support.
          </p>

          <div className="actions">
            <Link href="https://calendly.com/YOUR_LINK">
              <Button size="lg" className="cursor-pointer">Schedule a Call</Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Our Global Partners
              </Button>
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

      {/* Who we are */}
      <section id="who-we-are" className="container py-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center mb-12 lg:mb-16">
          <h1>Who We Are</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Octagon Image */}
          <div className="flex-center relative order-2 lg:order-1">
            <div className="image-octagon w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
              <Image
                src="/vr.png"
                alt="Our team collaborating on a project"
                width={520}
                height={520}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — Text content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8 lg:gap-10">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Small team. Big impact.
              </h3>
              <p>
                Neunorth is the Nigerian branch of an international group with
                teams in Mauritius, Germany, and Estonia. We deliver IT project
                management, digital development, and data services globally,
                bringing world-class expertise to clients across continents.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" className="px-8 cursor-pointer">
                  Meet the Team →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="container">
        <GlobalPresence />

      </section>
      
       <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT → MAP */}
        <GlobalNetworkMap />

        {/* RIGHT → STATS */}
        <StatsCountUp />

      </div>
    </section>

    <section className="conatiner py-1">
      <CaseStudies />
    </section>
 
      {/* Academy Section */}
      <section id="academy" className="container py-10 lg:py-14">

        <div className="mx-auto max-w-5xl text-center mb-12 lg:mb-16">
          <h1>Academy</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left — Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Neunorth Academy
            </h3>
            <p>
              Our academy equips professionals with practical skills in IT project 
              management, digital development, and data analytics. Learn from 
              global experts and take your career to the next level.
            </p>
            <div className="pt-2">
              <Link href="/academy">
                <Button size="lg" className="px-8 cursor-pointer">
                  Explore Courses →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Octagon Image */}
          <div className="flex-center relative">
            <div className="image-octagon w-[320px] h-80 sm:w-105 sm:h-105 lg:w-120 lg:h-120">
              <Image
                src="/blog1.jpg" // replace with your academy image
                alt="Neunorth Academy"
                width={520}
                height={520}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </>
  );
}