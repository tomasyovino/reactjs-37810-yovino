import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ImageCart, Details, ProductDetail, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, InfoCart, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from "./StyledComponents";
import FormatNumber from "../utils/FormatNumber";


const Cart = () => {
    const test = useContext(CartContext);

    return(
        <WrapperCart>
            <TitleCart>TU CARRITO</TitleCart>
            <Top>
                <Link to='/'><TopButton>SEGUIR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>ELIMINAR PRODUCTOS</TopButton>
                    : <TopText>Tu carrito está vacío</TopText>
                }
            </Top>
            <ContentCart>
                <Bottom>
                    <InfoCart>
                        {
                            test.cartList.length > 0 &&
                                test.cartList.map(item => 
                                <Product key={item.idItem}>
                                <ProductDetail>
                                    <ImageCart src={item.imgItem} />
                                    <Details>
                                    <span>
                                        <b>Producto:</b> {item.nameItem}
                                    </span>
                                    <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>ELIMINAR</TopButton>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <ProductAmount>{item.qtyItem} producto(s)</ProductAmount>
                                    /
                                    <ProductAmount>$ {item.costItem} u</ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                                </PriceDetail>
                                </Product>
                                )
                        }
                    </InfoCart>
                    {
                        test.cartList.length > 0 &&
                            <Summary>
                                <SummaryTitle>PEDIDO</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Impuestos</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Descuento de impuestos</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                                </SummaryItem>
                                <Button>COMPRAR</Button>
                            </Summary>
                    }
                </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;