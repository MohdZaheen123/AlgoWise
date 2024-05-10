
"use client"

import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";

export default function RadialGradientDemo() {
  const logos = ["React", "Next.js", "Express", "JavaScript", "Mongodb", "DSA", "Node.js", "TypeScript", "Sql", "Docker"]
  return (
    <div className="h-[90vh] ">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}




