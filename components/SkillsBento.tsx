import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const SkillsBento = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={i}
          title={item.title}
          description={item.description}
          className={
            i === 0 ? "md:col-span-3 md:row-span-2" :
            i === 1 ? "md:col-span-2 md:row-span-1" :
            i === 2 ? "md:col-span-2 md:row-span-1" :

            i === 3 ? "md:col-span-2 md:row-span-1" :
            i === 4 ? "md:col-span-3 md:row-span-2" : ""
          }
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Complete Large & Complex Projects",
    description: "Using a variety of tools and a logical, solution-based approach",
    bg: "#32CD32",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Learn Quickly",
    description: "I learn best through experience",
    bg: "#FFD700",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
  {
    title: "Data Science & Analytics",
    description: "Python, R, Matplotlib",
    bg: "#75A8D3",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Object Oriented Programming",
    description: "Java",
    bg: "#E76F00",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Full-stack Web Development",
    description: "Next.js, TypeScript, Tailwind, Firebase, d3.js, shadcn",
    bg: "#0A234C",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Haskell",
    description: "Functional Programming",
    bg: "#78286C",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "C, C++",
    description: "Low Level Programming",
    bg: "#AABBCD",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
];


export default SkillsBento