"use client";

import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";

const painPoints = [
  {
    number: "01",
    title: "Slow Work, Missed Dates",
    description:
      "You wait months for a coder to finish what should take weeks. Time is money.",
  },
  {
    number: "02",
    title: "People Visit But Do Not Buy",
    description:
      "People visit your site, but they do not buy. Bad pages cost you money every day.",
  },
  {
    number: "03",
    title: "Orders Lost in Chats",
    description:
      "You sell on phone chats. It works until it breaks. One missed chat is a lost sale.",
  },
];

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const ProblemAgitation = () => {
  return (
    <section className="relative py-16 md:py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={rowVariant} className="mb-4">
            <PillBadge icon="⚡">The Problem</PillBadge>
          </motion.div>
          <motion.h2
            variants={rowVariant}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6"
          >
            We Know What <span className="text-muted-foreground">Slows You Down</span>
          </motion.h2>
          <motion.p variants={rowVariant} className="text-lg text-muted-foreground max-w-xl">
            There is a better way.{" "}
            <span className="text-foreground font-medium">Nuturn Studio</span> does the
            hard work so you can grow.
          </motion.p>
        </motion.div>

        {/* Lusion-style numbered row list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={rowVariant}
              className="group"
            >
              {/* Top divider */}
              <div className="h-px bg-neutral-800 group-first:bg-neutral-700" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 transition-colors hover:bg-neutral-900/30 px-2 -mx-2 rounded-sm">
                {/* Large faded number */}
                <span className="text-5xl md:text-6xl font-black text-white/[0.07] select-none leading-none shrink-0 w-14 text-right hidden sm:block">
                  {point.number}
                </span>

                {/* Mobile number */}
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase sm:hidden">
                  {point.number}
                </span>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground sm:w-56 shrink-0 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base flex-1">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom divider */}
          <div className="h-px bg-neutral-800" />
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
