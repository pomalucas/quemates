import React from 'react'

export const Item = ({producto}) => {
    console.log(producto)
    return (
        <li>
            <div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
            </div>
        </li>
    )
}

export default Item