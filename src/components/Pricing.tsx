"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const pricingTiers = [
  {
    name: "SaaS",
    audience: "Founders ready to test, launch, or grow",
    features: [
      "Landing page that sells",
      "Full SaaS app build",
      "Add AI features",
      "Clean, ready-to-use code",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "eCommerce",
    audience: "Local shops ready to sell online",
    features: [
      "Online store built for you",
      "Fast phone checkout",
      "Secure payment setup",
      "We teach you to run it",
    ],
    cta: "Start Your Store",
    popular: false,
  },
  {
    name: "Custom",
    audience: "Big projects that need a custom plan",
    features: [
      "Custom time and cost plan",
      "Full step-by-step help",
      "Changes until you are happy",
      "Help to grow after launch",
    ],
    cta: "Let's Talk",
    popular: false,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Cost
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Clear Prices. No Surprises.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            Pick the plan that fits you best. Every plan gets our full care and top quality.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full list-none">
              <div className="relative h-full rounded-2xl border border-neutral-800 p-2 md:rounded-3xl md:p-3 bg-neutral-900/20">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-800/50 bg-black/40 p-6 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 px-4 py-1.5 bg-primary text-background text-[10px] font-bold rounded-b-xl uppercase tracking-widest shadow-lg z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col justify-between gap-6 z-10">
                    <div className="space-y-3">
                      <h3 className="font-sans text-2xl font-semibold text-white">
                        {tier.name}
                      </h3>
                      <p className="font-sans text-sm text-neutral-400 min-h-[40px] leading-relaxed select-none">
                        {tier.audience}
                      </p>
                    </div>

                    <ul className="space-y-4 flex-1 mt-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-neutral-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://cal.com/saswata-biswas-dfnuvi/client-call"
                      target="_blank"
                      rel="noreferrer" 
                      className={`w-full py-3 mt-6 rounded-xl text-sm font-semibold text-center transition-all ${
                        tier.popular 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                          : "bg-neutral-800 text-white hover:bg-neutral-700"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
