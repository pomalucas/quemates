import {useState} from "react"

const ItemCount = ({stock,onAdd}) => {
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        if(contador < stock)
        setContador(contador + 1)
    }

    const restar = () => {
        if(contador > 1)
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }

    const handleConfirmar = () => {
        onAdd(contador)
    }

    return (
        <div>
            <p className="count">Stock : {stock}</p>
            <p>Cantidad seleccionada : {contador}</p>
            <button onClick={handleClick}>aumentar</button>
            <button onClick={handleConfirmar}>confirmar</button>
            <button onClick={resetear}>resetear</button>
            <button onClick={restar}>restar</button>
        </div>
    );
}

export default ItemCount