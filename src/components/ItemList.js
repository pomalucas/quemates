import React from 'react'
import Item from './Item'

const ItemList = () => {

    let productos = [
        {
            id: 1,
            nombre: "Mate Imperial",
            precio: 3500
        },
        {
            id: 2,
            nombre: "Mate Alpaca",
            precio: 4000
        },
    ]

    return (
        <ul className='itemList'>
            {
                productos.map(producto =>{
                    return <Item producto ={producto} />
                })
            }
        </ul>   
    )
}

export default ItemList