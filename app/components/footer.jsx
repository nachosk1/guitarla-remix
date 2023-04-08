import Navegation from "./navegation"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container content">
                <Navegation/>
                <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
