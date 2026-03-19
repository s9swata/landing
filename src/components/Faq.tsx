"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this right for me?",
    answer: "Perfect for funded startups and ambitious indie builders ready to scale. If you are pre-revenue and pre-funding, we might be overkill. But if you have traction and need a robust, scalable platform to handle growth, you're exactly who we built this for.",
  },
  {
    question: "What do you actually build?",
    answer: "We build two things: (1) High-converting SaaS products with modern architecture, and (2) Done-for-you ecommerce stores for local businesses. Every build includes strategy, design, development, and post-launch support.",
  },
  {
    question: "How long does it take?",
    answer: "Most projects launch in 2–4 weeks. High-converting landing pages: 2–3 weeks. Full SaaS MVPs: 3–6 weeks. Ecommerce stores: 10–14 days. Timelines are guaranteed in your contract.",
  },
  {
    question: "Will I be able to manage it later?",
    answer: "Yes. We build simple admin interfaces and train your team on day one. You'll never be dependent on us for basic updates, order management, or content changes. We're here to support, not replace, your team.",
  },
  {
    question: "What makes this different?",
    answer: "We're marketers who code. Most agencies build what you ask for. We build what makes money. Every design decision and technical choice is made with your MRR and conversion rate in mind.",
  },
  {
    question: "What happens after launch?",
    answer: "We stay involved for 30 days of optimization. We monitor analytics, A/B test key elements, and help you understand what's working. After that, you have options to extend or we hand everything off fully documented.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Faq = () => {
  return (
    <section id="faq" className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Clear Answers
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mb-6">
            You Probably Have <span className="text-muted-foreground">Questions.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl">
            We believe in total transparency. Here&apos;s everything you need to know before we jump on a discovery call.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border bg-surface/50 backdrop-blur-md rounded-xl px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-medium text-left py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
