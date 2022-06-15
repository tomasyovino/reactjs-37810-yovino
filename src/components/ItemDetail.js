import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Flex, DetailContainer, BuyingDetailContainer, ImageDetail, InfoContainer, HeadDetailInfoContainer, TitleDetail, Desc, Price } from "./StyledComponents";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const detailContext = useContext(CartContext);

    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty + " productos.");
        setItemCount(qty);
        detailContext.addToCart(item, qty);
    }

    return(
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <InfoContainer>
                    <HeadDetailInfoContainer>
                        <ImageDetail src={item.image} />
                        <TitleDetail>{item.name}</TitleDetail>
                    </HeadDetailInfoContainer>
                    <Desc>{item.description}</Desc>
                    <BuyingDetailContainer>
                        <Flex>
                            <Price>$ {item.cost}</Price>
                            <Desc>{item.stock} unidades en stock</Desc>
                        </Flex>
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link to='/cart' className='Link'><Button variant="contained" color="secondary">Carrito</Button></Link>
                        }
                    </BuyingDetailContainer>
                </InfoContainer>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;