"use client";

import VideoPlayer from "./VideoPlayer";
import { ArrowRight } from "lucide-react";
import { BlurIn } from "./ui/BlurIn";
import RotatingText from "./ui/RotatingText";
import { AnimatedUnderline } from "./ui/AnimatedUnderline";
import Magnet from "./ui/Magnet";

const badges = [{ icon: "🚀", text: "SaaS Apps & Online Shops" }];

const logoNames = [
  "eCommerce",
  "SaaS",
  "Local Brands",
  "Automation",
  "App Dev",
  "FullStack",
];

const HeroSection = () => (
  <section className="relative h-screen w-full bg-[#000000] overflow-hidden flex items-center">
    {/* Video */}
    <div className="absolute inset-0 z-0">
      <VideoPlayer />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center justify-center h-full pt-20 lg:pt-24">
      <div className="flex flex-col gap-5 max-w-4xl items-center">
        {/* Badge */}
        <BlurIn delay={0} duration={0.6}>
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className=" text-black rounded-full px-2 py-0.5 text-xs font-bold leading-none flex items-center justify-center">
              {badges[0].icon}
            </span>
            <span className="text-sm font-medium text-white/90">
              {badges[0].text}
            </span>
          </div>
        </BlurIn>

        {/* Heading */}
        <BlurIn delay={0.1} duration={0.6}>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading text-white leading-[0.85] tracking-[-2px] sm:tracking-[-3px] flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span>Stop waiting.</span>
            <span className="flex items-center gap-3">
              Start
              <RotatingText
                texts={["Shipping", "Building", "Launching", "Scaling"]}
                mainClassName="px-4 sm:px-5 py-2 sm:py-3 rounded-2xl overflow-hidden justify-start text-white"
                staggerDuration={0}
                rotationInterval={3000}
              />
            </span>
            <span>What Sells.</span>
          </h1>
        </BlurIn>

        {/* Subtitle */}
        <BlurIn delay={0.8} duration={0.6}>
          <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl mx-auto">
            We make fast, nice websites for founders and local shops. We build
            SaaS apps and online stores.
          </p>
        </BlurIn>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-3 mt-6 lg:mt-8">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <BlurIn delay={1.0} duration={0.6}>
            <Magnet padding={20} disabled={false} magnetStrength={5}>
              <a
                href="https://cal.com/saswata-biswas-dfnuvi/client-call"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#070612] rounded-md px-5 py-3 text-sm font-medium transition-transform hover:scale-105"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnet>
          </BlurIn>
        </div>
        <BlurIn delay={1.3} duration={0.6}>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="https://emoji.aranja.com/static/emoji-data/img-apple-160/2b50.png"
                  alt="star"
                  className="w-2 h-2 md:w-5 md:h-5 object-contain"
                />
              ))}
            </div>
            <p className="text-white/60 text-sm md:text-lg font-medium tracking-tight">
              Trusted by 10+ founders &amp; local brands
            </p>
          </div>
        </BlurIn>
      </div>
    </div>

    {/* Logo Marquee */}
    <div className="absolute bottom-5 left-0 right-0 z-20 flex flex-wrap justify-center gap-8 md:gap-12 px-6">
      {logoNames.map((name, i) => (
        <BlurIn key={name} delay={0.8 + i * 0.1} duration={0.6}>
          <span className="text-white/40 text-sm font-medium tracking-wide select-none">
            {name}
          </span>
        </BlurIn>
      ))}
    </div>
  </section>
);

export default HeroSection;
