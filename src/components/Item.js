import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"

export const Item = ({ producto }) => {
  const { productos, id } = producto;

  return (
    <li className='item'>
      <Link to={`/item/${id}`} >
        <div className='item__top'>
          <img className='item__img' src={productos.imagen} />
        </div>
        <div className='item__bottom'>
          <h3>{productos.nombre}</h3>
          <p>{productos.descripcion}</p>
          <p className='item__price'>$ {productos.precio}</p>
        </div>
      </Link>
    </li>
  )
}