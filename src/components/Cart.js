import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from './CartContext'
import { db } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cart.css"

export const Cart = () => {

    const { cart, total, removeItem, clear } = useContext(cartContext)

    const [UserForm, setUserForm] = useState({
        nombre: "",
        email: ""
    })

    const navigate = useNavigate()

    const { nombre, email } = UserForm

    const handleInputChange = (e) => {

        setUserForm({
            ...UserForm,
            [e.target.name]: e.target.value
        })
    }
    
    const notify = (data) => toast.success("Orden creada con éxito. Pronto nos contactaremos con usted.", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const createOrder = (e) => {
        e.preventDefault()

        const orden = {
            buyer: UserForm,
            items: cart,
            date: Date.now(),
            total
        }

        addDoc(collection(db, "ordenes"), orden)
            .then((data) => {
                notify(data)
                clear()
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='cart'>
            <h1>Carrito</h1>
            {
                cart.length > 0 ?
                    <>
                        <div className='cart_container-form'>

                            <form onSubmitCapture={createOrder}>
                                <p>Formulario de contacto</p>
                                <label>Nombre:</label>
                                <input name="nombre" value={nombre} type="text" placeholder='Ingrese el nombre' required autoFocus onChange={handleInputChange} />
                                <label>Email:</label>
                                <input name="email" value={email} type="email" placeholder='Ingrese el correo electrónico' required onChange={handleInputChange} />
                                <button type='submit' className='cart_btn-comprar' onClick={notify}>
                                    Generar orden
                                </button>
                            </form>

                            <ul>
                                {cart.map((item, index) => {
                                    return <li key={index} className='cart_container'>
                                        <div className='cart_container-top'>
                                            <p className='cart_item-nombre'>{item.item.nombre}</p>
                                            <p>$ {item.item.precio}</p>
                                        </div>
                                        <p>{item.item.descripcion}</p>
                                        <div className='cart_container-bottom'>
                                            <p>Cantidad: {item.quantity}</p>
                                            <button onClick={() => removeItem(item.item.id)} className='cart_btn-remove'>Eliminar</button>
                                        </div>
                                    </li>
                                })}
                                <div className='cart_comprar'>
                                    <div className='cart_comprar_total'>
                                        <p>Total</p>
                                        <p>$ {total}</p>
                                    </div>
                                    <Link to="/" className='cart_continuar-comprando' >
                                        <p style={{ color: "black" }}>Continuar comprando</p>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                        />
                    </>
                    :
                    <div className='cart_vacio'>
                        <p>No hay productos en el carrito</p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
            }
        </div>

    )
}