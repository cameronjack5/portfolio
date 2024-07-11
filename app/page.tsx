import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import Portfolio from "@/components/Portfolio";
import SkillsAndExperience from "@/components/SkillsAndExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 scroll-smooth">
      <Hero />
      <SkillsAndExperience />
      <Portfolio />
      {/*<MyApproach /> */}
      <Contact />
    </div>
  );
}
