import type { Metadata } from "next";
import { Schibsted_Grotesk, Karla, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LenisProvider } from "@/components/providers/lenis-provider";
import ClickSpark from "@/components/ui/ClickSpark";
import { cn } from "@/lib/utils";

const firaCodeFiraCode = Fira_Code({subsets:['cyrillic','cyrillic-ext','greek','greek-ext','latin','latin-ext','symbols2'],weight:['300','400','500','600','700'],variable:'--font-fira-code'});

const karlaKarla = Karla({subsets:['latin','latin-ext'],weight:['200','300','400','500','600','700','800'],variable:'--font-karla'});

const schibstedGroteskSchibstedGrotesk = Schibsted_Grotesk({subsets:['latin','latin-ext'],weight:['400','500','600','700','800','900'],variable:'--font-schibsted-grotesk'});

export const metadata: Metadata = {
  title: "Nuturn — Where Innovation Meets Execution",
  description:
    "From rapid prototyping to production-grade testing and seamless deployment — we turn your vision into reality at scale.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(schibstedGroteskSchibstedGrotesk.variable, karlaKarla.variable, firaCodeFiraCode.variable)}>
      <body className="font-body antialiased">
        <Providers>
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <LenisProvider>{children}</LenisProvider>
          </ClickSpark>
        </Providers>
      </body>
    </html>
  );
}
