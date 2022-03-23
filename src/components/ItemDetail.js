import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '30px',
                border: '3px solid pink',
                backgroundColor: 'pink',
                borderRadius: '5px',
                padding: '10px',
            }}
        >
            <img src={item.img} alt={item.nombre} width={400} />
            <div>
                <h2>{item.nombre}</h2>
                <h3>$ {item.precio}</h3>
                {cantidad === 0 ? (
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;