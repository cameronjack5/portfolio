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
      "I love to learn, usually about random, seemingly disjoint subjects, like trees, nuclear power, sleep, or film-making.",
      "This disjoint collection of interests helps connect the dots in ways I wouldn't have thought of otherwise and has become a great asset.",
      //."I find my scatterbrained ideas to be a real asset to my critical thinking skills.",
    ],
    bg: "#FFD700",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
  {
    title: "Data Science & Analytics",
    description: "Python, R, Matplotlib",
    content: [
      //"Data science and analytics are some of my main strengths.",
      "I have extensive academic, industry, and personal experience in creating, manipulating, analysing, and visualising large amounts of data.",
      "I have a deep understanding of the data science best practices to minimise risk and misinterpretations of data, while keeping it simple and accessible.",
    ],
    bg: "#75A8D3",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "Object Oriented Programming",
    description: "Java",
    content: [
      //"I've used Java extensively, both in academia and for personal projects.",
      "Through academic experience, I'm very comfortable with the Object Oriented Programming paradigm as well as design standards.",
      "Various projects have given me experience with creating, understanding, and implementing designs and program specification documents.",
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
      "I mainly have experience working with Haskell in an academic context, but with the skills to implement real-world solutions in the functional paradigm."
    ],
    bg: "#78286C",
    text: {primary: "#ffffff", secondary: "rgba(1,1,1,0.5)"}
  },
  {
    title: "C, C++",
    description: "Low Level Programming",
    content: [
      "I've worked with C extensively throughout University, particularly on low-level programming courses such as Operating Systems. I am familiar with kernel development in Linux, and have an understanding of low-level computing."
    ],
    bg: "#AABBCD",
    text: {primary: "#454545", secondary: "rgba(0,0,0,0.4)"}
  },
];


export default SkillsBento