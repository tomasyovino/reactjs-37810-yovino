import MenuIcon from '@mui/icons-material/Menu';

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
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Hacer pedido</a></li>
                    <li><a href="#">Nuestra historia</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Contactanos</a></li>
                </ul>
            </div>
        </>
    );
}

export default BurgerMenu;