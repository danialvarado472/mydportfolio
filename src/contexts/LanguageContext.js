import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es') // español por defecto

  useEffect(() => {
    const storedLang = localStorage.getItem('language')
    if (storedLang) setLanguage(storedLang)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LanguageProvider, LanguageContext }
