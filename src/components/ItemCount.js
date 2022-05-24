import { useState } from 'react';

const Producto = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < (stock)) setCount(count+1);
    }

    const decrease = () => {
        if (count > (initial)) setCount(count-1);
    }

    const onAdd = () => {
        alert("Agregaste: " + count + " productos");
    }

    return (
        <div className='product-container'>
            <h3>Producto</h3>
            <div className='product-counter'>
            <button className='counter-button' onClick={decrease}>-</button>
            <p className='counter-p'>{count}</p>
            <button className='counter-button' onClick={increment}>+</button>
            </div>
            {
                stock
                    ? <button className="btn-addToCart" onClick={onAdd}>Agregar al carrito</button>
                    : <button className="btn-addToCart disabled" disabled>Agregar al carrito</button>
            }
        </div>
    );
}

export default Producto;