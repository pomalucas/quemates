import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import "./itemlistcontainer.css"
import { getDocs, query, collection, where } from "firebase/firestore"
import { db } from './Firebase';
import { toast } from "react-toastify"
import Loader from './Loader';

export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {

        if (id) {

            const q = query(collection(db, "productos"), where("categoria", "==", id))

            getDocs(q)
                .then((resp) => setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id }))))
                .catch(error => toast.error("Error al obtener los productos"))

        } else {

            getDocs(collection(db, "productos"))
                .then((resp) => setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id }))))
                .catch(error => toast.error("Error al obtener los productos"))
                .finally(() => setLoading(false))

        }
    }, [id])

    return (
        <section className='itemlistcontainer'>
            <h2>
                {greeting}
            </h2>
            <p>{loading ? <Loader /> : "Tenemos estos productos para vos!"}</p>
            <ItemList productos={productos} />
        </section>
    )
}