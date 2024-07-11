import React from 'react'
import Title from './Title'
import SkillsBento from './SkillsBento'

const SkillsAndExperience = () => {
  return (
    <section id="skills-and-experience" className="flex flex-col">
      <Title title="What I Can Do" subtitle="Skills & Experience" />
      <SkillsBento />
    </section>
  )
}

export default SkillsAndExperience