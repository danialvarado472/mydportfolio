import React, { useRef, useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ language }) => {
  if (!projects.length) return null

  const titleRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.5, 
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id='projects' className='section projects'>
      <h2
        ref={titleRef}
        className={`section__title ${animate ? 'fade-in-up delay-1' : ''}`}
      >
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} language={language} />
        ))}
      </div>
    </section>
  )
}

export default Projects
