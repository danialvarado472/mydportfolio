import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import favicon from '../../assets/favicon.png'  

const Header = () => {
  const { homepage } = header

  return (
    <header className='header center'>
      <h3 className='header__logo-wrapper'>
        <a href={homepage} className='link'>
          <img
            src={favicon}      
            alt=""
            className='header__logo'
          />
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
