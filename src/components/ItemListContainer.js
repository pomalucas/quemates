import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        
        const productosPromesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })

        productosPromesa
        .then((respuestaDeLaApi)=>{
            setProductos(productos)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        })
        .finally(()=>{
            setLoading(false)
        })

    })

    return (
        <section className='itemListContainer'>
            <p>La cantidad de productos es : 1</p>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </section>
    )
}

export default ItemListContainer