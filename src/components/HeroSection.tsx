import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

const badges = [
  "Integrated with Slack",
  "Integrated with Figma",
  "Integrated with GitHub",
];

const logoNames = ["Vercel", "Stripe", "Linear", "Notion", "Raycast", "Arc"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const HeroSection = () => (
  <section className="relative min-h-screen bg-nuturn-black overflow-hidden">
    {/* Video */}
    <div className="absolute bottom-[35vh] left-0 right-0 h-[80vh] z-0">
      <VideoPlayer />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24">
      {/* Badges */}
      <motion.div className="flex flex-wrap justify-center gap-3 mb-8" {...fadeUp(0.1)}>
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-4 py-1.5 rounded-full text-xs text-nuturn-muted backdrop-blur-md bg-nuturn-glass border border-nuturn-border"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-nuturn-white text-center leading-[1.05] max-w-4xl"
        {...fadeUp(0.25)}
      >
        Where Innovation Meets Execution
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-6 text-nuturn-muted text-center max-w-xl text-base md:text-lg leading-relaxed"
        {...fadeUp(0.4)}
      >
        From rapid prototyping to production-grade testing and seamless deployment — we turn your vision into reality at scale.
      </motion.p>

      {/* Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-10" {...fadeUp(0.55)}>
        <button className="px-7 py-3 rounded-full text-sm font-medium bg-nuturn-black text-nuturn-white border border-nuturn-white/30 hover:border-nuturn-white/60 transition-colors">
          Book a Call
        </button>
        <button className="px-7 py-3 rounded-full text-sm font-medium backdrop-blur-md bg-nuturn-glass text-nuturn-muted border border-nuturn-border hover:text-nuturn-white transition-colors">
          Let's Get Connected
        </button>
      </motion.div>
    </div>

    {/* Logo Marquee */}
    <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-12 px-6">
      {logoNames.map((name) => (
        <span key={name} className="text-nuturn-white/40 text-sm font-medium tracking-wide select-none">
          {name}
        </span>
      ))}
    </div>
  </section>
);

export default HeroSection;
