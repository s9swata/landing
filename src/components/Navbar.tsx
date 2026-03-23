"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatedUnderline } from "./ui/AnimatedUnderline";

const navLinks = [
  { label: "Services", href: "#perfect-fit", active: false },
  { label: "Pricing", href: "#pricing", active: false },
  { label: "FAQ", href: "#faq", active: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Nuturn Logo" width={36} height={36} />
            <span className="font-medium tracking-tight text-foreground text-lg drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">Nuturn</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href} className={`text-sm transition-colors drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,1)] ${link.active
                  ? "text-foreground border-b border-transparent bg-gradient-to-r from-primary/80 to-primary/40 bg-clip-text text-transparent"
                  : "text-muted-foreground hover:text-foreground/80"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://cal.com/saswata-biswas-dfnuvi/client-call"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.4)] ${
              pastHero ? "ring-2 ring-white/30 ring-offset-1 ring-offset-black animate-pulse" : ""
            }`}
          >
            <AnimatedUnderline>Book a Free Call</AnimatedUnderline>
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex md:hidden text-foreground p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0a0a0a] z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6 px-8 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://cal.com/saswata-biswas-dfnuvi/client-call"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
                >
                  Book a Free Call
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
