import React from 'react'
import { Button } from './ui/button'
import { FaLocationArrow } from "react-icons/fa6"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="text-center mt-40 max-md:mt-20">
      <div className="text-5xl max-md:text-2xl font-bold">Making Ideas a Reality <br /> Through Practical Design</div>
      <div className="text-2xl max-md:text-base font-semibold text-secondary leading-tight mx-auto my-5">
        I&apos;m Cameron, a full time computer science student <br className='max-sm:hidden' />
        at the University of Edinburgh, and in my free time I <br className='max-sm:hidden' />
        like to build random and interesting little things, <br className='max-sm:hidden' />
        usually about whatever I&apos;m interested in at the time. <br className='max-sm:hidden' />
      </div>
      <div className="sm:block hidden">
        <Link href="#portfolio">
          <Button size="xl2" className="mt-5">See my Work <FaLocationArrow className="ml-3 -mr-1" /></Button>
        </Link>
      </div>
      <div className="sm:hidden block">
        <Link href="#portfolio">
          <Button size="lg" className="mt-5">See my Work <FaLocationArrow className="ml-3 -mr-1" /></Button>
        </Link>
      </div>
    </section>
  )
}

export default Hero