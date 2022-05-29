import ItemCount from "./ItemCount";
import { Flex, DetailContainer, BuyingDetailContainer, ImageDetail, InfoContainer, HeadDetailInfoContainer, TitleDetail, Desc, Price } from "./StyledComponents";

const ItemDetail = ({item}) => {
    
    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty + " productos.");
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
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </BuyingDetailContainer>
                </InfoContainer>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;