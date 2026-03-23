import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface AuthorCardProps {
  quote?: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
  experience?: string;
  className?: string;
}

export const AuthorCard = ({
  quote = "The advanced analytics have given us better insight into project performance than ever",
  name = "David Foster",
  role = "NextGen Solutions",
  experience,
  // Fallback to a placeholder image if avatar isn't provided (or add your own image path)
  avatarSrc = "https://i.pravatar.cc/150?u=david",
  className = "",
}: AuthorCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[28px] bg-[#111113] border border-white/[0.05] shadow-2xl w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] shrink-0 ${className}`}
    >
      <p className="text-[#9898A0] text-base sm:text-[18px] leading-[1.7] mb-8 sm:mb-12 font-light tracking-wide flex-1">
        {quote}
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden border-[2px] border-[#EAEAEA] shrink-0 shadow-sm">
          {/* Using standard img for placeholder ease; swap to next/image if you route local assets */}
          <img
            src={avatarSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-white font-medium text-base sm:text-[19px] tracking-tight">
            {name}
          </span>
          <span className="text-[#8B8B93] text-sm sm:text-[15px] tracking-wide mt-0.5">
            {role}
          </span>
          {experience && (
            <div className="mt-2 text-left">
              <Badge variant="outline" className="">
                {experience}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
