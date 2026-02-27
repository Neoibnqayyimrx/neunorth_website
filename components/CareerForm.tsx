"use client";
import { FC } from "react";
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaMoneyBillWave, FaLinkedin } from "react-icons/fa";

// ── shadcn/ui imports ─────────────────────────────────────────────────────────
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
// ─────────────────────────────────────────────────────────────────────────────

// ── Inline career info data ───────────────────────────────────────────────────
const careerInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description: "Where you'll be based",
    value: "Remote / Hybrid",
  },
  {
    icon: FaClock,
    title: "Work Hours",
    description: "Standard working schedule",
    value: "Flexible Hours",
  },
  {
    icon: FaBriefcase,
    title: "Employment Type",
    description: "Contract type",
    value: "Full Time",
  },
  {
    icon: FaMoneyBillWave,
    title: "Compensation",
    description: "Salary structure",
    value: "Competitive",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

interface CareerFormProps {
  jobTitle?: string;
  jobId?: string;
}

const CareerForm: FC<CareerFormProps> = ({ jobId }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Career application submitted");
  };

  return (
    <section id="career-form" className="bg-background py-20 sm:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* ── Left: Career Info + Socials ───────────────────────────────────── */}
        <div className="flex flex-col gap-2">
          {careerInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 glass card-shadow rounded-2xl px-6 py-5 border border-border-dark hover:border-primary transition-colors duration-300 group"
              >
                {/* Icon box */}
                <div className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary text-dark-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <Icon size={24} />
                </div>

                <div className="flex flex-col gap-0.5">
                  {/* h3 → font-schibsted-grotesk text-2xl font-bold, override size */}
                  <h3 className="!text-base text-foreground">{info.title}</h3>
                  <p className="text-light-200 text-sm">{info.description}</p>
                  <span className="text-primary font-semibold text-sm mt-0.5">
                    {info.value}
                  </span>
                </div>
              </div>
            );
          })}
          
        </div>

        {/* ── Right: Application Form ───────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="glass card-shadow rounded-2xl border border-border-dark p-8 flex flex-col gap-6"
        >
          {/* Form header */}
          <div className="flex flex-col gap-2 mb-2">
            <p className="text-light-200 text-xl leading-relaxed">
              Ready to take the next step? Submit your application and join our
              team of talented professionals.
            </p>
            {jobId && <input type="hidden" name="jobId" value={jobId} />}
          </div>

          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="firstName" className="text-light-100 text-sm">
                First Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="lastName" className="text-light-100 text-sm">
                Last Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-light-100 text-sm">
              Email Address <span className="text-primary">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phoneNumber" className="text-light-100 text-sm">
              Phone Number <span className="text-primary">*</span>
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="+1 (555) 000-0000"
              required
              className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
            />
          </div>

          {/* LinkedIn + Portfolio row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="linkedin" className="text-light-100 text-sm">
                LinkedIn URL
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="linkedin.com/in/you"
                className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="portfolio" className="text-light-100 text-sm">
                Portfolio / Website
              </Label>
              <Input
                id="portfolio"
                name="portfolio"
                placeholder="yoursite.com"
                className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary h-11 rounded-xl"
              />
            </div>
          </div>

          {/* Experience + Employment Type row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-light-100 text-sm">
                Years of Experience <span className="text-primary">*</span>
              </Label>
              <Select name="experience" required>
                <SelectTrigger className="bg-dark-200 border-border-dark text-foreground h-11 rounded-xl focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="bg-dark-200 border-border-dark text-foreground">
                  <SelectItem value="0-1">0–1 years</SelectItem>
                  <SelectItem value="1-3">1–3 years</SelectItem>
                  <SelectItem value="3-5">3–5 years</SelectItem>
                  <SelectItem value="5-10">5–10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-light-100 text-sm">
                Employment Type <span className="text-primary">*</span>
              </Label>
              <Select name="employmentType" required>
                <SelectTrigger className="bg-dark-200 border-border-dark text-foreground h-11 rounded-xl focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-dark-200 border-border-dark text-foreground">
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Resume upload */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="resume" className="text-light-100 text-sm">
              Resume / CV <span className="text-primary">*</span>{" "}
              <span className="text-light-200 font-normal">(PDF, DOC, DOCX — max 5MB)</span>
            </Label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full px-3 py-3 rounded-xl border-2 border-dashed border-border-dark bg-dark-200 text-light-100 text-sm cursor-pointer
                         hover:border-primary transition-colors duration-300
                         file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0
                         file:bg-primary file:text-dark-100 file:font-semibold file:text-sm
                         file:cursor-pointer file:transition-opacity file:duration-200
                         hover:file:opacity-90"
            />
          </div>

          {/* Cover letter upload */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="coverLetter" className="text-light-100 text-sm">
              Cover Letter{" "}
              <span className="text-light-200 font-normal">(Optional)</span>
            </Label>
            <input
              type="file"
              id="coverLetter"
              name="coverLetter"
              accept=".pdf,.doc,.docx"
              className="w-full px-3 py-3 rounded-xl border-2 border-dashed border-border-dark bg-dark-200 text-light-100 text-sm cursor-pointer
                         hover:border-primary transition-colors duration-300
                         file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0
                         file:bg-primary file:text-dark-100 file:font-semibold file:text-sm
                         file:cursor-pointer file:transition-opacity file:duration-200
                         hover:file:opacity-90"
            />
          </div>

          {/* Additional info textarea */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="additionalInfo" className="text-light-100 text-sm">
              Additional Information
            </Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Why are you interested in this position? Any other comments..."
              rows={5}
              className="bg-dark-200 border-border-dark text-foreground placeholder:text-light-200/50 focus-visible:ring-primary focus-visible:border-primary rounded-xl resize-y min-h-[120px]"
            />
          </div>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              name="privacy"
              required
              className="mt-0.5 border-border-dark data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="privacy"
              className="text-light-200 text-sm leading-relaxed cursor-pointer"
            >
              I agree to the privacy policy and consent to my data being
              processed <span className="text-primary">*</span>
            </Label>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3 mt-2">
            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-dark-100 font-semibold text-base rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
            >
              Submit Application
            </Button>
            <p className="text-center text-light-200 text-xs">
              We'll review your application and get back to you within 5–7 business days.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
};

export default CareerForm;