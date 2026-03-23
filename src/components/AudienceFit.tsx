"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

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

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ListRow = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div variants={rowVariant} className="group">
    <div className="h-px bg-neutral-800" />
    <div className="flex items-start gap-4 py-5 transition-colors hover:bg-neutral-900/30 px-2 -mx-2 rounded-sm">
      <ArrowRight
        weight="bold"
        className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-foreground transition-colors"
      />
      <div className="flex flex-col sm:flex-row sm:gap-6 flex-1 min-w-0">
        <span className="text-sm font-semibold text-foreground shrink-0 sm:w-44">{title}</span>
        <span className="text-sm text-muted-foreground leading-relaxed">{desc}</span>
      </div>
    </div>
  </motion.div>
);

const AudienceFit = () => {
  return (
    <section id="perfect-fit" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={rowVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Perfect Fit
          </motion.span>
          <motion.h2 variants={rowVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Two Paths. <span className="text-muted-foreground">Built for You.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* SaaS Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-1">SaaS Founders</p>
              <p className="text-sm text-muted-foreground">Build new apps, landing pages, and AI tools.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {saasUseCases.map((item, idx) => (
                <ListRow key={idx} title={item.title} desc={item.desc} />
              ))}
              <div className="h-px bg-neutral-800" />
            </motion.div>
          </div>

          {/* Commerce Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-1">Commerce</p>
              <p className="text-sm text-muted-foreground">Stores that turn lookers into buyers.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
            >
              {commerceVerticals.map((item, idx) => (
                <ListRow key={idx} title={item.title} desc={item.desc} />
              ))}
              <div className="h-px bg-neutral-800" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceFit;
