import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)

    const agregarProducto = (item,cantidad) => {
        setCarrito([...carrito,{...item,cantidad}])
        setTotal(total + item.precio * cantidad)
        setCantidadActual(cantidadActual + cantidad)

    }

    const borrarProducto = id => {

    }

    const valorDelProvider = {
        carrito ,
        borrarProducto,
        agregarProducto,
        total
    }

    return (
        <Provider value={valorDelProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider