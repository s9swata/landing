"use client";

import VideoPlayer from "./VideoPlayer";
import { ArrowRight } from "lucide-react";
import { BlurIn } from "./ui/BlurIn";
import { SplitText } from "./ui/SplitText";

const badges = [
  { icon: "🚀", text: "SaaS Products & Ecommerce Stores" }
];

const logoNames = ["Vercel", "Stripe", "Linear", "Notion", "Raycast", "Arc"];

const HeroSection = () => (
  <section className="relative h-screen w-full bg-[#070612] overflow-hidden flex items-center">
    {/* Video */}
    <div className="absolute inset-0 z-0">
      <VideoPlayer />
    </div>

    {/* Content */}
    <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pt-12">
      <div className="flex flex-col gap-12 max-w-3xl">
        <div className="flex flex-col gap-6 items-start">
          {/* Badge */}
          <BlurIn delay={0} duration={0.6}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-4 py-1.5">
              <span className="text-white/80 text-sm">{badges[0].icon}</span>
              <span className="text-sm font-medium text-white/80">{badges[0].text}</span>
            </div>
          </BlurIn>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.2] text-white">
            <span className="block">
              <SplitText text="Stop Waiting." delay={0.08} />
            </span>
            <span className="inline">
              <SplitText text="Start Shipping " delay={0.08} startDelay={0.08 * 2} />
            </span>
            <span className="inline font-serif italic text-white/90">
              <SplitText text="What Sells." delay={0.08} startDelay={0.08 * 4} />
            </span>
          </h1>

          {/* Subtitle */}
          <BlurIn delay={0.4} duration={0.6}>
            <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl">
              We build fast, beautiful digital experiences for founders and local business owners — from SaaS products to online stores.
            </p>
          </BlurIn>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <BlurIn delay={0.6} duration={0.6}>
            <a 
              href="https://cal.com/saswata-biswas-dfnuvi/client-call"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </BlurIn>
        </div>
      </div>
    </div>

    {/* Logo Marquee */}
    <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-wrap justify-center gap-8 md:gap-12 px-6">
      {logoNames.map((name, i) => (
        <BlurIn key={name} delay={0.8 + (i * 0.1)} duration={0.6}>
          <span className="text-white/40 text-sm font-medium tracking-wide select-none">
            {name}
          </span>
        </BlurIn>
      ))}
    </div>
  </section>
);

export default HeroSection;
