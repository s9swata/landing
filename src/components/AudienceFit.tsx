"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckIcon } from "@/components/animate-ui/icons/circle-check";
import { AirplayIcon } from "@/components/animate-ui/icons/airplay";
import { LayoutDashboardIcon } from "@/components/animate-ui/icons/layout-dashboard";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const saasUseCases = [
  { title: "MVPs & Product Launches", desc: "Get your idea into users' hands fast. Clean code, scalable architecture, no compromise." },
  { title: "SaaS Landing Pages", desc: "High-converting pages that explain your product and make the CTA impossible to ignore." },
  { title: "AI-Integrated Products", desc: "OpenAI, Anthropic, or custom APIs — we build AI features that feel magical, not gimmicky." },
];

const commerceVerticals = [
  { title: "Clothing & Fashion", desc: "Beautiful lookbooks, size guides, and one-click checkout." },
  { title: "Beauty & Skincare", desc: "Product detail pages that build trust and drive repeat purchases." },
  { title: "Home Decor & Gifts", desc: "Showcase your collections with editorial-quality presentation." },
  { title: "Food, Snacks & Sweets", desc: "Mouth-watering product photos, smooth ordering, delivery integration." },
  { title: "Jewellery & Premium", desc: "Premium storefronts worthy of your products' price point." },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const AudienceFit = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden ">
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
            Two Tracks. <span className="text-muted-foreground">Built for You.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px_1fr] gap-8 lg:gap-12">
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
            <p className="text-sm text-muted-foreground leading-relaxed">Build MVPs, landing pages & AI-integrated products</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">Ecommerce stores that convert browsers to buyers</p>
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
