import React from 'react'
import Title from './Title'
import PortfolioCarousel from './PortfolioCarousel'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col w-full mx-auto justify-center items-center">
      <Title title="What I've Done" subtitle="Portfolio" />

      <PortfolioCarousel />

      <div className="sm:block hidden">
        <Link href="/projects">
          <Button size="xl2" className="mt-20">View More Projects <FaLocationArrow className="ml-3 -mr-1" /></Button>
        </Link>
      </div>
      <div className="sm:hidden block">
        <Link href="/projects">
          <Button size="lg" className="mt-20">View More Projects <FaLocationArrow className="ml-3 -mr-1" /></Button>
        </Link>
      </div>
      
    </section>
  )
}

export default Portfolio