import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { ItemDetail } from './ItemDetail';
import "./itemdetailcontainer.css"
import { query, getDocs, getDoc, doc, collection, where } from "firebase/firestore"
import { db } from './Firebase';
import Loader from './Loader';

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const q = query(collection(db, "productos"), where("id", "==", id))

        getDocs(q)
            .then((resp) => setProducto(resp.docs.map(p => ({ producto: p.data() }))))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))

        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
            .then((res) => setProducto(res.data()))
    }, [id])

    if (loading) {
        return <Loader />
    } else {
        return (
            <div className='itemdetailcontainer'>
                <ItemDetail producto={producto} />
            </div>
        )
    }
}
