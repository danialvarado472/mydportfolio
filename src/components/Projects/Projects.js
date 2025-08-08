import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ language }) => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>
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
