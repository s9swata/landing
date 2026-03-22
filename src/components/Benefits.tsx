"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Timer } from "@/components/animate-ui/icons/timer";
import { CopyIcon } from "@/components/animate-ui/icons/copy";
import { BlendIcon } from "@/components/animate-ui/icons/blend";
import { SlidersHorizontal } from "@/components/animate-ui/icons/sliders-horizontal";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

import { FollowerPointerCard } from "@/components/ui/following-pointer";

const benefits = [
  {
    number: "01",
    title: "Launch Fast",
    description: "We cut out wasted time. Most sites go live in 2 to 4 weeks, not months.",
    Icon: Timer,
    className: "md:col-span-2 md:row-span-2 lg:p-12",
    titleClass: "text-2xl md:text-3xl",
    bgImage: "/images/space.jpg",
  },
  {
    number: "02",
    title: "Get More Leads",
    description: "Every button and word has a job. We build pages that turn visits into sales.",
    Icon: CopyIcon,
    className: "md:col-span-1 md:row-span-1",
    titleClass: "text-xl",
    bgImage: "/images/leads.jpg",
  },
  {
    number: "03",
    title: "Sell Smoothly",
    description: "Easy checkouts for phones. Secure payments make it simple for people to buy.",
    Icon: BlendIcon,
    className: "md:col-span-1 md:row-span-1",
    titleClass: "text-xl",
    bgImage: "/images/sell.webp",
  },
  {
    number: "04",
    title: "Run It Easily",
    description: "Simple control panels and clear orders. We show you how, so you do not need us later.",
    Icon: SlidersHorizontal,
    className: "md:col-span-3 md:row-span-1 flex-col md:flex-row items-start md:items-center justify-between",
    titleClass: "text-xl md:text-2xl",
    bgImage: "/images/run.jpg",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Benefits = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <PillBadge icon="✨">Why Us</PillBadge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            Built to Grow Your Brand
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            We do not just build sites. We build things that work, sell, and grow with you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} 
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 lg:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeUpVariant} className={`h-full ${benefit.className}`}>
              <FollowerPointerCard title="Hover me" className="h-full">
                <AnimateIcon animateOnHover className="h-full">
                  <CardContainer containerClassName="h-full w-full py-0" className="h-full w-full">
                    <CardBody className={`h-full w-full flex flex-col p-6 lg:p-8 rounded-[2rem] bg-surface/30 backdrop-blur-md border border-neutral-800 hover:bg-neutral-800/40 transition-colors relative overflow-hidden group ${index === 3 ? "md:flex-row gap-6 md:items-center" : ""}`}>
                      
                      {benefit.bgImage && (
                        <CardItem translateZ={30} className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-[2rem] overflow-hidden">
                          <Image
                            src={benefit.bgImage}
                            alt={benefit.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover opacity-40 mix-blend-overlay"
                          />
                        </CardItem>
                      )}

                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none" />

                      <CardItem translateZ={50} className="absolute top-6 right-8 text-6xl font-black text-white/5 transition-colors pointer-events-none select-none z-10">
                        {benefit.number}
                      </CardItem>
                      
                      <CardItem translateZ={80} className={`relative z-10 w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700/50 ${index === 3 ? "md:mb-0 mb-6" : "mb-6"}`}>
                        <benefit.Icon className="w-5 h-5 text-foreground" />
                      </CardItem>
                      
                      <CardItem translateZ={100} className={`relative z-10 flex flex-col ${index === 3 ? "md:w-3/4" : "flex-1 justify-end"}`}>
                        <h3 className={`font-medium text-foreground mb-3 ${benefit.titleClass}`}>
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed md:text-lg">
                          {benefit.description}
                        </p>
                      </CardItem>

                    </CardBody>
                  </CardContainer>
                </AnimateIcon>
              </FollowerPointerCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
