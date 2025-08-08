import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = ({ language }) => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>
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
