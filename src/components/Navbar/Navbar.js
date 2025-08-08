import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { LanguageContext } from '../../contexts/LanguageContext'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const LanguageSwitch = ({ language, toggleLanguage }) => (
  <>
    <input
      type="checkbox"
      id="language-switch"
      onChange={toggleLanguage}
      checked={language === 'en'}
      aria-checked={language === 'en'}
      style={{ display: 'none' }}
    />
    <label className="switch" htmlFor="language-switch" aria-label="Switch language">
      <span className="slider" />
      <span className="switch-label">{language === 'es' ? 'ES' : 'EN'}</span>
    </label>
  </>
)

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const { language, toggleLanguage } = useContext(LanguageContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className="center nav">
      <ul style={{ display: showNavList ? 'flex' : null }} className="nav__list">
        {projects.length ? (
          <li className="nav__list-item">
            <a href="#projects" onClick={toggleNavList} className="link link--nav">
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a href="#skills" onClick={toggleNavList} className="link link--nav">
              {language === 'es' ? 'Habilidades' : 'Skills'}
            </a>
          </li>
        ) : null}

        <li className="nav__list-item">
          <a href="#fotos" onClick={toggleNavList} className="link link--nav">
            {language === 'es' ? 'Galería' : 'Gallery'}
          </a>
        </li>

        {contact.email ? (
          <li className="nav__list-item">
            <a href="#contact" onClick={toggleNavList} className="link link--nav">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
