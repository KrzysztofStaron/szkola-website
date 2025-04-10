import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { AiAssistantChat } from "@/components/AiAssistantChat";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "Zespół Szkół Ogólnokształcących w Strzelinie",
  description: "Liceum Ogólnokształcące im. Marii Skłodowskiej-Curie w Strzelinie",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <AiAssistantChat />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
