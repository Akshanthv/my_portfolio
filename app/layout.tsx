import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Contacts from "./contact/Contacts";
import About from "./about/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman A",
  description: "Suman's Portfolio",
  
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
        <Services />
        <Projects />
        <Contacts />
        </body>
    </html>
  );
}
