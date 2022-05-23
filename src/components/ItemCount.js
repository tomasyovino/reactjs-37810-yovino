import { useState } from 'react';

const Producto = (props) => {
    const [valoraciones, setValoraciones] = useState(0);

    const increment = () => {
        if (valoraciones < 5) setValoraciones(valoraciones+1)
    }

    const decrease = () => {
        if (valoraciones > 0) setValoraciones(valoraciones-1)
    }

    return (
        <div className='product-container'>
            <h3>Producto</h3>
            <div className='product-counter'>
            <button className='counter-button' onClick={decrease}>-</button>
            <p className='counter-p'>{valoraciones}</p>
            <button className='counter-button' onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Producto;