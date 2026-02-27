"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/academy", label: "Academy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          {/* Logo (uses global .logo styles) */}
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

          {/* Desktop Navigation */}
          <ul className="max-md:hidden">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="text-foreground/80 hover:text-primary transition-colors max-md:hidden"
            >
              <FaLinkedin size={26} />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex-center h-10 w-10 rounded-md bg-dark-200 hover:bg-dark-200/80 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-dark-100 border-r border-border-dark transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border-dark/50">
          {/* FIX 2: Logo in sidebar now matches desktop — same className="logo", same image size 60x60, same <p>Neunorth</p> */}
          <Link
            href="/"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/Logo.png"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <p className="text-xl font-bold italic">Neunorth</p>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="flex-center h-10 w-10 rounded-md bg-dark-200 hover:bg-dark-200/80 transition-colors"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* FIX 1: list-none removes the bullet dots from nav items */}
        <ul className="flex flex-col font-bold gap-1 p-6 list-none">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary transition-colors"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li className="mt-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
            >
              <FaLinkedin size={30} />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}