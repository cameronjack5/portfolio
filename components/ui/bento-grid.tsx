"use client"
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./button";
import Image from "next/image";
import BentoGraph from "../BentoGraph";
import BinaryBackground from "../BinaryBackground";
import { useState } from "react";
import GridBackground from "../GridBackground";
import GraphBackground from "../GraphBackground";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-[8rem] mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  content,
  header,
  icon,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  content?: string[];
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [isHovering, setIsHovering] = useState<number>(-1);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  let bg = ""
  let titleText = ""
  let subtitleText = ""
  if (id === 0) {
    bg = "bg-[#32CD32]"
    titleText = "text-[#FFFFFF] w-[55%]"
    subtitleText = "text-[#FFFFFF] opacity-[0.7]"
  }
  else if (id === 1) {
    bg = "bg-[#FFD700]"
    titleText = "text-[#454545]"
    subtitleText = "text-[#000000] opacity-[0.4]"
  }
  else if (id === 2) {
    bg = "bg-[#75A8D3]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.7]"
  }
  else if (id === 3) {
    bg = "bg-[#E76F00]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.7]"
  }
  else if (id === 4) {
    bg = "bg-[#0A234C]"
    titleText = "text-[#FFFFFF] w-[53%]"
    subtitleText = "text-[#FFFFFF] opacity-[0.7]"
  }
  else if (id === 5) {
    bg = "bg-[#78286C]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.7]"
  }
  else if (id === 6) {
    bg = "bg-[#AABBCD]"
    titleText = "text-[#454545]"
    subtitleText = "text-[#000000] opacity-[0.4]"
  }

  function handleOpenCard(id: number) {
    console.log(`Opening card ${id}... (not yet implemented)`)
    setIsFlipped(!isFlipped)
  }

  function handleMouseEnter() {
    setIsHovering(id)
  }

  function handleOnMouseLeave() {
      setIsHovering(-1)
  }
  


  return (
    <>
      {/* FRONT SIDE */}
      <div
        className={cn(
          "overflow-hidden relative z-10 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 pl-6 border border-transparent flex flex-col justify-end",
          className, bg, `${id === 2 && "!bg-[#75A8D3] bg-grid-medium-white/[0.5]"}`, 
          `${id === 5 && "!bg-[#78286C] bg-dot-white/[0.4]"}`,
          `${isFlipped && "hidden"}`
        )}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleOnMouseLeave()}
      >
        <div>
          
        </div>
        <div className="z-10 absolute top-3 right-3 opacity-100 border border-[#eeeeee] rounded-full">
          <div className=""><div onClick={() => handleOpenCard(id)} className="w-[34px] h-[34px] rounded-[50%] bg-white hover:bg-[#eeeeee] hover:cursor-pointer opacity-50 flex items-center justify-center"><FaPlus className="opacity-100 z-20 text-[#454545]" /></div></div>
        </div>
        <div className={`z-10 ${titleText}`}>
          <div className={`text-base font-medium leading-tight ${subtitleText}`}>
            {description}
          </div>
          <div className={`text-3xl font-bold mb-2`}>
            {title}
          </div>
        </div>
        {(id === 1 || id === 3) && (
          <Image 
            src="/topography.png"
            width={348}
            height={160}
            alt="topography background"
            className="absolute top-0 left-0 z-index-0"
          />
        )}
        {(id === 6) && (
          <BinaryBackground isHovering={isHovering} />
        )}
        { /* WEB DEVELOPMENT STACKS */
          (id === 4) && (
            <div className="flex gap-2 w-fit absolute -right-1 -bottom-2 max-md:text-sm text-[#454545] font-medium">
              <div className="flex flex-col gap-2 text-center">
                {["Next.js", "React", "TypeScript", "Firebase"].map((item, i) => (
                  <span key={i} className="bg-white opacity-50 rounded-lg py-2 px-6 hover:opacity-60 hover:scale-110 duration-100">{item}</span>
                ))}
              </div>

              <div className="flex flex-col gap-2 text-center mt-5 max-md:mt-4">
                {["Vue", "Tailwind", "d3.js", "shadcn"].map((item, i) => (
                  <span key={i} className="bg-white opacity-50 rounded-lg py-2 px-6 hover:opacity-60 hover:scale-110 duration-100">{item}</span>
                ))}
              </div>
            </div>
          )
        }
        { /* COMPLEX PROJECTS GRAPH */
          (id === 0) && (
            <BentoGraph />
          )
        }
      </div>





      {/* FLIP SIDE */}
      <div
        className={cn(
          "overflow-hidden relative z-50 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-3 pl-4 border border-transparent",
          className, bg, `${!isFlipped && "hidden"}`,
        )}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleOnMouseLeave()}
      >
        <div className="relative z-50 float-right opacity-100 border border-[#eeeeee] rounded-full">
          <div>
            <div onClick={() => handleOpenCard(id)} className="z-50 w-[34px] h-[34px] rounded-[50%] bg-white hover:bg-[#eeeeee] hover:cursor-pointer opacity-50 flex items-center justify-center">
              <FaPlus className="opacity-100 z-20 text-[#454545] rotate-45" />
            </div>
          </div>
        </div>
        <div className={`z-10 ${titleText}`}>
          <div className={`font-medium leading-tight ${subtitleText} ${(id === 5 || id === 6) ? "text-xs" : "text-sm"}`}>
            {content && content.map((paragraph, index) => (
              <p key={index} className="pb-2">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

    </>
      
  );
};
