import { useEffect, useState } from 'react';

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
        <div className='product-container'>
            <div className='product-counter'>
                <button className='counter-button' onClick={decrease}>-</button>
                <p className='counter-p'>{count}</p>
                <button className='counter-button' onClick={increment}>+</button>
            </div>
            {
                stock
                    ? <button className="btn-addToCart" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    : <button className="btn-addToCart disabled" disabled>Agregar al carrito</button>
            }
        </div>
    );
}

export default ItemCount;