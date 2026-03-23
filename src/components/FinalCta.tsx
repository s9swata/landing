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
    <section className="relative py-20 md:py-28 px-6 bg-background/70 overflow-hidden ">

      {/* Massive Left Offset Visual */}
      <div className="absolute -left-32 top-10 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="hidden lg:block absolute left-20 top-40 text-9xl font-black text-neutral-900/20 mix-blend-overlay tracking-tighter select-none pointer-events-none rotate-[-90deg] origin-left">
        GROWTH.
      </div>

      <div className="max-w-7xl mx-auto flex justify-end relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-start text-left p-10 md:p-16 lg:p-24 bg-surface/40 backdrop-blur-md border border-neutral-800 shadow-2xl w-full lg:w-3/4 rounded-3xl relative overflow-hidden group"
        >
          {/* Inner Accent Glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />

          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Ready to Build Your <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-medium">Growth Machine?</span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            Turn slow sales and bad code into an engine that people love to use and buy from.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-white font-medium bg-neutral-900/50 px-5 py-3 rounded-full border border-neutral-800">
              <AnimateIcon animateOnHover>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CircleCheckIcon className="text-primary w-3 h-3" />
                </div>
              </AnimateIcon>
              100% Clear Upfront Costs
            </div>
            <div className="flex items-center gap-3 text-white font-medium bg-neutral-900/50 px-5 py-3 rounded-full border border-neutral-800">
              <AnimateIcon animateOnHover>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CircleCheckIcon className="text-primary w-3 h-3" />
                </div>
              </AnimateIcon>
              We Ship on Time
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col items-start gap-3">
            <p className="text-sm text-neutral-400 max-w-sm">
              We reply in 24 hours. No long sales talk — just a quick chat about your goals.
            </p>
            <a
              href="https://cal.com/saswata-biswas-dfnuvi/client-call"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-2 rounded-xl text-base font-semibold bg-white text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all block w-full sm:w-auto text-center shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Book Your Free Demo
            </a>
            <p className="text-xs text-neutral-500">
              No credit card needed. Cancel anytime.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
