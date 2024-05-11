import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contact/Contacts";
import About from "./about/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshanth V",
  description: "NextJS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
        <Navbar />
        {children}
        <About />
        <Skills />
        <Projects />
        <Contacts />
        </body>
    </html>
  );
}
