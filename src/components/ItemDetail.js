import React, { useContext } from 'react'
import { cartContext } from './CartContext'
import { ItemCount } from './ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./itemdetail.css"

export const ItemDetail = ({ producto }) => {

    const { addItem } = useContext(cartContext)

    const notify = (cantidadElegida) => toast(`la cantidad añadida al carrito es ${cantidadElegida}`);

    const handleAdd = (cantidadElegida = 1) => {

        addItem(producto, cantidadElegida)
        notify(cantidadElegida)
    }

    return (
        <>
            <div className='itemdetail'>
                {
                    producto ?
                        <>
                            <img src={producto.imagen} />
                            <div className='itemdetail-producto'>
                                <h2 className='itemdetail-producto-nombre'>{producto.nombre}</h2>
                                <p className='itemdetail-producto-precio'>$ {producto.precio}</p>
                                <p className='itemdetail-producto-descripcion'>{producto.descripcion}</p>
                                <p className='itemdetail-producto-stock'>Stock: {producto.stock}</p>
                                <ItemCount initial={1} stock={producto.stock} onAdd={handleAdd} />
                            </div>
                        </>
                        :
                        <span>Cargando...</span>
                }
            </div>
            <div>
                <ToastContainer />
            </div>
        </>

    )
}