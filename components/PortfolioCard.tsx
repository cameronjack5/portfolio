import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


interface PortfolioCardProps {
  title: string[];
  author: string;
  date: string;
  subtitle: string[];
  id: number;
  link: string; // e.g. /projects/daily-diary or /projects/singergie-website
  size?: "xs" | "sm" | "md" | "lg" | "default"; // card sizes
  className?: string;
}

const PortfolioCard = ({ title, author, date, subtitle, id, link, size, className }: PortfolioCardProps) => {
  if (size === "xs") {
    return (
      <Link href={link}>
        <div className={`w-[240px] h-[339px] bg-projectCard text-projectCard-primary flex flex-col justify-between p-10 text-right items-end ${className}`}>
          <div className="text-projectCard-secondary text-xs text-right">
          </div>
  
          <div className="text-right w-full">
            <div className="text-xl font-bold">
              {title.map((line) => (
                <span>{line} <br /></span>
              ))}
            </div>
  
            <div className="bg-projectCard-secondary h-px my-5"></div>
  
            <div className="font-semibold mb-2 text-xs">
              {author}
            </div>
  
            <div className="text-projectCard-secondary text-xs">
              {date}
            </div>
          </div>
        </div>
      </Link>
    )
  } else if (size === "sm") {
    return (
      <Link href={link}>
        <div className={`w-[300px] h-[424px] bg-projectCard text-projectCard-primary flex flex-col justify-between p-10 text-right items-end ${className}`}>
          <div className="text-projectCard-secondary text-xs text-right">
            {subtitle.map((line) => (
              <span>{line} <br /></span>
            ))}
          </div>
  
          <div className="text-right w-full">
            <div className="text-2xl font-bold">
              {title.map((line) => (
                <span>{line} <br /></span>
              ))}
            </div>
  
            <div className="bg-projectCard-secondary h-px my-5"></div>
  
            <div className="font-semibold mb-2 text-xs">
              {author}
            </div>
  
            <div className="text-projectCard-secondary text-xs">
              {date}
            </div>
          </div>
        </div>
      </Link>
    )
  } else if (size === "md") {
    return (
      <Link href={link}>
        <div className={`md:w-[450px] w-[300px] md:h-[636.3px] h-[424px] bg-projectCard text-projectCard-primary flex flex-col justify-between md:p-12 p-10 text-right items-end ${className}`}>
          <div className="text-projectCard-secondary text-xs text-right">
            {subtitle.map((line) => (
              <span>{line} <br /></span>
            ))}
          </div>
  
          <div className="text-right w-full">
            <div className="md:text-4xl text-2xl font-bold">
              {title.map((line) => (
                <span>{line} <br /></span>
              ))}
            </div>
  
            <div className="bg-projectCard-secondary h-px md:my-8 my-5"></div>
  
            <div className="font-semibold mb-2 md:text-sm text-xs">
              {author}
            </div>
  
            <div className="text-projectCard-secondary md:text-sm text-xs">
              {date}
            </div>
          </div>
        </div>
      </Link>
    )
  } else {
    return (
      <Link href={link}>
        <div className={`md:w-[500px] w-[300px] md:h-[707px] h-[424px] bg-projectCard text-projectCard-primary flex flex-col justify-between md:p-12 p-10 text-right items-end ${className}`}>
          <div className="text-projectCard-secondary md:text-sm text-xs text-right">
            {subtitle.map((line) => (
              <span>{line} <br /></span>
            ))}
          </div>
  
          <div className="text-right w-full">
            <div className="md:text-4xl text-2xl font-bold">
              {title.map((line) => (
                <span>{line} <br /></span>
              ))}
            </div>
  
            <div className="bg-projectCard-secondary h-px md:my-8 my-5"></div>
  
            <div className="font-semibold mb-2 md:text-sm text-xs">
              {author}
            </div>
  
            <div className="text-projectCard-secondary md:text-sm text-xs">
              {date}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default PortfolioCard