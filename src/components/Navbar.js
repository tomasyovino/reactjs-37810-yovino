// import navlist from '../Assets/Images/nav-list.png';
import logo from '../Assets/Images/logo.png';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    return (
        <header className="header">
            <nav className='navbar'>
                <div className='left-container'>
                    <BurgerMenu />
                    <a id="order-now" href="#">PEDIR YA</a>
                </div>
                <a><img src={logo} alt='Logo' /></a>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Navbar;