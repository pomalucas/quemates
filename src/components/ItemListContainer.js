import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
        
        const promesa = new Promise((res, rej) => {
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

    },[id])

    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer