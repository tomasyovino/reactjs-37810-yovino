import { InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Title, Image, Info, Icon } from './StyledComponents';
import { Link } from 'react-router-dom';

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
                    <InfoOutlined /><Link to={`/item/${item.id}`}>Detalles</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;