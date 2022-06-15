import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <ProductAmountContainer>
        <Button variant="text" onClick={increment}><Add /></Button>
        <ProductAmount>{count}</ProductAmount>
        <Button variant="text" onClick={decrease}><Remove /></Button>
        {
            stock && count
            ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Añadir al Carrito</Button>
            : <Button variant="contained" disabled>Añadir al Carrito</Button>
        }
        
        </ProductAmountContainer>
    );
}

export default ItemCount;