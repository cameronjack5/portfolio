"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

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
    <section className="flex justify-between h-[40px] w-full">
      <div className="text-2xl font-bold flex self-center pl-2 max-sm:invisible max-sm:w-0">
        <Link href="/">
          Cameron Jack {
          currentPage === "privacy" 
          ? <span className="font-medium">| Privacy </span>
          : (currentPage === "projects" || pathname.includes("projects")) ? <Link href="/projects" className="font-medium">| Portfolio </Link>
          : currentPage === "bugreport" ? <span className="font-medium">| Feedback </span>
          : ""
        }
        </Link>
      </div>

      <div className="flex gap-5 max-sm:text-sm">
        {/*
        <Link href={"#about-me"} className={`flex self-center`}>About Me</Link>
        <Link href={"#skills-and-experience"} className={`flex self-center`}>Skills & Experience</Link>
        <Link href={"#portfolio"} className={`flex self-center`}>Portfolio</Link>
        <Link href={"#my-approach"} className={`flex self-center`}>My Approach</Link>
        <Link href={"#contact"} className={`flex self-center`}>Contact</Link>
        */}

        <Link href={"/projects"} className={`flex self-center`}>Projects</Link> 
        <Link href={"/contact"} className={`flex self-center`}>Contact</Link> 
          
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