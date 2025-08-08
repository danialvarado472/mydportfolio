import React, { useRef, useEffect, useState } from 'react'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = ({ language }) => {
  if (!skills.length) return null

  
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
    <section className='section skills' id='skills'>
      <h2
        ref={titleRef}
        className={`section__title ${animate ? 'fade-in-up delay-1' : ''}`}
      >
        {language === 'es' ? 'Habilidades' : 'Skills'}
      </h2>
      <div className='skills__list'>
        {skills.map(({ name, icon: Icon }) => (
          <div key={uniqid()} className='skills__icon' title={name}>
            <Icon />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
