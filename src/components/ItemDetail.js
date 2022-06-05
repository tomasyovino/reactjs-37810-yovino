import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Flex, DetailContainer, BuyingDetailContainer, ImageDetail, InfoContainer, HeadDetailInfoContainer, TitleDetail, Desc, Price } from "./StyledComponents";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty + " productos.");
        setItemCount(qty);
    }

    return(
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <InfoContainer>
                    <HeadDetailInfoContainer>
                        <ImageDetail src={item.image[0]} />
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
                            : <Link to='/cart' className='Link'><Button variant="contained" color="secondary">CheckOut</Button></Link>
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