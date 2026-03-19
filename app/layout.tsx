import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LenisProvider } from "@/components/providers/lenis-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuturn — Where Innovation Meets Execution",
  description:
    "From rapid prototyping to production-grade testing and seamless deployment — we turn your vision into reality at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LenisProvider>{children}</LenisProvider>
        </Providers>
      </body>
    </html>
  );
}
