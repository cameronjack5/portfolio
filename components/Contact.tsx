"use client"
import React, { useState } from 'react'
import Title from './Title'
import { FaCopy, FaGithub, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Contact = () => {

  const [copied, setCopied] = useState(false);

  function copyEmail() {
    const text = "cameronjack@protonmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    
  }
  return (
    <section id="contact" className="flex flex-col text-center">
      <Title title="How to Reach Me" subtitle="Contact" />
      <div className="text-xl flex items-center gap-4 w-full justify-center font-medium underline">cameronjack@protonmail.com 
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaCopy onClick={() => copyEmail()} className="hover:cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-secondary">{copied ? "Email is Copied!" : "Copy my email address"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        

      </div>
      <div className="flex flex-col items-center justify-center mt-10 mb-40 text-5xl gap-10">
        <Link className="flex items-center gap-2" href="https://www.github.com/cameronjack5">
          <FaGithub /> <p className="text-base">/cameronjack5</p>
        </Link>
        <Link className="flex items-center gap-2" href="https://www.linkedin.com/in/cameron-jack-280a1b29a/">
          <FaLinkedin /> <p className="text-base">/cameron-jack-280a1b29ak</p>
        </Link>
      </div>
    </section>
  )
}

export default Contact