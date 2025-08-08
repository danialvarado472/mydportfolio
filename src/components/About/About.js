import { about } from '../../portfolio'
import './About.css'
import logo from '../../assets/logo.png'

const About = ({ language }) => {
  const { name, role, description, resume } = about

  const greeting = language === 'es' ? 'Hola, soy' : 'Hi, I am'
  const fullTitle = `${greeting} ${name}.`

  return (
    <div className='about center'>
      <img src={logo} alt='' className='about__logo' />

      
      <h1 className='about__title typing-effect'>
        {greeting}{' '}
        <span className='about__name'>{name}.</span>
      </h1>

      
      {role && (
        <h2 className='about__role fade-in-up delay-1'>
          {language === 'es' ? 'Una' : 'A'} {role[language]}.
        </h2>
      )}

      
      {description && (
        <p className='about__desc'>{description[language]}</p>
      )}

      
      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span className='btn btn--outline fade-in-scale delay-2'>
              {language === 'es' ? 'Currículum' : 'Resume'}
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
