"use client";

import { motion } from "framer-motion";
import { Path } from "@phosphor-icons/react";

const steps = [
  {
    phase: "Phase 01",
    title: "Learn & Plan",
    description: "We learn about your users. We make a plan to build what your business needs.",
  },
  {
    phase: "Phase 02",
    title: "Clear Roadmap",
    description: "We show you the plan before we write any code. You see exactly what we will build.",
  },
  {
    phase: "Phase 03",
    title: "Build & Setup",
    description: "We build your app with modern tools. We set up domains, hosting, and payments for you.",
  },
  {
    phase: "Phase 04",
    title: "Launch & Help",
    description: "We go live smoothly. We teach your team how to run it and help you grow in the first 30 days.",
  },
];

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div
              variants={rowVariant}
              className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
            >
              <Path weight="bold" className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">Clear Process</span>
            </motion.div>
            <motion.h2
              variants={rowVariant}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]"
            >
              Four Steps to <span className="text-muted-foreground">Launch.</span>{" "}
              <span className="font-medium">No Stress.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={rowVariant}
            className="text-base text-muted-foreground max-w-xs lg:text-right"
          >
            You share the vision, we handle the execution.
          </motion.p>
        </motion.div>

        {/* Lusion-style step rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={rowVariant} className="group">
              <div className="h-px bg-neutral-800 group-first:bg-neutral-700" />

              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 py-8 transition-colors hover:bg-neutral-900/30 px-2 -mx-2 rounded-sm">
                {/* Phase label */}
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {step.phase}
                  </span>
                  {/* Step number indicator - dot line on desktop */}
                  <div className="hidden sm:flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {index < steps.length - 1 && (
                      <div className="w-px h-12 bg-gradient-to-b from-primary/20 to-transparent ml-[3px] mt-1 absolute" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10">
                  <h3 className="text-lg md:text-xl font-semibold text-white sm:w-48 shrink-0 leading-snug mb-2 sm:mb-0">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="h-px bg-neutral-800" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
