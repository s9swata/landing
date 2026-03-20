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
            We list everything out plain and simple. Here is what you need to know before we talk.
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
