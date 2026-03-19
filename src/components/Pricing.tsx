"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "SaaS Launch",
    audience: "Founders ready to validate and launch",
    features: [
      "High-converting landing page",
      "Mobile-responsive design",
      "Contact + lead capture form",
      "2 revision rounds",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "SaaS Growth",
    audience: "Scaling SaaS with proven product-market fit",
    features: [
      "Full SaaS product + landing page",
      "AI feature integration",
      "Production-ready codebase",
      "30 days of post-launch support",
    ],
    cta: "Book Discovery Call",
    popular: true,
  },
  {
    name: "Commerce Launch",
    audience: "Local businesses ready to go online",
    features: [
      "Done-for-you ecommerce store",
      "Mobile-optimized checkout",
      "Payment processor setup",
      "Initial admin training",
    ],
    cta: "Start Your Store",
    popular: false,
  },
  {
    name: "Custom",
    audience: "Unique projects that need a custom fit",
    features: [
      "Tailored scope and timeline",
      "Full-service strategy included",
      "Unlimited revisions until happy",
      "Post-launch optimization partner",
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
            Investment
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Clear Pricing. No Surprises.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            Choose the track that fits your stage. Every tier includes our full attention and quality guarantee.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full">
              <Card className={`h-full flex flex-col relative ${tier.popular ? "bg-primary/5 border-primary/30" : "bg-surface/50 backdrop-blur-md border-border"}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-background text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground mb-2">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground min-h-[40px] leading-relaxed select-none">{tier.audience}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check weight="bold" className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://cal.com/saswata-biswas-dfnuvi/client-call"
                    target="_blank"
                    rel="noreferrer" className={`w-full py-3 rounded-xl text-sm font-medium text-center transition-all ${
                      tier.popular
                        ? "bg-primary text-background hover:opacity-90"
                        : "bg-background text-foreground border border-border hover:bg-primary/10"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
