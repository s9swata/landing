"use client";

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { SendIcon } from "@/components/animate-ui/icons/send";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Envelope, RocketLaunch } from "@phosphor-icons/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Contact = () => {

  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden border-t border-white/5">

      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column: Copy & Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <RocketLaunch weight="bold" className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">Get Started</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
            Let&apos;s Build <br />
            <span className="text-muted-foreground">Something Great.</span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-lg text-neutral-400 max-w-md mb-12 leading-relaxed">
            Fill out the form to give us an idea of what you are looking for. We will review it and get back to you within 24 hours to schedule a quick chat.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                <Envelope weight="fill" className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-1">Email Us</h4>
                <p className="text-white">hello@nuturnstudio.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <form action="https://formsubmit.co/hello@nuturnstudio.com" method="POST" className="bg-surface/30 backdrop-blur-xl border border-neutral-800/60 p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-8 relative overflow-hidden group">
            <input type="hidden" name="_subject" value="New Project Inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Form Inner Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-3">
                <label className="text-sm font-medium text-neutral-300">Name</label>
                <Input type="text" name="name" required placeholder="John Doe" className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary/50 rounded-xl" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-neutral-300">Email</label>
                <Input type="email" name="email" required placeholder="john@example.com" className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary/50 rounded-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-3 flex flex-col">
                <label className="text-sm font-medium text-neutral-300">Project Type</label>
                <select name="projectType" required className="h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 appearance-none">
                  <option value="" className="bg-neutral-900">Select a type...</option>
                  <option value="SaaS Development" className="bg-neutral-900">SaaS Development</option>
                  <option value="Ecommerce Store" className="bg-neutral-900">Ecommerce Store</option>
                  <option value="Other" className="bg-neutral-900">Other</option>
                </select>
              </div>
              <div className="space-y-3 flex flex-col">
                <label className="text-sm font-medium text-neutral-300">Budget Range</label>
                <select name="budget" required className="h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 appearance-none">
                  <option value="" className="bg-neutral-900">Select a range...</option>
                  <option value="<$5k" className="bg-neutral-900">&lt;$5k</option>
                  <option value="$5k - $10k" className="bg-neutral-900">$5k - $10k</option>
                  <option value="$10k+" className="bg-neutral-900">$10k+</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <label className="text-sm font-medium text-neutral-300">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your goals..."
                className="flex min-h-[140px] w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-4 text-sm text-white placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 resize-none"
              />
            </div>

            <button type="submit" className="w-full bg-white text-black hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold h-10 rounded-xl group relative z-10 text-base flex items-center justify-center">
              Send Message
              <AnimateIcon animateOnHover className="ml-3 group-hover:translate-x-1 transition-transform">
                <SendIcon className="w-4 h-4" />
              </AnimateIcon>
            </button>

            <p className="text-center text-sm text-neutral-500 pt-2 relative z-10">
              Prefer to chat directly? <a href="https://cal.com/saswata-biswas-dfnuvi/client-call" target="_blank" rel="noreferrer" className="text-primary hover:text-white underline-offset-4 font-medium transition-colors hover:underline">Book a call on Cal.com</a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
