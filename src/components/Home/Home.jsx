import React from 'react'
import Hero from '../../assets/Hero/Hero'
import Skill from '../../Skill/Skill'
import Projects from '../../projects/Projects'
import Contact from '../../Contact/Contact'
import CTA from '../../NewsLetter/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <Skill />
      <Projects />
      <Contact />
      <CTA />
    </div>
  )
}
