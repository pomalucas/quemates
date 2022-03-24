import React from 'react'
import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <ul>
            {products.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </ul>
    )
}

export default ItemList