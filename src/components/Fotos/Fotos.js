import React, { useRef, useEffect, useState } from 'react'
import './Fotos.css'

import battleImg from '../../assets/gallery/battle.jpeg'
import loginImg from '../../assets/gallery/login.jpeg'
import profileImg from '../../assets/gallery/profile.jpeg'
import teamImg from '../../assets/gallery/team.jpeg'

const images = [
  {
    src: battleImg,
    alt: {
      es: 'Juego de Pokémon',
      en: 'Pokémon Game',
    },
    projectIndex: 1,
    id: 'pokemon',
  },
  {
    src: loginImg,
    alt: {
      es: 'Pantalla de Login',
      en: 'Login Screen',
    },
    projectIndex: 2,
    id: 'login',
  },
  {
    src: profileImg,
    alt: {
      es: 'Perfil de Usuario',
      en: 'User Profile',
    },
    projectIndex: 2,
    id: 'profile',
  },
  {
    src: teamImg,
    alt: {
      es: 'Gestión de Equipos',
      en: 'Team Management',
    },
    projectIndex: 0,
    id: 'team',
  },
]

const Fotos = ({ language }) => {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (projectIndex) => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.project')
      if (cards[projectIndex]) {
        cards[projectIndex].scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = carouselRef.current
    if (container) {
      container.scrollTo({
        left: container.clientWidth * currentIndex,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  const sectionTitle = language === 'es' ? 'Galería' : 'Gallery'
  const prevLabel = language === 'es' ? 'Imagen anterior' : 'Previous image'
  const nextLabel = language === 'es' ? 'Siguiente imagen' : 'Next image'

  return (
    <section className="section fotos" id="fotos">
      <h2 className="section__title">{sectionTitle}</h2>

      <div className="fotos__wrapper">
        <button
          type="button"
          className="fotos__arrow fotos__arrow--left"
          onClick={prevImage}
          aria-label={prevLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="fotos__carousel" ref={carouselRef}>
          {images.map(({ src, alt, projectIndex, id }, index) => (
            <button
              key={id}
              type="button"
              className={`fotos__item ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => handleClick(projectIndex)}
            >
              <img className="fotos__image" src={src} alt={alt[language]} />
              <span className="fotos__caption">{alt[language]}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="fotos__arrow fotos__arrow--right"
          onClick={nextImage}
          aria-label={nextLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Fotos
