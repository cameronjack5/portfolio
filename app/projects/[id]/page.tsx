import projects from '@/projects'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  const project = projects.project_template
  return (
    <article className="mt-40 max-w-[800px] lg:ml-[20%] md:mr-auto m-5">
      <div className="flex flex-col gap-2 mb-16">
        <div className="font-medium text-secondary text-base -mb-2">
          {project.date}
        </div>

        <div className="text-5xl font-bold">
          {project.title.map((line) => (
            <span>{line} </span>
          ))}
        </div>

        <div className="font-semibold text-secondary text-lg">
          By {project.author}
        </div>

      </div>

      <div className="md:text-lg font-medium leading-snug">
        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Abstract</div>
        {project.text.abstract.map((line) => (
          <span>{line}<br /><br /></span>
        ))}
        <br /><br />
        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Introduction</div>
        {project.text.introduction.map((line) => (
          <span>{line}<br /><br /></span>
        ))}
        <br /><br />
        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Main Article</div>
        {project.text.main.map((line) => (
          <span>{line}<br /><br /></span>
        ))}
        <br /><br />
        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b">Conclusion</div>
        {project.text.conclusion.map((line) => (
          <span>{line}<br /><br /></span>
        ))}
        <br /><br />
        <div className="text-primary font-semibold">Written by {project.author}</div>
        <div className="text-secondary">{project.date}</div>

        <div className="text-2xl font-bold pb-3 mb-3 border-projectCard-secondary border-b mt-20">Bibliography</div>
        <div className="text-base">
          {project.bibliography.map((bib) => (
            <div className="flex">
              <div className="w-[80px]"> [{bib.id}] </div>
              <div>
                {bib.author}. <span className="italic">{bib.source}.</span> {bib.copyright}. Accessed on: {bib.accessedOn}.
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </article>
  )
}

export default Page