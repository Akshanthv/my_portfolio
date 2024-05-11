import { Projects_Content } from '@/constants'
import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div id="projects" className=' w-full  '>
      <h1 className="text-[40px] md:text-[50px] text-[#000] text-start mt-10 mb-10 ml-10 md:ml-24">
        Projects
      </h1>
        <div
      className=' flex flex-col md:flex-col mt-14 items-center justify-center gap-0 '>
        {Projects_Content.map((project)=>(
          <ProjectCard
          key={project.title}
          title={project.title}
          text={project.text}
          link={project.link}
          />
        )
      )}
      
      </div>
    </div>
  )
}

export default Projects