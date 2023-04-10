import {
    Meta,
    Links,
    Outlet,
    Scripts,  //permite la recarga sea mas rapida
    LiveReload, //permite hacer el refresh sin recargar la pagina
    useCatch,
    Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'


export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLa - Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    )
}

export function links(){
    return[
        //siempre va primero el normalice
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet/>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>

                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/* Manejo de Errores */
export function CatchBoundary(){
    const error = useCatch()
    return(
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-link' to="/">Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return(
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-link' to="/">Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}