"use client";

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";
import { PillBadge } from "./ui/PillBadge";

const badges = [
  { icon: "🚀", text: "SaaS Products & Ecommerce Stores" }
];

const logoNames = ["Vercel", "Stripe", "Linear", "Notion", "Raycast", "Arc"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
});

const HeroSection = () => (
  <section className="relative min-h-screen bg-background overflow-hidden">
    {/* Dotted Mesh Background */}
    <div 
      className="absolute inset-0 z-0 opacity-40"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100% / .15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    />

    {/* Gradient Orbs */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4 z-0" />
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 z-0" />

    {/* Video */}
    <div className="absolute bottom-[25vh] left-0 right-0 h-[80vh] z-0">
      <VideoPlayer />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24">
      {/* Badges */}
      <motion.div className="flex flex-wrap justify-center gap-3 mb-8" {...fadeUp(0.1)}>
        {badges.map((badge) => (
          <PillBadge key={badge.text} icon={badge.icon}>
            {badge.text}
          </PillBadge>
        ))}
      </motion.div>

      {/* Headline */}
      <motion.h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tighter text-foreground text-center leading-[1.05] max-w-4xl"
        {...fadeUp(0.25)}
      >
        Stop Waiting. Start <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Shipping</span> What Sells.
      </motion.h1>

      {/* Subtext */}
      <motion.p className="mt-6 text-muted-foreground text-center max-w-xl text-base md:text-lg leading-relaxed"
        {...fadeUp(0.4)}
      >
        We build fast, beautiful digital experiences for founders and local business owners — from SaaS products to online stores.
      </motion.p>

      {/* Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-10" {...fadeUp(0.55)}>
        <a 
          href="https://cal.com/saswata-biswas-dfnuvi/client-call"
          target="_blank"
          rel="noreferrer" className="px-7 py-3.5 rounded-full text-sm font-medium bg-pearl text-pearl-foreground hover:bg-pearl/90 transition-all"
        >
          Book a Free Call
        </a>
      </motion.div>
    </div>

    {/* Logo Marquee */}
    <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-12 px-6">
      {logoNames.map((name) => (
        <span key={name} className="text-foreground/40 text-sm font-medium tracking-wide select-none">
          {name}
        </span>
      ))}
    </div>
  </section>
);

export default HeroSection;
