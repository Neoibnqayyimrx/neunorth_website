// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand / Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="logo">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
              <p>Neunorth</p>
            </Link>
          </div>
          <p className="text-light-200">
            Innovating IT solutions for business transformation
          </p>
          {/* Social Icon */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="https://www.linkedin.com/company/neunorth"
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors max-md:hidden"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-primary mb-2">Go to</h4>
          <Link href="/about"  >About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/academy">Careers</Link>
          <Link href="/careers">Academy</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Services Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-primary mb-2">Services</h4>
          <Link href="/project-management">Project Management</Link>
          <Link href="/cybersecurity">Cybersecurity</Link>
          <Link href="/software-development" >Software Development</Link>
          <Link href="/it-consulting" >IT Consulting</Link>
          <Link href="/coaching" >Coaching</Link>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold italic max-sm:hidden">Schedule a Meeting</h1>
          <Link href="/services" >
              <Button size="lg" className="cursor-pointer">Place a call
                 <FiPhone className="text-lg" />
              </Button>
            </Link>
        </div>

      </div>

      {/* Bottom note with primary color border */}
      <div className="container mt-10 pt-6 border-t border-primary text-light-200 text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link> |{" "}
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
        <p>© 2026 Neunorth. All rights reserved.</p>
      </div>
    </footer>
  );
}