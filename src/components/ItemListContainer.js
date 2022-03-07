import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const onAdd = () => {
        console.log("Agregado al carrito");
    }

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer