import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "sonner";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({children}: { children: React.ReactNode }) => {
  
  const session = await auth();

  return (
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
    <head>
         <link
           rel="stylesheet"
           type="text/css"
           href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
         />
       </head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
    </SessionProvider>
  );}

export default RootLayout;