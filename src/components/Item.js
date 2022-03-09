import React from 'react'

const Item = () => {

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
        <li>
            <div>
                <h3>{productos.nombre}</h3>
                <p>{productos.descripcion}</p>
                <p>{productos.precio}</p>
            </div>
        </li>
    )
}

export default Item