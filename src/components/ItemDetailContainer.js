import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';

const producto = {
    nombre: "Mate imperial",
    descripcion: "Mate Premium Alpaca Cincelada Uruguayo Camionero Premium",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_921080-MLA47381906809_092021-F.webp",
    precio: 3500,
    tipo: "Calabaza Alpaca",
    stock: 5
}

const productosPromesa = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(producto)
    }, 3000)
})

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const getItem = () => {
        return productosPromesa
    }

    const [seleccionado, setSeleccionado] = useState(false)

    const onAdd = (unidadSeleccionada) => {
        console.log("On Add desde el ItemDetailContainer")
        if (unidadSeleccionada != undefined) {
            setSeleccionado(unidadSeleccionada)
        }
    }

    useEffect(() => {
        getItem()
            .then((data) => setProducto(data))
            .catch((err) => console.log(err))
    })

    return (
        <div>
            <ItemDetail producto={producto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <p>{seleccionado ? "ya se seleccionó algo!" : "No se eligió ninguna cantidad"}</p>
            {seleccionado ? <Link to="/CartWidget">carrito</Link> : null}
        </div>

    )
}

export default ItemDetailContainer