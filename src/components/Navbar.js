import logo from '../assets/images/logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Wrapper, Left, Center, Right } from './StyledComponents';
import BurgerMenu from './BurgerMenu';
import SearchForm from './SearchForm';

const Navbar = () => {

    return (
        <AppBar position='relative' className='AppBar'>
            <Wrapper>
                <Left>
                    <BurgerMenu />
                    <Link to="/order-now" className='Link'><p id="order-now">PEDIR AHORA</p></Link>
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