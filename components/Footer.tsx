"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "./ui/switch"
import Link from "next/link"


const Footer = () => {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="flex justify-between text-center text-sm max-md:flex-col bottom-0 items-center">
      <div className="flex-1 font-semibold order-1 max-md:order-2 text-left max-md:text-center">
        <a href="/privacy" className="pr-5">Privacy Policy</a>
        <a href="/bugreport" className="pl-5">Report a Bug</a>
      </div>

      <div className="flex-1 text-secondary font-medium order-2 max-md:order-3">
        Designed & Built by <Link href="https://www.cameronjack.me">Cameron Jack</Link> 2024.
      </div>

      <div className="flex-1 text-right order-3 max-md:order-1">
        <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
      </div>
    </footer>
  )
}

export default Footer