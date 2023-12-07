import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thamizhiniyan C S",
  description: "Penetration Tester | NextJS Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={josefin_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="mt-[100px] w-full">{children}</div>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
