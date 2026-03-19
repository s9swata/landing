"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="w-[280px] md:w-[320px] lg:w-[360px] shrink-0 bg-surface/50 backdrop-blur-md border-neutral-700">
      <CardContent className="flex flex-col items-center text-center p-6">
        <Avatar className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] mb-4 border-2 border-neutral-700">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="bg-muted text-foreground text-2xl">
            {initials}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-lg font-semibold text-foreground mb-1">
          {member.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-2">{member.role}</p>

        {member.experience && (
          <Badge
            variant="outline"
            className="border border-pearl text-pearl mb-2"
          >
            {member.experience}
          </Badge>
        )}

        {member.bio && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export { TeamCard };
