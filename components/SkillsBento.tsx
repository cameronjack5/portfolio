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
          content={item.content}
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
    content: [
      "I love learning about diverse and often random subjects, from trees or nuclear power to sleep or filmmaking.",
      "My wide-ranging interests provide a unique perspective, connecting unrelated dots and enhancing my critical thinking and problem-solving skills.",
    ],
    bg: "#FFD700",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
  {
    title: "Data Science & Analytics",
    description: "Python, R, Matplotlib",
    content: [
      "I have experience creating, analyzing, and visualizing large datasets, with a strong grasp of best practices to minimize risk and misinterpretation.",
      "My work includes university courses with excellent grades and personal projects like my survey website (linked in my portfolio).",
    ],
    bg: "#75A8D3",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Object Oriented Programming",
    description: "Java",
    content: [
      "I can handle large-scale projects or extend existing ones based on design documents and customer research.",
      "I'm proficient in Object-Oriented Programming and design standards, with experience in creating and implementing design and program specification documents.",
    ],
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
    content: [
      "I have experience with Haskell primarily in an academic context, but with the skills to implement effective solutions to real-world problems in the functional paradigm.",
    ],
    bg: "#78286C",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "C, C++",
    description: "Low Level Programming",
    content: [
      "I've worked with C extensively throughout University, particularly on large codebases such as the Linux kernel, which I modified for the Operating Systems course.",
    ],
    bg: "#AABBCD",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
];


export default SkillsBento