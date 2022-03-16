import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom";
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './CartWidget';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<CartWidget/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
            <Main />
            <Footer />
        </BrowserRouter>
    )
}

export default App