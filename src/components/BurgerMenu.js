import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const BurgerMenu = () => {   
    const iconMenu = () => {
        const Menu = document.querySelector("#menu");
        Menu.classList.toggle("active");
        document.body.classList.toggle("opacity")
    }

    return (
        <>
            <MenuIcon onClick={iconMenu} id="icon-menu" />
            <div className='cont-menu active' id="menu">
                <ul>
                    <li><Link to="/" className='Link'><p>Inicio</p></Link></li>
                    <li><Link to="/" className='Link'><p>Hacer pedido</p></Link></li>
                    <li><Link to="/" className='Link'><p>Nuestra historia</p></Link></li>
                    <li><Link to="/" className='Link'><p>Preguntas Frecuentes</p></Link></li>
                    <li><Link to="/" className='Link'><p>Contactanos</p></Link></li>
                </ul>
            </div>
        </>
    );
}

export default BurgerMenu;