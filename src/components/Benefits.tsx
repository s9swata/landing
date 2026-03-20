"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PillBadge } from "./ui/PillBadge";
import { Timer } from "@/components/animate-ui/icons/timer";
import { CopyIcon } from "@/components/animate-ui/icons/copy";
import { BlendIcon } from "@/components/animate-ui/icons/blend";
import { SlidersHorizontal } from "@/components/animate-ui/icons/sliders-horizontal";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const benefits = [
  {
    number: "01",
    title: "Launch Fast",
    description: "We cut out wasted time. Most sites go live in 2 to 4 weeks, not months.",
    Icon: Timer,
  },
  {
    number: "02",
    title: "Get More Leads",
    description: "Every button and word has a job. We build pages that turn visits into sales.",
    Icon: CopyIcon,
  },
  {
    number: "03",
    title: "Sell Smoothly",
    description: "Easy checkouts for phones. Secure payments make it simple for people to buy.",
    Icon: BlendIcon,
  },
  {
    number: "04",
    title: "Run It Easily",
    description: "Simple control panels and clear orders. We show you how, so you do not need us later.",
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
            <PillBadge icon="✨">Why Us</PillBadge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Built to Grow Your Brand
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            We do not just build sites. We build things that work, sell, and grow with you.
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
              <AnimateIcon animateOnHover className="h-full">
                <Card className="h-full bg-surface/50 backdrop-blur-md border-neutral-700 hover:bg-primary/5 transition-colors">
                  <CardHeader className="relative">
                    <div className="absolute top-6 right-6 text-4xl font-bold text-foreground/10 transition-colors pointer-events-none">
                      {benefit.number}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-neutral-700">
                      <benefit.Icon className="w-5 h-5 text-foreground" />
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
              </AnimateIcon>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
