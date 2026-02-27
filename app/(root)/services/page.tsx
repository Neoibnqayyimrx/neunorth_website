import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <>
      <section id="hero">
        {/* Left Content */}
        <div className="content">
          <h1>Services</h1>

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

      {/* Our Vision */}
      <section id="who-we-are" className="container py-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center mb-12 lg:mb-16">
          <h1>Our Vision</h1>
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
              <p>
                To build a self-sustaining digital ecosystem in Africa, where
                high-quality IT services are delivered locally, global
                partnerships thrive, and individuals are trained and empowered
                to succeed in technology fields.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" className="px-8 cursor-pointer">
                  Schedule a call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="container">
        {/* Header */}
        <div className="text-center pt-16 pb-8">
          <h1 className="text-5xl mb-5">Our Services</h1>
        </div>
        <Products />
      </section>
    </>
  );
};

export default Services;
