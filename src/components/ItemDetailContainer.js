import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const producto = {
    nombre: "Mate imperial",
    descripcion: "Mate Premium Alpaca Cincelada Uruguayo Camionero Premium",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_921080-MLA47381906809_092021-F.webp",
    precio: 3500,
    tipo: "Calabaza Alpaca",
    stock: 5
}

const productosPromesa = new Promise((resolve,rej)=>{
    setTimeout(()=>{
        resolve(producto)
    },3000)
})

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const getItem = ()=> {
        return productosPromesa
    }

    useEffect(()=>{
        getItem()
        .then((data)=> setProducto(data))
        .catch((err)=> console.log(err))
    })

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer