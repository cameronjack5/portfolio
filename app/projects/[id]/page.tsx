import projects from '@/projects'
import Link from 'next/link'
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
            <div className="flex mt-4">
              <div className="w-[80px] min-w-[80px] max-sm:min-w-[40px] max-sm:w-[40px]"> [{bib.id}] </div>
              {
                  bib.type === "book" 
                  ? <div> 
                      {bib.authors.map((author, index) => (
                        <span>{author.lastName}, {author.firstName}{(bib.authors.length > 1 && index < bib.authors.length-1) && <span>; </span> }</span>
                      ))}.
                      <i> {bib.title}</i>,
                      <span> {bib.pages}.</span>
                      {bib.edition && <span>{bib.edition}.</span>}
                      <span> {bib.publisher}</span>,
                      <span> {bib.year}</span>.
                      <span> ISBN {bib.isbn}</span>.
                    </div>
                  : bib.type === "website"
                    ? <div> 
                        {bib.authors.map((author, index) => (
                          <span>{author.lastName}, {author.firstName}{(bib.authors.length > 1 && index < bib.authors.length-1) && <span>; </span> }</span>
                        ))}.
                        <span> "{bib.title}"</span>.
                        <i> {bib.website}</i>.
                        <span> <Link className="underline" href={bib.url}>{bib.url}</Link></span>
                        <span> (accessed on: {bib.dateAccessed})</span>. 
                      </div>
                    : bib.type === "journal"
                      ? <div> 
                          {bib.authors.map((author, index) => (
                            <span>{author.lastName}, {author.firstName}{(bib.authors.length > 1 && index < bib.authors.length-1) && <span>; </span> }</span>
                          ))}.
                          <span> "{bib.title}."</span>
                          <i> {bib.journal}</i>,
                          <span> vol. {bib.volume},</span>
                          <span> no. {bib.number}</span>
                          <span> ({bib.year}).</span>
                          <span> DOI: {bib.doi}.</span>
                          {
                            bib.onlineInfo && (
                              <span> <Link className="underline" href={bib.onlineInfo.url}>{bib.onlineInfo.url}</Link> (accessed on: {bib.onlineInfo.dateAccessed})</span>
                            )
                          }
                        </div>
                      : bib.type === "news"
                        ? <div> 
                            {bib.authors.map((author, index) => (
                              <span>{author.lastName}, {author.firstName}{(bib.authors.length > 1 && index < bib.authors.length-1) && <span>; </span> }</span>
                            ))}.
                            <span> "{bib.title}."</span>
                            <i> {bib.organisation}</i>,
                            <span> {bib.date}</span>
                            {
                              bib.pages && (
                                <span>, {bib.pages}</span>
                              )
                            }
                            {
                              bib.onlineInfo && (
                                <span>, <Link className="underline" href={bib.onlineInfo.url}>{bib.onlineInfo.url}</Link> (accessed on: {bib.onlineInfo.dateAccessed})</span>
                              )
                            }
                          </div>
                        : <div> Error Getting Reference. </div>
              }
            </div>
          ))}
        </div>

        
      </div>
    </article>
  )
}

export default Page