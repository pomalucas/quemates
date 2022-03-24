import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import ItemList from "./ItemList"
import {getDocs , collection} from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {

        const productoCollection = collection(db, "productos")
        const documentos = getDocs(productoCollection)

        documentos
            .then((respuesta) => {

                const aux = []

                respuesta.forEach((documento) => {
                    /* console.log(documento.data())
                    console.log(documento.id) */
                    const producto = {
                        id: documento.id,
                        ...documento.data()
                    }
                    aux.push(producto)
                })

                console.log(aux)
                setProductos(aux)
            })
            .catch(() => {
                toast.error("Error al traer los productos")
            })


        /* const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                console.log(id)
                res(productos)
            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productos)
            })
            .catch((errorDeLaApi) => {
                toast.error("Error al cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            })

             */

    }, [id])


    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer