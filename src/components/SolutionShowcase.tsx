"use client";

import { motion } from "framer-motion";
import { RocketLaunch, Crosshair, ShoppingBagOpen } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Ship Fast",
    description: "From strategy to live product in weeks, not months. We eliminate waiting and excuses.",
    icon: RocketLaunch,
  },
  {
    title: "Convert Better",
    description: "Every pixel is designed to turn visitors into buyers and trials into paying customers.",
    icon: Crosshair,
  },
  {
    title: "Sell Smoothly",
    description: "From SaaS dashboards to ecommerce stores — built clean, managed easily.",
    icon: ShoppingBagOpen,
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
          <motion.span
            variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4"
          >
            What We Do
          </motion.span>
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
                  <feature.icon weight="fill" className="w-8 h-8 text-foreground mb-3" />
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
            <div className="h-full p-8 md:p-10 rounded-2xl bg-surface/50 backdrop-blur-md border border-neutral-700 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <RocketLaunch weight="duotone" className="w-32 h-32 text-foreground" />
              </div>
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">For Founders & Builders</h3>
              <p className="text-muted-foreground text-lg relative z-10 leading-relaxed">
                Custom SaaS products, AI integrations, and high-converting landing pages built with Next.js and modern architecture. Ship faster, scale confidently.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-surface/50 backdrop-blur-md border border-neutral-700 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingBagOpen weight="duotone" className="w-32 h-32 text-foreground" />
              </div>
              <h3 className="text-foreground font-medium text-sm tracking-wide uppercase mb-3">For Local Brands & Stores</h3>
              <p className="text-muted-foreground text-lg relative z-10 leading-relaxed">
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
