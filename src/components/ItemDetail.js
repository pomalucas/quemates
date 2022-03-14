import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <li>
            <div>
                <img src={producto.img} />
            </div>
            <div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <p>{producto.tipo}</p>
                <p>{producto.stock}</p>
            </div>
        </li> 
    )
}

export default ItemDetail