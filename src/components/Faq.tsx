"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Question } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Is this right for me?",
    answer: "Yes, if you want to grow fast. If you are just starting with no money, we might be too much. But if you are ready to scale up, we are perfect for you.",
  },
  {
    question: "What do you actually build?",
    answer: "We build two things: (1) Fast SaaS apps, and (2) Online shops for local shops. We do all the plan, design, and code work.",
  },
  {
    question: "How long does it take?",
    answer: "Most sites go live in 2 to 4 weeks. Landing pages take 2 to 3 weeks. Full SaaS apps take 3 to 6 weeks. Online shops take 10 to 14 days. We stick to these dates.",
  },
  {
    question: "Will I be able to run it later?",
    answer: "Yes. We build easy control panels and teach you how to use them on day one. You will not need us for simple changes or managing orders.",
  },
  {
    question: "What makes this different?",
    answer: "We code to make you money. Most teams just build what you ask for. We build what helps you sell more. Every choice is made to grow your sales.",
  },
  {
    question: "What happens after launch?",
    answer: "We stay with you for 30 days to help. We check your stats and see what works best. After that, we can stay longer or give everything to you.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Faq = () => {
  return (
    <section id="faq" className="relative py-32 px-6 bg-background overflow-hidden ">
      
      {/* Abstract Background Element */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Sticky Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} 
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-40"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <Question weight="bold" className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">Clear Answers</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            You Probably Have <span className="text-muted-foreground block">Questions.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-md mb-8">
            We list everything out plain and simple. Here is what you need to know before we talk over a quick intro call.
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <a href="#contact" className="hidden lg:inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Still need answers? Ping us <span className="text-xl">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Accordion List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="lg:col-span-7"
        >
          <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-neutral-800 bg-surface/30 hover:bg-surface/50 transition-colors backdrop-blur-md rounded-xl px-4 lg:px-6 data-[state=open]:bg-surface/60"
              >
                <AccordionTrigger className="text-white hover:no-underline font-medium text-left py-4 text-base hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 text-sm leading-relaxed pb-4 pr-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
