"use client";

import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";
import { FlipText } from "./ui/flip-text";
import { ClockIcon } from "@/components/animate-ui/icons/clock";
import { ChartBarDecreasingIcon } from "@/components/animate-ui/icons/chart-bar-decreasing";
import { MessageCircleIcon } from "@/components/animate-ui/icons/message-circle";
import { AxeIcon } from "@/components/animate-ui/icons/axe";
import { CompassIcon } from "@/components/animate-ui/icons/compass";
import { CherryIcon } from "@/components/animate-ui/icons/cherry";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const painPoints = [
  {
    title: "Slow Work, Missed Dates",
    description: "You wait months for a coder to finish what should take weeks. Time is money.",
    icon: ClockIcon,
  },
  {
    title: "People Visit But Do Not Buy",
    description: "People visit your site, but they do not buy. Bad pages cost you money every day.",
    icon: ChartBarDecreasingIcon,
  },
  {
    title: "Orders Lost in Chats",
    description: "You sell on phone chats. It works until it breaks. One missed chat is a lost sale.",
    icon: MessageCircleIcon,
  },
];

const solutions = [
  {
    title: "Ship Fast",
    description: "We go from idea to live app in weeks, not months. No more waiting.",
    icon: AxeIcon,
  },
  {
    title: "Get More Sales",
    description: "Every part of the site is made to turn visitors into paying customers.",
    icon: CompassIcon,
  },
  {
    title: "Sell With Ease",
    description: "From SaaS apps to online shops — built well and easy to run.",
    icon: CherryIcon,
  },
];

import { GlowingEffect } from "@/components/ui/glowing-effect";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const ProblemSolutionSplit = () => {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Abstract Background Typography */}
      <div className="absolute top-10 -left-10 sm:-left-20 text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold text-neutral-900/10 pointer-events-none select-none tracking-tighter mix-blend-overlay">
        friction.
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative z-10">
        
        {/* Left Column: Problem Agitation (Offset & Sticky-ish) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }} 
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32"
        >
          <motion.div variants={fadeUpVariant} className="mb-6">
            <PillBadge icon="⚡">The Problem</PillBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-2xl mb-6 leading-[1.1]"
          >
            We Know What <span className="text-muted-foreground block">Slows You Down</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl mb-12"
          >
            There is a better way. <FlipText className="text-foreground font-medium inline-block">Nuturn Studio</FlipText> handles the hard execution so you can get back to growing.
          </motion.p>

          <div className="flex flex-col gap-6 w-full">
            {painPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={fadeUpVariant}
                className="flex gap-4 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                  <point.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{point.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Solution Showcase (Bleeding Off-grid & Asymmetrical layout) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }} 
          className="lg:col-span-7 flex flex-col gap-6 lg:pl-12 lg:mt-32 relative"
        >
           {/* Right Abstract Element */}
           <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              variants={slideInRightVariant}
              className={`p-6 md:p-8 rounded-3xl bg-gradient-to-br from-neutral-800/80 to-background border border-neutral-700/50 shadow-2xl backdrop-blur-lg relative overflow-hidden group ${index === 1 ? 'lg:-ml-8 lg:mr-8' : 'lg:ml-8'}`}
            >
              {/* Internal Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-colors duration-500" />
              
              <AnimateIcon animateOnHover className="h-full relative z-10 w-full">
                <div className="mb-4 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex flex-col justify-center items-center">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {solution.description}
                </p>
              </AnimateIcon>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* prominent, centered target audience cards */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-5xl mx-auto mt-24 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeUpVariant} className="relative h-full rounded-[2.5rem] border border-neutral-700 hover:border-primary/30 transition-colors group p-[3px]">
            <GlowingEffect isAlwaysActive={true} borderWidth={3} spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
             <div className="relative h-full w-full bg-surface/40 backdrop-blur-xl p-8 lg:p-12 rounded-[inherit] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-primary font-bold text-sm lg:text-base tracking-widest uppercase mb-4 relative z-10">For Founders</h3>
                <p className="text-neutral-300 text-lg lg:text-xl leading-relaxed relative z-10">
                  Custom SaaS apps, AI tools, and great landing pages. Built with Next.js. Ship faster and grow easy.
                </p>
             </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="relative h-full rounded-[2.5rem] border border-neutral-700 hover:border-primary/30 transition-colors group p-[3px]">
            <GlowingEffect isAlwaysActive={true} borderWidth={3} spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
             <div className="relative h-full w-full bg-surface/40 backdrop-blur-xl p-8 lg:p-12 rounded-[inherit] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-primary font-bold text-sm lg:text-base tracking-widest uppercase mb-4 relative z-10">For Retail</h3>
                <p className="text-neutral-300 text-lg lg:text-xl leading-relaxed relative z-10">
                  Online stores built for you. Fast mobile checkout and seamless payment workflows integrated instantly.
                </p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolutionSplit;
