"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PillBadge } from "./ui/PillBadge";
import { FlipText } from "./ui/flip-text";
import { ClockIcon } from "@/components/animate-ui/icons/clock";
import { ChartBarDecreasingIcon } from "@/components/animate-ui/icons/chart-bar-decreasing";
import { MessageCircleIcon } from "@/components/animate-ui/icons/message-circle";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const painPoints = [
  {
    title: "Slow Work, Missed Dates",
    description:
      "You wait months for a coder to finish what should take weeks. Time is money.",
    icon: ClockIcon,
  },
  {
    title: "People Visit But Do Not Buy",
    description:
      "People visit your site, but they do not buy. Bad pages cost you money every day.",
    icon: ChartBarDecreasingIcon,
  },
  {
    title: "Orders Lost in Chats",
    description:
      "You sell on phone chats. It works until it breaks. One missed chat is a lost sale.",
    icon: MessageCircleIcon,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProblemAgitation = () => {
  return (
    <section className="relative py-16 md:py-20 px-6 bg-background/70 overflow-hidden">
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
            <PillBadge icon="⚡">The Problem</PillBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6"
          >
            We Know What <span className="text-muted-foreground">Slows You Down</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl"
          >
            There is a better way. <FlipText className="text-foreground font-medium">Nuturn Studio</FlipText> does the hard work so you can grow.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }} className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <AnimateIcon animateOnHover className="h-full">
                <Card className="h-full bg-surface/50 backdrop-blur-md border-neutral-700 overflow-hidden">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-neutral-700">
                      <point.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground leading-tight">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimateIcon>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to Benefits */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 text-sm tracking-wide"
        >
          Here&apos;s exactly how we solve each of these for you&nbsp;→
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemAgitation;
