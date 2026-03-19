"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";
import { TeamCard } from "./TeamCard";
import { teamMembers } from "@/data/team";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const TeamShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <PillBadge icon="👥">Our Team</PillBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl"
          >
            Meet the People Behind the Work
          </motion.h2>
        </motion.div>

        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-foreground hover:bg-surface transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-foreground hover:bg-surface transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="snap-start">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
