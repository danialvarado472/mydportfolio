import './Footer.css'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { footer } from '../../portfolio'

const Footer = () => {
  const { language } = useContext(LanguageContext)

  return (
    <footer className='footer'>
      <a
        href='https://github.com/danialvarado472'
        className='link footer__link'
      >
        {footer.text[language]}
      </a>
    </footer>
  )
}

export default Footer
