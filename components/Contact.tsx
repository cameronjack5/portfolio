"use client"
import React, { useState } from 'react'
import Title from './Title'
import { FaCopy, FaGithub, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

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
      <div className="text-xl flex items-center gap-4 w-full justify-center font-medium underline">cameronjack@protonmail.com <FaCopy onClick={() => copyEmail()} className="hover:cursor-pointer" /></div>
      <div className="flex items-center justify-center mt-10 mb-40 text-5xl gap-10">
        <Link href="https://www.github.com/cameronjack5">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/cameron-jack-280a1b29a/">
          <FaLinkedin />
        </Link>
      </div>
    </section>
  )
}

export default Contact