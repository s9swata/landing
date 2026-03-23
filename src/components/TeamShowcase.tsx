"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PillBadge } from "./ui/PillBadge";
import { AuthorCard } from "./AuthorCard";
import { teamMembers } from "@/data/team";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const memberQuotes: Record<string, string> = {
  "amritesh-kumar":
    "Building the architectural foundation that powers our most ambitious projects.",
  "saswata-biswas":
    "Transforming complex requirements into elegant, production-ready solutions.",
  "rahul-raj":
    "Architecting robust financial systems with precision at enterprise scale.",
  "bikram-chandra": "Developing scalable solutions that drive business growth.",
  "shyamal-gandhi":
    "Ensuring seamless user experiences through reliable support systems.",
  "naincy-raj":
    "Bridging frontend elegance with rock-solid backend architecture.",
  "pritam-debnath":
    "Amplifying brand presence and engaging audiences across digital channels.",
  "shubhi-nigam":
    "Turning raw data into actionable insights through intuitive interfaces.",
  "sanjeet-kumar":
    "Resolving technical challenges swiftly to keep operations running.",
  "riya-gupta":
    "Designing efficient databases and crafting seamless user experiences.",
};

const TeamShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = typeof window !== 'undefined' && window.innerWidth < 640 ? scrollContainerRef.current.clientWidth : 340;
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
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <PillBadge icon="👥">Our Team</PillBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl"
          >
            Meet the Team Behind It All
          </motion.h2>
        </motion.div>

        <div className="relative group">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full sm:w-auto snap-center sm:snap-start shrink-0 flex justify-center">
                <AuthorCard
                  name={member.name}
                  role={member.role}
                  avatarSrc={member.image}
                  experience={member.experience}
                  quote={
                    memberQuotes[member.id] ||
                    "Dedicated to delivering excellence in every project."
                  }
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Bottom Center */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-foreground hover:bg-surface transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-foreground hover:bg-surface transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
