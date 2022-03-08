import {useState} from "react"

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)

    const stock = 2;

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

    return (
        <div>
            <p className="count">Mi stock es {stock}</p>
            <p>Mi contador actual : {contador}</p>
            <button onClick={handleClick}>aumentar</button>
            <button onClick={resetear}>resetear</button>
            <button onClick={restar}>restar</button>
        </div>
    );
}

export default ItemCount