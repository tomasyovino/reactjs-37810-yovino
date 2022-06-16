import { Link } from "react-router-dom";
import { ProductsContainer, MainProductsContainer, MenuItemContainer, MenuItem } from "./StyledComponents";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <MainProductsContainer>
            {
                items.length > 0
                ?    <MenuItemContainer>
                        <Link to="/order-now" className='Link'><MenuItem>Todo</MenuItem></Link>
                        <Link to="/category/MbCjgT1qxGT28TQHIDxs" className='Link'><MenuItem>Pizzas</MenuItem></Link>
                        <Link to="/category/WuwoOSINFxcXZiKm3R1x" className='Link'><MenuItem>Empanadas</MenuItem></Link>
                        <Link to="/category/IBAgLLxufajouncaOhge" className='Link'><MenuItem>Bebidas</MenuItem></Link>
                    </MenuItemContainer>
                : <></>
            }
            <ProductsContainer>
            {
                items.length > 0
                ? items.map((item) => <Item key={item.id} item={item} />)
                : <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader2"></div>
                  </div>
            }
            </ProductsContainer>
        </MainProductsContainer>
    );
}

export default ItemList;