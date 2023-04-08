import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegation from './navegation'

const Header = () => {
  return (
    <header className='header'>
        <div className='container bar'>
            <Link to='/'>
                <img src={logo} alt="Imagen logo" className='logo'/>
            </Link>
            <Navegation/>
        </div>
      
    </header>
  )
}

export default Header
