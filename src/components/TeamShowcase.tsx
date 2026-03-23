"use client";

import { useRef } from "react";
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

// Duplicate list for a seamless infinite loop
const duplicatedMembers = [...teamMembers, ...teamMembers];

const TeamShowcase = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
      </div>

      {/* Infinite Marquee Strip — full bleed, no side padding */}
      <div className="relative">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className="overflow-hidden"
          style={{ WebkitMaskImage: "none" }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-[6px] w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
            style={{ willChange: "transform" }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <AuthorCard
                  name={member.name}
                  role={member.role}
                  avatarSrc={member.image}
                  experience={member.experience}
                  quote={
                    memberQuotes[member.id] ||
                    "Dedicated to delivering excellence in every project."
                  }
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
