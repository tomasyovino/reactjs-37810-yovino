import navlist from '../Assets/Images/nav-list.png';
import logo from '../Assets/Images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const Navbar = () => {
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={navlist} alt='Nav-list' />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a className="dropdown-item text-white" href="#">Inicio</a></li>
                        <li><a className="dropdown-item text-white" href="#">Hacer pedido</a></li>
                        <li><a className="dropdown-item text-white" href="#">Nuestra historia</a></li>
                        <li><a className="dropdown-item text-white" href="#">Preguntas Frecuentes</a></li>
                        <li><a className="dropdown-item text-white" href="#">Contactanos</a></li>
                    </ul>
                    </li>
                </ul>
                <a className="navbar-brand text-white" href="#">¡Pedí Ahora!</a>
                </div>
            </div>
            <a className="navbar-brand" href="#"><img src={logo} alt='Logo' /></a>
            </nav>
        </header>
    );
}

export default Navbar;