import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return isVisible ? (
    <button type="button" className='scroll-top' onClick={scrollToTop} aria-label='Scroll to top'>
      <ArrowUpwardIcon fontSize='large' />
    </button>
  ) : null
}

export default ScrollToTop