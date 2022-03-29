import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import ItemList from "./ItemList"
import { getDocs, collection , query , where } from "firebase/firestore"
import Loader from "./Loader"

//getDocs - getDoc - collection - addDoc - updateDoc

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        
        if(!id){

            const productoCollection = collection(db, "productos")
            const documentos = getDocs(productoCollection)
    
            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))

        } else {

            const productoCollection = collection(db, "productos")
            const miFiltro = query(productoCollection,where("categoria","==",id))
            const documentos = getDocs(miFiltro)

            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))
            
        }


    }, [id])


    return (
        <>
            <p>{loading ? <Loader /> : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer