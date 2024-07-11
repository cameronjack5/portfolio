"use client"
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./button";

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
  header,
  icon,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {

  let bg = ""
  let titleText = ""
  let subtitleText = ""
  if (id === 0) {
    bg = "bg-[#32CD32]"
    titleText = "text-[#FFFFFF] w-[55%]"
    subtitleText = "text-[#FFFFFF] opacity-[0.5] w-[55%]"
  }
  else if (id === 1) {
    bg = "bg-[#FFD700]"
    titleText = "text-[#454545]"
    subtitleText = "text-[#000000] opacity-[0.4]"
  }
  else if (id === 2) {
    bg = "bg-[#75A8D3]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.5]"
  }
  else if (id === 3) {
    bg = "bg-[#E76F00]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.5]"
  }
  else if (id === 4) {
    bg = "bg-[#0A234C]"
    titleText = "text-[#FFFFFF] w-[55%]"
    subtitleText = "text-[#FFFFFF] opacity-[0.5] w-[55%]"
  }
  else if (id === 5) {
    bg = "bg-[#78286C]"
    titleText = "text-[#FFFFFF]"
    subtitleText = "text-[#FFFFFF] opacity-[0.5]"
  }
  else if (id === 6) {
    bg = "bg-[#AABBCD]"
    titleText = "text-[#454545]"
    subtitleText = "text-[#000000] opacity-[0.4]"
  }

  function handleOpenCard(id: number) {
    console.log(`Opening card ${id}... (not yet implemented)`)
  }


  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 pl-6 border border-transparent flex flex-col space-y-4 justify-end",
        className, bg
      )}
    >
      <div className="absolute top-3 right-3">
        <div onClick={() => handleOpenCard(id)} className="w-[34px] h-[34px] rounded-[50%] bg-white hover:bg-[#eeeeee] hover:cursor-pointer opacity-50 flex items-center justify-center"><FaPlus /></div>
      </div>
      <div className="">
        <div className={`text-base font-medium leading-tight ${subtitleText}`}>
          {description}
        </div>
        <div className={`text-3xl font-bold mb-2 ${titleText}`}>
          {title}
        </div>
      </div>
    </div>
  );
};
