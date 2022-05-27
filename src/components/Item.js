import { InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Title, Image, Info, Icon } from './StyledComponents';

const Item = ({item}) => {
    return(
        <ProductContainer>
            <Title>{item.name}</Title>
            <Image src={item.image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {item.cost}</strong>
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined />Detalles
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;