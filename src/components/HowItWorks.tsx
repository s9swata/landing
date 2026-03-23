"use client";

import { motion } from "framer-motion";
import { SearchIcon } from "@/components/animate-ui/icons/search";
import { RouteIcon } from "@/components/animate-ui/icons/route";
import { BinaryIcon } from "@/components/animate-ui/icons/binary";
import { AxeIcon } from "@/components/animate-ui/icons/axe";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Path } from "@phosphor-icons/react";

const steps = [
  {
    phase: "Phase 01",
    title: "Learn & Plan",
    description: "We learn about your users. We make a plan to build what your business needs.",
    icon: SearchIcon,
  },
  {
    phase: "Phase 02",
    title: "Clear Roadmap",
    description: "We show you the plan before we write any code. You see exactly what we will build.",
    icon: RouteIcon,
  },
  {
    phase: "Phase 03",
    title: "Build & Setup",
    description: "We build your app with modern tools. We set up domains, hosting, and payments for you.",
    icon: BinaryIcon,
  },
  {
    phase: "Phase 04",
    title: "Launch & Help",
    description: "We go live smoothly. We teach your team how to run it and help you grow in the first 30 days.",
    icon: AxeIcon,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 bg-background/70 overflow-hidden ">

      {/* Abstract Background Element */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative z-10">

        {/* Left Sticky Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-40"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <Path weight="bold" className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">Clear Process</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Four Steps to <span className="text-muted-foreground block">Launch.</span>
            <span className="font-medium">No Stress.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-md">
            We make building easy for you. You share the vision, and we handle the hard execution. Your time is protected.
          </motion.p>
        </motion.div>

        {/* Right Scrolling Timeline (Asymmetrical Offsets) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="lg:col-span-7 flex flex-col gap-8 lg:mt-32 relative"
        >
          {/* Subtle connecting vertical line on desktop */}
          <div className="hidden lg:block absolute left-12 top-10 bottom-10 w-[1px] bg-gradient-to-b from-border via-border/50 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className={`relative ${index % 2 !== 0 ? 'lg:ml-24' : 'lg:mr-12'}`}
            >
              <div className="p-6 md:p-8 rounded-3xl bg-surface/40 backdrop-blur-md border border-neutral-800 hover:bg-neutral-800/50 transition-colors group">
                <AnimateIcon animateOnHover className="flex flex-col items-start text-left">

                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-700/50 group-hover:border-primary/50 transition-colors shadow-inner">
                      <step.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors select-none">
                      {index + 1}
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-base leading-relaxed">
                    {step.description}
                  </p>

                </AnimateIcon>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
