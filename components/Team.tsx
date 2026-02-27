"use client";
import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";

interface TeamMember {
  image: string | StaticImageData;
  name: string;
  role: string;
  skills: string;
  focusAreas: string[];
  linkedin?: string;
}

// ── Inline team data ──────────────────────────────────────────────────────────
const teamMembers: TeamMember[] = [
  {
    image: "/blog1.jpg",
    name: "Alice Morgan",
    role: "Lead AI Engineer",
    skills:
      "10+ years building production ML systems. Expert in LLM fine-tuning, RAG pipelines, and MLOps at scale.",
    focusAreas: ["Machine Learning", "LLMs", "MLOps"],
    linkedin: "https://linkedin.com",
  },
  {
    image: "/blog1.jpg",
    name: "James Liu",
    role: "Full-Stack Developer",
    skills:
      "Specialises in Next.js, Node.js, and cloud-native architectures. Passionate about DX and performance.",
    focusAreas: ["Next.js", "Node.js", "AWS"],
    linkedin: "https://linkedin.com",
  },
  {
    image: "/blog1.jpg",
    name: "Sara Okafor",
    role: "UX / Product Designer",
    skills:
      "Designs data-driven interfaces for complex SaaS products. Advocates for accessibility-first design systems.",
    focusAreas: ["UX Research", "Design Systems", "Figma"],
    linkedin: "https://linkedin.com",
  },
  {
    image: "/blog1.jpg",
    name: "Daniel Park",
    role: "Data Scientist",
    skills:
      "Transforms raw data into strategic insights. Skilled in Python, dbt, and advanced statistical modelling.",
    focusAreas: ["Analytics", "Python", "dbt"],
    linkedin: "https://linkedin.com",
  },
  {
    image: "/blog1.jpg",
    name: "Priya Nair",
    role: "DevOps / SRE",
    skills:
      "Keeps systems reliable at scale. Deep expertise in Kubernetes, Terraform, and observability stacks.",
    focusAreas: ["Kubernetes", "Terraform", "CI/CD"],
    linkedin: "https://linkedin.com",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const Team: FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* ── Section ─────────────────────────────────────────────────────────── */}
      <section className="mt-15">

        {/* Swiper carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 16 },
            600:  { slidesPerView: 2, spaceBetween: 20 },
            900:  { slidesPerView: 3, spaceBetween: 24 },
            1200: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="!pb-14"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="!h-auto flex">
              <TeamCard member={member} onViewDetails={() => openModal(member)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ── Modal ───────────────────────────────────────────────────────────── */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-1 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto mt-5"
          onClick={closeModal}
        >
          {/* modal panel — uses your `glass` + `card-shadow` utilities */}
          <div
            className="glass card-shadow relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/20 text-foreground border border-border-dark transition-all duration-300 hover:rotate-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 p-8">

              {/* Octagon image — reuses your global image-octagon-wide utility */}
              <div className="flex items-center justify-center">
                <div className="image-octagon-wide w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    width={260}
                    height={260}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-5">
                <div>
                  {/* h3 picks up your global: font-schibsted-grotesk text-2xl font-bold */}
                  <h3>{selectedMember.name}</h3>
                  <p className="text-primary font-semibold mt-1 text-base">
                    {selectedMember.role}
                  </p>
                </div>

                <div className="border-t border-border-dark pt-5">
                  <p className="text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest text-light-200 mb-2">
                    Skills &amp; Experience
                  </p>
                  {/* text-light-100 mirrors your global p style */}
                  <p className="text-light-100 text-sm leading-relaxed">
                    {selectedMember.skills}
                  </p>
                </div>

                <div className="border-t border-border-dark pt-5">
                  <p className="text-xs font-semibold font-schibsted-grotesk uppercase tracking-widest text-light-200 mb-3">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.focusAreas.map((area, i) => (
                      <span
                        key={i}
                        className="border border-primary text-light-100 text-xs font-medium px-4 py-1.5 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* mirrors your #event button style exactly */
                    className="inline-flex items-center gap-2 self-start bg-primary hover:bg-primary/90 text-dark-100 font-semibold text-sm px-5 py-2.5 rounded-[6px] mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                  >
                    <FaLinkedin size={26} />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

// ── Card sub-component ────────────────────────────────────────────────────────
interface TeamCardProps {
  member: TeamMember;
  onViewDetails: () => void;
}

const TeamCard: FC<TeamCardProps> = ({ member, onViewDetails }) => (
  /*
   * glass-card + glass-card-hover are defined in your globals.css already.
   * We override height to auto since content drives the size.
   */
  <div className="glass-card glass-card-hover group w-full !h-auto min-h-[380px]">

    {/* Octagon image — your global image-octagon utility */}
    <div className="flex items-center justify-center pt-8 pb-4 shrink-0">
      <div className="image-octagon w-[130px] h-[130px]">
        <Image
          src={member.image}
          alt={member.name}
          width={130}
          height={130}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 gap-3 px-5 pb-5">

      {/* Name + role */}
      <div className="text-center">
        {/* h3 global: font-schibsted-grotesk text-2xl font-bold — override size for card */}
        <h3 className="!text-lg group-hover:text-gradient transition-colors duration-300 leading-snug">
          {member.name}
        </h3>
        <p className="text-light-200 text-xs mt-0.5">{member.role}</p>
      </div>

      {/* Focus tags */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {member.focusAreas.slice(0, 3).map((area, i) => (
          <span
            key={i}
            className="border border-primary text-light-100 text-[0.65rem] font-medium px-2.5 py-1 rounded-full group-hover:-translate-y-0.5 transition-transform duration-300"
          >
            {area}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-dark">
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-foreground/80 hover:bg-primary/20 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin size={26} />
          </a>
        ) : (
          <span />
        )}

        <Button
          onClick={onViewDetails}
          className="cursor-pointer"
        >
          View Details
        </Button>
      </div>
    </div>
  </div>
);

export default Team;