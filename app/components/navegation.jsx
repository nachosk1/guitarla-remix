import { Link, useLocation } from '@remix-run/react'
import image from '../../public/img/carrito.png'

const Navegation = () => {
    const location = useLocation()
    return (
        <nav className='navegation'>
            <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link
                to='/us'
                className={location.pathname === '/us' ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to='/guitars'
                className={location.pathname === '/guitars' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
            <Link
                to='/shop'
            ><img src={image} alt="carrito de compras" className='logo-shop'/></Link>
        </nav>
    )
}

export default Navegation
