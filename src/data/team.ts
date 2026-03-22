export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience?: string;
  bio?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "amritesh-anshu",
    name: "Amritesh Anshu",
    role: "Founding Developer",
    experience: "",
    bio: "",
    image: "/images/team/amritesh_anshu.png",
  },
  {
    id: "saswata-biswas",
    name: "Saswata Biswas",
    role: "Co-Founding Developer",
    experience: "",
    bio: "",
    image: "/images/team/saswata_biswas.png",
  },
  {
    id: "rahul-raj",
    name: "Rahul Raj",
    role: "Software Developer",
    experience: "7+ years",
    bio: "Liquidity Infra project Associates at J.P. Morgan, Warsaw, Poland, Europe",
    image: "/images/team/rahul_raj.jpeg",
  },
  {
    id: "bikram-chandra",
    name: "Bikram Chandra",
    role: "Software Developer",
    experience: "7+ years",
    bio: "Persistent Company",
    image: "/images/team/bikram_chandra.jpeg",
  },
  {
    id: "shyamal-gandhi",
    name: "Shyamal Gandhi",
    role: "Support Software Developer",
    experience: "5+ years",
    bio: "",
    image: "/images/team/shyamal_gandhi.jpeg",
  },
  {
    id: "pritam-debnath",
    name: "Pritam Debnath",
    role: "Social Media Manager",
    image: "/images/team/pritam_debnath.png",
  },
  {
    id: "naincy-raj",
    name: "Naincy Raj",
    role: "Full Stack Developer",
    image: "/images/team/naincy_raj.jpeg",
  },
  {
    id: "subhi-nigam",
    name: "Subhi Nigam",
    role: "Data Analysis, Frontend Developer",
    image: "/images/team/subhi_nigam.jpeg",
  },
  {
    id: "sanjeet-kumar",
    name: "Sanjeet Kumar",
    role: "Technical Support",
    image: "/images/team/sanjeet_kumar.jpeg",
  },
  {
    id: "riya-gupta",
    name: "Riya Gupta",
    role: "Database and Frontend Developer",
    image: "/images/team/riya_gupta.jpeg",
  },
];
