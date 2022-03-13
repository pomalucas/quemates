import React from 'react'
import Item from './Item'

export const ItemList = ({productos}) => {

    return (
        <ul>
            {
                productos.map((producto, index) =>{
                    return <Item key={index} producto ={producto} />
                })
            }
        </ul>   
    )
}

export default ItemList