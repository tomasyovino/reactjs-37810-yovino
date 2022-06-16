import { InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, BorderProductContainer, Title, Image, Info, Icon } from './StyledComponents';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return(
        <ProductContainer>
            <BorderProductContainer>
            <Title>{item.name}</Title>
            <Image src={item.image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {item.cost}</strong>
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link className='Link InfoOutlinedLink' to={`/item/${item.id}`}><InfoOutlined /><strong>Detalles</strong></Link>
                </Icon>
            </Info>
            </BorderProductContainer>
        </ProductContainer>
    );
}

export default Item;