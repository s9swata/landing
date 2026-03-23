"use client";

import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";

const benefits = [
  {
    number: "01",
    title: "Launch Fast",
    description: "We cut out wasted time. Most sites go live in 2 to 4 weeks, not months.",
    tag: "Speed",
  },
  {
    number: "02",
    title: "Get More Leads",
    description: "Every button and word has a job. We build pages that turn visits into sales.",
    tag: "Growth",
  },
  {
    number: "03",
    title: "Sell Smoothly",
    description: "Easy checkouts for phones. Secure payments make it simple for people to buy.",
    tag: "Commerce",
  },
  {
    number: "04",
    title: "Run It Easily",
    description: "Simple control panels and clear orders. We show you how, so you do not need us later.",
    tag: "Simplicity",
  },
];

const rowVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const Benefits = () => {
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
            <PillBadge icon="✨">Why Us</PillBadge>
          </motion.div>
          <motion.h2
            variants={rowVariant}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6"
          >
            Built to Grow Your Brand
          </motion.h2>
          <motion.p variants={rowVariant} className="text-lg text-muted-foreground max-w-xl">
            We do not just build sites. We build things that work, sell, and grow with you.
          </motion.p>
        </motion.div>

        {/* Lusion-style numbered rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={rowVariant} className="group">
              <div className="h-px bg-neutral-800 group-first:bg-neutral-700" />

              <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_220px_1fr_auto] items-center gap-x-6 gap-y-2 py-7 transition-colors hover:bg-neutral-900/30 px-2 -mx-2 rounded-sm">
                {/* Faded number */}
                <span className="text-4xl sm:text-5xl font-black text-white/[0.08] select-none leading-none justify-self-end">
                  {benefit.number}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                  {benefit.title}
                </h3>

                {/* Description — spans 2 cols on mobile */}
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base col-start-2 sm:col-start-auto">
                  {benefit.description}
                </p>

                {/* Tag pill */}
                <span className="hidden sm:inline-flex text-xs font-medium tracking-widest text-muted-foreground uppercase border border-neutral-800 rounded-full px-3 py-1 whitespace-nowrap justify-self-end">
                  {benefit.tag}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="h-px bg-neutral-800" />
        </motion.div>

        {/* Early CTA for convinced users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center mt-12 gap-2"
        >
          <a
            href="https://cal.com/saswata-biswas-dfnuvi/client-call"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-neutral-700 rounded-full px-6 py-2.5 hover:bg-neutral-800 transition-colors"
          >
            Sounds good? Book a free 20-min call →
          </a>
          <p className="text-xs text-muted-foreground">No commitment. Just a chat.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
