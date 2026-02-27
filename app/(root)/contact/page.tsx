import React from 'react'
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Send } from "lucide-react";

const Contact = () => {
    
  return (
    <section className="container py-16 lg:py-24">
      {/* Section header */}
      <div className="flex flex-col items-center text-center gap-3 mb-14">
        <p className="text-primary text-sm font-martian-mono tracking-[0.2em] uppercase">
          Get in touch
        </p>
        <h1 className="leading-tight">
          Let&apos;s work together
        </h1>
        <p className="text-light-100 text-lg max-w-xl">
          Choose what works best for you — hop on a quick call or drop us a message.
        </p>
      </div>

      {/* Two-column grid */}
      <div className="flex flex-col lg:flex-row items-stretch">

        {/* ── LEFT — Schedule a call ── */}
        <div className="flex-1 glass card-shadow rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-8 sm:p-10 flex flex-col gap-8">
          <div className="w-12 h-12 rounded-xl border border-primary/40 bg-primary/10 flex-center">
            <Calendar className="w-5 h-5" style={{ color: "#59deca" }} />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold">Schedule a call</h3>
            <p className="text-light-100 text-base leading-relaxed">
              Pick a slot that fits your calendar. We&apos;ll talk through your
              project, answer any questions, and map out the next steps together.
            </p>
          </div>

          <div className="mt-auto">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/80 text-black font-semibold text-base py-3 h-auto rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
              style={{ backgroundColor: "#59deca99" }}
            >
              <a
                href="https://calendly.com/YOUR_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule a call
              </a>
            </Button>
          </div>
        </div>

        {/* ── DIVIDER — "or" ── */}
        <div className="relative flex lg:flex-col items-center justify-center z-10">
          <div className="flex-1 h-px lg:h-auto lg:w-px bg-border-dark" />
          <div className="shrink-0 w-10 h-10 rounded-full border border-border-dark glass flex-center text-xs font-martian-mono text-light-200 font-bold">
            or
          </div>
          <div className="flex-1 h-px lg:h-auto lg:w-px bg-border-dark" />
        </div>

        {/* ── RIGHT — Send a mail ── */}
        <div className="flex-1 glass card-shadow rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8 sm:p-10 flex flex-col gap-6">
          <div className="w-12 h-12 rounded-xl border border-primary/40 bg-primary/10 flex-center">
            <Mail className="w-5 h-5" style={{ color: "#59deca" }} />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold">Send us a mail</h3>
            <p className="text-light-100 text-base leading-relaxed">
              Prefer async? Write to us anytime — we reply within one business day.
            </p>
          </div>

          <form action="/api/contact" method="POST" className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-light-100 text-sm font-medium">Your name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="bg-dark-200/60 border border-border-dark rounded-xl px-4 py-2.5 text-white placeholder:text-light-200/50 text-sm outline-none focus:border-primary/60 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-light-100 text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@company.com"
                className="bg-dark-200/60 border border-border-dark rounded-xl px-4 py-2.5 text-white placeholder:text-light-200/50 text-sm outline-none focus:border-primary/60 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-light-100 text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-dark-200/60 border border-border-dark rounded-xl px-4 py-2.5 text-white placeholder:text-light-200/50 text-sm outline-none focus:border-primary/60 transition-colors duration-200 resize-none"
              />
            </div>

            <div className="mt-auto pt-2">
              <Button
                type="submit"
                className="w-full font-semibold text-base py-3 h-auto rounded-xl border border-primary/40 bg-transparent hover:bg-primary/10 text-white transition-all duration-300 hover:translate-y-[-2px]"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send message
                </span>
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact