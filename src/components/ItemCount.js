import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < (stock)) setCount(count + 1);
    }

    const decrease = () => {
        if (count > (initial)) setCount(count - 1);
    }

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <ProductAmountContainer>
        <Button variant="text" onClick={increment}><Add /></Button>
        <ProductAmount>{count}</ProductAmount>
        <Button variant="text" onClick={decrease}><Remove /></Button>
        {
            stock
            ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
            : <Button variant="contained" disabled>Add to Cart</Button>
        }
        
        </ProductAmountContainer>
    );
}

export default ItemCount;