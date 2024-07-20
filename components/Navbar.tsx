"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaArrowUp } from 'react-icons/fa6'

const Navbar = () => {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  function handleOpenResume() {
    console.log("Opening resume... (not yet implemented)")
  }
  
  const removeLeadingPath = (path: string): string => {
    // Regex to match / or /folder/
    const regex = /^\/(?:[^\/]+\/)?/;
    // Remove the matched part from the path
    return path.replace(regex, '');
  };
  
  const currentPage = removeLeadingPath(pathname)

  return (
    <section className="flex max-sm:flex-col justify-between h-[40px] w-full">
      <div className="text-2xl font-bold flex self-center pl-2 max-sm:pb-4">
        <Link href="/">
          Cameron Jack {
          currentPage === "privacy" 
          ? <span className="font-medium">| Privacy </span>
          : (currentPage === "projects" || pathname.includes("projects")) ? <Link href="/projects" className="font-medium">| Portfolio </Link>
          : (currentPage === "feedback" || currentPage === "bugreport") ? <span className="font-medium">| Feedback </span>
          : ""
        }
        </Link>
      </div>

      <div className="flex md:gap-8 gap-5 max-sm:text-sm">
        {/*
        <Link href={"#about-me"} className={`flex self-center`}>About Me</Link>
        <Link href={"#skills-and-experience"} className={`flex self-center`}>Skills & Experience</Link>
        <Link href={"#portfolio"} className={`flex self-center`}>Portfolio</Link>
        <Link href={"#my-approach"} className={`flex self-center`}>My Approach</Link>
        <Link href={"#contact"} className={`flex self-center`}>Contact</Link>
        */}

        <Link href={"/projects"} className={`flex self-center items-end h-[24px]`}>Projects</Link> 
        <Link href={"https://github.com/cameronjack5"} className={`flex self-center items-end`}>Github<sup><ArrowUpRight className="text-secondary scale-75 -ml-[2px]" /></sup></Link> 
        <Link href={"https://www.linkedin.com/in/cameron-jack-280a1b29a/"} className={`flex self-center items-end`}>LinkedIn<sup><ArrowUpRight className="text-secondary scale-75 -ml-[2px]" /></sup></Link> 

        <Button onClick={() => handleOpenResume()} disabled={isLoading}>
          {
            isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
              </>
            ) : "Resume"
          }
        </Button>
      </div>
    </section>
  )
}

export default Navbar