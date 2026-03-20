"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative w-[280px] md:w-[320px] lg:w-[360px] shrink-0 mt-16">
      {/* The Card */}
      <div className="bg-surface/40 backdrop-blur-xl rounded-xl pt-20 pb-8 px-6 shadow-2xl relative border border-white/10 flex flex-col items-center">
        {/* Signature Overlap PFP */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[6px] border-background overflow-hidden bg-neutral-900 flex items-center justify-center">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
            <AvatarFallback className="bg-neutral-800 text-white text-3xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="text-center w-full space-y-6">
          {/* Name Section */}
          <div className="space-y-1">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 font-bold">Identity</p>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white leading-tight uppercase line-clamp-2">{member.name}</h3>
            <p className="text-neutral-400 text-sm font-medium tracking-tight line-clamp-2">{member.role}</p>
          </div>

          {/* Experience Section */}
          <div
            className={`pt-2 flex justify-center ${
              member.experience ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
            <Badge variant="outline" className="border-neutral-700 text-neutral-300 font-normal">
              {member.experience || "N/A"}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TeamCard };
