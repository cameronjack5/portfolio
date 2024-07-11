import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data"

const PortfolioCarousel = () => {
  return (
    <Carousel className="xl:w-[1380px] lg:w-[930px] md:w-[620px] sm:w-[310px] w-[250px] mx-auto">
      <CarouselContent className="">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 xl:max-w-[450px] max-w-[300px]">
            <div className="xl:block hidden">
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
            </div>
            <div className="xl:hidden block">
              <div className="sm:block hidden">
                <PortfolioCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  author={project.author}
                  date={project.date}
                  id={project.id}
                  link={project.link}
                  size="sm"
                />
              </div>
              <div className="sm:hidden block">
                <PortfolioCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  author={project.author}
                  date={project.date}
                  id={project.id}
                  link={project.link}
                  size="xs"
                />
              </div>
            </div>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PortfolioCarousel