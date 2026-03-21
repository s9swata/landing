"use client";

import { motion } from "framer-motion";
import { CircleCheckIcon } from "@/components/animate-ui/icons/circle-check";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const FinalCta = () => {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center p-8 md:p-16 rounded-3xl bg-surface/50 backdrop-blur-md border border-neutral-700 shadow-2xl"
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
            Ready to Build Your <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Growth Machine?</span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Turn slow sales and bad code into an app or store that people love to use and buy from.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <AnimateIcon animateOnHover>
                <CircleCheckIcon className="text-muted-foreground w-4 h-4" />
              </AnimateIcon>
              100% Clear Upfront Costs
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <AnimateIcon animateOnHover>
                <CircleCheckIcon className="text-muted-foreground w-4 h-4" />
              </AnimateIcon>
              We Ship on Time
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <a
              href="https://cal.com/saswata-biswas-dfnuvi/client-call"
              target="_blank"
              rel="noreferrer" className="px-6 py-3 rounded-md text-sm font-semibold bg-pearl text-pearl-foreground hover:bg-pearl/90 transition-all block w-full sm:w-auto"
            >
              Book Your Free Demo
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              We reply in 24 hours. No long sales talk, just a quick chat about your goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
