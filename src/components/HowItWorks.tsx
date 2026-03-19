"use client";

import { motion } from "framer-motion";
import { SearchIcon } from "@/components/animate-ui/icons/search";
import { RouteIcon } from "@/components/animate-ui/icons/route";
import { BinaryIcon } from "@/components/animate-ui/icons/binary";
import { AxeIcon } from "@/components/animate-ui/icons/axe";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const steps = [
  {
    phase: "Phase 01",
    title: "Deep Dive & Strategy",
    description: "We map your funnel, understand your users, and align on the architecture that serves your business.",
    icon: SearchIcon,
  },
  {
    phase: "Phase 02",
    title: "Tailored Plan",
    description: "We show you the roadmap before we write code. You see exactly what's building, and you get checkpoints to pivot if needed.",
    icon: RouteIcon,
  },
  {
    phase: "Phase 03",
    title: "Build & Setup",
    description: "Full-stack development using modern, scalable tech. We handle hosting, domains, payment setup, and all production details.",
    icon: BinaryIcon,
  },
  {
    phase: "Phase 04",
    title: "Launch & Improve",
    description: "Deploy with confidence. We train your team, monitor early metrics, and optimize for conversions in the first 30 days.",
    icon: AxeIcon,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Our Process
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Four Steps to <span className="text-muted-foreground">Launch</span>. Zero Hassle.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            We&apos;ve refined our process to be entirely frictionless. You provide the vision, we provide the execution.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[1px] bg-gradient-to-r from-border to-transparent -z-10" />
              )}
              
              <AnimateIcon animateOnHover className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-border mb-6">
                  <step.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {step.phase}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </AnimateIcon>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
