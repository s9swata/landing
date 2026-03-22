"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckIcon } from "@/components/animate-ui/icons/circle-check";
import { AirplayIcon } from "@/components/animate-ui/icons/airplay";
import { LayoutDashboardIcon } from "@/components/animate-ui/icons/layout-dashboard";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const saasUseCases = [
  { title: "Quick App Launches", desc: "Get your idea to users fast. Clean code, built to grow, no shortcuts." },
  { title: "SaaS Landing Pages", desc: "Pages that explain your app and make people want to click and buy." },
  { title: "AI Tools", desc: "OpenAI or custom APIs. We build AI that feels like magic, not a trick." },
];

const commerceVerticals = [
  { title: "Clothes & Fashion", desc: "Nice photos, size guides, and fast checkout." },
  { title: "Beauty & Skin Care", desc: "Pages that build trust and make people buy again." },
  { title: "Home & Gifts", desc: "Show off your items in the best light." },
  { title: "Food & Snacks", desc: "Great food photos, easy ordering, and fast delivery setup." },
  { title: "Jewelry & Fancy Items", desc: "High-end stores that match your premium items." },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const AudienceFit = () => {
  return (
    <section id="perfect-fit" className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Perfect Fit
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Two Paths. <span className="text-muted-foreground">Built for You.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[200px_1fr_200px_1fr] gap-8 lg:gap-12">
          {/* SaaS Category */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface/50 backdrop-blur-md flex items-center justify-center border border-neutral-700">
                <AirplayIcon className="w-5 h-5 text-foreground" animateOnHover />
              </div>
              <h3 className="text-lg font-semibold text-foreground">SaaS Founders</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Build new apps, landing pages, and AI tools.</p>
          </motion.div>

          {/* Saas Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <div className="space-y-4">
              {saasUseCases.map((useCase, idx) => (
                <motion.div key={idx} variants={fadeUpVariant}>
                  <AnimateIcon animateOnHover className="block">
                    <Card className="bg-surface/50 backdrop-blur-md border-neutral-700 rounded-2xl">
                      <CardContent className="p-6">
                        <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                          <CircleCheckIcon className="text-muted-foreground w-4 h-4 flex-shrink-0" />
                          {useCase.title}
                        </h4>
                        <p className="text-muted-foreground text-sm pl-7 leading-relaxed">{useCase.desc}</p>
                      </CardContent>
                    </Card>
                  </AnimateIcon>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commerce Category */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface/50 backdrop-blur-md flex items-center justify-center border border-neutral-700">
                <LayoutDashboardIcon className="w-5 h-5 text-foreground" animateOnHover />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Commerce</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Stores that turn lookers into buyers.</p>
          </motion.div>

          {/* Commerce Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          >
            <div className="space-y-4">
              {commerceVerticals.map((vertical, idx) => (
                <motion.div key={idx} variants={fadeUpVariant}>
                  <AnimateIcon animateOnHover className="block">
                    <Card className="bg-surface/50 backdrop-blur-md border-neutral-700 rounded-2xl">
                      <CardContent className="p-5">
                        <h4 className="text-foreground font-medium mb-1 flex items-center gap-2">
                          <CircleCheckIcon className="text-muted-foreground w-4 h-4 flex-shrink-0" />
                          {vertical.title}
                        </h4>
                        <p className="text-muted-foreground text-sm pl-7 leading-relaxed">{vertical.desc}</p>
                      </CardContent>
                    </Card>
                  </AnimateIcon>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AudienceFit;
