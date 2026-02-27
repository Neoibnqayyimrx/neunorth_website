"use client";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image, { StaticImageData } from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Global Space Collaboration Platform",
    subtitle: "Uniting international agencies for coordinated space exploration",
    goal: "To create a unified platform for international space agencies to share research, coordinate missions, and collaborate on space exploration projects in real-time.",
    whatWeDid: "Developed a secure cloud-based collaboration platform with real-time data sharing, AI-powered research matching, and multilingual support. Implemented blockchain for secure data verification and IP protection.",
    outcome: "Increased international collaboration by 300%, reduced mission planning time by 60%, and enabled 15+ joint research projects within the first year of launch.",
    image: "/space.png",
    organization: "SPACE Collaboration Initiative",
    category: "Enterprise"
  },
  {
    id: 2,
    title: "48-Hour Non-Profit Digital Transformation",
    subtitle: "Rapid website development for 48 organizations in 48 hours",
    goal: "To provide 48 non-profit organizations with professional, functional websites within 48 hours through volunteer efforts, enhancing their online presence and donation capabilities.",
    whatWeDid: "Organized a hackathon-style event with 200+ volunteer developers and designers. Created customizable website templates, integrated donation systems, and provided training for non-profit staff.",
    outcome: "48 complete websites launched in 48 hours, increasing average donation conversion rates by 85% and providing $2M+ in equivalent services to non-profits.",
    image: "/Logo.png",
    organization: "48in48 Foundation",
    category: "Non-Profit"
  },
  {
    id: 3,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  }
];

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  goal: string;
  whatWeDid: string;
  outcome: string;
  image: string | StaticImageData;
  organization: string;
  category: string;
}

const CaseStudies: FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudy(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="case-studies" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1>Real Projects, Real Results</h1>
            <p className="mt-4">
              Case Studies
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-linear-to-r" />
          </div>

          {/* Swiper */}
          <Swiper
            className="!pb-4"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
            speed={1000}
            grabCursor={true}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {caseStudies.map((study: CaseStudy) => (
              <SwiperSlide
                key={study.id}
                className="!h-auto"
              >
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 gap-4 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-col gap-2">
                    <span className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold leading-snug">{study.title}</h3>
                    <p className="text-sm text-gray-400">{study.subtitle}</p>
                  </div>

                  {/* Organization Info */}
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        src={study.image}
                        alt={study.organization}
                        width={50}
                        height={50}
                        className="rounded-[10px] object-cover"
                        {...(typeof study.image === "object" && study.image.src
                          ? {
                              placeholder: "blur",
                              blurDataURL:
                                typeof study.image.blurDataURL === "string"
                                  ? study.image.blurDataURL
                                  : undefined,
                            }
                          : {})}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{study.organization}</h4>
                      <p className="text-xs text-gray-500">{study.category}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-medium transition-all duration-200 group"
                    onClick={() => openModal(study)}
                    aria-label={`View details for ${study.title}`}
                  >
                    View Details
                    <svg
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[var(--bg-primary,#0f0f0f)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
                {selectedStudy.category}
              </span>
              <h2 className="text-2xl font-bold mb-1">{selectedStudy.title}</h2>
              <p className="text-gray-400 mb-6">{selectedStudy.subtitle}</p>

              <div className="flex items-center gap-4">
                <Image
                  src={selectedStudy.image}
                  alt={selectedStudy.organization}
                  width={60}
                  height={60}
                  className="rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{selectedStudy.organization}</h3>
                  <p className="text-sm text-gray-400">{selectedStudy.category} Project</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="flex items-center gap-2 text-base font-semibold">
                  <span>🎯</span> The Goal
                </h4>
                <p className="text-gray-400 leading-relaxed">{selectedStudy.goal}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="flex items-center gap-2 text-base font-semibold">
                  <span>🛠️</span> What We Did
                </h4>
                <p className="text-gray-400 leading-relaxed">{selectedStudy.whatWeDid}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="flex items-center gap-2 text-base font-semibold">
                  <span>📈</span> The Outcome
                </h4>
                <p className="text-gray-400 leading-relaxed">{selectedStudy.outcome}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-white/10 flex justify-end">
              <button
                className="py-2.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-medium transition-all duration-200"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;