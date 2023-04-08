import { Link, useLocation } from '@remix-run/react'

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
                to='/store'
                className={location.pathname === '/store' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
        </nav>
    )
}

export default Navegation
