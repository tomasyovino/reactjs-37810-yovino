import logo from '../Assets/Images/logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Wrapper, Left, Center, Right, MenuItem } from './StyledComponents';
import BurgerMenu from './BurgerMenu';
import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <AppBar position='relative' className='AppBar'>
            <Wrapper>
                <Left>
                    <BurgerMenu />
                    {/* <Link to="/" className='Link'><p id="order-now">PEDIR YA</p></Link> */}
                    <Link to="/category/MbCjgT1qxGT28TQHIDxs" className='Link'><MenuItem>Pizzas</MenuItem></Link> {/* Enlaces temporales... Reposicionar y cambiar en un futuro */}
                    <Link to="/category/WuwoOSINFxcXZiKm3R1x" className='Link'><MenuItem>Empanadas</MenuItem></Link> {/* Enlaces temporales... Reposicionar y cambiar en un futuro */}
                </Left>
                <Center>
                    <Link to="/" className='Link'><img src={logo} alt='Logo' /></Link>
                </Center>
                <Right>
                    <SearchForm />
                    <Link to="/cart" className='Link'><CartWidget /></Link>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default Navbar;