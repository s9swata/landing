"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PillBadge } from "./ui/PillBadge";
import { Timer } from "@/components/animate-ui/icons/timer";
import { CopyIcon } from "@/components/animate-ui/icons/copy";
import { BlendIcon } from "@/components/animate-ui/icons/blend";
import { SlidersHorizontal } from "@/components/animate-ui/icons/sliders-horizontal";

const benefits = [
  {
    number: "01",
    title: "Launch Faster",
    description: "We've refined our process to eliminate wasted time. Most projects go live in 2–4 weeks — not months.",
    Icon: Timer,
  },
  {
    number: "02",
    title: "Convert Better",
    description: "Design decisions backed by conversion principles. Every CTA, headline, and layout element earns its place.",
    Icon: CopyIcon,
  },
  {
    number: "03",
    title: "Sell Smoothly",
    description: "Mobile-first checkouts, trust signals, and seamless payment flows that turn browsers into buyers.",
    Icon: BlendIcon,
  },
  {
    number: "04",
    title: "Manage Easily",
    description: "Simple admin panels, clear order dashboards, and training so you're never dependent on a developer again.",
    Icon: SlidersHorizontal,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Benefits = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <PillBadge icon="✨">Why Nuturn</PillBadge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Built to Move the Needle
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            We don&apos;t just build things. We build things that work, convert, and scale.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full">
              <Card className="h-full bg-surface/50 backdrop-blur-md border-neutral-700 hover:bg-primary/5 transition-colors group">
                <CardHeader className="relative">
                  <div className="absolute top-6 right-6 text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors pointer-events-none">
                    {benefit.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-neutral-700">
                    <benefit.Icon className="w-5 h-5 text-foreground" animateOnHover />
                  </div>
                  <CardTitle className="text-xl font-medium text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
