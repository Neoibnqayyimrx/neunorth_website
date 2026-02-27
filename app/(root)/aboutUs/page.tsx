import Difference from "@/components/Diferrence";
import TabbedContent from "@/components/TabbedContent";
import Team from "@/components/Team";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    label: "Purpose",
    image: "/blog1.jpg",
    imageAlt: "Our purpose",
    content:
      "Whether you're launching a new digital product or scaling operations across multiple regions, we bring structure and discipline to your work.",
    ctaText: "Start Your Project",
    ctaHref: "/contact",
  },
  {
    label: "Innovation",
    image: "/blog1.jpg",
    imageAlt: "Our innovation",
    content:
      "We specialize in IT project management, software and digital development, and data management.",
    ctaText: "Learn More",
    ctaHref: "/services",
  },
  {
    label: "Trust",
    image: "/blog1.jpg",
    imageAlt: "Trust and transparency",
    content:
      "Our approach is practical, transparent, and built around your goals.",
    ctaText: "Get In Touch",
    ctaHref: "/contact",
  },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="content space-y-6">
          <h1>About Us</h1>

          <p className="text-[var(--text-muted)]">
            We help organisations plan, build, and deliver projects through
            structured management, technical skills, and digital support.
          </p>

          <div className="actions">
            <Link href="/services">
              <Button size="lg">Schedule a Call</Button>
            </Link>
          </div>
        </div>

        <div className="visual">
          <div className="image-card">
            <Image
              src="/neunorth_hero.jpeg"
              alt="Hero Visual"
              width={520}
              height={520}
              priority
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section id="commitment" className="container mb-10 lg:mb-20">
        <div className="mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="lg:mb-5">Empowering Technology Globally</h1>

            <h2 className="inline-block border border-primary text-primary px-5 py-2 text-sm font-semibold rounded-full tracking-widest uppercase">
              Our Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg leading-[1.9] text-[var(--text-muted)]">
                We help clients achieve{" "}
                <strong className="text-primary font-bold">
                  clarity and structure
                </strong>{" "}
                in their IT projects and digital initiatives. Alongside this, we
                support emerging talent across Africa, creating a capable
                workforce that can manage and sustain meaningful technological
                work.
              </p>

              <div className="flex flex-col gap-6 mt-5">
                {/* ITEM 01 */}
                <div className="flex items-start gap-5 p-6 bg-[var(--bg-secondary)] rounded-2xl border-l-4 border-primary transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary opacity-30">
                    01
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[var(--text-color)] mb-2">
                      Project Clarity
                    </h4>

                    <p className="text-sm md:text-base text-[var(--text-muted)]">
                      Structured approach to IT delivery
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
                      Talent Development
                    </h4>

                    <p className="text-sm md:text-base text-[var(--text-muted)]">
                      Building Africa&apos;s tech workforce
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
          </div>{/* end grid */}
        </div>{/* end container */}
      </section>

      <section id="team" className="container">
         {/* Header — mirrors #event / #hero header patterns */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border border-primary text-primary text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest px-5 py-2 rounded-full">
            Our Team
          </span>
          {/* h1 picks up your global text-gradient style */}
          <h1>Meet the Experts</h1>
          {/* decoration bar */}
          <div className="w-16 h-0.75 rounded-full bg-primary mt-1 opacity-70" />
        </div>
        <Team />
      </section>

      {/* TABS */}
      <section id="tabs" className="container">
        <TabbedContent
          heading="What We Do"
          tabs={tabs}
          defaultTab="Purpose"
        />
      </section>

      <section id="difference" className="container">
        <Difference />
      </section>

      
    </>
  );
};

export default About;