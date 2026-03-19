"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PillBadge } from "./ui/PillBadge";
import { AxeIcon } from "@/components/animate-ui/icons/axe";
import { CompassIcon } from "@/components/animate-ui/icons/compass";
import { CherryIcon } from "@/components/animate-ui/icons/cherry";

const features = [
  {
    title: "Ship Fast",
    description: "From strategy to live product in weeks, not months. We eliminate waiting and excuses.",
    icon: AxeIcon,
  },
  {
    title: "Convert Better",
    description: "Every pixel is designed to turn visitors into buyers and trials into paying customers.",
    icon: CompassIcon,
  },
  {
    title: "Sell Smoothly",
    description: "From SaaS dashboards to ecommerce stores — built clean, managed easily.",
    icon: CherryIcon,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SolutionShowcase = () => {
  return (
    <section id="services" className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <PillBadge icon="🎯">What We Do</PillBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6"
          >
            Everything You Need to Launch and Grow
          </motion.h2>
          <motion.p
            variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl"
          >
            Two focused service lines. One studio. Unlimited execution.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <Card className="h-full bg-gradient-to-b from-surface to-transparent border-neutral-700">
                <CardHeader>
                  <feature.icon className="w-6 h-6 text-foreground mb-3" animateOnHover />
                  <CardTitle className="text-xl font-medium text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Tracks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }} className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeUpVariant}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-surface/50 backdrop-blur-md border border-neutral-700">
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">For Founders & Builders</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Custom SaaS products, AI integrations, and high-converting landing pages built with Next.js and modern architecture. Ship faster, scale confidently.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-surface/50 backdrop-blur-md border border-neutral-700">
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">For Local Brands & Stores</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Done-for-you ecommerce stores with mobile-first design, smooth checkout, payment setup, and admin tools you can manage from your phone.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionShowcase;
