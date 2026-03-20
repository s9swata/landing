"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "@/components/animate-ui/icons/send";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Contact = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center text-center mb-12"
        >
          <motion.span variants={fadeUpVariant} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Get Started
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Let&apos;s Talk About <span className="text-muted-foreground">Your Project</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <form className="bg-surface/50 backdrop-blur-xl border border-border p-8 rounded-2xl space-y-6 liquid-glass-strong">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input type="text" placeholder="John Doe" className="bg-background/50 border-muted text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-muted-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50 border-muted text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-medium text-foreground">Project Type</label>
                <select className="h-10 w-full rounded-md border border-muted bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground">
                  <option value="">Select a type...</option>
                  <option value="saas">SaaS Development</option>
                  <option value="ecommerce">Ecommerce Store</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-medium text-foreground">Budget Range</label>
                <select className="h-10 w-full rounded-md border border-muted bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground">
                  <option value="">Select a range...</option>
                  <option value="<5k">&lt;$5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value=">10k">$10k+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                placeholder="Tell us about your goals..." className="flex min-h-[120px] w-full rounded-md border border-muted bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground resize-none p-4"
              />
            </div>

            <Button variant="glass" className="w-full font-semibold h-12 rounded-xl group">
              Send Message
              <AnimateIcon animateOnHover className="ml-2 group-hover:translate-x-1 transition-transform">
                <SendIcon className="w-3.5 h-3.5" />
              </AnimateIcon>
            </Button>

            <p className="text-center text-sm text-muted-foreground pt-4 ">
              Prefer to chat directly? <a href="https://cal.com/saswata-biswas-dfnuvi/client-call" target="_blank" rel="noreferrer" className="text-foreground hover:underline underline-offset-4 font-medium transition-colors">Book a call on Cal.com</a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
