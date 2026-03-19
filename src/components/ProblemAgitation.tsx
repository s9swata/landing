"use client";

import { motion } from "framer-motion";
import { ClockCountdown, TrendDown, ChatsCircle } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const painPoints = [
  {
    title: "Slow Execution, Missed Deadlines",
    description:
      "You've been waiting months for a developer to ship something that should have taken weeks. Opportunities don't wait.",
    icon: ClockCountdown,
  },
  {
    title: "Visitors Don't Convert to Buyers",
    description:
      "Your traffic is real but the sales aren't. Whether it's a SaaS landing page or your online store, leaky funnels cost you every day.",
    icon: TrendDown,
  },
  {
    title: "Orders Lost in DMs and Inboxes",
    description:
      "You're managing sales through WhatsApp and Instagram. It works — until it doesn't. One missed message is a lost sale.",
    icon: ChatsCircle,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProblemAgitation = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
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
            The Challenge
          </motion.span>
          <motion.h2
            variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6"
          >
            We Know Exactly What&apos;s <span className="text-muted-foreground">Slowing You Down</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl"
          >
            There&apos;s a better way. <strong className="text-foreground font-medium">Nuturn Studio</strong> handles the execution so you can focus on growing.
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
              <Card className="h-full bg-surface/50 backdrop-blur-md border-neutral-700 backdrop-blur-md overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-neutral-700">
                    <point.icon weight="duotone" className="w-6 h-6 text-foreground" />
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
