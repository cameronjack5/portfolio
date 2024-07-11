import PortfolioCard from '@/components/PortfolioCard'
import { projects } from '@/data'
import React from 'react'

const Projects = () => {
  return (
    <div className="my-40 w-[85%] flex flex-wrap gap-5 justify-center m-auto">
      {projects.map((project, index) => (
        <PortfolioCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          author={project.author}
          date={project.date}
          id={project.id}
          link={project.link}
          size="md"
        />
      ))}
    </div>
  )
}

export default Projects