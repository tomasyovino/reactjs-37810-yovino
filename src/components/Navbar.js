import logo from '../Assets/Images/logo.png';
import CartWidget from './CartWidget';
import { AppBar } from "@material-ui/core";
import { Wrapper, Left, Center, Right } from './StyledComponents';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    return (
        <AppBar position='relative' className='AppBar'>
            <Wrapper>
                <Left>
                    <BurgerMenu />
                    <a id="order-now" href="#">PEDIR YA</a>
                </Left>
                <Center>
                    <img src={logo} alt='Logo' />
                </Center>
                <Right>
                    <CartWidget />
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default Navbar;